import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { Color } from 'tns-core-modules/color';

@Component({
    moduleId: module.id,
    selector: 'Header',
    templateUrl: './header.component.html',
    styleUrls: [
        './header.component.css'
    ]
})

export class HeaderComponent implements OnInit, OnChanges {

    @Input('title') inputTitle: string;

    title: string;

    constructor(private page: Page) { }

    ngOnInit() {
        this.title = this.inputTitle || 'CCBA';
        this.page.actionBarHidden = true;
        this.page.androidStatusBarBackground = new Color('#222222');
    }

    setTitle(newTitle: string) {
        this.title = newTitle;
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.hasOwnProperty('inputTitle')) {
            this.title = this.inputTitle || 'CCBA';
        }
    }
}