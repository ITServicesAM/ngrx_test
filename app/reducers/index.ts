import { ActionReducerMap } from "@ngrx/store";
import { homeReducer } from "../home/home.reducer";

export const reducers: ActionReducerMap<any> = {
    home: homeReducer
};