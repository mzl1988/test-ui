"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var accordion_component_1 = require("./accordion.component");
var AccordionGroupComponent = (function () {
    function AccordionGroupComponent(accordion) {
        this.isOpenChange = new core_1.EventEmitter();
        this._isOpen = false;
        this.accordion = accordion;
    }
    Object.defineProperty(AccordionGroupComponent.prototype, "isOpen", {
        get: function () {
            return this._isOpen;
        },
        set: function (value) {
            var _this = this;
            if (value !== this.isOpen) {
                if (value) {
                    this.accordion.closeOtherPanels(this);
                }
                this._isOpen = value;
                Promise.resolve(null).then(function () {
                    _this.isOpenChange.emit(value);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    AccordionGroupComponent.prototype.ngOnInit = function () {
        this.isDisabled = this.isDisabled || false;
        this.collapsedIcon = this.collapsedIcon || 'minus';
        this.expandedIcon = this.expandedIcon || 'plus';
        this.accordion.addGroup(this);
    };
    AccordionGroupComponent.prototype.ngOnDestroy = function () {
        this.accordion.removeGroup(this);
    };
    AccordionGroupComponent.prototype.toggleOpen = function (event) {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AccordionGroupComponent.prototype, "heading", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AccordionGroupComponent.prototype, "headingClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AccordionGroupComponent.prototype, "titleIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AccordionGroupComponent.prototype, "titleIconClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AccordionGroupComponent.prototype, "panelClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AccordionGroupComponent.prototype, "panelHeadingClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AccordionGroupComponent.prototype, "panelBodyClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], AccordionGroupComponent.prototype, "isDisabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AccordionGroupComponent.prototype, "collapsedIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AccordionGroupComponent.prototype, "expandedIcon", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], AccordionGroupComponent.prototype, "isOpenChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AccordionGroupComponent.prototype, "isOpen", null);
    AccordionGroupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'AccordionGroup',
            templateUrl: './accordion-group.component.html'
        }),
        __param(0, core_1.Inject(accordion_component_1.AccordionComponent)),
        __metadata("design:paramtypes", [accordion_component_1.AccordionComponent])
    ], AccordionGroupComponent);
    return AccordionGroupComponent;
}());
exports.AccordionGroupComponent = AccordionGroupComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjY29yZGlvbi1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FFdUI7QUFDdkIsNkRBQTJEO0FBUTNEO0lBZ0NJLGlDQUF5QyxTQUE2QjtRQXJCNUQsaUJBQVksR0FBMEIsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFrQnpELFlBQU8sR0FBRyxLQUFLLENBQUM7UUFJdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQXJCRCxzQkFBSSwyQ0FBTTthQUFWO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzthQUVELFVBQVcsS0FBYztZQUF6QixpQkFVQztZQVRHLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDeEIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDUixJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMxQyxDQUFDO2dCQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDdkIsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2xDLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztRQUNMLENBQUM7OztPQVpBO0lBcUJELDBDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsSUFBSSxPQUFPLENBQUM7UUFDbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLE1BQU0sQ0FBQztRQUNoRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsNkNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCw0Q0FBVSxHQUFWLFVBQVcsS0FBWTtRQUNuQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQy9CLENBQUM7SUFDTCxDQUFDO0lBbERRO1FBQVIsWUFBSyxFQUFFOzs0REFBaUI7SUFDaEI7UUFBUixZQUFLLEVBQUU7O2lFQUFzQjtJQUNyQjtRQUFSLFlBQUssRUFBRTs7OERBQW1CO0lBQ2xCO1FBQVIsWUFBSyxFQUFFOzttRUFBd0I7SUFDdkI7UUFBUixZQUFLLEVBQUU7OytEQUFvQjtJQUNuQjtRQUFSLFlBQUssRUFBRTs7c0VBQTJCO0lBQzFCO1FBQVIsWUFBSyxFQUFFOzttRUFBd0I7SUFDdkI7UUFBUixZQUFLLEVBQUU7OytEQUFxQjtJQUNwQjtRQUFSLFlBQUssRUFBRTs7a0VBQXVCO0lBQ3RCO1FBQVIsWUFBSyxFQUFFOztpRUFBc0I7SUFDcEI7UUFBVCxhQUFNLEVBQUU7a0NBQWUsbUJBQVk7aUVBQStCO0lBRW5FO1FBREMsWUFBSyxFQUFFOzs7eURBR1A7SUFmUSx1QkFBdUI7UUFObkMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSxrQ0FBa0M7U0FDbEQsQ0FBQztRQWtDZ0IsV0FBQSxhQUFNLENBQUMsd0NBQWtCLENBQUMsQ0FBQTt5Q0FBWSx3Q0FBa0I7T0FoQzdELHVCQUF1QixDQW9EbkM7SUFBRCw4QkFBQztDQUFBLEFBcERELElBb0RDO0FBcERZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LCBJbmplY3QsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY2NvcmRpb25Db21wb25lbnQgfSBmcm9tICcuL2FjY29yZGlvbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnQWNjb3JkaW9uR3JvdXAnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hY2NvcmRpb24tZ3JvdXAuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCkgaGVhZGluZzogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGhlYWRpbmdDbGFzczogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHRpdGxlSWNvbjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHRpdGxlSWNvbkNsYXNzOiBzdHJpbmc7XG4gICAgQElucHV0KCkgcGFuZWxDbGFzczogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHBhbmVsSGVhZGluZ0NsYXNzOiBzdHJpbmc7XG4gICAgQElucHV0KCkgcGFuZWxCb2R5Q2xhc3M6IHN0cmluZztcbiAgICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGNvbGxhcHNlZEljb246IHN0cmluZztcbiAgICBASW5wdXQoKSBleHBhbmRlZEljb246IHN0cmluZztcbiAgICBAT3V0cHV0KCkgaXNPcGVuQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQElucHV0KClcbiAgICBnZXQgaXNPcGVuKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNPcGVuO1xuICAgIH1cblxuICAgIHNldCBpc09wZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NvcmRpb24uY2xvc2VPdGhlclBhbmVscyh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2lzT3BlbiA9IHZhbHVlO1xuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNPcGVuQ2hhbmdlLmVtaXQodmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2lzT3BlbiA9IGZhbHNlO1xuICAgIHByb3RlY3RlZCBhY2NvcmRpb246IEFjY29yZGlvbkNvbXBvbmVudDtcblxuICAgIGNvbnN0cnVjdG9yKCBASW5qZWN0KEFjY29yZGlvbkNvbXBvbmVudCkgYWNjb3JkaW9uOiBBY2NvcmRpb25Db21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5hY2NvcmRpb24gPSBhY2NvcmRpb247XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogYW55IHtcbiAgICAgICAgdGhpcy5pc0Rpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkIHx8IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbGxhcHNlZEljb24gPSB0aGlzLmNvbGxhcHNlZEljb24gfHwgJ21pbnVzJztcbiAgICAgICAgdGhpcy5leHBhbmRlZEljb24gPSB0aGlzLmV4cGFuZGVkSWNvbiB8fCAncGx1cyc7XG4gICAgICAgIHRoaXMuYWNjb3JkaW9uLmFkZEdyb3VwKHRoaXMpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IGFueSB7XG4gICAgICAgIHRoaXMuYWNjb3JkaW9uLnJlbW92ZUdyb3VwKHRoaXMpO1xuICAgIH1cblxuICAgIHRvZ2dsZU9wZW4oZXZlbnQ6IEV2ZW50KTogYW55IHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gIXRoaXMuaXNPcGVuO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19