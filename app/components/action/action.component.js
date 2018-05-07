"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var icon_1 = require("../../dictionaries/iconDict/icon");
var platform_1 = require("tns-core-modules/platform");
var ActionComponent = (function () {
    function ActionComponent() {
        this.width = (platform_1.screen.mainScreen.widthDIPs - 32) / 2;
        this.tap = new core_1.EventEmitter();
        this.icon = icon_1.Icon[this.icon] || this.icon;
    }
    ActionComponent.prototype.triggerTap = function (args) {
        this.tap.emit(args);
    };
    ActionComponent.prototype.setWidth = function (width) {
        this.width = parseInt(width.toString());
    };
    ActionComponent.prototype.getElement = function () {
        return this.actionRef.nativeElement;
    };
    __decorate([
        core_1.Input('icon'),
        __metadata("design:type", String)
    ], ActionComponent.prototype, "icon", void 0);
    __decorate([
        core_1.Input('text'),
        __metadata("design:type", String)
    ], ActionComponent.prototype, "text", void 0);
    __decorate([
        core_1.Input('width'),
        __metadata("design:type", Number)
    ], ActionComponent.prototype, "width", void 0);
    __decorate([
        core_1.Output('tap'),
        __metadata("design:type", core_1.EventEmitter)
    ], ActionComponent.prototype, "tap", void 0);
    __decorate([
        core_1.ViewChild('action'),
        __metadata("design:type", core_1.ElementRef)
    ], ActionComponent.prototype, "actionRef", void 0);
    ActionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Action',
            templateUrl: './action.component.html',
            styleUrls: [
                './action.component.css'
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ActionComponent);
    return ActionComponent;
}());
exports.ActionComponent = ActionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBOEY7QUFDOUYseURBQXdEO0FBQ3hELHNEQUFtRDtBQVluRDtJQVFJO1FBSnVCLFVBQUssR0FBVyxDQUFDLGlCQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEQsUUFBRyxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUk5RCxJQUFJLENBQUMsSUFBSSxHQUFHLFdBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztJQUM3QyxDQUFDO0lBRU0sb0NBQVUsR0FBakIsVUFBa0IsSUFBSTtRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRU0sa0NBQVEsR0FBZixVQUFnQixLQUFvQjtRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFJLFFBQVEsQ0FBRSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRU0sb0NBQVUsR0FBakI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7SUFDeEMsQ0FBQztJQXBCYztRQUFkLFlBQUssQ0FBQyxNQUFNLENBQUM7O2lEQUFxQjtJQUNwQjtRQUFkLFlBQUssQ0FBQyxNQUFNLENBQUM7O2lEQUFxQjtJQUNuQjtRQUFmLFlBQUssQ0FBQyxPQUFPLENBQUM7O2tEQUErRDtJQUMvRDtRQUFkLGFBQU0sQ0FBQyxLQUFLLENBQUM7a0NBQWEsbUJBQVk7Z0RBQTJCO0lBQzdDO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFtQixpQkFBVTtzREFBQztJQU56QyxlQUFlO1FBVDNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFDLFFBQVE7WUFDakIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUM7Z0JBQ04sd0JBQXdCO2FBQzNCO1NBQ0osQ0FBQzs7T0FFVyxlQUFlLENBdUIzQjtJQUFELHNCQUFDO0NBQUEsQUF2QkQsSUF1QkM7QUF2QlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vLi4vZGljdGlvbmFyaWVzL2ljb25EaWN0L2ljb24nO1xuaW1wb3J0IHsgc2NyZWVuIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXcnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOidBY3Rpb24nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hY3Rpb24uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczpbXG4gICAgICAgICcuL2FjdGlvbi5jb21wb25lbnQuY3NzJ1xuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBY3Rpb25Db21wb25lbnR7XG5cbiAgICBASW5wdXQoJ2ljb24nKSBwdWJsaWMgaWNvbjogc3RyaW5nO1xuICAgIEBJbnB1dCgndGV4dCcpIHB1YmxpYyB0ZXh0OiBzdHJpbmc7XG4gICAgQElucHV0KCd3aWR0aCcpIHB1YmxpYyB3aWR0aDogbnVtYmVyID0gKHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyAtIDMyKSAvIDI7XG4gICAgQE91dHB1dCgndGFwJykgcHVibGljIHRhcDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQFZpZXdDaGlsZCgnYWN0aW9uJykgcHVibGljIGFjdGlvblJlZjogRWxlbWVudFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuaWNvbiA9IEljb25bdGhpcy5pY29uXSB8fCB0aGlzLmljb247XG4gICAgfVxuXG4gICAgcHVibGljIHRyaWdnZXJUYXAoYXJncyl7XG4gICAgICAgIHRoaXMudGFwLmVtaXQoYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFdpZHRoKHdpZHRoOiBzdHJpbmd8bnVtYmVyKXtcbiAgICAgICAgdGhpcy53aWR0aCA9ICBwYXJzZUludCggd2lkdGgudG9TdHJpbmcoKSApO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRFbGVtZW50KCk6IFZpZXd7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGlvblJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn0iXX0=