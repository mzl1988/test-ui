"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TitleLabelComponent = (function () {
    function TitleLabelComponent() {
        this.tap = new core_1.EventEmitter();
    }
    TitleLabelComponent.prototype.onTap = function (args) {
        this.tap.emit(args);
    };
    __decorate([
        core_1.Input('title'),
        __metadata("design:type", String)
    ], TitleLabelComponent.prototype, "title", void 0);
    __decorate([
        core_1.Output('tap'),
        __metadata("design:type", core_1.EventEmitter)
    ], TitleLabelComponent.prototype, "tap", void 0);
    TitleLabelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'TitleLabel',
            templateUrl: './title-label.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], TitleLabelComponent);
    return TitleLabelComponent;
}());
exports.TitleLabelComponent = TitleLabelComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUtbGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGl0bGUtbGFiZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVFO0FBUXZFO0lBSUk7UUFGZSxRQUFHLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO0lBRzNELENBQUM7SUFFRCxtQ0FBSyxHQUFMLFVBQU0sSUFBUztRQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFSZTtRQUFmLFlBQUssQ0FBQyxPQUFPLENBQUM7O3NEQUFlO0lBQ2Y7UUFBZCxhQUFNLENBQUMsS0FBSyxDQUFDO2tDQUFNLG1CQUFZO29EQUEyQjtJQUZsRCxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsOEJBQThCO1NBQzlDLENBQUM7O09BRVcsbUJBQW1CLENBVy9CO0lBQUQsMEJBQUM7Q0FBQSxBQVhELElBV0M7QUFYWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnVGl0bGVMYWJlbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RpdGxlLWxhYmVsLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIFRpdGxlTGFiZWxDb21wb25lbnQge1xuICAgIEBJbnB1dCgndGl0bGUnKSB0aXRsZTogc3RyaW5nO1xuICAgIEBPdXRwdXQoJ3RhcCcpIHRhcDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBvblRhcChhcmdzOiBhbnkpe1xuICAgICAgICB0aGlzLnRhcC5lbWl0KGFyZ3MpO1xuICAgIH1cblxufSJdfQ==