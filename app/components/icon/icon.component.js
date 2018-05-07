"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var icon_1 = require("../../dictionaries/iconDict/icon");
var color_1 = require("tns-core-modules/color");
var IconComponent = (function () {
    function IconComponent(elementRef) {
        this.elementRef = elementRef;
        this.iconName = "";
        this.iconName = icon_1.Icon[this.icon];
        if (this.color) {
            this.elementRef.nativeElement.color = new color_1.Color(this.color);
        }
    }
    IconComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input('icon'),
        __metadata("design:type", String)
    ], IconComponent.prototype, "icon", void 0);
    __decorate([
        core_1.Input('color'),
        __metadata("design:type", String)
    ], IconComponent.prototype, "color", void 0);
    IconComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Icon',
            templateUrl: './icon.component.html'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], IconComponent);
    return IconComponent;
}());
exports.IconComponent = IconComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFxRTtBQUNyRSx5REFBd0Q7QUFDeEQsZ0RBQStDO0FBUS9DO0lBT0ksdUJBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFGbkMsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUd6QixJQUFJLENBQUMsUUFBUSxHQUFHLFdBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUM7WUFDWCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hFLENBQUM7SUFDTCxDQUFDO0lBRUQsZ0NBQVEsR0FBUixjQUFZLENBQUM7SUFaRTtRQUFkLFlBQUssQ0FBQyxNQUFNLENBQUM7OytDQUFxQjtJQUNuQjtRQUFmLFlBQUssQ0FBQyxPQUFPLENBQUM7O2dEQUFzQjtJQUg1QixhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFDLE1BQU07WUFDZixXQUFXLEVBQUMsdUJBQXVCO1NBQ3RDLENBQUM7eUNBU2tDLGlCQUFVO09BUGpDLGFBQWEsQ0FlekI7SUFBRCxvQkFBQztDQUFBLEFBZkQsSUFlQztBQWZZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vLi4vZGljdGlvbmFyaWVzL2ljb25EaWN0L2ljb24nO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2NvbG9yJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjonSWNvbicsXG4gICAgdGVtcGxhdGVVcmw6Jy4vaWNvbi5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXG4gICAgQElucHV0KCdpY29uJykgcHVibGljIGljb246IHN0cmluZztcbiAgICBASW5wdXQoJ2NvbG9yJykgcHVibGljIGNvbG9yOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgaWNvbk5hbWU6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBjb25zdHJ1Y3RvciggcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYgKXtcbiAgICAgICAgdGhpcy5pY29uTmFtZSA9IEljb25bdGhpcy5pY29uXTtcbiAgICAgICAgaWYodGhpcy5jb2xvcil7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb2xvciA9IG5ldyBDb2xvcih0aGlzLmNvbG9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge31cbn0iXX0=