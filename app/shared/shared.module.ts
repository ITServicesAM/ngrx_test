import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FilterComponent } from './components/filter/filter.component';
import { ListComponent } from './components/list/list.component';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

@NgModule({
    imports: [
        NativeScriptCommonModule
    ],
    declarations: [
        FilterComponent,
        ListComponent
    ],
    exports: [
        FilterComponent,
        ListComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SharedModule {
}
