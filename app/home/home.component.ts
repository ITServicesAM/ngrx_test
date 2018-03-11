import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import * as homeActions from "./home.actions";
import { Home } from '../models/home';
import { getAllHomes, getHomesFilter, IAppState } from '../reducers';
import { map } from 'rxjs/operators';


@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    changeDetection: ChangeDetectionStrategy.Default
})
export class HomeComponent implements OnInit {

    homes$: Observable<Home[]>;
    filteredHomes$: Observable<Home[]>;
    filter;
    homeName: string = "";

    constructor(private store: Store<IAppState>) {
    }

    ngOnInit(): void {
        this.homes$ = this.store.select(getAllHomes);
        this.store.select(getHomesFilter)
            .subscribe(val => {
                console.log(`Actual filter: ${val}`);
                this.filter = val ? val : (home) => home;
                this.applyFilter()
            });

        // this.homes$.subscribe((homes: Home[]) => console.log(`HomeComponent homes: ${JSON.stringify(homes)}`));
        this.store.dispatch(new homeActions.Query('homes'));
        // this.store.dispatch(new homeActions.FilterByName('villa'));
    }

    changeFilter(){
        this.store.dispatch(new homeActions.FilterByName(this.homeName));
    }

    private applyFilter() {
        this.filteredHomes$ = this.homes$.pipe(
            map(value => value.filter(this.filter))
        );
    }

    addHome() {
        this.store.dispatch(new homeActions.Create('homes', {name: this.homeName} as Home));
    }

    deleteHome(id: string) {
        // console.log(`HomeComponent delete for id: ${id} initiated`);
        this.store.dispatch(new homeActions.Delete('homes', id));
    }

    updateHome(home: Home) {
        this.store.dispatch(new homeActions.Update('homes', home.id, {name: `${home.name} Updated`}));
    }
}
