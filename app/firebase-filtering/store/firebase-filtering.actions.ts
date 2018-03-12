import { Home } from "../../models/home";
import { Action } from "@ngrx/store";

export const QUERY = '[FB-Filtering] Query';
export const ADD_ALL = '[FB-Filtering] Add All';
export const SUCCESS = '[FB-Filtering] Successful Update';

// Initial query
export class Query implements Action {
    readonly type = QUERY;

    constructor(public path: string) {
    }
}

export class AddAll implements Action {
    readonly type = ADD_ALL;

    constructor(public homes: Home[]) {
    }
}

export class Success implements Action {
    readonly type = SUCCESS;

    constructor() {
    }
}

export type Actions = Query | AddAll | Success;