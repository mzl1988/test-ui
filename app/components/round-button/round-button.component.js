"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RoundButtonComponent = (function () {
    function RoundButtonComponent() {
        this.backgroundColor = '#F68B1F';
        this.color = '#ffffff';
        this.tap = new core_1.EventEmitter();
    }
    RoundButtonComponent.prototype.ngOnInit = function () {
    };
    RoundButtonComponent.prototype.ngOnChanges = function (changes) {
    };
    RoundButtonComponent.prototype.onTap = function (args) {
        this.tap.emit(args);
    };
    __decorate([
        core_1.Input('backgroundColor'),
        __metadata("design:type", String)
    ], RoundButtonComponent.prototype, "backgroundColor", void 0);
    __decorate([
        core_1.Input('color'),
        __metadata("design:type", String)
    ], RoundButtonComponent.prototype, "color", void 0);
    __decorate([
        core_1.Input('icon'),
        __metadata("design:type", String)
    ], RoundButtonComponent.prototype, "icon", void 0);
    __decorate([
        core_1.Input('text'),
        __metadata("design:type", String)
    ], RoundButtonComponent.prototype, "text", void 0);
    __decorate([
        core_1.Output('tap'),
        __metadata("design:type", core_1.EventEmitter)
    ], RoundButtonComponent.prototype, "tap", void 0);
    RoundButtonComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'RoundButton',
            templateUrl: './round-button.component.html',
            styleUrls: [
                './round-button.css'
            ]
        }),
        __metadata("design:paramtypes", [])
    ], RoundButtonComponent);
    return RoundButtonComponent;
}());
exports.RoundButtonComponent = RoundButtonComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91bmQtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvdW5kLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUc7QUFZekc7SUFPSTtRQU4wQixvQkFBZSxHQUFXLFNBQVMsQ0FBQztRQUM5QyxVQUFLLEdBQVcsU0FBUyxDQUFDO1FBR25CLFFBQUcsR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFJbkUsQ0FBQztJQUVELHVDQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsMENBQVcsR0FBWCxVQUFZLE9BQXNCO0lBRWxDLENBQUM7SUFFRCxvQ0FBSyxHQUFMLFVBQU0sSUFBSTtRQUNOLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFwQnlCO1FBQXpCLFlBQUssQ0FBQyxpQkFBaUIsQ0FBQztrQ0FBa0IsTUFBTTtpRUFBYTtJQUM5QztRQUFmLFlBQUssQ0FBQyxPQUFPLENBQUM7a0NBQVEsTUFBTTt1REFBYTtJQUMzQjtRQUFkLFlBQUssQ0FBQyxNQUFNLENBQUM7O3NEQUFjO0lBQ2I7UUFBZCxZQUFLLENBQUMsTUFBTSxDQUFDOztzREFBYztJQUNiO1FBQWQsYUFBTSxDQUFDLEtBQUssQ0FBQztrQ0FBYyxtQkFBWTtxREFBMkI7SUFMMUQsb0JBQW9CO1FBVGhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUU7Z0JBQ1Asb0JBQW9CO2FBQ3ZCO1NBQ0osQ0FBQzs7T0FFVyxvQkFBb0IsQ0FzQmhDO0lBQUQsMkJBQUM7Q0FBQSxBQXRCRCxJQXNCQztBQXRCWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnUm91bmRCdXR0b24nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9yb3VuZC1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW1xuICAgICAgICAnLi9yb3VuZC1idXR0b24uY3NzJ1xuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBSb3VuZEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgICBASW5wdXQoJ2JhY2tncm91bmRDb2xvcicpIGJhY2tncm91bmRDb2xvcjogU3RyaW5nID0gJyNGNjhCMUYnO1xuICAgIEBJbnB1dCgnY29sb3InKSBjb2xvcjogU3RyaW5nID0gJyNmZmZmZmYnO1xuICAgIEBJbnB1dCgnaWNvbicpIGljb246IHN0cmluZztcbiAgICBASW5wdXQoJ3RleHQnKSB0ZXh0OiBzdHJpbmc7XG4gICAgQE91dHB1dCgndGFwJykgcHJpdmF0ZSB0YXA6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgXG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG4gICAgfVxuXG4gICAgb25UYXAoYXJncyl7XG4gICAgICAgIHRoaXMudGFwLmVtaXQoYXJncyk7XG4gICAgfVxufSJdfQ==