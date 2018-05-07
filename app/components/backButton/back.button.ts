import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'Back',
    templateUrl: './back.button.html',
    styleUrls: [
        './back.button.css'
    ]
})

export class BackButtonComponent{

    @Output('tap') private tap: EventEmitter<any> = new EventEmitter();

    onTap(args){
        this.tap.emit(args);
    }

}