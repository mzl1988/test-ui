import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TextField } from 'tns-core-modules/ui/text-field';
import * as enums from 'ui/enums';
import { View } from "tns-core-modules/ui/core/view";

@Component({
    moduleId: module.id,
    selector: 'InputField',
    templateUrl: './input.component.html',
    styleUrls: [
        './input.component.css'
    ],
    providers:[
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true
        }
    ],
})

export class InputComponent implements ControlValueAccessor{

    @Input('class') public classes: string = '';
    @Input('icon') public icon: string = '';
    @Input('type') public type: string = '';
    @Input('placeholder') public placeholder: string = '';

    @Output('tap') public tap: EventEmitter<any> = new EventEmitter();
    @Output('change') public onchange: EventEmitter<any> = new EventEmitter();

    @ViewChild('input') inputRef: ElementRef;

    public isPassword: boolean = false;
    public isFocused: boolean = false;
    public keyboard: any = enums.KeyboardType.email;
    public _value: any;

    ngOnChanges(){
        switch(this.type.toLocaleLowerCase()){
            case 'password':
                this.keyboard = enums.KeyboardType.email;
                this.isPassword = true;
                break;
            case 'date':
                this.keyboard = enums.KeyboardType.datetime;
                break;
            case 'time':
                this.keyboard = enums.KeyboardType.datetime;
                break;
            case 'email':
                this.keyboard = enums.KeyboardType.email;
                break;
            case 'number':
                this.keyboard = enums.KeyboardType.number;
                break;
            case 'phone':
                this.keyboard = enums.KeyboardType.phone;
                break;
            case 'url':
                this.keyboard = enums.KeyboardType.url;
                break;
            default:
                this.keyboard = enums.KeyboardType.email;
        }
        this.inputRef.nativeElement.on('tap', () => {
            this.isFocused = true;
        });
        this.inputRef.nativeElement.on(TextField.blurEvent, () => {
            this.isFocused = false;
        }, this);
    }

    onChangeCallback(args: any){}
    onTouchCallback(args: any){}

    set value(newValue: any){
        if(newValue !== this._value){
            this._value = newValue;
            this.onChangeCallback(newValue);
            this.onchange.emit(newValue);
        }
    }

    get value(): any{
        return this._value;
    }

    writeValue(value: any){
        this._value = value;
        this.onchange.emit(value);
    }

    registerOnChange(fn: any){
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any){
        this.onTouchCallback = fn;
    }

    public getElement(): TextField{
        return this.inputRef.nativeElement;
    }

    public onTap(args){
        this.tap.emit(args);
    }

    public change(args){
        this.value = args;
        this.onchange.emit(args);
    }
}