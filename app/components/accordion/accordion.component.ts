import { Component, Input } from '@angular/core';
import { AccordionGroupComponent } from './accordion-group.component';
import { AccordionConfig } from './accordion.config';

@Component({
    moduleId: module.id,
    selector: 'Accordion',
    templateUrl: './accordion.component.html',
    host: {
        '[attr.aria-multiselectable]': 'closeOthers'
    }
})
export class AccordionComponent {
    @Input() closeOthers: boolean;

    protected groups: AccordionGroupComponent[] = [];

    constructor(config: AccordionConfig) {
        Object.assign(this, config);
    }

    closeOtherPanels(openGroup: AccordionGroupComponent): void {
        if (!this.closeOthers) {
            return;
        }

        this.groups.forEach((group: AccordionGroupComponent) => {
            if ((group !== openGroup) && (group.isDisabled === false)) {
                group.isOpen = false;
            }
        });
    }

    addGroup(group: AccordionGroupComponent): void {
        this.groups.push(group);
    }

    removeGroup(group: AccordionGroupComponent): void {
        const index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    }
}
