import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { View } from 'tns-core-modules/ui/core/view';

@Component({
    moduleId: module.id,
    selector: 'Slide',
    templateUrl: './slide.component.html',
    styleUrls:[
        './slide.component.css'
    ]
})

export class SlideComponent{

    @ViewChild('slide') slideRef: ElementRef;
    @Input('height') height: string = 'auto';
    @Input('class') classes: string = '';
    @Output('load') load: EventEmitter<any> = new EventEmitter();
    @Output('tap') tap: EventEmitter<any> = new EventEmitter();

    public layoutWidth: number = 0;
    public layoutHeight: number = 0;

    public onTap(args){
        this.tap.emit(args);
    }

    public onLoad(args){
        this.layoutWidth = this.slideRef.nativeElement.width;
        this.layoutHeight = this.slideRef.nativeElement.height;
        this.load.emit(args);
    }

    public getElement(): View{
        return this.slideRef.nativeElement;
    }

    public getWidth(): number{
        return this.slideRef.nativeElement.getMeasuredWidth();
    }

    public getHeight(): number{
        return this.slideRef.nativeElement.getMeasuredHeight();
    }
}