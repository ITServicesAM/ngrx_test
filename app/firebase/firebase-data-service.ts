import { FirebaseDataServiceCommon } from "./firebase.common";
import { FirebaseListObservable } from "./firebase-list-observable";
import { Injectable, NgZone } from "@angular/core";
import { QueryData } from "./firebase.interfaces";

@Injectable()
export class FirebaseDataService implements FirebaseDataServiceCommon {
    constructor(private zone: NgZone) {

    }

    list<T>(path: string): FirebaseListObservable<T> {
        return new FirebaseListObservable<T>(path, this.zone);
    }

    query<T>(path: string, queryData: QueryData): FirebaseListObservable<T> {
        let firebaseListObservable = new FirebaseListObservable<T>(path, this.zone);
        if (queryData.orderBy) {
            const fieldPath: string = queryData.orderBy.fieldPath;
            const direction = queryData.orderBy.direction;
            firebaseListObservable.orderBy(fieldPath, direction);
        }
        return firebaseListObservable;
    }

}