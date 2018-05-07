import { Directive, ElementRef } from '@angular/core';
import { Icon } from '../dictionaries/iconDict/icon';

@Directive({
    selector: '[icon]',
    inputs: [
        'icon'
    ],
    host: {
        'class': 'icon'
    }
})
export class IconDirective{

    public icon: string;

    constructor(
        public elementref: ElementRef
    ){}

    ngOnChanges(){
        if(this.icon){
            this.elementref.nativeElement.text = Icon[this.icon] || this.icon;
        }
    }
}