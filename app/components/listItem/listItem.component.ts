import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Icon } from '../../dictionaries/iconDict/icon'
import { Color } from '../../dictionaries/colorDict/colorDict';

@Component({
    moduleId: module.id,
    selector: 'ListItem',
    templateUrl: './listItem.component.html',
    styleUrls:[
        './listItem.component.css'
    ]
})

export class ListItemComponent{

    @Input('text') public text: string;
    @Input('subtext') public secondaryText: string;
    @Input('icon') public icon: string;
    @Input('iconColor') public _iconColor: string;

    @Output('onicontap') public onIconTap: EventEmitter<any> = new EventEmitter();
    @Output('tap') public tap: EventEmitter<any> = new EventEmitter();

    public iconColor: string;

    ngAfterContentChecked(){
        this.updateIcon();
    }

    updateIcon(){
        if(this.icon){
            this.icon = Icon[this.icon] ? Icon[this.icon] : this.icon;
            this.iconColor = Color[this._iconColor] ? Color[this._iconColor] : Color.primary;
        }else{
            this.icon = null;
        }
    }

    public _onIconTap(args){
        this.onIconTap.emit(args);
    }

    public _onTap(args){
        this.tap.emit(args);
    }
}