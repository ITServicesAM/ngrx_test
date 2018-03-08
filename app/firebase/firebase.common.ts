// export interface FirebaseUserServiceCommon {
//     signIn(email: string, password: string): Promise<FirebaseUser>;
//
//     register(email: string, password: string): Promise<string>;
//
//     logout(): Promise<any>;
//
//     resetPassword(email: string): Promise<any>;
//
//     updateUserDetails(displayName): Promise<any>;
// }

import { FirebaseListObservable } from "./firebase-list-observable";

export interface FirebaseDataServiceCommon {
    // object<T>(path: string): FirebaseObject<T>;
    list<T>(path: string): FirebaseListObservable<T>;
    query<T>(path:string, query: any): FirebaseListObservable<T>;
}