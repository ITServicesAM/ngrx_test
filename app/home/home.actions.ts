import { Action } from "@ngrx/store";
import { Home } from "./home.reducer";

export const CREATE = '[Homes] Create';
export const UPDATE = '[Homes] Update';
export const DELETE = '[Homes] Delete';

export const QUERY = '[Homes] Query';
export const ADD_ALL = '[Homes] Add All';
export const SUCCESS = '[Homes] Successful Update';

// Initial query
export class Query implements Action {
    readonly type = QUERY;

    constructor(public path: string) {}
}

export class AddAll implements Action {
    readonly type = ADD_ALL;

    constructor(public homes: Home[]) { }
}

export class Success implements Action {
    readonly type = SUCCESS;

    constructor() { }
}

export class Create implements Action {
    readonly type = CREATE;

    constructor(public path: string, public home: Home) { }
}

export class Update implements Action {
    readonly type = UPDATE;

    constructor(public path: string,
                public id: string,
                public changes: Partial<Home>,) { }
}

export class Delete implements Action {
    readonly type = DELETE;

    constructor(public path: string, public id: string) { }
}

export type HomeActions = Create | Update | Delete | Query | AddAll | Success;