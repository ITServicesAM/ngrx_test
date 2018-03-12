import { Injectable } from "@angular/core";
import { FirebaseDataService } from "../../firebase/firebase-data-service";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import * as fbFilteringActions from "./firebase-filtering.actions";
import { Observable } from "rxjs/Observable";
import { Home } from "../../models/home";
import { Action } from "@ngrx/store";

@Injectable()
export class FbFilteringEffects {
    constructor(private actions$: Actions, private fbDataService: FirebaseDataService) { }

    @Effect()
    query$: Observable<Action> = this.actions$.ofType(fbFilteringActions.QUERY).pipe(
        switchMap((action: fbFilteringActions.Query) => {
            // console.log(`Action in effects files: ${JSON.stringify(action)}`);
            return this.fbDataService.list(action.path).orderBy('timeStamp', 'desc').valueChanges();
        }),
        map((homes: Home[]) => {
            // console.log(`Queried homes: ${JSON.stringify(homes)}`);
            return new fbFilteringActions.AddAll(homes);
        })
    );
}