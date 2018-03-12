import { ActionReducerMap } from "@ngrx/store";
import * as fromHome from "../home/home.reducer";
import * as fromFbFiltering from "../firebase-filtering/store/firebase-filtering.reducer";

export interface IAppState {
    home: fromHome.State,
    fbFiltering: fromFbFiltering.State
}

export const reducers: ActionReducerMap<IAppState> = {
    home: fromHome.homeReducer,
    fbFiltering: fromFbFiltering.fbFilteringReducer
};