import { Component, Input, Output, OnChanges, SimpleChanges, EventEmitter} from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'ThumbnailItem',
    templateUrl: './thumbnail-item.component.html'
})

export class ThumbnailItemComponent {
    @Input('className') className: string;
    @Input('imageSrc') imageSrc: string;
    @Output('tap') tap: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    ngOnChanges(changes: SimpleChanges) {
    }

    onTap(args){
        this.tap.emit(args);
    }

}