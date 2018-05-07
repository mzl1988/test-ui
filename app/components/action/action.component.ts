import { Component, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Icon } from '../../dictionaries/iconDict/icon';
import { screen } from 'tns-core-modules/platform';
import { View } from 'tns-core-modules/ui/core/view';

@Component({
    moduleId: module.id,
    selector:'Action',
    templateUrl: './action.component.html',
    styleUrls:[
        './action.component.css'
    ]
})

export class ActionComponent{

    @Input('icon') public icon: string;
    @Input('text') public text: string;
    @Input('width') public width: number = (screen.mainScreen.widthDIPs - 32) / 2;
    @Output('tap') public tap: EventEmitter<any> = new EventEmitter();
    @ViewChild('action') public actionRef: ElementRef;

    constructor(){
        this.icon = Icon[this.icon] || this.icon;
    }

    public triggerTap(args){
        this.tap.emit(args);
    }

    public setWidth(width: string|number){
        this.width =  parseInt( width.toString() );
    }

    public getElement(): View{
        return this.actionRef.nativeElement;
    }
}