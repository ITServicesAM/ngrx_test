import { Action } from "@ngrx/store";
import { Home } from '../models/home';

export const CREATE = '[Homes] Create';
export const UPDATE = '[Homes] Update';
export const DELETE = '[Homes] Delete';

export const QUERY = '[Homes] Query';
export const ADD_ALL = '[Homes] Add All';
export const SUCCESS = '[Homes] Successful Update';

export const FILTER_BY_NAME = '[Homes] Filter By Name';

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

export class Create implements Action {
    readonly type = CREATE;

    constructor(public path: string, public home: Home) {
    }
}

export class Update implements Action {
    readonly type = UPDATE;

    constructor(public path: string,
                public id: string,
                public changes: Partial<Home>,) {
    }
}

export class Delete implements Action {
    readonly type = DELETE;

    constructor(public path: string, public id: string) {
    }
}

export class FilterByName implements Action {
    readonly type = FILTER_BY_NAME;

    constructor(public filter: string) {
    }
}

export type Actions = Create | Update | Delete | Query | AddAll | Success | FilterByName;