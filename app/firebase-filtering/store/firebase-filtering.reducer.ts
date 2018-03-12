import { Home } from "../../models/home";
import * as fbFilteringActions from './firebase-filtering.actions';
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IAppState } from "../../reducers";

export interface State {
    data: Home[],
    loading: boolean
}

export const initialState: State = {
    data: [],
    loading: true
};

export function fbFilteringReducer(state: State = initialState, action: fbFilteringActions.Actions) {
    switch (action.type) {
        case fbFilteringActions.QUERY:
            return {
                ...state,
                loading: true
            };
        case fbFilteringActions.ADD_ALL:
            return {
                ...state,
                data: action.homes,
                loading: false
            };

        default:
            return state;
    }
}

export const getHomes = (state: State) => state.data;
export const getLoading = (state: State) => state.loading;
export const getFeatureState = createFeatureSelector<IAppState>('fbFiltering');
export const getFbFilteringState = createSelector(getFeatureState, (state: IAppState) => state.fbFiltering);
export const getAllHomes = createSelector(getFbFilteringState, getHomes);
export const getHomesLoading = createSelector(getFbFilteringState, getLoading);