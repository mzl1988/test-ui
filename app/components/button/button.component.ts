import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as gestures from 'tns-core-modules/ui/gestures';

@Component({
    moduleId: module.id,
    selector:'IRISButton',
    templateUrl: './button.component.html',
    styleUrls:[
        './button.component.css'
    ]
})

export class IRISButtonComponent{

    @Input('icon') public icon: string = '';
    @Input('text') public text: string = '';
    @Input('opacity') public opacity: number = 1;
    @Input('disabled') public disabled: boolean = false;
    @Input('loadMode') public loadMode: string = 'async';
    
    @Output('tap') public tap: EventEmitter<any> = new EventEmitter();

    public onTap(args: any){
        this.tap.emit(args);
    }

}