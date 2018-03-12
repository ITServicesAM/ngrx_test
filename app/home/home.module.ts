import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { HomeEffects } from "./home.effects";
import { NativeScriptFormsModule } from "nativescript-angular";
import { reducers } from '../reducers';
import { FilterComponent } from './components/filter.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        HomeRoutingModule,
        StoreModule.forFeature('home', reducers),
        EffectsModule.forFeature([HomeEffects])
    ],
    declarations: [
        HomeComponent,
        FilterComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule {
}
