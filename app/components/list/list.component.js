"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var listItem_component_1 = require("../listItem/listItem.component");
var ListComponent = (function () {
    function ListComponent() {
        this.sideMargin = true;
        this.tap = new core_1.EventEmitter();
        this.panelStatus = true;
    }
    ListComponent.prototype.togglePanel = function () {
        this.panelStatus = !this.panelStatus;
    };
    ListComponent.prototype.openPanel = function () {
        this.panelStatus = true;
    };
    ListComponent.prototype.closePanel = function () {
        this.panelStatus = false;
    };
    ListComponent.prototype._onTap = function (args) {
        this.tap.emit(args);
    };
    __decorate([
        core_1.Input('title'),
        __metadata("design:type", String)
    ], ListComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input('sideMargin'),
        __metadata("design:type", Boolean)
    ], ListComponent.prototype, "sideMargin", void 0);
    __decorate([
        core_1.Output('tap'),
        __metadata("design:type", core_1.EventEmitter)
    ], ListComponent.prototype, "tap", void 0);
    __decorate([
        core_1.ContentChildren(listItem_component_1.ListItemComponent),
        __metadata("design:type", core_1.QueryList)
    ], ListComponent.prototype, "lists", void 0);
    ListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'List',
            templateUrl: './list.component.html',
            styleUrls: [
                './list.component.css'
            ]
        })
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRztBQUNuRyxxRUFBbUU7QUFXbkU7SUFUQTtRQVlnQyxlQUFVLEdBQVksSUFBSSxDQUFDO1FBQ2pDLFFBQUcsR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFHM0QsZ0JBQVcsR0FBWSxJQUFJLENBQUM7SUFpQnZDLENBQUM7SUFmVSxtQ0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pDLENBQUM7SUFFTSxpQ0FBUyxHQUFoQjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFTSxrQ0FBVSxHQUFqQjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFTSw4QkFBTSxHQUFiLFVBQWMsSUFBSTtRQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFyQmU7UUFBZixZQUFLLENBQUMsT0FBTyxDQUFDOztnREFBc0I7SUFDaEI7UUFBcEIsWUFBSyxDQUFDLFlBQVksQ0FBQzs7cURBQW1DO0lBQ3hDO1FBQWQsYUFBTSxDQUFDLEtBQUssQ0FBQztrQ0FBYSxtQkFBWTs4Q0FBMkI7SUFDOUI7UUFBbkMsc0JBQWUsQ0FBQyxzQ0FBaUIsQ0FBQztrQ0FBZSxnQkFBUztnREFBb0I7SUFMdEUsYUFBYTtRQVR6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFDO2dCQUNOLHNCQUFzQjthQUN6QjtTQUNKLENBQUM7T0FFVyxhQUFhLENBd0J6QjtJQUFELG9CQUFDO0NBQUEsQUF4QkQsSUF3QkM7QUF4Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vbGlzdEl0ZW0vbGlzdEl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ0xpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6W1xuICAgICAgICAnLi9saXN0LmNvbXBvbmVudC5jc3MnXG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnR7XG5cbiAgICBASW5wdXQoJ3RpdGxlJykgcHVibGljIHRpdGxlOiBzdHJpbmc7XG4gICAgQElucHV0KCdzaWRlTWFyZ2luJykgcHVibGljIHNpZGVNYXJnaW46IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBPdXRwdXQoJ3RhcCcpIHB1YmxpYyB0YXA6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBDb250ZW50Q2hpbGRyZW4oTGlzdEl0ZW1Db21wb25lbnQpIHB1YmxpYyBsaXN0czogUXVlcnlMaXN0PExpc3RJdGVtQ29tcG9uZW50PjtcblxuICAgIHB1YmxpYyBwYW5lbFN0YXR1czogYm9vbGVhbiA9IHRydWU7IFxuXG4gICAgcHVibGljIHRvZ2dsZVBhbmVsKCl7XG4gICAgICAgIHRoaXMucGFuZWxTdGF0dXMgPSAhdGhpcy5wYW5lbFN0YXR1cztcbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlblBhbmVsKCl7XG4gICAgICAgIHRoaXMucGFuZWxTdGF0dXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbG9zZVBhbmVsKCl7XG4gICAgICAgIHRoaXMucGFuZWxTdGF0dXMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgX29uVGFwKGFyZ3Mpe1xuICAgICAgICB0aGlzLnRhcC5lbWl0KGFyZ3MpO1xuICAgIH1cbn0iXX0=