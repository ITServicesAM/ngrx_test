import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { FirebaseFilteringModule } from './firebase-filtering/firebase-filtering.module';

const routes: Routes = [
    { path: "", redirectTo: "/fb-filtering", pathMatch: "full" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "fb-filtering", loadChildren: "./firebase-filtering/firebase-filtering.module#FirebaseFilteringModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
