import * as homeActions from "./home.actions";
import { Home } from '../models/home';

export interface State {
    data: Home[],
    filter: any,
    loading: boolean
}

export const initialState: State = {
    data: [],
    filter: undefined,
    loading: true
};

export function homeReducer(state: State = initialState, action: homeActions.Actions) {
    switch (action.type) {
        case homeActions.QUERY:
            return {
                ...state,
                loading: true
            };
        case homeActions.ADD_ALL:
            // console.log(`Home Reducer data: ${JSON.stringify(action.homes)}`);
            return {
                ...state,
                data: action.homes,
                loading: false
            };
        case homeActions.FILTER_BY_NAME:
            return {
                ...state,
                filter:
                    !!action.filter ?
                        (home: Home) => home.name.toLowerCase().includes(action.filter.toLowerCase()) :
                        (home) => home
            };

        default:
            return state;
    }
}

export const getHomes = (state: State) => state.data;
export const getFilter = (state: State) => state.filter;
export const getLoading = (state: State) => state.loading;