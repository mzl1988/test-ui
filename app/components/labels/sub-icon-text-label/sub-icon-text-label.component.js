"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SubIconTextLabelComponent = (function () {
    function SubIconTextLabelComponent() {
        this.tap = new core_1.EventEmitter();
    }
    SubIconTextLabelComponent.prototype.onTap = function (args) {
        this.tap.emit(args);
    };
    __decorate([
        core_1.Input('icon'),
        __metadata("design:type", String)
    ], SubIconTextLabelComponent.prototype, "icon", void 0);
    __decorate([
        core_1.Input('text'),
        __metadata("design:type", String)
    ], SubIconTextLabelComponent.prototype, "text", void 0);
    __decorate([
        core_1.Output('tap'),
        __metadata("design:type", core_1.EventEmitter)
    ], SubIconTextLabelComponent.prototype, "tap", void 0);
    SubIconTextLabelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'SubIconTextLabel',
            templateUrl: './sub-icon-text-label.component.html',
            styleUrls: [
                './sub-icon-text-label.css'
            ]
        }),
        __metadata("design:paramtypes", [])
    ], SubIconTextLabelComponent);
    return SubIconTextLabelComponent;
}());
exports.SubIconTextLabelComponent = SubIconTextLabelComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLWljb24tdGV4dC1sYWJlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdWItaWNvbi10ZXh0LWxhYmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF1RTtBQVd2RTtJQUtJO1FBRmUsUUFBRyxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQUczRCxDQUFDO0lBRUQseUNBQUssR0FBTCxVQUFNLElBQVM7UUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBVGM7UUFBZCxZQUFLLENBQUMsTUFBTSxDQUFDOzsyREFBYztJQUNiO1FBQWQsWUFBSyxDQUFDLE1BQU0sQ0FBQzs7MkRBQWM7SUFDYjtRQUFkLGFBQU0sQ0FBQyxLQUFLLENBQUM7a0NBQU0sbUJBQVk7MERBQTJCO0lBSGxELHlCQUF5QjtRQVRyQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLHNDQUFzQztZQUNuRCxTQUFTLEVBQUU7Z0JBQ1AsMkJBQTJCO2FBQzlCO1NBQ0osQ0FBQzs7T0FFVyx5QkFBeUIsQ0FZckM7SUFBRCxnQ0FBQztDQUFBLEFBWkQsSUFZQztBQVpZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdTdWJJY29uVGV4dExhYmVsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc3ViLWljb24tdGV4dC1sYWJlbC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXG4gICAgICAgICcuL3N1Yi1pY29uLXRleHQtbGFiZWwuY3NzJ1xuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBTdWJJY29uVGV4dExhYmVsQ29tcG9uZW50IHtcbiAgICBASW5wdXQoJ2ljb24nKSBpY29uOiBzdHJpbmc7XG4gICAgQElucHV0KCd0ZXh0JykgdGV4dDogc3RyaW5nO1xuICAgIEBPdXRwdXQoJ3RhcCcpIHRhcDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBvblRhcChhcmdzOiBhbnkpe1xuICAgICAgICB0aGlzLnRhcC5lbWl0KGFyZ3MpO1xuICAgIH1cblxufSJdfQ==