import { Component } from "@angular/core";
import { Store } from '@ngrx/store';
import { IAppState } from './reducers';

const firebase = require("nativescript-plugin-firebase");
const faker = require('faker/locale/de');

firebase.init({}).then(
    () => {
        console.log("firebase.init done");
    },
    error => {
        console.log(`firebase.init error: ${error}`);
    }
);

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {
    constructor(private store: Store<IAppState>) {

    }
}
