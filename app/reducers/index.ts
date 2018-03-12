import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromHome from "../home/home.reducer";

export interface IAppState {
    home: fromHome.State
}

export const reducers: ActionReducerMap<IAppState> = {
    home: fromHome.homeReducer
};

export const getFeatureState = createFeatureSelector<IAppState>('home');

export const getHomeState = createSelector(getFeatureState, (state: IAppState) => state.home);

export const getAllHomes = createSelector(getHomeState, fromHome.getHomes);

export const getHomesFilter = createSelector(getHomeState, fromHome.getFilter);

export const getHomesLoading = createSelector(getHomeState, fromHome.getLoading);