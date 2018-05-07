import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { validate, ValidationError } from "class-validator";

@Component({
    moduleId: module.id,
    selector: 'Validator',
    templateUrl: './validator.component.html',
    styleUrls: ['./validator.component.css']
})

export class ValidatorComponent implements OnInit, OnChanges {
    @Input() listErrors: Array<ValidationError> = [];
    @Input() property: string;
    isItemVisible: boolean;
    message: string;

    ngOnInit() {
    }

    ngOnChanges() {
        this.prepareMessage();
    }

    private prepareMessage() {
        this.isItemVisible = false;
        try {
            if (this.listErrors != null && this.listErrors.length > 0) {
                let validationError: ValidationError = this.getValidateError(this.property);
                if (validationError != null && validationError.constraints != null) {
                    let constraints: any = validationError.constraints;
                    for (let item in constraints) {
                        this.message = constraints[item];
                        this.isItemVisible = true;
                        break;
                    }
                }
            }
        } catch (e) {
            console.log(e);
        }
    }

    private getValidateError(property: string): ValidationError {
        return this.listErrors.filter(item => item.property === property)[0];
    }

}