"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SlideComponent = (function () {
    function SlideComponent() {
        this.height = 'auto';
        this.classes = '';
        this.load = new core_1.EventEmitter();
        this.tap = new core_1.EventEmitter();
        this.layoutWidth = 0;
        this.layoutHeight = 0;
    }
    SlideComponent.prototype.onTap = function (args) {
        this.tap.emit(args);
    };
    SlideComponent.prototype.onLoad = function (args) {
        this.layoutWidth = this.slideRef.nativeElement.width;
        this.layoutHeight = this.slideRef.nativeElement.height;
        this.load.emit(args);
    };
    SlideComponent.prototype.getElement = function () {
        return this.slideRef.nativeElement;
    };
    SlideComponent.prototype.getWidth = function () {
        return this.slideRef.nativeElement.getMeasuredWidth();
    };
    SlideComponent.prototype.getHeight = function () {
        return this.slideRef.nativeElement.getMeasuredHeight();
    };
    __decorate([
        core_1.ViewChild('slide'),
        __metadata("design:type", core_1.ElementRef)
    ], SlideComponent.prototype, "slideRef", void 0);
    __decorate([
        core_1.Input('height'),
        __metadata("design:type", String)
    ], SlideComponent.prototype, "height", void 0);
    __decorate([
        core_1.Input('class'),
        __metadata("design:type", String)
    ], SlideComponent.prototype, "classes", void 0);
    __decorate([
        core_1.Output('load'),
        __metadata("design:type", core_1.EventEmitter)
    ], SlideComponent.prototype, "load", void 0);
    __decorate([
        core_1.Output('tap'),
        __metadata("design:type", core_1.EventEmitter)
    ], SlideComponent.prototype, "tap", void 0);
    SlideComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Slide',
            templateUrl: './slide.component.html',
            styleUrls: [
                './slide.component.css'
            ]
        })
    ], SlideComponent);
    return SlideComponent;
}());
exports.SlideComponent = SlideComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2xpZGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQThGO0FBWTlGO0lBVEE7UUFZcUIsV0FBTSxHQUFXLE1BQU0sQ0FBQztRQUN6QixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLFNBQUksR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDOUMsUUFBRyxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUVwRCxnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUN4QixpQkFBWSxHQUFXLENBQUMsQ0FBQztJQXVCcEMsQ0FBQztJQXJCVSw4QkFBSyxHQUFaLFVBQWEsSUFBSTtRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFTSwrQkFBTSxHQUFiLFVBQWMsSUFBSTtRQUNkLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ3JELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFTSxtQ0FBVSxHQUFqQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQztJQUN2QyxDQUFDO0lBRU0saUNBQVEsR0FBZjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFELENBQUM7SUFFTSxrQ0FBUyxHQUFoQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNELENBQUM7SUE3Qm1CO1FBQW5CLGdCQUFTLENBQUMsT0FBTyxDQUFDO2tDQUFXLGlCQUFVO29EQUFDO0lBQ3hCO1FBQWhCLFlBQUssQ0FBQyxRQUFRLENBQUM7O2tEQUF5QjtJQUN6QjtRQUFmLFlBQUssQ0FBQyxPQUFPLENBQUM7O21EQUFzQjtJQUNyQjtRQUFmLGFBQU0sQ0FBQyxNQUFNLENBQUM7a0NBQU8sbUJBQVk7Z0RBQTJCO0lBQzlDO1FBQWQsYUFBTSxDQUFDLEtBQUssQ0FBQztrQ0FBTSxtQkFBWTsrQ0FBMkI7SUFObEQsY0FBYztRQVQxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFDO2dCQUNOLHVCQUF1QjthQUMxQjtTQUNKLENBQUM7T0FFVyxjQUFjLENBZ0MxQjtJQUFELHFCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXcnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnU2xpZGUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zbGlkZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOltcbiAgICAgICAgJy4vc2xpZGUuY29tcG9uZW50LmNzcydcbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgU2xpZGVDb21wb25lbnR7XG5cbiAgICBAVmlld0NoaWxkKCdzbGlkZScpIHNsaWRlUmVmOiBFbGVtZW50UmVmO1xuICAgIEBJbnB1dCgnaGVpZ2h0JykgaGVpZ2h0OiBzdHJpbmcgPSAnYXV0byc7XG4gICAgQElucHV0KCdjbGFzcycpIGNsYXNzZXM6IHN0cmluZyA9ICcnO1xuICAgIEBPdXRwdXQoJ2xvYWQnKSBsb2FkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCd0YXAnKSB0YXA6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgcHVibGljIGxheW91dFdpZHRoOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBsYXlvdXRIZWlnaHQ6IG51bWJlciA9IDA7XG5cbiAgICBwdWJsaWMgb25UYXAoYXJncyl7XG4gICAgICAgIHRoaXMudGFwLmVtaXQoYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTG9hZChhcmdzKXtcbiAgICAgICAgdGhpcy5sYXlvdXRXaWR0aCA9IHRoaXMuc2xpZGVSZWYubmF0aXZlRWxlbWVudC53aWR0aDtcbiAgICAgICAgdGhpcy5sYXlvdXRIZWlnaHQgPSB0aGlzLnNsaWRlUmVmLm5hdGl2ZUVsZW1lbnQuaGVpZ2h0O1xuICAgICAgICB0aGlzLmxvYWQuZW1pdChhcmdzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RWxlbWVudCgpOiBWaWV3e1xuICAgICAgICByZXR1cm4gdGhpcy5zbGlkZVJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRXaWR0aCgpOiBudW1iZXJ7XG4gICAgICAgIHJldHVybiB0aGlzLnNsaWRlUmVmLm5hdGl2ZUVsZW1lbnQuZ2V0TWVhc3VyZWRXaWR0aCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRIZWlnaHQoKTogbnVtYmVye1xuICAgICAgICByZXR1cm4gdGhpcy5zbGlkZVJlZi5uYXRpdmVFbGVtZW50LmdldE1lYXN1cmVkSGVpZ2h0KCk7XG4gICAgfVxufSJdfQ==