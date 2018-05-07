import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { screen } from "platform";
import { AbsoluteLayout } from "ui/layouts/absolute-layout";
import { StackLayout } from "ui/layouts/stack-layout";
import { layout } from 'utils/utils';

@Component({
    moduleId: module.id,
    selector: 'BottomBox',
    templateUrl: './bottom-box.component.html'
})

export class BottomBoxComponent implements OnInit, OnChanges {
    @ViewChild("bottomElt") bottomElt: ElementRef;
    @Input('bottom') bottom: number;
    bottomContainer: StackLayout;

    constructor(
    ) {
    }

    ngOnInit() {
        this.bottomContainer = <StackLayout>this.bottomElt.nativeElement;
        AbsoluteLayout.setTop(this.bottomContainer, screen.mainScreen.heightDIPs);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.hasOwnProperty('bottom')) {
            setTimeout(() => {
                this.bottomContainer = <StackLayout>this.bottomElt.nativeElement;
                // console.log(layout.toDeviceIndependentPixels(this.bottomContainer.getMeasuredHeight()));
                AbsoluteLayout.setTop(this.bottomContainer, screen.mainScreen.heightDIPs - this.bottom - layout.toDeviceIndependentPixels(this.bottomContainer.getMeasuredHeight()));
            }, 200);

        }

    }
}