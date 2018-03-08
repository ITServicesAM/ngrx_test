import { Component } from "@angular/core";
const firebase = require("nativescript-plugin-firebase");

firebase.init({
}).then(
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
export class AppComponent { }
