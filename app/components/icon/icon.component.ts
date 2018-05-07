import { Component, Input, ElementRef, OnInit } from '@angular/core';
import { Icon } from '../../dictionaries/iconDict/icon';
import { Color } from 'tns-core-modules/color';

@Component({
    moduleId: module.id,
    selector:'Icon',
    templateUrl:'./icon.component.html'
})

export class IconComponent implements OnInit{

    @Input('icon') public icon: string;
    @Input('color') public color: string;

    public iconName: string = "";

    constructor( public elementRef: ElementRef ){
        this.iconName = Icon[this.icon];
        if(this.color){
            this.elementRef.nativeElement.color = new Color(this.color);
        }
    }

    ngOnInit() {}
}