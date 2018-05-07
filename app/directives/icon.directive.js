"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var icon_1 = require("../dictionaries/iconDict/icon");
var IconDirective = (function () {
    function IconDirective(elementref) {
        this.elementref = elementref;
    }
    IconDirective.prototype.ngOnChanges = function () {
        if (this.icon) {
            this.elementref.nativeElement.text = icon_1.Icon[this.icon] || this.icon;
        }
    };
    IconDirective = __decorate([
        core_1.Directive({
            selector: '[icon]',
            inputs: [
                'icon'
            ],
            host: {
                'class': 'icon'
            }
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], IconDirective);
    return IconDirective;
}());
exports.IconDirective = IconDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpY29uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzRDtBQUN0RCxzREFBcUQ7QUFXckQ7SUFJSSx1QkFDVyxVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQy9CLENBQUM7SUFFSCxtQ0FBVyxHQUFYO1FBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDVixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsV0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3RFLENBQUM7SUFDTCxDQUFDO0lBWlEsYUFBYTtRQVR6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsTUFBTSxFQUFFO2dCQUNKLE1BQU07YUFDVDtZQUNELElBQUksRUFBRTtnQkFDRixPQUFPLEVBQUUsTUFBTTthQUNsQjtTQUNKLENBQUM7eUNBTXlCLGlCQUFVO09BTHhCLGFBQWEsQ0FhekI7SUFBRCxvQkFBQztDQUFBLEFBYkQsSUFhQztBQWJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vZGljdGlvbmFyaWVzL2ljb25EaWN0L2ljb24nO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpY29uXScsXG4gICAgaW5wdXRzOiBbXG4gICAgICAgICdpY29uJ1xuICAgIF0sXG4gICAgaG9zdDoge1xuICAgICAgICAnY2xhc3MnOiAnaWNvbidcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIEljb25EaXJlY3RpdmV7XG5cbiAgICBwdWJsaWMgaWNvbjogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBlbGVtZW50cmVmOiBFbGVtZW50UmVmXG4gICAgKXt9XG5cbiAgICBuZ09uQ2hhbmdlcygpe1xuICAgICAgICBpZih0aGlzLmljb24pe1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50cmVmLm5hdGl2ZUVsZW1lbnQudGV4dCA9IEljb25bdGhpcy5pY29uXSB8fCB0aGlzLmljb247XG4gICAgICAgIH1cbiAgICB9XG59Il19