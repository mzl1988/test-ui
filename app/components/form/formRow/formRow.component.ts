import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'FormRow',
    templateUrl: './formRow.component.html',
    styleUrls:[
        './formRow.component.css'
    ]
})

export class FormRowComponent{

    @Input('label') public label: string = '--';

}