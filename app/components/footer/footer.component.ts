import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    moduleId: module.id,
    selector: 'Footer',
    templateUrl: './footer.component.html',
    styleUrls:[
        './footer.component.css'
    ]
})

export class FooterComponent{

    @Input('opacity') public opacity: number = 1;
    @Input('showBack') public showBack: boolean = true;
    @Output('onmenutap') public onMenuTap: EventEmitter<any> = new EventEmitter();

    constructor( public router: RouterExtensions ){}

    public back(){
        this.router.backToPreviousPage();
    }

    public triggerMenuOnTap(){
        this.onMenuTap.emit();
    }
}