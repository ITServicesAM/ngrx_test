import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import * as homeActions from "./home.actions";
import { map, switchMap } from "rxjs/operators";
import { FirebaseDataService } from "../firebase/firebase-data-service";
import { Home } from '../models/home';

@Injectable()
export class HomeEffects {

    constructor(private actions$: Actions, private fbDataService: FirebaseDataService) { }

    @Effect()
    query$: Observable<Action> = this.actions$.ofType(homeActions.QUERY).pipe(
        switchMap((action: homeActions.Query) => {
            // console.log(`Action in effects files: ${JSON.stringify(action)}`);
            return this.fbDataService.list(action.path).orderBy('timeStamp','desc').valueChanges();
        }),
        map((homes: Home[]) => {
            // console.log(`Queried homes: ${JSON.stringify(homes)}`);
            return new homeActions.AddAll(homes);
        })
    );

    @Effect()
    create$: Observable<Action> = this.actions$.ofType(homeActions.CREATE).pipe(
        switchMap((action: homeActions.Create) => {
            return this.fbDataService.list(action.path).create(action.home)
        }),
        map(() => new homeActions.Success)
    );

    @Effect()
    update$: Observable<Action> = this.actions$.ofType(homeActions.UPDATE).pipe(
        switchMap((action: homeActions.Update) => {
            return this.fbDataService.list(action.path).update(action.id, action.changes)
        }),
        map(() => new homeActions.Success)
    );

    @Effect()
    delete$: Observable<Action> = this.actions$.ofType(homeActions.DELETE).pipe(
        switchMap((action: homeActions.Delete) => {
            return this.fbDataService.list(action.path).delete(action.id)
        }),
        map(() => new homeActions.Success)
    );
}