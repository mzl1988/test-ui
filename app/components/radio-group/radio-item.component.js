"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var radio_group_component_1 = require("./radio-group.component");
var RadioItemComponent = (function () {
    function RadioItemComponent(radioGroup) {
        this.isChooseChange = new core_1.EventEmitter();
        this._isChoose = false;
        this.radioGroup = radioGroup;
    }
    Object.defineProperty(RadioItemComponent.prototype, "isChoose", {
        get: function () {
            return this._isChoose;
        },
        set: function (value) {
            var _this = this;
            if (value !== this.isChoose) {
                if (value) {
                    this.radioGroup.closeOtherPanels(this);
                }
                this._isChoose = value;
                Promise.resolve(null).then(function () {
                    _this.isChooseChange.emit({ text: _this.text, value: _this.value, isChoose: _this.isChoose });
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    RadioItemComponent.prototype.ngOnInit = function () {
        this.isDisabled = this.isDisabled || false;
        this.chosenIcon = this.chosenIcon || 'check-circle';
        this.notChosenIcon = this.notChosenIcon || 'circle';
        this.radioGroup.addItem(this);
    };
    RadioItemComponent.prototype.ngOnChanges = function (changes) {
        // console.dir(changes);
    };
    RadioItemComponent.prototype.ngOnDestroy = function () {
        this.radioGroup.removeItem(this);
    };
    RadioItemComponent.prototype.toggleChoose = function (event) {
        if (!this.isDisabled && !this.isChoose) {
            this.isChoose = !this.isChoose;
        }
        if (this.isChoose) {
            this.radioGroup.chooseChangeEvent.emit({ text: this.text, value: this.value, isChoose: this.isChoose });
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RadioItemComponent.prototype, "text", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], RadioItemComponent.prototype, "value", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RadioItemComponent.prototype, "panelClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RadioItemComponent.prototype, "radioItemClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RadioItemComponent.prototype, "radioItemBodyClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], RadioItemComponent.prototype, "isDisabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RadioItemComponent.prototype, "chosenIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RadioItemComponent.prototype, "notChosenIcon", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], RadioItemComponent.prototype, "isChooseChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], RadioItemComponent.prototype, "isChoose", null);
    RadioItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'RadioItem',
            templateUrl: './radio-item.component.html',
            styleUrls: ['./radio-item.component.css']
        }),
        __param(0, core_1.Inject(radio_group_component_1.RadioGroupComponent)),
        __metadata("design:paramtypes", [radio_group_component_1.RadioGroupComponent])
    ], RadioItemComponent);
    return RadioItemComponent;
}());
exports.RadioItemComponent = RadioItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8taXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyYWRpby1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUV1QjtBQUN2QixpRUFBOEQ7QUFVOUQ7SUE4QkksNEJBQTBDLFVBQStCO1FBckIvRCxtQkFBYyxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQWtCdkQsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUl4QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUNqQyxDQUFDO0lBckJELHNCQUFJLHdDQUFRO2FBQVo7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO2FBRUQsVUFBYSxLQUFjO1lBQTNCLGlCQVVDO1lBVEcsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNSLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzNDLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUN2QixLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxLQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFJLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQztnQkFDNUYsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1FBQ0wsQ0FBQzs7O09BWkE7SUFxQkQscUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUM7UUFDM0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLGNBQWMsQ0FBQztRQUNwRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLElBQUksUUFBUSxDQUFDO1FBQ3BELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCx3Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDOUIsd0JBQXdCO0lBQzVCLENBQUM7SUFFRCx3Q0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELHlDQUFZLEdBQVosVUFBYSxLQUFZO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ25DLENBQUM7UUFDRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDO1FBQzFHLENBQUM7SUFDTCxDQUFDO0lBdkRRO1FBQVIsWUFBSyxFQUFFOztvREFBYztJQUNiO1FBQVIsWUFBSyxFQUFFOztxREFBWTtJQUNYO1FBQVIsWUFBSyxFQUFFOzswREFBb0I7SUFDbkI7UUFBUixZQUFLLEVBQUU7OzhEQUF3QjtJQUN2QjtRQUFSLFlBQUssRUFBRTs7a0VBQTRCO0lBQzNCO1FBQVIsWUFBSyxFQUFFOzswREFBcUI7SUFDcEI7UUFBUixZQUFLLEVBQUU7OzBEQUFvQjtJQUNuQjtRQUFSLFlBQUssRUFBRTs7NkRBQXVCO0lBQ3JCO1FBQVQsYUFBTSxFQUFFO2tDQUFpQixtQkFBWTs4REFBMkI7SUFFakU7UUFEQyxZQUFLLEVBQUU7OztzREFHUDtJQWJRLGtCQUFrQjtRQVA5QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDNUMsQ0FBQztRQWdDZ0IsV0FBQSxhQUFNLENBQUMsMkNBQW1CLENBQUMsQ0FBQTt5Q0FBYSwyQ0FBbUI7T0E5QmhFLGtCQUFrQixDQXlEOUI7SUFBRCx5QkFBQztDQUFBLEFBekRELElBeURDO0FBekRZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LCBJbmplY3QsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBPbkNoYW5nZXMsIEV2ZW50RW1pdHRlciwgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJhZGlvR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL3JhZGlvLWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBmb3JFYWNoIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyL3NyYy91dGlscy9jb2xsZWN0aW9uJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ1JhZGlvSXRlbScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3JhZGlvLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3JhZGlvLWl0ZW0uY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgUmFkaW9JdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHZhbHVlOiBhbnk7XG4gICAgQElucHV0KCkgcGFuZWxDbGFzczogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHJhZGlvSXRlbUNsYXNzOiBzdHJpbmc7XG4gICAgQElucHV0KCkgcmFkaW9JdGVtQm9keUNsYXNzOiBzdHJpbmc7XG4gICAgQElucHV0KCkgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBjaG9zZW5JY29uOiBzdHJpbmc7XG4gICAgQElucHV0KCkgbm90Q2hvc2VuSWNvbjogc3RyaW5nO1xuICAgIEBPdXRwdXQoKSBpc0Nob29zZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQElucHV0KClcbiAgICBnZXQgaXNDaG9vc2UoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0Nob29zZTtcbiAgICB9XG5cbiAgICBzZXQgaXNDaG9vc2UodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLmlzQ2hvb3NlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJhZGlvR3JvdXAuY2xvc2VPdGhlclBhbmVscyh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2lzQ2hvb3NlID0gdmFsdWU7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUobnVsbCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0Nob29zZUNoYW5nZS5lbWl0KHt0ZXh0OiB0aGlzLnRleHQsIHZhbHVlOiB0aGlzLnZhbHVlLCBpc0Nob29zZTogdGhpcy5pc0Nob29zZX0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2lzQ2hvb3NlID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIHJhZGlvR3JvdXA6IFJhZGlvR3JvdXBDb21wb25lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvciggQEluamVjdChSYWRpb0dyb3VwQ29tcG9uZW50KSByYWRpb0dyb3VwOiBSYWRpb0dyb3VwQ29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMucmFkaW9Hcm91cCA9IHJhZGlvR3JvdXA7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogYW55IHtcbiAgICAgICAgdGhpcy5pc0Rpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkIHx8IGZhbHNlO1xuICAgICAgICB0aGlzLmNob3Nlbkljb24gPSB0aGlzLmNob3Nlbkljb24gfHwgJ2NoZWNrLWNpcmNsZSc7XG4gICAgICAgIHRoaXMubm90Q2hvc2VuSWNvbiA9IHRoaXMubm90Q2hvc2VuSWNvbiB8fCAnY2lyY2xlJztcbiAgICAgICAgdGhpcy5yYWRpb0dyb3VwLmFkZEl0ZW0odGhpcyk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICAvLyBjb25zb2xlLmRpcihjaGFuZ2VzKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiBhbnkge1xuICAgICAgICB0aGlzLnJhZGlvR3JvdXAucmVtb3ZlSXRlbSh0aGlzKTtcbiAgICB9XG5cbiAgICB0b2dnbGVDaG9vc2UoZXZlbnQ6IEV2ZW50KTogYW55IHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQgJiYgIXRoaXMuaXNDaG9vc2UpIHtcbiAgICAgICAgICAgIHRoaXMuaXNDaG9vc2UgPSAhdGhpcy5pc0Nob29zZTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmlzQ2hvb3NlKSB7XG4gICAgICAgICAgICB0aGlzLnJhZGlvR3JvdXAuY2hvb3NlQ2hhbmdlRXZlbnQuZW1pdCh7dGV4dDogdGhpcy50ZXh0LCB2YWx1ZTogdGhpcy52YWx1ZSwgaXNDaG9vc2U6IHRoaXMuaXNDaG9vc2V9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==