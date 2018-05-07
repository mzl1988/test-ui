import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'SubTitleLabel',
    templateUrl: './sub-title-label.component.html'
})

export class SubTitleLabelComponent {
    @Input('subTitle') subTitle: string;
    @Output('tap') tap: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    onTap(args: any){
        this.tap.emit(args);
    }

}