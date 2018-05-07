"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ThumbnailItemComponent = (function () {
    function ThumbnailItemComponent() {
        this.tap = new core_1.EventEmitter();
    }
    ThumbnailItemComponent.prototype.ngOnChanges = function (changes) {
    };
    ThumbnailItemComponent.prototype.onTap = function (args) {
        this.tap.emit(args);
    };
    __decorate([
        core_1.Input('className'),
        __metadata("design:type", String)
    ], ThumbnailItemComponent.prototype, "className", void 0);
    __decorate([
        core_1.Input('imageSrc'),
        __metadata("design:type", String)
    ], ThumbnailItemComponent.prototype, "imageSrc", void 0);
    __decorate([
        core_1.Output('tap'),
        __metadata("design:type", core_1.EventEmitter)
    ], ThumbnailItemComponent.prototype, "tap", void 0);
    ThumbnailItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ThumbnailItem',
            templateUrl: './thumbnail-item.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], ThumbnailItemComponent);
    return ThumbnailItemComponent;
}());
exports.ThumbnailItemComponent = ThumbnailItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGh1bWJuYWlsLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGh1bWJuYWlsLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdHO0FBU2hHO0lBS0k7UUFGZSxRQUFHLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO0lBRzNELENBQUM7SUFFRCw0Q0FBVyxHQUFYLFVBQVksT0FBc0I7SUFDbEMsQ0FBQztJQUVELHNDQUFLLEdBQUwsVUFBTSxJQUFJO1FBQ04sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQVptQjtRQUFuQixZQUFLLENBQUMsV0FBVyxDQUFDOzs2REFBbUI7SUFDbkI7UUFBbEIsWUFBSyxDQUFDLFVBQVUsQ0FBQzs7NERBQWtCO0lBQ3JCO1FBQWQsYUFBTSxDQUFDLEtBQUssQ0FBQztrQ0FBTSxtQkFBWTt1REFBMkI7SUFIbEQsc0JBQXNCO1FBTmxDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLGlDQUFpQztTQUNqRCxDQUFDOztPQUVXLHNCQUFzQixDQWVsQztJQUFELDZCQUFDO0NBQUEsQUFmRCxJQWVDO0FBZlksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ1RodW1ibmFpbEl0ZW0nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi90aHVtYm5haWwtaXRlbS5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBUaHVtYm5haWxJdGVtQ29tcG9uZW50IHtcbiAgICBASW5wdXQoJ2NsYXNzTmFtZScpIGNsYXNzTmFtZTogc3RyaW5nO1xuICAgIEBJbnB1dCgnaW1hZ2VTcmMnKSBpbWFnZVNyYzogc3RyaW5nO1xuICAgIEBPdXRwdXQoJ3RhcCcpIHRhcDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgfVxuXG4gICAgb25UYXAoYXJncyl7XG4gICAgICAgIHRoaXMudGFwLmVtaXQoYXJncyk7XG4gICAgfVxuXG59Il19