import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { TextField } from 'tns-core-modules/ui/text-field';

@Component({
    moduleId: module.id,
    selector: 'filter-component',
    templateUrl: './filter.component.html'
})

export class FilterComponent implements AfterViewInit {
    enteredText: string;
    @Output('filter') filterEvent = new EventEmitter<string>();

    @Output('add') addEvent = new EventEmitter<string>();
    @ViewChild('textfield') textFieldRef: ElementRef;

    constructor() {
    }

    ngAfterViewInit(): void {
        console.log(`Textfield: ${this.textFieldRef.nativeElement}`);
        setTimeout(() => {
            (<TextField>this.textFieldRef.nativeElement).dismissSoftInput();
        }, 500);
    }

    onTextChanged(args) {
        let txt: TextField = <TextField>args.object;
        let text = txt.text;
        this.filterEvent.emit(text);
    }

    onAddClicked() {
        this.addEvent.emit(this.enteredText);
    }

    onChangeFilterClicked() {
        this.filterEvent.emit(this.enteredText);
    }
}