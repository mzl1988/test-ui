"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var radio_group_config_1 = require("./radio-group.config");
var RadioGroupComponent = (function () {
    function RadioGroupComponent(config) {
        this.chooseChangeEvent = new core_1.EventEmitter();
        this.items = [];
        Object.assign(this, config);
    }
    RadioGroupComponent.prototype.ngOnInit = function () {
        this.chooseOthers = this.chooseOthers || true;
    };
    RadioGroupComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.hasOwnProperty('chooseIndex') && (changes.chooseIndex.firstChange === false)) {
            this.chooseByIndex();
        }
        else if (changes.hasOwnProperty('chooseIndex') && (changes.chooseIndex.firstChange === true)) {
            setTimeout(function () {
                _this.chooseByIndex();
            }, 500);
        }
    };
    RadioGroupComponent.prototype.closeOtherPanels = function (chooseItem) {
        if (!this.chooseOthers) {
            return;
        }
        this.items.forEach(function (item) {
            if ((item !== chooseItem) && (item.isDisabled === false)) {
                item.isChoose = false;
            }
        });
    };
    RadioGroupComponent.prototype.addItem = function (item) {
        this.items.push(item);
    };
    RadioGroupComponent.prototype.chooseByIndex = function () {
        var _this = this;
        this.items.forEach(function (item, index) {
            if (_this.chooseIndex === index) {
                item.isChoose = true;
            }
            else {
                item.isChoose = false;
            }
        });
    };
    RadioGroupComponent.prototype.removeItem = function (item) {
        var index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], RadioGroupComponent.prototype, "chooseOthers", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], RadioGroupComponent.prototype, "chooseIndex", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], RadioGroupComponent.prototype, "chooseChangeEvent", void 0);
    RadioGroupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'RadioGroup',
            templateUrl: './radio-group.component.html',
            host: {
                '[attr.aria-multiselectable]': 'chooseOthers'
            }
        }),
        __metadata("design:paramtypes", [radio_group_config_1.RadioGroupConfig])
    ], RadioGroupComponent);
    return RadioGroupComponent;
}());
exports.RadioGroupComponent = RadioGroupComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmFkaW8tZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlHO0FBRXpHLDJEQUF3RDtBQVV4RDtJQU9JLDZCQUFZLE1BQXdCO1FBSjFCLHNCQUFpQixHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUUxRCxVQUFLLEdBQXlCLEVBQUUsQ0FBQztRQUd2QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUM7SUFDbkQsQ0FBQztJQUVELHlDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUFsQyxpQkFTQztRQVBHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkYsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1RixVQUFVLENBQUM7Z0JBQ1AsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3pCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNaLENBQUM7SUFDTCxDQUFDO0lBRUQsOENBQWdCLEdBQWhCLFVBQWlCLFVBQThCO1FBQzNDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBd0I7WUFDeEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDMUIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHFDQUFPLEdBQVAsVUFBUSxJQUF3QjtRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsMkNBQWEsR0FBYjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUF3QixFQUFFLEtBQUs7WUFDL0MsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLFdBQVcsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUN6QixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDMUIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHdDQUFVLEdBQVYsVUFBVyxJQUF3QjtRQUMvQixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7SUFDTCxDQUFDO0lBeERRO1FBQVIsWUFBSyxFQUFFOzs2REFBdUI7SUFDdEI7UUFBUixZQUFLLEVBQUU7OzREQUFxQjtJQUNuQjtRQUFULGFBQU0sRUFBRTtrQ0FBb0IsbUJBQVk7a0VBQTJCO0lBSDNELG1CQUFtQjtRQVIvQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsSUFBSSxFQUFFO2dCQUNGLDZCQUE2QixFQUFFLGNBQWM7YUFDaEQ7U0FDSixDQUFDO3lDQVFzQixxQ0FBZ0I7T0FQM0IsbUJBQW1CLENBMkQvQjtJQUFELDBCQUFDO0NBQUEsQUEzREQsSUEyREM7QUEzRFksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIE9uQ2hhbmdlcywgRXZlbnRFbWl0dGVyLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSYWRpb0l0ZW1Db21wb25lbnQgfSBmcm9tICcuL3JhZGlvLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFJhZGlvR3JvdXBDb25maWcgfSBmcm9tICcuL3JhZGlvLWdyb3VwLmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdSYWRpb0dyb3VwJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcmFkaW8tZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1thdHRyLmFyaWEtbXVsdGlzZWxlY3RhYmxlXSc6ICdjaG9vc2VPdGhlcnMnXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb0dyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBjaG9vc2VPdGhlcnM6IGJvb2xlYW47XG4gICAgQElucHV0KCkgY2hvb3NlSW5kZXg6IG51bWJlcjtcbiAgICBAT3V0cHV0KCkgY2hvb3NlQ2hhbmdlRXZlbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgcHJvdGVjdGVkIGl0ZW1zOiBSYWRpb0l0ZW1Db21wb25lbnRbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBSYWRpb0dyb3VwQ29uZmlnKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jaG9vc2VPdGhlcnMgPSAgdGhpcy5jaG9vc2VPdGhlcnMgfHwgdHJ1ZTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnY2hvb3NlSW5kZXgnKSAmJiAoY2hhbmdlcy5jaG9vc2VJbmRleC5maXJzdENoYW5nZSA9PT0gZmFsc2UpKSB7XG4gICAgICAgICAgICB0aGlzLmNob29zZUJ5SW5kZXgoKTtcbiAgICAgICAgfSBlbHNlIGlmKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2Nob29zZUluZGV4JykgJiYgKGNoYW5nZXMuY2hvb3NlSW5kZXguZmlyc3RDaGFuZ2UgPT09IHRydWUpKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNob29zZUJ5SW5kZXgoKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9zZU90aGVyUGFuZWxzKGNob29zZUl0ZW06IFJhZGlvSXRlbUNvbXBvbmVudCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuY2hvb3NlT3RoZXJzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goKGl0ZW06IFJhZGlvSXRlbUNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKChpdGVtICE9PSBjaG9vc2VJdGVtKSAmJiAoaXRlbS5pc0Rpc2FibGVkID09PSBmYWxzZSkpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmlzQ2hvb3NlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZEl0ZW0oaXRlbTogUmFkaW9JdGVtQ29tcG9uZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICB9XG5cbiAgICBjaG9vc2VCeUluZGV4KCk6IHZvaWQge1xuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goKGl0ZW06IFJhZGlvSXRlbUNvbXBvbmVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNob29zZUluZGV4ID09PSBpbmRleCkge1xuICAgICAgICAgICAgICAgIGl0ZW0uaXNDaG9vc2UgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVtLmlzQ2hvb3NlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbW92ZUl0ZW0oaXRlbTogUmFkaW9JdGVtQ29tcG9uZW50KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG4iXX0=