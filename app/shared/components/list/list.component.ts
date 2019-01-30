import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Home } from '../../../models/home';

@Component({
    moduleId: module.id,
    selector: 'app-list-component',
    templateUrl: './list.component.html'
})

export class ListComponent {

    @Input() loading: boolean;
    @Input() homes: Home[];

    @Output('deleteHome') onDeleteHome = new EventEmitter<string>();
    @Output('updateHome') onUpdateHome = new EventEmitter<Home>();

    constructor() {
    }

    deleteHome(id: string) {
        this.onDeleteHome.emit(id);
    }

    updateHome(home: Home){
        this.onUpdateHome.emit(home);
    }
}