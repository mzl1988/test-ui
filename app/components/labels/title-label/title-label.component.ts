import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'TitleLabel',
    templateUrl: './title-label.component.html'
})

export class TitleLabelComponent {
    @Input('title') title: string;
    @Output('tap') tap: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    onTap(args: any){
        this.tap.emit(args);
    }

}