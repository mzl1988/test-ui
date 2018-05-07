import { Component, OnInit, Input, Output, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import { RadioItemComponent } from './radio-item.component';
import { RadioGroupConfig } from './radio-group.config';

@Component({
    moduleId: module.id,
    selector: 'RadioGroup',
    templateUrl: './radio-group.component.html',
    host: {
        '[attr.aria-multiselectable]': 'chooseOthers'
    }
})
export class RadioGroupComponent implements OnInit {
    @Input() chooseOthers: boolean;
    @Input() chooseIndex: number;
    @Output() chooseChangeEvent: EventEmitter<any> = new EventEmitter();

    protected items: RadioItemComponent[] = [];

    constructor(config: RadioGroupConfig) {
        Object.assign(this, config);
    }

    ngOnInit() {
        this.chooseOthers =  this.chooseOthers || true;
    }

    ngOnChanges(changes: SimpleChanges) {
        
        if (changes.hasOwnProperty('chooseIndex') && (changes.chooseIndex.firstChange === false)) {
            this.chooseByIndex();
        } else if(changes.hasOwnProperty('chooseIndex') && (changes.chooseIndex.firstChange === true)) {
            setTimeout(() => {
                this.chooseByIndex();
            }, 500);
        }
    }

    closeOtherPanels(chooseItem: RadioItemComponent): void {
        if (!this.chooseOthers) {
            return;
        }

        this.items.forEach((item: RadioItemComponent) => {
            if ((item !== chooseItem) && (item.isDisabled === false)) {
                item.isChoose = false;
            }
        });
    }

    addItem(item: RadioItemComponent): void {
        this.items.push(item);
    }

    chooseByIndex(): void {
        this.items.forEach((item: RadioItemComponent, index) => {
            if (this.chooseIndex === index) {
                item.isChoose = true;
            } else {
                item.isChoose = false;
            }
        });
    }

    removeItem(item: RadioItemComponent): void {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
    
}
