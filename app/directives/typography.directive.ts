import { Directive } from '@angular/core';
import { Typography } from '../dictionaries/typoDict/typoDict';

@Directive({
    selector: '[txt-xs]',
    host:{
        'fontSize' :Typography.xs.toString()
    }
})

export class TxtXSDirective{}

@Directive({
    selector: '[txt-sm]',
    host:{
        'fontSize' :Typography.sm.toString()
    }
})

export class TxtSMDirective{}

@Directive({
    selector: '[txt-md]',
    host:{
        'fontSize' :Typography.md.toString()
    }
})

export class TxtMDDirective{}

@Directive({
    selector: '[txt-lg]',
    host:{
        'fontSize' :Typography.lg.toString()
    }
})

export class TxtLGDirective{}

@Directive({
    selector: '[txt-xl]',
    host:{
        'fontSize' :Typography.xl.toString()
    }
})

export class TxtXLDirective{}

@Directive({
    selector: '[txt-xxl]',
    host:{
        'fontSize' :Typography.xxl.toString()
    }
})

export class TxtXXLDirective{}