import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import * as homeActions from "./home.actions";
import { Home } from '../models/home';
import { getAllHomes, getHomesFilter, getHomesLoading, IAppState } from '../reducers';
import { map } from 'rxjs/operators';

const faker = require('faker/locale/de');


@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

    homes$: Observable<Home[]>;
    filteredHomes$: Observable<Home[]>;
    loading$: Observable<boolean>;
    filter;
    numberOfHomes$: Observable<number>;

    constructor(private store: Store<IAppState>) {
        // for (let i = 0; i < 1000; i++) {
        //     let name = faker.commerce.productName();
        //     console.log(`Companyname: ${name}`);
        //     store.dispatch(new homeActions.Create('homes', {name: name}as Home))
        // }
    }

    ngOnInit(): void {
        this.loading$ = this.store.select(getHomesLoading);
        this.homes$ = this.store.select(getAllHomes);
        this.numberOfHomes$ = this.homes$.pipe(
            map((homes: Home[]) => homes.length)
        );
        this.store.select(getHomesFilter)
            .subscribe(val => {
                console.log(`Actual filter: ${val}`);
                this.filter = val ? val : (home) => home;
                this.applyFilter();
            });

        // this.homes$.subscribe((homes: Home[]) => console.log(`HomeComponent homes: ${JSON.stringify(homes)}`));
        this.store.dispatch(new homeActions.Query('homes'));
    }

    changeFilter(enteredText: string) {
        // let filterString;
        // if (args) {
        //     let textField = <TextField>args.object;
        //     filterString = textField.text;
        // } else {
        //     filterString = this.homeName;
        // }

        this.store.dispatch(new homeActions.FilterByName(enteredText));
    }

    private applyFilter() {
        this.filteredHomes$ = this.homes$.pipe(
            map(value => {
                return value.filter(this.filter);
            })
        );
    }

    addHome(enteredText: string) {
        this.store.dispatch(new homeActions.Create('homes', {name: enteredText} as Home));
    }

    deleteHome(id: string) {
        // console.log(`HomeComponent delete for id: ${id} initiated`);
        this.store.dispatch(new homeActions.Delete('homes', id));
    }

    updateHome(home: Home) {
        this.store.dispatch(new homeActions.Update('homes', home.id, {name: `${home.name} Updated`}));
    }
}
