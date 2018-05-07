import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import * as gestures from 'tns-core-modules/ui/gestures';
import * as file from 'tns-core-modules/file-system';

@Component({
    moduleId: module.id,
    selector: 'Card',
    templateUrl: './card.component.html',
    styleUrls: [
        './card.component.css'
    ]
})

export class CardComponent implements OnInit{

    @Input('image') public image: string;
    @Input('category') public category: string;
    @Input('title') public title: string;
    @Input('subtext') public subtext: string;
    @Input('placeholder') public placeholder: string;
    @Input('class') public cssClasses: string = '';
    @Input('loadMode') public loadMode: string = 'async';

    @Output('tap') public tap: EventEmitter<any> = new EventEmitter();
    @Output('swipe') public swipe: EventEmitter<any> = new EventEmitter();
    @Output('pan') public pan: EventEmitter<any> = new EventEmitter();

    public imageSrc: string;

    ngOnInit(){
        this.updateImage();
    }

    ngOnChanges(){
        this.updateImage();
    }

    public updateImage(){
        if(this.image){
            this.imageSrc = this.image;
        }else if(this.placeholder){
            this.imageSrc = this.placeholder;
        }else{
            this.imageSrc = file.path.join(__dirname,  '../../images/dataError.png');
        }
    }

    public onTap(args){
        this.tap.emit(args);
    }

    public onSwipe(args: gestures.SwipeGestureEventData){
        this.swipe.emit(args);
    }
}