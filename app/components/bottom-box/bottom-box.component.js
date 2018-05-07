"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var absolute_layout_1 = require("ui/layouts/absolute-layout");
var utils_1 = require("utils/utils");
var BottomBoxComponent = (function () {
    function BottomBoxComponent() {
    }
    BottomBoxComponent.prototype.ngOnInit = function () {
        this.bottomContainer = this.bottomElt.nativeElement;
        absolute_layout_1.AbsoluteLayout.setTop(this.bottomContainer, platform_1.screen.mainScreen.heightDIPs);
    };
    BottomBoxComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.hasOwnProperty('bottom')) {
            setTimeout(function () {
                _this.bottomContainer = _this.bottomElt.nativeElement;
                // console.log(layout.toDeviceIndependentPixels(this.bottomContainer.getMeasuredHeight()));
                absolute_layout_1.AbsoluteLayout.setTop(_this.bottomContainer, platform_1.screen.mainScreen.heightDIPs - _this.bottom - utils_1.layout.toDeviceIndependentPixels(_this.bottomContainer.getMeasuredHeight()));
            }, 200);
        }
    };
    __decorate([
        core_1.ViewChild("bottomElt"),
        __metadata("design:type", core_1.ElementRef)
    ], BottomBoxComponent.prototype, "bottomElt", void 0);
    __decorate([
        core_1.Input('bottom'),
        __metadata("design:type", Number)
    ], BottomBoxComponent.prototype, "bottom", void 0);
    BottomBoxComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'BottomBox',
            templateUrl: './bottom-box.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], BottomBoxComponent);
    return BottomBoxComponent;
}());
exports.BottomBoxComponent = BottomBoxComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib3R0b20tYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRztBQUMxRyxxQ0FBa0M7QUFDbEMsOERBQTREO0FBRTVELHFDQUFxQztBQVFyQztJQUtJO0lBRUEsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFnQixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztRQUNqRSxnQ0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLGlCQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRCx3Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFBbEMsaUJBVUM7UUFURyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxVQUFVLENBQUM7Z0JBQ1AsS0FBSSxDQUFDLGVBQWUsR0FBZ0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7Z0JBQ2pFLDJGQUEyRjtnQkFDM0YsZ0NBQWMsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLGVBQWUsRUFBRSxpQkFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLE1BQU0sR0FBRyxjQUFNLENBQUMseUJBQXlCLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN6SyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFWixDQUFDO0lBRUwsQ0FBQztJQXZCdUI7UUFBdkIsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7a0NBQVksaUJBQVU7eURBQUM7SUFDN0I7UUFBaEIsWUFBSyxDQUFDLFFBQVEsQ0FBQzs7c0RBQWdCO0lBRnZCLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSw2QkFBNkI7U0FDN0MsQ0FBQzs7T0FFVyxrQkFBa0IsQ0F5QjlCO0lBQUQseUJBQUM7Q0FBQSxBQXpCRCxJQXlCQztBQXpCWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzY3JlZW4gfSBmcm9tIFwicGxhdGZvcm1cIjtcbmltcG9ydCB7IEFic29sdXRlTGF5b3V0IH0gZnJvbSBcInVpL2xheW91dHMvYWJzb2x1dGUtbGF5b3V0XCI7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xuaW1wb3J0IHsgbGF5b3V0IH0gZnJvbSAndXRpbHMvdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnQm90dG9tQm94JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYm90dG9tLWJveC5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBCb3R0b21Cb3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gICAgQFZpZXdDaGlsZChcImJvdHRvbUVsdFwiKSBib3R0b21FbHQ6IEVsZW1lbnRSZWY7XG4gICAgQElucHV0KCdib3R0b20nKSBib3R0b206IG51bWJlcjtcbiAgICBib3R0b21Db250YWluZXI6IFN0YWNrTGF5b3V0O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYm90dG9tQ29udGFpbmVyID0gPFN0YWNrTGF5b3V0PnRoaXMuYm90dG9tRWx0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIEFic29sdXRlTGF5b3V0LnNldFRvcCh0aGlzLmJvdHRvbUNvbnRhaW5lciwgc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0RElQcyk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnYm90dG9tJykpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQ29udGFpbmVyID0gPFN0YWNrTGF5b3V0PnRoaXMuYm90dG9tRWx0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobGF5b3V0LnRvRGV2aWNlSW5kZXBlbmRlbnRQaXhlbHModGhpcy5ib3R0b21Db250YWluZXIuZ2V0TWVhc3VyZWRIZWlnaHQoKSkpO1xuICAgICAgICAgICAgICAgIEFic29sdXRlTGF5b3V0LnNldFRvcCh0aGlzLmJvdHRvbUNvbnRhaW5lciwgc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0RElQcyAtIHRoaXMuYm90dG9tIC0gbGF5b3V0LnRvRGV2aWNlSW5kZXBlbmRlbnRQaXhlbHModGhpcy5ib3R0b21Db250YWluZXIuZ2V0TWVhc3VyZWRIZWlnaHQoKSkpO1xuICAgICAgICAgICAgfSwgMjAwKTtcblxuICAgICAgICB9XG5cbiAgICB9XG59Il19