import { Component, Input, Output, EventEmitter, ContentChildren, QueryList } from '@angular/core';
import { ListItemComponent } from '../listItem/listItem.component';

@Component({
    moduleId: module.id,
    selector: 'List',
    templateUrl: './list.component.html',
    styleUrls:[
        './list.component.css'
    ]
})

export class ListComponent{

    @Input('title') public title: string;
    @Input('sideMargin') public sideMargin: boolean = true;
    @Output('tap') public tap: EventEmitter<any> = new EventEmitter();
    @ContentChildren(ListItemComponent) public lists: QueryList<ListItemComponent>;

    public panelStatus: boolean = true; 

    public togglePanel(){
        this.panelStatus = !this.panelStatus;
    }

    public openPanel(){
        this.panelStatus = true;
    }

    public closePanel(){
        this.panelStatus = false;
    }

    public _onTap(args){
        this.tap.emit(args);
    }
}