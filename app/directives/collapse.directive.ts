import {
    Directive,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    Renderer2
} from '@angular/core';

@Directive({
    selector: '[collapse]'
})

export class CollapseDirective {
    @Output() collapsed: EventEmitter<any> = new EventEmitter();
    @Output() expanded: EventEmitter<any> = new EventEmitter();
    isExpanded = true;

    @Input()
    set collapse(value: boolean) {
        this.isExpanded = value;
        this.toggle();
    }

    get collapse(): boolean {
        return this.isExpanded;
    }

    constructor(private _el: ElementRef, private _renderer: Renderer2) {
    }

    toggle(): void {
        if (this.isExpanded) {
            this.hide();
        } else {
            this.show();
        }
    }

    hide(): void {
        this.isExpanded = false;
        this._renderer.setStyle(this._el.nativeElement,'visibility','collapsed');
        this.collapsed.emit(false);
    }

    show(): void {
        this.isExpanded = true;
        this._renderer.setStyle(this._el.nativeElement,'visibility','visible');
        this.expanded.emit(true);
    }
}