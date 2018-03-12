import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptRouterModule } from 'nativescript-angular';

import { FirebaseFilteringRoutes } from './firebase-filtering.routes';
import { FirebaseFilteringComponent } from './firebase-filtering/firebase-filtering.component';
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { reducers } from "../reducers";
import { FbFilteringEffects } from "./store/firebase-filtering.effects";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule.forChild(<any>FirebaseFilteringRoutes),
      StoreModule.forFeature('fbFiltering', reducers),
      EffectsModule.forFeature([FbFilteringEffects])
  ],
  declarations: [
  FirebaseFilteringComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class FirebaseFilteringModule { }
