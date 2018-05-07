import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';

import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';
import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular";
import * as Application from 'tns-core-modules/application';

import { Components } from '../components';
import { Directives } from '../directives';

import { AccordionConfig } from '../components/accordion/accordion.config';
import { RadioGroupConfig } from '../components/radio-group/radio-group.config';

@NgModule({
    imports: [
        CommonModule,
        TNSCheckBoxModule,
        NativeScriptUISideDrawerModule,
        NativeScriptFormsModule
    ],
    declarations: [
        ...Components,
        ...Directives
    ],
    exports: [
        TNSCheckBoxModule,
        ...Components,
        ...Directives
    ],
    providers: [
        AccordionConfig,
        RadioGroupConfig
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class UIModule { }