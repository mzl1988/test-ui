import { Component, Input, Output, EventEmitter, ViewChild, ContentChildren, QueryList, ElementRef, ViewContainerRef } from '@angular/core';
import { WrapLayout } from 'tns-core-modules/ui/layouts/wrap-layout/';
import { HorizontalAlignment } from 'tns-core-modules/ui/enums/';
import { Length } from 'tns-core-modules/ui/styling/style-properties';
import * as platform from 'tns-core-modules/platform';
import * as gestures from 'tns-core-modules/ui/gestures';
import { ActionComponent } from '../action/action.component';

@Component({
    moduleId: module.id,
    selector: 'QuickAction',
    templateUrl: './quickAction.component.html',
    styleUrls:[
        './quickAction.component.css'
    ]
})

export class QuickActionComponnet{

    @Input('title') public title: string;
    @Input('opacity') public opacity: number;

    @ViewChild('quickActionHeaderRef') public quickActionHeaderRef: ElementRef;
    @ViewChild('quickActionPanelRef') public quickActionPanelRef: ElementRef;
    @ContentChildren(ActionComponent) public actions: QueryList<ActionComponent>;

    public panelStatus: boolean = true;
    public panelStatusIcon: string = 'compress';
    public itemWidth: number = (platform.screen.mainScreen.widthDIPs - 32) / 2;

    constructor(){
        this.opacity = this.opacity === undefined ? 1 : this.opacity;
    }

    public togglePanel(){
        if(this.panelStatus){
            this.closePanel();
        }else{
            this.openPanel();
        }
    }

    public openPanel(){
        if(this.panelStatus === false){
            this.panelStatus = true;
            this.panelStatusIcon = 'compress';
        }
    }

    public closePanel(){
        if(this.panelStatus === true){
            this.panelStatus = false;
            this.panelStatusIcon = 'expand';
        }
    }

    ngAfterContentChecked(){
        if(this.actions.length === 1){
            this.actions.toArray()[0].setWidth(platform.screen.mainScreen.widthDIPs)
        }
        if(this.actions.length === 2){
            this.quickActionHeaderRef.nativeElement.visibility = 'collapsed';
        }
    }

    public onTap(args){
        this.togglePanel();
    }

    public onPan(args: gestures.PanGestureEventData){
        let proceedFn;
        if(args.deltaY < 0){
            proceedFn = this.openPanel;
        }else if(args.deltaY >= 0){
            proceedFn = this.closePanel;
        }
        if(args.state === 3){
            proceedFn.call(this);
        }
    }
}