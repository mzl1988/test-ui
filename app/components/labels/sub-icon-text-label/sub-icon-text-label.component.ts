import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'SubIconTextLabel',
    templateUrl: './sub-icon-text-label.component.html',
    styleUrls: [
        './sub-icon-text-label.css'
    ]
})

export class SubIconTextLabelComponent {
    @Input('icon') icon: string;
    @Input('text') text: string;
    @Output('tap') tap: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    onTap(args: any){
        this.tap.emit(args);
    }

}