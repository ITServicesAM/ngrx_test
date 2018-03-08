import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { StoreModule } from "@ngrx/store";
import { homeReducer } from "./home.reducer";
import { EffectsModule } from "@ngrx/effects";
import { HomeEffects } from "./home.effects";
import { NativeScriptFormsModule } from "nativescript-angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        HomeRoutingModule,
        StoreModule.forFeature('home', homeReducer),
        EffectsModule.forFeature([HomeEffects])
    ],
    declarations: [
        HomeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule {
}
