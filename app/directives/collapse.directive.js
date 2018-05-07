"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CollapseDirective = (function () {
    function CollapseDirective(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
        this.collapsed = new core_1.EventEmitter();
        this.expanded = new core_1.EventEmitter();
        this.isExpanded = true;
    }
    Object.defineProperty(CollapseDirective.prototype, "collapse", {
        get: function () {
            return this.isExpanded;
        },
        set: function (value) {
            this.isExpanded = value;
            this.toggle();
        },
        enumerable: true,
        configurable: true
    });
    CollapseDirective.prototype.toggle = function () {
        if (this.isExpanded) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    CollapseDirective.prototype.hide = function () {
        this.isExpanded = false;
        this._renderer.setStyle(this._el.nativeElement, 'visibility', 'collapsed');
        this.collapsed.emit(false);
    };
    CollapseDirective.prototype.show = function () {
        this.isExpanded = true;
        this._renderer.setStyle(this._el.nativeElement, 'visibility', 'visible');
        this.expanded.emit(true);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], CollapseDirective.prototype, "collapsed", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], CollapseDirective.prototype, "expanded", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], CollapseDirective.prototype, "collapse", null);
    CollapseDirective = __decorate([
        core_1.Directive({
            selector: '[collapse]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer2])
    ], CollapseDirective);
    return CollapseDirective;
}());
exports.CollapseDirective = CollapseDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29sbGFwc2UuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBT3VCO0FBTXZCO0lBZUksMkJBQW9CLEdBQWUsRUFBVSxTQUFvQjtRQUE3QyxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVztRQWR2RCxjQUFTLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ2xELGFBQVEsR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDM0QsZUFBVSxHQUFHLElBQUksQ0FBQztJQWFsQixDQUFDO0lBVkQsc0JBQUksdUNBQVE7YUFLWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7YUFQRCxVQUFhLEtBQWM7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBU0Qsa0NBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEIsQ0FBQztJQUNMLENBQUM7SUFFRCxnQ0FBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUMsWUFBWSxFQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxnQ0FBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUMsWUFBWSxFQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFuQ1M7UUFBVCxhQUFNLEVBQUU7a0NBQVksbUJBQVk7d0RBQTJCO0lBQ2xEO1FBQVQsYUFBTSxFQUFFO2tDQUFXLG1CQUFZO3VEQUEyQjtJQUkzRDtRQURDLFlBQUssRUFBRTs7O3FEQUlQO0lBVFEsaUJBQWlCO1FBSjdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtTQUN6QixDQUFDO3lDQWlCMkIsaUJBQVUsRUFBcUIsZ0JBQVM7T0FmeEQsaUJBQWlCLENBcUM3QjtJQUFELHdCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7QUFyQ1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBEaXJlY3RpdmUsXG4gICAgRWxlbWVudFJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSW5wdXQsXG4gICAgT3V0cHV0LFxuICAgIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbY29sbGFwc2VdJ1xufSlcblxuZXhwb3J0IGNsYXNzIENvbGxhcHNlRGlyZWN0aXZlIHtcbiAgICBAT3V0cHV0KCkgY29sbGFwc2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgZXhwYW5kZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIGlzRXhwYW5kZWQgPSB0cnVlO1xuXG4gICAgQElucHV0KClcbiAgICBzZXQgY29sbGFwc2UodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5pc0V4cGFuZGVkID0gdmFsdWU7XG4gICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbGxhcHNlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0V4cGFuZGVkO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgfVxuXG4gICAgdG9nZ2xlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc0V4cGFuZGVkKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGlkZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pc0V4cGFuZGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsJ3Zpc2liaWxpdHknLCdjb2xsYXBzZWQnKTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWQuZW1pdChmYWxzZSk7XG4gICAgfVxuXG4gICAgc2hvdygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pc0V4cGFuZGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwndmlzaWJpbGl0eScsJ3Zpc2libGUnKTtcbiAgICAgICAgdGhpcy5leHBhbmRlZC5lbWl0KHRydWUpO1xuICAgIH1cbn0iXX0=