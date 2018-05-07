import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';

import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';
import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular";
import * as Application from 'tns-core-modules/application';

import {
    ActionComponent,
    IRISButtonComponent,
    CardComponent,
    FooterComponent,
    FormRowComponent,
    HeaderComponent,
    IconComponent,
    InputComponent,
    ValidatorComponent,
    ListComponent,
    ListItemComponent,
    QuickActionComponnet,
    SlideComponent,
    SlidesComponent,
    ArticleComponent,
    ThumbnailItemComponent,
    SubTitleLabelComponent,
    TitleLabelComponent,
    SubIconTextLabelComponent,
    BottomBoxComponent,
    RoundButtonComponent,
    AccordionComponent,
    AccordionGroupComponent,
    RadioGroupComponent,
    RadioItemComponent,
    SideDrawerLocationComponent,
    ListPickerBoxComponent,
    TableComponent
} from '../components';
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
        ActionComponent,
        IRISButtonComponent,
        CardComponent,
        FooterComponent,
        FormRowComponent,
        HeaderComponent,
        IconComponent,
        InputComponent,
        ValidatorComponent,
        ListComponent,
        ListItemComponent,
        QuickActionComponnet,
        SlideComponent,
        SlidesComponent,
        ArticleComponent,
        ThumbnailItemComponent,
        SubTitleLabelComponent,
        TitleLabelComponent,
        SubIconTextLabelComponent,
        BottomBoxComponent,
        RoundButtonComponent,
        AccordionComponent,
        AccordionGroupComponent,
        RadioGroupComponent,
        RadioItemComponent,
        SideDrawerLocationComponent,
        ListPickerBoxComponent,
        TableComponent,
        ...Directives
    ],
    exports: [
        TNSCheckBoxModule,
        ActionComponent,
        IRISButtonComponent,
        CardComponent,
        FooterComponent,
        FormRowComponent,
        HeaderComponent,
        IconComponent,
        InputComponent,
        ValidatorComponent,
        ListComponent,
        ListItemComponent,
        QuickActionComponnet,
        SlideComponent,
        SlidesComponent,
        ArticleComponent,
        ThumbnailItemComponent,
        SubTitleLabelComponent,
        TitleLabelComponent,
        SubIconTextLabelComponent,
        BottomBoxComponent,
        RoundButtonComponent,
        AccordionComponent,
        AccordionGroupComponent,
        RadioGroupComponent,
        RadioItemComponent,
        SideDrawerLocationComponent,
        ListPickerBoxComponent,
        TableComponent,
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