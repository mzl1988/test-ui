import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'RoundButton',
    templateUrl: './round-button.component.html',
    styleUrls: [
        './round-button.css'
    ]
})

export class RoundButtonComponent implements OnInit, OnChanges {
    @Input('backgroundColor') backgroundColor: String = '#F68B1F';
    @Input('color') color: String = '#ffffff';
    @Input('icon') icon: string;
    @Input('text') text: string;
    @Output('tap') private tap: EventEmitter<any> = new EventEmitter();

    constructor(
    ) {
    }

    ngOnInit() {
       
    }

    ngOnChanges(changes: SimpleChanges) {

    }

    onTap(args){
        this.tap.emit(args);
    }
}