"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var IRISButtonComponent = (function () {
    function IRISButtonComponent() {
        this.icon = '';
        this.text = '';
        this.opacity = 1;
        this.disabled = false;
        this.loadMode = 'async';
        this.tap = new core_1.EventEmitter();
    }
    IRISButtonComponent.prototype.onTap = function (args) {
        this.tap.emit(args);
    };
    __decorate([
        core_1.Input('icon'),
        __metadata("design:type", String)
    ], IRISButtonComponent.prototype, "icon", void 0);
    __decorate([
        core_1.Input('text'),
        __metadata("design:type", String)
    ], IRISButtonComponent.prototype, "text", void 0);
    __decorate([
        core_1.Input('opacity'),
        __metadata("design:type", Number)
    ], IRISButtonComponent.prototype, "opacity", void 0);
    __decorate([
        core_1.Input('disabled'),
        __metadata("design:type", Boolean)
    ], IRISButtonComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input('loadMode'),
        __metadata("design:type", String)
    ], IRISButtonComponent.prototype, "loadMode", void 0);
    __decorate([
        core_1.Output('tap'),
        __metadata("design:type", core_1.EventEmitter)
    ], IRISButtonComponent.prototype, "tap", void 0);
    IRISButtonComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'IRISButton',
            templateUrl: './button.component.html',
            styleUrls: [
                './button.component.css'
            ]
        })
    ], IRISButtonComponent);
    return IRISButtonComponent;
}());
exports.IRISButtonComponent = IRISButtonComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBdUU7QUFZdkU7SUFUQTtRQVcwQixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDZixZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsYUFBUSxHQUFXLE9BQU8sQ0FBQztRQUUvQixRQUFHLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO0lBTXRFLENBQUM7SUFKVSxtQ0FBSyxHQUFaLFVBQWEsSUFBUztRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBVmM7UUFBZCxZQUFLLENBQUMsTUFBTSxDQUFDOztxREFBMEI7SUFDekI7UUFBZCxZQUFLLENBQUMsTUFBTSxDQUFDOztxREFBMEI7SUFDdEI7UUFBakIsWUFBSyxDQUFDLFNBQVMsQ0FBQzs7d0RBQTRCO0lBQzFCO1FBQWxCLFlBQUssQ0FBQyxVQUFVLENBQUM7O3lEQUFrQztJQUNqQztRQUFsQixZQUFLLENBQUMsVUFBVSxDQUFDOzt5REFBbUM7SUFFdEM7UUFBZCxhQUFNLENBQUMsS0FBSyxDQUFDO2tDQUFhLG1CQUFZO29EQUEyQjtJQVJ6RCxtQkFBbUI7UUFUL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUMsWUFBWTtZQUNyQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBQztnQkFDTix3QkFBd0I7YUFDM0I7U0FDSixDQUFDO09BRVcsbUJBQW1CLENBYy9CO0lBQUQsMEJBQUM7Q0FBQSxBQWRELElBY0M7QUFkWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZ2VzdHVyZXMgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6J0lSSVNCdXR0b24nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczpbXG4gICAgICAgICcuL2J1dHRvbi5jb21wb25lbnQuY3NzJ1xuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBJUklTQnV0dG9uQ29tcG9uZW50e1xuXG4gICAgQElucHV0KCdpY29uJykgcHVibGljIGljb246IHN0cmluZyA9ICcnO1xuICAgIEBJbnB1dCgndGV4dCcpIHB1YmxpYyB0ZXh0OiBzdHJpbmcgPSAnJztcbiAgICBASW5wdXQoJ29wYWNpdHknKSBwdWJsaWMgb3BhY2l0eTogbnVtYmVyID0gMTtcbiAgICBASW5wdXQoJ2Rpc2FibGVkJykgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCdsb2FkTW9kZScpIHB1YmxpYyBsb2FkTW9kZTogc3RyaW5nID0gJ2FzeW5jJztcbiAgICBcbiAgICBAT3V0cHV0KCd0YXAnKSBwdWJsaWMgdGFwOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIHB1YmxpYyBvblRhcChhcmdzOiBhbnkpe1xuICAgICAgICB0aGlzLnRhcC5lbWl0KGFyZ3MpO1xuICAgIH1cblxufSJdfQ==