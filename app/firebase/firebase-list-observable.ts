import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
import { firestore } from "nativescript-plugin-firebase";
import "rxjs/add/observable/of";
import { NgZone } from "@angular/core";
import CollectionReference = firestore.CollectionReference;

export class FirebaseListObservable<T> {

    private ref: firestore.Query | firestore.CollectionReference;

    constructor(private path: string, private zone: NgZone) {
        this.ref = firestore.collection(path);
    }

    public orderBy(fieldPath: string, direction: 'desc' | 'asc'): FirebaseListObservable<T> {
        this.ref = this.ref.orderBy(fieldPath, direction);
        return this;
    }

    public valueChanges(): Observable<T[]> {
        return this.createFirestoreCollectionObservable();
    }

    public create(value: T): Observable<any> {
        return Observable.create(subscriber => {
            (<CollectionReference>this.ref).add(Object.assign({}, {timeStamp: new Date()}, value)).then((docRef: firestore.DocumentReference) => {
                const id: string = docRef.id;
                return Observable.of(firestore.collection(this.path).doc(id).set(Object.assign({}, {id: id}, value), {merge: true}));
            }).catch(err => subscriber.err(err))
        });
    }

    public update(id: string, changes: T): Observable<any> {
        return Observable.of(firestore.collection(this.path).doc(id).set(changes, {merge: true}));
    }

    public delete(id: string): Observable<any> {
        return Observable.of(firestore.collection(this.path).doc(id).delete());
    }

    private createFirestoreCollectionObservable(): Observable<T[]> {
        return Observable.create(subscriber => {
            const unsubscribe = this.ref.onSnapshot((snapshot: firestore.QuerySnapshot) => {
                this.zone.run(() => {
                    // console.log(`QuerySnapshot im Observable body: ${JSON.stringify(snapshot)}`);
                    subscriber.next(snapshot.docSnapshots);
                })
            });

            return () => {
                unsubscribe();
            }
        }).pipe(
            map((docs: firestore.DocumentSnapshot[]) =>
                docs.map((doc: firestore.DocumentSnapshot) => {
                    const data = doc.data();
                    return {id: doc.id, ...data};
                }))
        )
    }
}