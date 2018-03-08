import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Home, State } from "./home.reducer";
import { Store } from "@ngrx/store";
import * as homeReducer from "./home.reducer";
import * as homeActions from "./home.actions";


@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    changeDetection: ChangeDetectionStrategy.Default
})
export class HomeComponent implements OnInit {

    homes$: Observable<Home[]>;
    homeName: string = "";

    constructor(private store: Store<State>) {
    }

    ngOnInit(): void {
        this.homes$ = this.store.select(homeReducer.selectAll);
        // this.homes$.subscribe((homes: Home[]) => console.log(`HomeComponent homes: ${JSON.stringify(homes)}`));
        this.store.dispatch(new homeActions.Query('homes'));
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
