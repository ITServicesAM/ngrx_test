import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createFeatureSelector } from "@ngrx/store";
import * as actions from "./home.actions";

export interface Home {
    id: string;
    name: string;
}

export const homeAdapter = createEntityAdapter<Home>();

export interface State extends EntityState<Home> {
}

const defaultHome = {
    ids: ['firstHome'],
    entities: {
        'firstHome': {
            id: 'firstHome',
            name: 'Stadtvilla'
        }
    }
};

export const initialState: State = homeAdapter.getInitialState();

export function homeReducer(state: State = initialState, action: actions.HomeActions) {
    switch (action.type) {
        case actions.ADD_ALL:
            // console.log(`Home Reducer homes: ${JSON.stringify(action.homes)}`);
            return homeAdapter.addAll(action.homes, state);

        default:
            return state;
    }
}

export const getHomeState = createFeatureSelector<State>('home');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} = homeAdapter.getSelectors(getHomeState);