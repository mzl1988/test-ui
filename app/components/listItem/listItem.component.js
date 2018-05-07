"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var icon_1 = require("../../dictionaries/iconDict/icon");
var colorDict_1 = require("../../dictionaries/colorDict/colorDict");
var ListItemComponent = (function () {
    function ListItemComponent() {
        this.onIconTap = new core_1.EventEmitter();
        this.tap = new core_1.EventEmitter();
    }
    ListItemComponent.prototype.ngAfterContentChecked = function () {
        this.updateIcon();
    };
    ListItemComponent.prototype.updateIcon = function () {
        if (this.icon) {
            this.icon = icon_1.Icon[this.icon] ? icon_1.Icon[this.icon] : this.icon;
            this.iconColor = colorDict_1.Color[this._iconColor] ? colorDict_1.Color[this._iconColor] : colorDict_1.Color.primary;
        }
        else {
            this.icon = null;
        }
    };
    ListItemComponent.prototype._onIconTap = function (args) {
        this.onIconTap.emit(args);
    };
    ListItemComponent.prototype._onTap = function (args) {
        this.tap.emit(args);
    };
    __decorate([
        core_1.Input('text'),
        __metadata("design:type", String)
    ], ListItemComponent.prototype, "text", void 0);
    __decorate([
        core_1.Input('subtext'),
        __metadata("design:type", String)
    ], ListItemComponent.prototype, "secondaryText", void 0);
    __decorate([
        core_1.Input('icon'),
        __metadata("design:type", String)
    ], ListItemComponent.prototype, "icon", void 0);
    __decorate([
        core_1.Input('iconColor'),
        __metadata("design:type", String)
    ], ListItemComponent.prototype, "_iconColor", void 0);
    __decorate([
        core_1.Output('onicontap'),
        __metadata("design:type", core_1.EventEmitter)
    ], ListItemComponent.prototype, "onIconTap", void 0);
    __decorate([
        core_1.Output('tap'),
        __metadata("design:type", core_1.EventEmitter)
    ], ListItemComponent.prototype, "tap", void 0);
    ListItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ListItem',
            templateUrl: './listItem.component.html',
            styleUrls: [
                './listItem.component.css'
            ]
        })
    ], ListItemComponent);
    return ListItemComponent;
}());
exports.ListItemComponent = ListItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdEl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdEl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVFO0FBQ3ZFLHlEQUF1RDtBQUN2RCxvRUFBK0Q7QUFXL0Q7SUFUQTtRQWdCZ0MsY0FBUyxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUN4RCxRQUFHLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO0lBd0J0RSxDQUFDO0lBcEJHLGlEQUFxQixHQUFyQjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsc0NBQVUsR0FBVjtRQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQ1YsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLFdBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUMxRCxJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLGlCQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLGlCQUFLLENBQUMsT0FBTyxDQUFDO1FBQ3JGLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLENBQUM7SUFDTCxDQUFDO0lBRU0sc0NBQVUsR0FBakIsVUFBa0IsSUFBSTtRQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU0sa0NBQU0sR0FBYixVQUFjLElBQUk7UUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBN0JjO1FBQWQsWUFBSyxDQUFDLE1BQU0sQ0FBQzs7bURBQXFCO0lBQ2pCO1FBQWpCLFlBQUssQ0FBQyxTQUFTLENBQUM7OzREQUE4QjtJQUNoQztRQUFkLFlBQUssQ0FBQyxNQUFNLENBQUM7O21EQUFxQjtJQUNmO1FBQW5CLFlBQUssQ0FBQyxXQUFXLENBQUM7O3lEQUEyQjtJQUV6QjtRQUFwQixhQUFNLENBQUMsV0FBVyxDQUFDO2tDQUFtQixtQkFBWTt3REFBMkI7SUFDL0Q7UUFBZCxhQUFNLENBQUMsS0FBSyxDQUFDO2tDQUFhLG1CQUFZO2tEQUEyQjtJQVJ6RCxpQkFBaUI7UUFUN0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBQztnQkFDTiwwQkFBMEI7YUFDN0I7U0FDSixDQUFDO09BRVcsaUJBQWlCLENBZ0M3QjtJQUFELHdCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi8uLi9kaWN0aW9uYXJpZXMvaWNvbkRpY3QvaWNvbidcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnLi4vLi4vZGljdGlvbmFyaWVzL2NvbG9yRGljdC9jb2xvckRpY3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnTGlzdEl0ZW0nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9saXN0SXRlbS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOltcbiAgICAgICAgJy4vbGlzdEl0ZW0uY29tcG9uZW50LmNzcydcbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgTGlzdEl0ZW1Db21wb25lbnR7XG5cbiAgICBASW5wdXQoJ3RleHQnKSBwdWJsaWMgdGV4dDogc3RyaW5nO1xuICAgIEBJbnB1dCgnc3VidGV4dCcpIHB1YmxpYyBzZWNvbmRhcnlUZXh0OiBzdHJpbmc7XG4gICAgQElucHV0KCdpY29uJykgcHVibGljIGljb246IHN0cmluZztcbiAgICBASW5wdXQoJ2ljb25Db2xvcicpIHB1YmxpYyBfaWNvbkNvbG9yOiBzdHJpbmc7XG5cbiAgICBAT3V0cHV0KCdvbmljb250YXAnKSBwdWJsaWMgb25JY29uVGFwOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCd0YXAnKSBwdWJsaWMgdGFwOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIHB1YmxpYyBpY29uQ29sb3I6IHN0cmluZztcblxuICAgIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpe1xuICAgICAgICB0aGlzLnVwZGF0ZUljb24oKTtcbiAgICB9XG5cbiAgICB1cGRhdGVJY29uKCl7XG4gICAgICAgIGlmKHRoaXMuaWNvbil7XG4gICAgICAgICAgICB0aGlzLmljb24gPSBJY29uW3RoaXMuaWNvbl0gPyBJY29uW3RoaXMuaWNvbl0gOiB0aGlzLmljb247XG4gICAgICAgICAgICB0aGlzLmljb25Db2xvciA9IENvbG9yW3RoaXMuX2ljb25Db2xvcl0gPyBDb2xvclt0aGlzLl9pY29uQ29sb3JdIDogQ29sb3IucHJpbWFyeTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmljb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIF9vbkljb25UYXAoYXJncyl7XG4gICAgICAgIHRoaXMub25JY29uVGFwLmVtaXQoYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIF9vblRhcChhcmdzKXtcbiAgICAgICAgdGhpcy50YXAuZW1pdChhcmdzKTtcbiAgICB9XG59Il19