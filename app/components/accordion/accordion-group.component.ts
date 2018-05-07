import {
    Component, Inject, Input, OnDestroy, OnInit, Output, EventEmitter
} from '@angular/core';
import { AccordionComponent } from './accordion.component';

@Component({
    moduleId: module.id,
    selector: 'AccordionGroup',
    templateUrl: './accordion-group.component.html'
})

export class AccordionGroupComponent implements OnInit, OnDestroy {
    @Input() heading: string;
    @Input() headingClass: string;
    @Input() titleIcon: string;
    @Input() titleIconClass: string;
    @Input() panelClass: string;
    @Input() panelHeadingClass: string;
    @Input() panelBodyClass: string;
    @Input() isDisabled: boolean;
    @Input() collapsedIcon: string;
    @Input() expandedIcon: string;
    @Output() isOpenChange: EventEmitter<boolean> = new EventEmitter();
    @Input()
    get isOpen(): boolean {
        return this._isOpen;
    }

    set isOpen(value: boolean) {
        if (value !== this.isOpen) {
            if (value) {
                this.accordion.closeOtherPanels(this);
            }
            this._isOpen = value;
            Promise.resolve(null).then(() => {
                this.isOpenChange.emit(value);
            });
        }
    }

    protected _isOpen = false;
    protected accordion: AccordionComponent;

    constructor( @Inject(AccordionComponent) accordion: AccordionComponent) {
        this.accordion = accordion;
    }

    ngOnInit(): any {
        this.isDisabled = this.isDisabled || false;
        this.collapsedIcon = this.collapsedIcon || 'minus';
        this.expandedIcon = this.expandedIcon || 'plus';
        this.accordion.addGroup(this);
    }

    ngOnDestroy(): any {
        this.accordion.removeGroup(this);
    }

    toggleOpen(event: Event): any {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        }
    }
}
