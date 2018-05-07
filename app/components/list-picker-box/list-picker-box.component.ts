import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, ViewChild, ElementRef } from "@angular/core";
import { ListPicker } from "ui/list-picker";
import { isAndroid } from "platform";
import { setTimeout } from "timer";

@Component({
    moduleId: module.id,
    selector: 'ListPickerBox',
    templateUrl: './list-picker-box.component.html',
    styleUrls: [
        './list-picker-box.component.css'
    ]
})

export class ListPickerBoxComponent implements OnInit {
    @ViewChild("listPicker") listPicker: ElementRef;
    @Input() cancelText: string;
    @Input() confirmText: string;
    @Input() title: string;
    @Input() items: any[];
    @Input() selectedIndex: number;
    @Output() selectedIndexChangedEvent: EventEmitter<any> = new EventEmitter();
    @Output() cancelTapEvent: EventEmitter<any> = new EventEmitter();
    @Output() confirmTapEvent: EventEmitter<any> = new EventEmitter();
    item: any;
    oldSelectedIndex: number;

    constructor() {
    }

    ngOnInit() {
        this.cancelText = this.cancelText || 'cancel';
        this.confirmText = this.confirmText || 'confirm';
        this.items = this.items || [];
        this.selectedIndex = this.selectedIndex || 0;
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.hasOwnProperty('selectedIndex')) {
            this.oldSelectedIndex = this.selectedIndex;
        }
    }

    selectedIndexChanged(args) {
        let picker = <ListPicker>args.object;
        this.selectedIndex = picker.selectedIndex;
        this.item = this.items[this.selectedIndex];
        this.selectedIndexChangedEvent.emit({ selectedIndex: this.selectedIndex, item: this.item });
    }

    loadedEvent(args) {
        if (isAndroid) {
            setTimeout(() => {
                let picker: ListPicker = <ListPicker>this.listPicker.nativeElement;
                picker.android.setWrapSelectorWheel(false);
                let index = this.selectedIndex;
                this.selectedIndex = this.items.length;
                setTimeout(() => {
                    this.selectedIndex = index;
                }, 100);
            }, 200);

        };


    }

    cancel() {
        this.selectedIndex = this.oldSelectedIndex;
        this.cancelTapEvent.emit('cancel');
    }

    confirm() {
        this.oldSelectedIndex = this.selectedIndex;
        this.confirmTapEvent.emit({ selectedIndex: this.selectedIndex, item: this.item });
    }
}