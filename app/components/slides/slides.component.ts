import { Component, Input, Output, EventEmitter, QueryList, ViewChild, ElementRef, ContentChildren } from '@angular/core';
import { SlideComponent } from '../slide/slide.component';
import { Subject } from 'rxjs/Subject';
import * as enums from 'tns-core-modules/ui/enums';

@Component({
    moduleId: module.id,
    selector: 'Slides',
    templateUrl: './slides.component.html',
    styleUrls:[
        './slides.component.css'
    ]
})

export class SlidesComponent{
    
    @Input('animateDuration') public animateDuration: number;
    @Input('initIndex') public initIndex: number;

    @Output('load') public load: EventEmitter<any> = new EventEmitter();
    @Output('swipe') public swipe: EventEmitter<any> = new EventEmitter();
    @Output('tap') public tap: EventEmitter<any> = new EventEmitter();
    @Output('pan') public pan: EventEmitter<any> = new EventEmitter();
    @Output('animatefinished') public animatefinished: EventEmitter<number> = new EventEmitter();

    @ViewChild('slides') slidesContainerRef: ElementRef;
    @ContentChildren(SlideComponent) public slides: QueryList<SlideComponent>;

    public activedItemIndex:number = 0;
    public onAnimation: boolean = false;

    ngAfterViewInit(){
        if(this.initIndex){
            setTimeout(() => {
                let tem = this.animateDuration;
                let self = this;
                this.animateDuration = 0;
                this.setInit(this.initIndex)
                    .subscribe(() => {
                        self.animateDuration = tem;
                    });
            }, 30);
        }
    }

    public onTap(args){
        this.tap.emit(args);
    }

    public onLoad(args){
        this.load.emit(args);
    }

    public onPan(args){
        this.pan.emit(args);
    }

    public onSwipe(args){
        this.swipe.emit(args);
    }

    public move(step: number): Subject<number> | null{
        if(this.onAnimation){ return null; }
        let subject: Subject<number> = new Subject();
        if(this.activedItemIndex + step >= this.slides.length){ 
            subject.next(this.slides.length - 1); 
        }else if(this.activedItemIndex + step < 0){
            subject.next(0);
        }else{
            this.onAnimation = true;
            let targetIndex = this.activedItemIndex + step;
            let slides = this.slides.toArray();
            let slidesContainer = this.slidesContainerRef.nativeElement;
            let distance = slides[targetIndex].getElement().getLocationRelativeTo(slidesContainer).x;

            let actionQueue = slides.map((slide, index) => {
                return slide.getElement().animate({
                    translate:{
                        x: slide.getElement().translateX - distance,
                        y: 0
                    },
                    curve: enums.AnimationCurve.easeOut,
                    duration: this.animateDuration === undefined ? 250 : this.animateDuration
                })
            });

            Promise.all(actionQueue)
            .then(() => {
                this.activedItemIndex = targetIndex;
                this.animatefinished.emit(this.activedItemIndex);
                this.onAnimation = false;
                subject.next(this.activedItemIndex);
            })
            .catch((err) => {
                this.onAnimation = false;
                subject.error(err);
            })
        }

        return subject;
    }

    public moveTo(index: number): Subject<number>{
        let steps = index - this.activedItemIndex;
        return this.move(steps);
    }

    public setInit(initIndex: number){
        return this.moveTo(initIndex);
    }
}