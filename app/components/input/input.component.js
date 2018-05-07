"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var text_field_1 = require("tns-core-modules/ui/text-field");
var enums = require("ui/enums");
var InputComponent = (function () {
    function InputComponent() {
        this.classes = '';
        this.icon = '';
        this.type = '';
        this.placeholder = '';
        this.tap = new core_1.EventEmitter();
        this.onchange = new core_1.EventEmitter();
        this.isPassword = false;
        this.isFocused = false;
        this.keyboard = enums.KeyboardType.email;
    }
    InputComponent_1 = InputComponent;
    InputComponent.prototype.ngOnChanges = function () {
        var _this = this;
        switch (this.type.toLocaleLowerCase()) {
            case 'password':
                this.keyboard = enums.KeyboardType.email;
                this.isPassword = true;
                break;
            case 'date':
                this.keyboard = enums.KeyboardType.datetime;
                break;
            case 'time':
                this.keyboard = enums.KeyboardType.datetime;
                break;
            case 'email':
                this.keyboard = enums.KeyboardType.email;
                break;
            case 'number':
                this.keyboard = enums.KeyboardType.number;
                break;
            case 'phone':
                this.keyboard = enums.KeyboardType.phone;
                break;
            case 'url':
                this.keyboard = enums.KeyboardType.url;
                break;
            default:
                this.keyboard = enums.KeyboardType.email;
        }
        this.inputRef.nativeElement.on('tap', function () {
            _this.isFocused = true;
        });
        this.inputRef.nativeElement.on(text_field_1.TextField.blurEvent, function () {
            _this.isFocused = false;
        }, this);
    };
    InputComponent.prototype.onChangeCallback = function (args) { };
    InputComponent.prototype.onTouchCallback = function (args) { };
    Object.defineProperty(InputComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (newValue) {
            if (newValue !== this._value) {
                this._value = newValue;
                this.onChangeCallback(newValue);
                this.onchange.emit(newValue);
            }
        },
        enumerable: true,
        configurable: true
    });
    InputComponent.prototype.writeValue = function (value) {
        this._value = value;
        this.onchange.emit(value);
    };
    InputComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    InputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchCallback = fn;
    };
    InputComponent.prototype.getElement = function () {
        return this.inputRef.nativeElement;
    };
    InputComponent.prototype.onTap = function (args) {
        this.tap.emit(args);
    };
    InputComponent.prototype.change = function (args) {
        this.value = args;
        this.onchange.emit(args);
    };
    __decorate([
        core_1.Input('class'),
        __metadata("design:type", String)
    ], InputComponent.prototype, "classes", void 0);
    __decorate([
        core_1.Input('icon'),
        __metadata("design:type", String)
    ], InputComponent.prototype, "icon", void 0);
    __decorate([
        core_1.Input('type'),
        __metadata("design:type", String)
    ], InputComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input('placeholder'),
        __metadata("design:type", String)
    ], InputComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Output('tap'),
        __metadata("design:type", core_1.EventEmitter)
    ], InputComponent.prototype, "tap", void 0);
    __decorate([
        core_1.Output('change'),
        __metadata("design:type", core_1.EventEmitter)
    ], InputComponent.prototype, "onchange", void 0);
    __decorate([
        core_1.ViewChild('input'),
        __metadata("design:type", core_1.ElementRef)
    ], InputComponent.prototype, "inputRef", void 0);
    InputComponent = InputComponent_1 = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'InputField',
            templateUrl: './input.component.html',
            styleUrls: [
                './input.component.css'
            ],
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return InputComponent_1; }),
                    multi: true
                }
            ],
        })
    ], InputComponent);
    return InputComponent;
    var InputComponent_1;
}());
exports.InputComponent = InputComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtIO0FBQ2xILHdDQUF5RTtBQUN6RSw2REFBMkQ7QUFDM0QsZ0NBQWtDO0FBbUJsQztJQWhCQTtRQWtCMkIsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUN0QixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDWCxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUVoQyxRQUFHLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ3pDLGFBQVEsR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFJbkUsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGFBQVEsR0FBUSxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztJQThFcEQsQ0FBQzt1QkE1RlksY0FBYztJQWlCdkIsb0NBQVcsR0FBWDtRQUFBLGlCQWlDQztRQWhDRyxNQUFNLENBQUEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQSxDQUFDO1lBQ2xDLEtBQUssVUFBVTtnQkFDWCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO2dCQUN6QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDdkIsS0FBSyxDQUFDO1lBQ1YsS0FBSyxNQUFNO2dCQUNQLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQzVDLEtBQUssQ0FBQztZQUNWLEtBQUssTUFBTTtnQkFDUCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDO2dCQUM1QyxLQUFLLENBQUM7WUFDVixLQUFLLE9BQU87Z0JB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QkFBWTsrQ0FBMkI7SUFDaEQ7UUFBakIsYUFBTSxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsbUJBQVk7b0RBQTJCO0lBRXREO1FBQW5CLGdCQUFTLENBQUMsT0FBTyxDQUFDO2tDQUFXLGlCQUFVO29EQUFDO0lBVmhDLGNBQWM7UUFoQjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUU7Z0JBQ1AsdUJBQXVCO2FBQzFCO1lBQ0QsU0FBUyxFQUFDO2dCQUNOO29CQUNJLE9BQU8sRUFBRSx5QkFBaUI7b0JBQzFCLFdBQVcsRUFBRSxpQkFBVSxDQUFDLGNBQU0sT0FBQSxnQkFBYyxFQUFkLENBQWMsQ0FBQztvQkFDN0MsS0FBSyxFQUFFLElBQUk7aUJBQ2Q7YUFDSjtTQUNKLENBQUM7T0FFVyxjQUFjLENBNEYxQjtJQUFELHFCQUFDOztDQUFBLEFBNUZELElBNEZDO0FBNUZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtZmllbGQnO1xuaW1wb3J0ICogYXMgZW51bXMgZnJvbSAndWkvZW51bXMnO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlld1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnSW5wdXRGaWVsZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtcbiAgICAgICAgJy4vaW5wdXQuY29tcG9uZW50LmNzcydcbiAgICBdLFxuICAgIHByb3ZpZGVyczpbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSW5wdXRDb21wb25lbnQpLFxuICAgICAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgICAgfVxuICAgIF0sXG59KVxuXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvcntcblxuICAgIEBJbnB1dCgnY2xhc3MnKSBwdWJsaWMgY2xhc3Nlczogc3RyaW5nID0gJyc7XG4gICAgQElucHV0KCdpY29uJykgcHVibGljIGljb246IHN0cmluZyA9ICcnO1xuICAgIEBJbnB1dCgndHlwZScpIHB1YmxpYyB0eXBlOiBzdHJpbmcgPSAnJztcbiAgICBASW5wdXQoJ3BsYWNlaG9sZGVyJykgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcblxuICAgIEBPdXRwdXQoJ3RhcCcpIHB1YmxpYyB0YXA6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoJ2NoYW5nZScpIHB1YmxpYyBvbmNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAVmlld0NoaWxkKCdpbnB1dCcpIGlucHV0UmVmOiBFbGVtZW50UmVmO1xuXG4gICAgcHVibGljIGlzUGFzc3dvcmQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgaXNGb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIGtleWJvYXJkOiBhbnkgPSBlbnVtcy5LZXlib2FyZFR5cGUuZW1haWw7XG4gICAgcHVibGljIF92YWx1ZTogYW55O1xuXG4gICAgbmdPbkNoYW5nZXMoKXtcbiAgICAgICAgc3dpdGNoKHRoaXMudHlwZS50b0xvY2FsZUxvd2VyQ2FzZSgpKXtcbiAgICAgICAgICAgIGNhc2UgJ3Bhc3N3b3JkJzpcbiAgICAgICAgICAgICAgICB0aGlzLmtleWJvYXJkID0gZW51bXMuS2V5Ym9hcmRUeXBlLmVtYWlsO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNQYXNzd29yZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgICAgICAgICB0aGlzLmtleWJvYXJkID0gZW51bXMuS2V5Ym9hcmRUeXBlLmRhdGV0aW1lO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndGltZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlib2FyZCA9IGVudW1zLktleWJvYXJkVHlwZS5kYXRldGltZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgICAgICAgICB0aGlzLmtleWJvYXJkID0gZW51bXMuS2V5Ym9hcmRUeXBlLmVtYWlsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICB0aGlzLmtleWJvYXJkID0gZW51bXMuS2V5Ym9hcmRUeXBlLm51bWJlcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Bob25lJzpcbiAgICAgICAgICAgICAgICB0aGlzLmtleWJvYXJkID0gZW51bXMuS2V5Ym9hcmRUeXBlLnBob25lO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndXJsJzpcbiAgICAgICAgICAgICAgICB0aGlzLmtleWJvYXJkID0gZW51bXMuS2V5Ym9hcmRUeXBlLnVybDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlib2FyZCA9IGVudW1zLktleWJvYXJkVHlwZS5lbWFpbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQub24oJ3RhcCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudC5vbihUZXh0RmllbGQuYmx1ckV2ZW50LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZUNhbGxiYWNrKGFyZ3M6IGFueSl7fVxuICAgIG9uVG91Y2hDYWxsYmFjayhhcmdzOiBhbnkpe31cblxuICAgIHNldCB2YWx1ZShuZXdWYWx1ZTogYW55KXtcbiAgICAgICAgaWYobmV3VmFsdWUgIT09IHRoaXMuX3ZhbHVlKXtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sobmV3VmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5vbmNoYW5nZS5lbWl0KG5ld1ZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCB2YWx1ZSgpOiBhbnl7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG5cbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpe1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm9uY2hhbmdlLmVtaXQodmFsdWUpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSl7XG4gICAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpe1xuICAgICAgICB0aGlzLm9uVG91Y2hDYWxsYmFjayA9IGZuO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRFbGVtZW50KCk6IFRleHRGaWVsZHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25UYXAoYXJncyl7XG4gICAgICAgIHRoaXMudGFwLmVtaXQoYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIGNoYW5nZShhcmdzKXtcbiAgICAgICAgdGhpcy52YWx1ZSA9IGFyZ3M7XG4gICAgICAgIHRoaXMub25jaGFuZ2UuZW1pdChhcmdzKTtcbiAgICB9XG59Il19