"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var FooterComponent = (function () {
    function FooterComponent(router) {
        this.router = router;
        this.opacity = 1;
        this.showBack = true;
        this.onMenuTap = new core_1.EventEmitter();
    }
    FooterComponent.prototype.back = function () {
        this.router.backToPreviousPage();
    };
    FooterComponent.prototype.triggerMenuOnTap = function () {
        this.onMenuTap.emit();
    };
    __decorate([
        core_1.Input('opacity'),
        __metadata("design:type", Number)
    ], FooterComponent.prototype, "opacity", void 0);
    __decorate([
        core_1.Input('showBack'),
        __metadata("design:type", Boolean)
    ], FooterComponent.prototype, "showBack", void 0);
    __decorate([
        core_1.Output('onmenutap'),
        __metadata("design:type", core_1.EventEmitter)
    ], FooterComponent.prototype, "onMenuTap", void 0);
    FooterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Footer',
            templateUrl: './footer.component.html',
            styleUrls: [
                './footer.component.css'
            ]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBdUU7QUFDdkUsc0RBQStEO0FBVy9EO0lBTUkseUJBQW9CLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBSm5CLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFDbkIsYUFBUSxHQUFZLElBQUksQ0FBQztRQUN2QixjQUFTLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO0lBRS9CLENBQUM7SUFFekMsOEJBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRU0sMENBQWdCLEdBQXZCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBWmlCO1FBQWpCLFlBQUssQ0FBQyxTQUFTLENBQUM7O29EQUE0QjtJQUMxQjtRQUFsQixZQUFLLENBQUMsVUFBVSxDQUFDOztxREFBaUM7SUFDOUI7UUFBcEIsYUFBTSxDQUFDLFdBQVcsQ0FBQztrQ0FBbUIsbUJBQVk7c0RBQTJCO0lBSnJFLGVBQWU7UUFUM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBQztnQkFDTix3QkFBd0I7YUFDM0I7U0FDSixDQUFDO3lDQVE4Qix5QkFBZ0I7T0FObkMsZUFBZSxDQWUzQjtJQUFELHNCQUFDO0NBQUEsQUFmRCxJQWVDO0FBZlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdGb290ZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9mb290ZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczpbXG4gICAgICAgICcuL2Zvb3Rlci5jb21wb25lbnQuY3NzJ1xuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBGb290ZXJDb21wb25lbnR7XG5cbiAgICBASW5wdXQoJ29wYWNpdHknKSBwdWJsaWMgb3BhY2l0eTogbnVtYmVyID0gMTtcbiAgICBASW5wdXQoJ3Nob3dCYWNrJykgcHVibGljIHNob3dCYWNrOiBib29sZWFuID0gdHJ1ZTtcbiAgICBAT3V0cHV0KCdvbm1lbnV0YXAnKSBwdWJsaWMgb25NZW51VGFwOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGNvbnN0cnVjdG9yKCBwdWJsaWMgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zICl7fVxuXG4gICAgcHVibGljIGJhY2soKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHRyaWdnZXJNZW51T25UYXAoKXtcbiAgICAgICAgdGhpcy5vbk1lbnVUYXAuZW1pdCgpO1xuICAgIH1cbn0iXX0=