"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var timer_1 = require("timer");
var ListPickerBoxComponent = (function () {
    function ListPickerBoxComponent() {
        this.selectedIndexChangedEvent = new core_1.EventEmitter();
        this.cancelTapEvent = new core_1.EventEmitter();
        this.confirmTapEvent = new core_1.EventEmitter();
    }
    ListPickerBoxComponent.prototype.ngOnInit = function () {
        this.cancelText = this.cancelText || 'cancel';
        this.confirmText = this.confirmText || 'confirm';
        this.items = this.items || [];
        this.selectedIndex = this.selectedIndex || 0;
    };
    ListPickerBoxComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('selectedIndex')) {
            this.oldSelectedIndex = this.selectedIndex;
        }
    };
    ListPickerBoxComponent.prototype.selectedIndexChanged = function (args) {
        var picker = args.object;
        this.selectedIndex = picker.selectedIndex;
        this.item = this.items[this.selectedIndex];
        this.selectedIndexChangedEvent.emit({ selectedIndex: this.selectedIndex, item: this.item });
    };
    ListPickerBoxComponent.prototype.loadedEvent = function (args) {
        var _this = this;
        if (platform_1.isAndroid) {
            timer_1.setTimeout(function () {
                var picker = _this.listPicker.nativeElement;
                picker.android.setWrapSelectorWheel(false);
                var index = _this.selectedIndex;
                _this.selectedIndex = _this.items.length;
                timer_1.setTimeout(function () {
                    _this.selectedIndex = index;
                }, 100);
            }, 200);
        }
        ;
    };
    ListPickerBoxComponent.prototype.cancel = function () {
        this.selectedIndex = this.oldSelectedIndex;
        this.cancelTapEvent.emit('cancel');
    };
    ListPickerBoxComponent.prototype.confirm = function () {
        this.oldSelectedIndex = this.selectedIndex;
        this.confirmTapEvent.emit({ selectedIndex: this.selectedIndex, item: this.item });
    };
    __decorate([
        core_1.ViewChild("listPicker"),
        __metadata("design:type", core_1.ElementRef)
    ], ListPickerBoxComponent.prototype, "listPicker", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ListPickerBoxComponent.prototype, "cancelText", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ListPickerBoxComponent.prototype, "confirmText", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ListPickerBoxComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], ListPickerBoxComponent.prototype, "items", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ListPickerBoxComponent.prototype, "selectedIndex", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ListPickerBoxComponent.prototype, "selectedIndexChangedEvent", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ListPickerBoxComponent.prototype, "cancelTapEvent", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ListPickerBoxComponent.prototype, "confirmTapEvent", void 0);
    ListPickerBoxComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ListPickerBox',
            templateUrl: './list-picker-box.component.html',
            styleUrls: [
                './list-picker-box.component.css'
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ListPickerBoxComponent);
    return ListPickerBoxComponent;
}());
exports.ListPickerBoxComponent = ListPickerBoxComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1waWNrZXItYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QtcGlja2VyLWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBcUg7QUFFckgscUNBQXFDO0FBQ3JDLCtCQUFtQztBQVduQztJQWFJO1FBTlUsOEJBQXlCLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ2xFLG1CQUFjLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ3ZELG9CQUFlLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO0lBS2xFLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLFFBQVEsQ0FBQztRQUM5QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksU0FBUyxDQUFDO1FBQ2pELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsNENBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQzlCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQy9DLENBQUM7SUFDTCxDQUFDO0lBRUQscURBQW9CLEdBQXBCLFVBQXFCLElBQUk7UUFDckIsSUFBSSxNQUFNLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7SUFFRCw0Q0FBVyxHQUFYLFVBQVksSUFBSTtRQUFoQixpQkFlQztRQWRHLEVBQUUsQ0FBQyxDQUFDLG9CQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ1osa0JBQVUsQ0FBQztnQkFDUCxJQUFJLE1BQU0sR0FBMkIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7Z0JBQ25FLE1BQU0sQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNDLElBQUksS0FBSyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQy9CLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0JBQ3ZDLGtCQUFVLENBQUM7b0JBQ1AsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7Z0JBQy9CLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNaLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVaLENBQUM7UUFBQSxDQUFDO0lBR04sQ0FBQztJQUVELHVDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUMzQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsd0NBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUE1RHdCO1FBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDO2tDQUFhLGlCQUFVOzhEQUFDO0lBQ3ZDO1FBQVIsWUFBSyxFQUFFOzs4REFBb0I7SUFDbkI7UUFBUixZQUFLLEVBQUU7OytEQUFxQjtJQUNwQjtRQUFSLFlBQUssRUFBRTs7eURBQWU7SUFDZDtRQUFSLFlBQUssRUFBRTs7eURBQWM7SUFDYjtRQUFSLFlBQUssRUFBRTs7aUVBQXVCO0lBQ3JCO1FBQVQsYUFBTSxFQUFFO2tDQUE0QixtQkFBWTs2RUFBMkI7SUFDbEU7UUFBVCxhQUFNLEVBQUU7a0NBQWlCLG1CQUFZO2tFQUEyQjtJQUN2RDtRQUFULGFBQU0sRUFBRTtrQ0FBa0IsbUJBQVk7bUVBQTJCO0lBVHpELHNCQUFzQjtRQVRsQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFO2dCQUNQLGlDQUFpQzthQUNwQztTQUNKLENBQUM7O09BRVcsc0JBQXNCLENBOERsQztJQUFELDZCQUFDO0NBQUEsQUE5REQsSUE4REM7QUE5RFksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IExpc3RQaWNrZXIgfSBmcm9tIFwidWkvbGlzdC1waWNrZXJcIjtcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0IHsgc2V0VGltZW91dCB9IGZyb20gXCJ0aW1lclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnTGlzdFBpY2tlckJveCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xpc3QtcGlja2VyLWJveC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXG4gICAgICAgICcuL2xpc3QtcGlja2VyLWJveC5jb21wb25lbnQuY3NzJ1xuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBMaXN0UGlja2VyQm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBAVmlld0NoaWxkKFwibGlzdFBpY2tlclwiKSBsaXN0UGlja2VyOiBFbGVtZW50UmVmO1xuICAgIEBJbnB1dCgpIGNhbmNlbFRleHQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBjb25maXJtVGV4dDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgaXRlbXM6IGFueVtdO1xuICAgIEBJbnB1dCgpIHNlbGVjdGVkSW5kZXg6IG51bWJlcjtcbiAgICBAT3V0cHV0KCkgc2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIGNhbmNlbFRhcEV2ZW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgY29uZmlybVRhcEV2ZW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBpdGVtOiBhbnk7XG4gICAgb2xkU2VsZWN0ZWRJbmRleDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY2FuY2VsVGV4dCA9IHRoaXMuY2FuY2VsVGV4dCB8fCAnY2FuY2VsJztcbiAgICAgICAgdGhpcy5jb25maXJtVGV4dCA9IHRoaXMuY29uZmlybVRleHQgfHwgJ2NvbmZpcm0nO1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcyB8fCBbXTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4IHx8IDA7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnc2VsZWN0ZWRJbmRleCcpKSB7XG4gICAgICAgICAgICB0aGlzLm9sZFNlbGVjdGVkSW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3RlZEluZGV4Q2hhbmdlZChhcmdzKSB7XG4gICAgICAgIGxldCBwaWNrZXIgPSA8TGlzdFBpY2tlcj5hcmdzLm9iamVjdDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gcGlja2VyLnNlbGVjdGVkSW5kZXg7XG4gICAgICAgIHRoaXMuaXRlbSA9IHRoaXMuaXRlbXNbdGhpcy5zZWxlY3RlZEluZGV4XTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50LmVtaXQoeyBzZWxlY3RlZEluZGV4OiB0aGlzLnNlbGVjdGVkSW5kZXgsIGl0ZW06IHRoaXMuaXRlbSB9KTtcbiAgICB9XG5cbiAgICBsb2FkZWRFdmVudChhcmdzKSB7XG4gICAgICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwaWNrZXI6IExpc3RQaWNrZXIgPSA8TGlzdFBpY2tlcj50aGlzLmxpc3RQaWNrZXIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICAgICAgICBwaWNrZXIuYW5kcm9pZC5zZXRXcmFwU2VsZWN0b3JXaGVlbChmYWxzZSk7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuaXRlbXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgfSwgMjAwKTtcblxuICAgICAgICB9O1xuXG5cbiAgICB9XG5cbiAgICBjYW5jZWwoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMub2xkU2VsZWN0ZWRJbmRleDtcbiAgICAgICAgdGhpcy5jYW5jZWxUYXBFdmVudC5lbWl0KCdjYW5jZWwnKTtcbiAgICB9XG5cbiAgICBjb25maXJtKCkge1xuICAgICAgICB0aGlzLm9sZFNlbGVjdGVkSW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXg7XG4gICAgICAgIHRoaXMuY29uZmlybVRhcEV2ZW50LmVtaXQoeyBzZWxlY3RlZEluZGV4OiB0aGlzLnNlbGVjdGVkSW5kZXgsIGl0ZW06IHRoaXMuaXRlbSB9KTtcbiAgICB9XG59Il19