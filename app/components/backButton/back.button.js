"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BackButtonComponent = (function () {
    function BackButtonComponent() {
        this.tap = new core_1.EventEmitter();
    }
    BackButtonComponent.prototype.onTap = function (args) {
        this.tap.emit(args);
    };
    __decorate([
        core_1.Output('tap'),
        __metadata("design:type", core_1.EventEmitter)
    ], BackButtonComponent.prototype, "tap", void 0);
    BackButtonComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Back',
            templateUrl: './back.button.html',
            styleUrls: [
                './back.button.css'
            ]
        })
    ], BackButtonComponent);
    return BackButtonComponent;
}());
exports.BackButtonComponent = BackButtonComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFjay5idXR0b24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYWNrLmJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRTtBQVdoRTtJQVRBO1FBVzJCLFFBQUcsR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFNdkUsQ0FBQztJQUpHLG1DQUFLLEdBQUwsVUFBTSxJQUFJO1FBQ04sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUpjO1FBQWQsYUFBTSxDQUFDLEtBQUssQ0FBQztrQ0FBYyxtQkFBWTtvREFBMkI7SUFGMUQsbUJBQW1CO1FBVC9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxTQUFTLEVBQUU7Z0JBQ1AsbUJBQW1CO2FBQ3RCO1NBQ0osQ0FBQztPQUVXLG1CQUFtQixDQVEvQjtJQUFELDBCQUFDO0NBQUEsQUFSRCxJQVFDO0FBUlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnQmFjaycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2JhY2suYnV0dG9uLmh0bWwnLFxuICAgIHN0eWxlVXJsczogW1xuICAgICAgICAnLi9iYWNrLmJ1dHRvbi5jc3MnXG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIEJhY2tCdXR0b25Db21wb25lbnR7XG5cbiAgICBAT3V0cHV0KCd0YXAnKSBwcml2YXRlIHRhcDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBvblRhcChhcmdzKXtcbiAgICAgICAgdGhpcy50YXAuZW1pdChhcmdzKTtcbiAgICB9XG5cbn0iXX0=