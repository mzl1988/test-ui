import {
    Component, Inject, Input, OnDestroy, OnInit, Output, OnChanges, EventEmitter, SimpleChanges
} from '@angular/core';
import { RadioGroupComponent } from './radio-group.component';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
    moduleId: module.id,
    selector: 'RadioItem',
    templateUrl: './radio-item.component.html',
    styleUrls: ['./radio-item.component.css']
})

export class RadioItemComponent implements OnInit, OnChanges, OnDestroy {
    @Input() text: string;
    @Input() value: any;
    @Input() panelClass: string;
    @Input() radioItemClass: string;
    @Input() radioItemBodyClass: string;
    @Input() isDisabled: boolean;
    @Input() chosenIcon: string;
    @Input() notChosenIcon: string;
    @Output() isChooseChange: EventEmitter<any> = new EventEmitter();
    @Input()
    get isChoose(): boolean {
        return this._isChoose;
    }

    set isChoose(value: boolean) {
        if (value !== this.isChoose) {
            if (value) {
                this.radioGroup.closeOtherPanels(this);
            }
            this._isChoose = value;
            Promise.resolve(null).then(() => {
                this.isChooseChange.emit({text: this.text, value: this.value, isChoose: this.isChoose});
            });
        }
    }

    protected _isChoose = false;
    protected radioGroup: RadioGroupComponent;

    constructor( @Inject(RadioGroupComponent) radioGroup: RadioGroupComponent) {
        this.radioGroup = radioGroup;
    }

    ngOnInit(): any {
        this.isDisabled = this.isDisabled || false;
        this.chosenIcon = this.chosenIcon || 'check-circle';
        this.notChosenIcon = this.notChosenIcon || 'circle';
        this.radioGroup.addItem(this);
    }

    ngOnChanges(changes: SimpleChanges) {
        // console.dir(changes);
    }

    ngOnDestroy(): any {
        this.radioGroup.removeItem(this);
    }

    toggleChoose(event: Event): any {
        if (!this.isDisabled && !this.isChoose) {
            this.isChoose = !this.isChoose;
        }
        if(this.isChoose) {
            this.radioGroup.chooseChangeEvent.emit({text: this.text, value: this.value, isChoose: this.isChoose});
        }
    }
}
