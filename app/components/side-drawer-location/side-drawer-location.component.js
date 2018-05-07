"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var data_service_1 = require("./data.service");
var SideDrawerLocationComponent = (function () {
    function SideDrawerLocationComponent(page, _dataService, _changeDetectionRef) {
        this.page = page;
        this._dataService = _dataService;
        this._changeDetectionRef = _changeDetectionRef;
        this.gesturesEnabled = true;
        this.page.on("loaded", this.onLoaded, this);
    }
    SideDrawerLocationComponent.prototype.onLoaded = function () {
        if (this.drawer.android) {
            this.drawer.android.setDrawerCloseThreshold(20);
        }
    };
    SideDrawerLocationComponent.prototype.ngOnInit = function () {
    };
    SideDrawerLocationComponent.prototype.ngOnChanges = function (changes) {
        this.location = this.location || 'bottom';
        this.currentLocation = sidedrawer_1.SideDrawerLocation.Bottom;
        this.drawer = this.drawerComponent.sideDrawer;
        this.drawer.gesturesEnabled = this.gesturesEnabled;
        if (this.drawerContentSize) {
            console.log('drawerContentSize: ' + this.drawerContentSize);
            this.drawer.drawerContentSize = this.drawerContentSize;
        }
        this._changeDetectionRef.detectChanges();
    };
    SideDrawerLocationComponent.prototype.ngAfterViewInit = function () {
    };
    Object.defineProperty(SideDrawerLocationComponent.prototype, "currentLocation", {
        get: function () {
            return this._currentLocation;
        },
        set: function (value) {
            this._currentLocation = value;
        },
        enumerable: true,
        configurable: true
    });
    SideDrawerLocationComponent.prototype.onDrawerOpened = function (args) {
        this.drawer.gesturesEnabled = true;
    };
    SideDrawerLocationComponent.prototype.onDrawerClosed = function (args) {
        this.drawer.gesturesEnabled = this.gesturesEnabled;
    };
    SideDrawerLocationComponent.prototype.onCloseDrawerTap = function () {
        this.drawer.closeDrawer();
    };
    SideDrawerLocationComponent.prototype.onRightLocationTap = function () {
        this.currentLocation = sidedrawer_1.SideDrawerLocation.Right;
        this._changeDetectionRef.detectChanges();
        this.drawer.showDrawer();
    };
    SideDrawerLocationComponent.prototype.onLeftLocationTap = function () {
        this.currentLocation = sidedrawer_1.SideDrawerLocation.Left;
        this._changeDetectionRef.detectChanges();
        this.drawer.showDrawer();
    };
    SideDrawerLocationComponent.prototype.onBottomLocationTap = function () {
        this.currentLocation = sidedrawer_1.SideDrawerLocation.Bottom;
        this._changeDetectionRef.detectChanges();
        this.drawer.showDrawer();
    };
    SideDrawerLocationComponent.prototype.onTopLocationTap = function () {
        this.currentLocation = sidedrawer_1.SideDrawerLocation.Top;
        this._changeDetectionRef.detectChanges();
        this.drawer.showDrawer();
    };
    SideDrawerLocationComponent.prototype.onLocationTap = function () {
        switch (this.location) {
            case 'left':
                this.onLeftLocationTap();
                break;
            case 'right':
                this.onRightLocationTap();
                break;
            case 'top':
                this.onTopLocationTap();
                break;
            case 'bottom':
                this.onBottomLocationTap();
                break;
            default:
                break;
        }
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], SideDrawerLocationComponent.prototype, "drawerComponent", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SideDrawerLocationComponent.prototype, "gesturesEnabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SideDrawerLocationComponent.prototype, "location", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], SideDrawerLocationComponent.prototype, "drawerContentSize", void 0);
    SideDrawerLocationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'SideDrawerLocation',
            templateUrl: './side-drawer-location.component.html',
            providers: [data_service_1.DataService],
            styleUrls: [
                './side-drawer-location.component.css'
            ]
        }),
        __metadata("design:paramtypes", [page_1.Page, data_service_1.DataService, core_1.ChangeDetectorRef])
    ], SideDrawerLocationComponent);
    return SideDrawerLocationComponent;
}());
exports.SideDrawerLocationComponent = SideDrawerLocationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1kcmF3ZXItbG9jYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2lkZS1kcmF3ZXItbG9jYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdKO0FBQ3hKLGlEQUFnRDtBQUNoRCxrRUFBZ0Y7QUFDaEYsNkRBQWdIO0FBRWhILCtDQUE2QztBQWM3QztJQVFJLHFDQUFvQixJQUFVLEVBQVUsWUFBeUIsRUFBVSxtQkFBc0M7UUFBN0YsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQUx4RyxvQkFBZSxHQUFHLElBQUksQ0FBQztRQU01QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU0sOENBQVEsR0FBZjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwRCxDQUFDO0lBQ0wsQ0FBQztJQUVELDhDQUFRLEdBQVI7SUFFQSxDQUFDO0lBSUQsaURBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUM7UUFDMUMsSUFBSSxDQUFDLGVBQWUsR0FBRywrQkFBa0IsQ0FBQyxNQUFNLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ25ELEVBQUUsQ0FB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O0lBTDFCLDJCQUEyQjtRQVZ2QyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsV0FBVyxFQUFFLHVDQUF1QztZQUNwRCxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1lBQ3hCLFNBQVMsRUFBRTtnQkFDUCxzQ0FBc0M7YUFDekM7U0FDSixDQUFDO3lDQVU0QixXQUFJLEVBQXdCLDBCQUFXLEVBQStCLHdCQUFpQjtPQVJ4RywyQkFBMkIsQ0F5R3ZDO0lBQUQsa0NBQUM7Q0FBQSxBQXpHRCxJQXlHQztBQXpHWSxrRUFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgSW5qZWN0YWJsZSwgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkNoYW5nZXMsIENoYW5nZURldGVjdG9yUmVmLCBJbnB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciwgRHJhd2VyU3RhdGVDaGFuZ2VkRXZlbnRBcmdzLCBTaWRlRHJhd2VyTG9jYXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSBcIi4vZGF0YS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEZXBlbmRlbmN5T2JzZXJ2YWJsZSwgUHJvcGVydHksIFByb3BlcnR5TWV0YWRhdGFTZXR0aW5ncyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvZGVwZW5kZW5jeS1vYnNlcnZhYmxlXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ1NpZGVEcmF3ZXJMb2NhdGlvbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NpZGUtZHJhd2VyLWxvY2F0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtEYXRhU2VydmljZV0sXG4gICAgc3R5bGVVcmxzOiBbXG4gICAgICAgICcuL3NpZGUtZHJhd2VyLWxvY2F0aW9uLmNvbXBvbmVudC5jc3MnXG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIFNpZGVEcmF3ZXJMb2NhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBkcmF3ZXI6IFJhZFNpZGVEcmF3ZXI7XG4gICAgQElucHV0KCkgZ2VzdHVyZXNFbmFibGVkID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBsb2NhdGlvbjogc3RyaW5nXG4gICAgQElucHV0KCkgZHJhd2VyQ29udGVudFNpemU6IG51bWJlcjtcbiAgICBwcml2YXRlIF9jdXJyZW50TG9jYXRpb246IFNpZGVEcmF3ZXJMb2NhdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSBfZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLCBwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHRoaXMucGFnZS5vbihcImxvYWRlZFwiLCB0aGlzLm9uTG9hZGVkLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Mb2FkZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmRyYXdlci5hbmRyb2lkKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdlci5hbmRyb2lkLnNldERyYXdlckNsb3NlVGhyZXNob2xkKDIwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgfVxuXG4gICAgXG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSB0aGlzLmxvY2F0aW9uIHx8ICdib3R0b20nO1xuICAgICAgICB0aGlzLmN1cnJlbnRMb2NhdGlvbiA9IFNpZGVEcmF3ZXJMb2NhdGlvbi5Cb3R0b207XG4gICAgICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcbiAgICAgICAgdGhpcy5kcmF3ZXIuZ2VzdHVyZXNFbmFibGVkID0gdGhpcy5nZXN0dXJlc0VuYWJsZWQ7XG4gICAgICAgIGlmKHRoaXMuZHJhd2VyQ29udGVudFNpemUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkcmF3ZXJDb250ZW50U2l6ZTogJyArIHRoaXMuZHJhd2VyQ29udGVudFNpemUpO1xuICAgICAgICAgICAgdGhpcy5kcmF3ZXIuZHJhd2VyQ29udGVudFNpemUgPSB0aGlzLmRyYXdlckNvbnRlbnRTaXplO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIH1cblxuICAgIGdldCBjdXJyZW50TG9jYXRpb24oKTogU2lkZURyYXdlckxvY2F0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRMb2NhdGlvbjtcbiAgICB9XG5cbiAgICBzZXQgY3VycmVudExvY2F0aW9uKHZhbHVlOiBTaWRlRHJhd2VyTG9jYXRpb24pIHtcbiAgICAgICAgdGhpcy5fY3VycmVudExvY2F0aW9uID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIG9uRHJhd2VyT3BlbmVkKGFyZ3M6IERyYXdlclN0YXRlQ2hhbmdlZEV2ZW50QXJncykge1xuICAgICAgICB0aGlzLmRyYXdlci5nZXN0dXJlc0VuYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkRyYXdlckNsb3NlZChhcmdzOiBEcmF3ZXJTdGF0ZUNoYW5nZWRFdmVudEFyZ3MpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIuZ2VzdHVyZXNFbmFibGVkID0gdGhpcy5nZXN0dXJlc0VuYWJsZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQ2xvc2VEcmF3ZXJUYXAoKSB7XG4gICAgICAgIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uUmlnaHRMb2NhdGlvblRhcCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TG9jYXRpb24gPSBTaWRlRHJhd2VyTG9jYXRpb24uUmlnaHQ7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkxlZnRMb2NhdGlvblRhcCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TG9jYXRpb24gPSBTaWRlRHJhd2VyTG9jYXRpb24uTGVmdDtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICB0aGlzLmRyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQm90dG9tTG9jYXRpb25UYXAoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudExvY2F0aW9uID0gU2lkZURyYXdlckxvY2F0aW9uLkJvdHRvbTtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICB0aGlzLmRyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uVG9wTG9jYXRpb25UYXAoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudExvY2F0aW9uID0gU2lkZURyYXdlckxvY2F0aW9uLlRvcDtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICB0aGlzLmRyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTG9jYXRpb25UYXAoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5sb2NhdGlvbikge1xuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgdGhpcy5vbkxlZnRMb2NhdGlvblRhcCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgIHRoaXMub25SaWdodExvY2F0aW9uVGFwKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICAgICAgICAgIHRoaXMub25Ub3BMb2NhdGlvblRhcCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uQm90dG9tTG9jYXRpb25UYXAoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59Il19