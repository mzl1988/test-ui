"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var accordion_config_1 = require("./accordion.config");
var AccordionComponent = (function () {
    function AccordionComponent(config) {
        this.groups = [];
        Object.assign(this, config);
    }
    AccordionComponent.prototype.closeOtherPanels = function (openGroup) {
        if (!this.closeOthers) {
            return;
        }
        this.groups.forEach(function (group) {
            if ((group !== openGroup) && (group.isDisabled === false)) {
                group.isOpen = false;
            }
        });
    };
    AccordionComponent.prototype.addGroup = function (group) {
        this.groups.push(group);
    };
    AccordionComponent.prototype.removeGroup = function (group) {
        var index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], AccordionComponent.prototype, "closeOthers", void 0);
    AccordionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Accordion',
            templateUrl: './accordion.component.html',
            host: {
                '[attr.aria-multiselectable]': 'closeOthers'
            }
        }),
        __metadata("design:paramtypes", [accordion_config_1.AccordionConfig])
    ], AccordionComponent);
    return AccordionComponent;
}());
exports.AccordionComponent = AccordionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjY29yZGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFFakQsdURBQXFEO0FBVXJEO0lBS0ksNEJBQVksTUFBdUI7UUFGekIsV0FBTSxHQUE4QixFQUFFLENBQUM7UUFHN0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELDZDQUFnQixHQUFoQixVQUFpQixTQUFrQztRQUMvQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQThCO1lBQy9DLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxxQ0FBUSxHQUFSLFVBQVMsS0FBOEI7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELHdDQUFXLEdBQVgsVUFBWSxLQUE4QjtRQUN0QyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7SUFDTCxDQUFDO0lBN0JRO1FBQVIsWUFBSyxFQUFFOzsyREFBc0I7SUFEckIsa0JBQWtCO1FBUjlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxJQUFJLEVBQUU7Z0JBQ0YsNkJBQTZCLEVBQUUsYUFBYTthQUMvQztTQUNKLENBQUM7eUNBTXNCLGtDQUFlO09BTDFCLGtCQUFrQixDQStCOUI7SUFBRCx5QkFBQztDQUFBLEFBL0JELElBK0JDO0FBL0JZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjY29yZGlvbkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpb24tZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IEFjY29yZGlvbkNvbmZpZyB9IGZyb20gJy4vYWNjb3JkaW9uLmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdBY2NvcmRpb24nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hY2NvcmRpb24uY29tcG9uZW50Lmh0bWwnLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1thdHRyLmFyaWEtbXVsdGlzZWxlY3RhYmxlXSc6ICdjbG9zZU90aGVycydcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgY2xvc2VPdGhlcnM6IGJvb2xlYW47XG5cbiAgICBwcm90ZWN0ZWQgZ3JvdXBzOiBBY2NvcmRpb25Hcm91cENvbXBvbmVudFtdID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IEFjY29yZGlvbkNvbmZpZykge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgY2xvc2VPdGhlclBhbmVscyhvcGVuR3JvdXA6IEFjY29yZGlvbkdyb3VwQ29tcG9uZW50KTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5jbG9zZU90aGVycykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ncm91cHMuZm9yRWFjaCgoZ3JvdXA6IEFjY29yZGlvbkdyb3VwQ29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoKGdyb3VwICE9PSBvcGVuR3JvdXApICYmIChncm91cC5pc0Rpc2FibGVkID09PSBmYWxzZSkpIHtcbiAgICAgICAgICAgICAgICBncm91cC5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkR3JvdXAoZ3JvdXA6IEFjY29yZGlvbkdyb3VwQ29tcG9uZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ3JvdXBzLnB1c2goZ3JvdXApO1xuICAgIH1cblxuICAgIHJlbW92ZUdyb3VwKGdyb3VwOiBBY2NvcmRpb25Hcm91cENvbXBvbmVudCk6IHZvaWQge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ3JvdXBzLmluZGV4T2YoZ3JvdXApO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmdyb3Vwcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19