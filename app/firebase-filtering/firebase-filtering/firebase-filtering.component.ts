import { Component, OnInit } from '@angular/core';
import { IAppState } from '../../reducers';
import { Store } from '@ngrx/store';
import * as fromFbFiltering from '../store/firebase-filtering.reducer';
import * as fbFilteringActions from '../store/firebase-filtering.actions';

@Component({
    moduleId: module.id,
    selector: 'app-firebase-filtering',
    templateUrl: './firebase-filtering.component.html',
    styleUrls: ['./firebase-filtering.component.css']
})
export class FirebaseFilteringComponent implements OnInit {

    constructor(private store: Store<IAppState>) {
    }

    ngOnInit() {
        this.store.select(fromFbFiltering.getAllHomes)
            .subscribe(val => console.log(`FbFiltering: ${JSON.stringify(val)}`));
        this.store.dispatch(new fbFilteringActions.Query('homes'));
    }
}
