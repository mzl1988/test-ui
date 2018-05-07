"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform = require("tns-core-modules/platform");
var action_component_1 = require("../action/action.component");
var QuickActionComponnet = (function () {
    function QuickActionComponnet() {
        this.panelStatus = true;
        this.panelStatusIcon = 'compress';
        this.itemWidth = (platform.screen.mainScreen.widthDIPs - 32) / 2;
        this.opacity = this.opacity === undefined ? 1 : this.opacity;
    }
    QuickActionComponnet.prototype.togglePanel = function () {
        if (this.panelStatus) {
            this.closePanel();
        }
        else {
            this.openPanel();
        }
    };
    QuickActionComponnet.prototype.openPanel = function () {
        if (this.panelStatus === false) {
            this.panelStatus = true;
            this.panelStatusIcon = 'compress';
        }
    };
    QuickActionComponnet.prototype.closePanel = function () {
        if (this.panelStatus === true) {
            this.panelStatus = false;
            this.panelStatusIcon = 'expand';
        }
    };
    QuickActionComponnet.prototype.ngAfterContentChecked = function () {
        if (this.actions.length === 1) {
            this.actions.toArray()[0].setWidth(platform.screen.mainScreen.widthDIPs);
        }
        if (this.actions.length === 2) {
            this.quickActionHeaderRef.nativeElement.visibility = 'collapsed';
        }
    };
    QuickActionComponnet.prototype.onTap = function (args) {
        this.togglePanel();
    };
    QuickActionComponnet.prototype.onPan = function (args) {
        var proceedFn;
        if (args.deltaY < 0) {
            proceedFn = this.openPanel;
        }
        else if (args.deltaY >= 0) {
            proceedFn = this.closePanel;
        }
        if (args.state === 3) {
            proceedFn.call(this);
        }
    };
    __decorate([
        core_1.Input('title'),
        __metadata("design:type", String)
    ], QuickActionComponnet.prototype, "title", void 0);
    __decorate([
        core_1.Input('opacity'),
        __metadata("design:type", Number)
    ], QuickActionComponnet.prototype, "opacity", void 0);
    __decorate([
        core_1.ViewChild('quickActionHeaderRef'),
        __metadata("design:type", core_1.ElementRef)
    ], QuickActionComponnet.prototype, "quickActionHeaderRef", void 0);
    __decorate([
        core_1.ViewChild('quickActionPanelRef'),
        __metadata("design:type", core_1.ElementRef)
    ], QuickActionComponnet.prototype, "quickActionPanelRef", void 0);
    __decorate([
        core_1.ContentChildren(action_component_1.ActionComponent),
        __metadata("design:type", core_1.QueryList)
    ], QuickActionComponnet.prototype, "actions", void 0);
    QuickActionComponnet = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'QuickAction',
            templateUrl: './quickAction.component.html',
            styleUrls: [
                './quickAction.component.css'
            ]
        }),
        __metadata("design:paramtypes", [])
    ], QuickActionComponnet);
    return QuickActionComponnet;
}());
exports.QuickActionComponnet = QuickActionComponnet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tBY3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVpY2tBY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTRJO0FBSTVJLG9EQUFzRDtBQUV0RCwrREFBNkQ7QUFXN0Q7SUFhSTtRQUpPLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLG9CQUFlLEdBQVcsVUFBVSxDQUFDO1FBQ3JDLGNBQVMsR0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFHdkUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNqRSxDQUFDO0lBRU0sMENBQVcsR0FBbEI7UUFDSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUEsQ0FBQztZQUNqQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdEIsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLENBQUM7SUFDTCxDQUFDO0lBRU0sd0NBQVMsR0FBaEI7UUFDSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxLQUFLLEtBQUssQ0FBQyxDQUFBLENBQUM7WUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxVQUFVLENBQUM7UUFDdEMsQ0FBQztJQUNMLENBQUM7SUFFTSx5Q0FBVSxHQUFqQjtRQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDLENBQUEsQ0FBQztZQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQztRQUNwQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG9EQUFxQixHQUFyQjtRQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDNUUsQ0FBQztRQUNELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDMUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO1FBQ3JFLENBQUM7SUFDTCxDQUFDO0lBRU0sb0NBQUssR0FBWixVQUFhLElBQUk7UUFDYixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVNLG9DQUFLLEdBQVosVUFBYSxJQUFrQztRQUMzQyxJQUFJLFNBQVMsQ0FBQztRQUNkLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNoQixTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMvQixDQUFDO1FBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUN2QixTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNoQyxDQUFDO1FBQ0QsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ2pCLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsQ0FBQztJQUNMLENBQUM7SUE1RGU7UUFBZixZQUFLLENBQUMsT0FBTyxDQUFDOzt1REFBc0I7SUFDbkI7UUFBakIsWUFBSyxDQUFDLFNBQVMsQ0FBQzs7eURBQXdCO0lBRU47UUFBbEMsZ0JBQVMsQ0FBQyxzQkFBc0IsQ0FBQztrQ0FBOEIsaUJBQVU7c0VBQUM7SUFDekM7UUFBakMsZ0JBQVMsQ0FBQyxxQkFBcUIsQ0FBQztrQ0FBNkIsaUJBQVU7cUVBQUM7SUFDdkM7UUFBakMsc0JBQWUsQ0FBQyxrQ0FBZSxDQUFDO2tDQUFpQixnQkFBUzt5REFBa0I7SUFQcEUsb0JBQW9CO1FBVGhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUM7Z0JBQ04sNkJBQTZCO2FBQ2hDO1NBQ0osQ0FBQzs7T0FFVyxvQkFBb0IsQ0ErRGhDO0lBQUQsMkJBQUM7Q0FBQSxBQS9ERCxJQStEQztBQS9EWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgRWxlbWVudFJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV3JhcExheW91dCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy93cmFwLWxheW91dC8nO1xuaW1wb3J0IHsgSG9yaXpvbnRhbEFsaWdubWVudCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZW51bXMvJztcbmltcG9ydCB7IExlbmd0aCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1wcm9wZXJ0aWVzJztcbmltcG9ydCAqIGFzIHBsYXRmb3JtIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xuaW1wb3J0ICogYXMgZ2VzdHVyZXMgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlcyc7XG5pbXBvcnQgeyBBY3Rpb25Db21wb25lbnQgfSBmcm9tICcuLi9hY3Rpb24vYWN0aW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdRdWlja0FjdGlvbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3F1aWNrQWN0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6W1xuICAgICAgICAnLi9xdWlja0FjdGlvbi5jb21wb25lbnQuY3NzJ1xuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBRdWlja0FjdGlvbkNvbXBvbm5ldHtcblxuICAgIEBJbnB1dCgndGl0bGUnKSBwdWJsaWMgdGl0bGU6IHN0cmluZztcbiAgICBASW5wdXQoJ29wYWNpdHknKSBwdWJsaWMgb3BhY2l0eTogbnVtYmVyO1xuXG4gICAgQFZpZXdDaGlsZCgncXVpY2tBY3Rpb25IZWFkZXJSZWYnKSBwdWJsaWMgcXVpY2tBY3Rpb25IZWFkZXJSZWY6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgncXVpY2tBY3Rpb25QYW5lbFJlZicpIHB1YmxpYyBxdWlja0FjdGlvblBhbmVsUmVmOiBFbGVtZW50UmVmO1xuICAgIEBDb250ZW50Q2hpbGRyZW4oQWN0aW9uQ29tcG9uZW50KSBwdWJsaWMgYWN0aW9uczogUXVlcnlMaXN0PEFjdGlvbkNvbXBvbmVudD47XG5cbiAgICBwdWJsaWMgcGFuZWxTdGF0dXM6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyBwYW5lbFN0YXR1c0ljb246IHN0cmluZyA9ICdjb21wcmVzcyc7XG4gICAgcHVibGljIGl0ZW1XaWR0aDogbnVtYmVyID0gKHBsYXRmb3JtLnNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyAtIDMyKSAvIDI7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLm9wYWNpdHkgPSB0aGlzLm9wYWNpdHkgPT09IHVuZGVmaW5lZCA/IDEgOiB0aGlzLm9wYWNpdHk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZVBhbmVsKCl7XG4gICAgICAgIGlmKHRoaXMucGFuZWxTdGF0dXMpe1xuICAgICAgICAgICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5vcGVuUGFuZWwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuUGFuZWwoKXtcbiAgICAgICAgaWYodGhpcy5wYW5lbFN0YXR1cyA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgdGhpcy5wYW5lbFN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnBhbmVsU3RhdHVzSWNvbiA9ICdjb21wcmVzcyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2VQYW5lbCgpe1xuICAgICAgICBpZih0aGlzLnBhbmVsU3RhdHVzID09PSB0cnVlKXtcbiAgICAgICAgICAgIHRoaXMucGFuZWxTdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucGFuZWxTdGF0dXNJY29uID0gJ2V4cGFuZCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKXtcbiAgICAgICAgaWYodGhpcy5hY3Rpb25zLmxlbmd0aCA9PT0gMSl7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbnMudG9BcnJheSgpWzBdLnNldFdpZHRoKHBsYXRmb3JtLnNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcylcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmFjdGlvbnMubGVuZ3RoID09PSAyKXtcbiAgICAgICAgICAgIHRoaXMucXVpY2tBY3Rpb25IZWFkZXJSZWYubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlZCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25UYXAoYXJncyl7XG4gICAgICAgIHRoaXMudG9nZ2xlUGFuZWwoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25QYW4oYXJnczogZ2VzdHVyZXMuUGFuR2VzdHVyZUV2ZW50RGF0YSl7XG4gICAgICAgIGxldCBwcm9jZWVkRm47XG4gICAgICAgIGlmKGFyZ3MuZGVsdGFZIDwgMCl7XG4gICAgICAgICAgICBwcm9jZWVkRm4gPSB0aGlzLm9wZW5QYW5lbDtcbiAgICAgICAgfWVsc2UgaWYoYXJncy5kZWx0YVkgPj0gMCl7XG4gICAgICAgICAgICBwcm9jZWVkRm4gPSB0aGlzLmNsb3NlUGFuZWw7XG4gICAgICAgIH1cbiAgICAgICAgaWYoYXJncy5zdGF0ZSA9PT0gMyl7XG4gICAgICAgICAgICBwcm9jZWVkRm4uY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=