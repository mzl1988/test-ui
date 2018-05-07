"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page");
var color_1 = require("tns-core-modules/color");
var HeaderComponent = (function () {
    function HeaderComponent(page) {
        this.page = page;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.title = this.inputTitle || 'CCBA';
        this.page.actionBarHidden = true;
        this.page.androidStatusBarBackground = new color_1.Color('#222222');
    };
    HeaderComponent.prototype.setTitle = function (newTitle) {
        this.title = newTitle;
    };
    HeaderComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('inputTitle')) {
            this.title = this.inputTitle || 'CCBA';
        }
    };
    __decorate([
        core_1.Input('title'),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "inputTitle", void 0);
    HeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Header',
            templateUrl: './header.component.html',
            styleUrls: [
                './header.component.css'
            ]
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUY7QUFDbkYsaURBQWdEO0FBQ2hELGdEQUErQztBQVcvQztJQU1JLHlCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFJLENBQUM7SUFFbkMsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxNQUFNLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELGtDQUFRLEdBQVIsVUFBUyxRQUFnQjtRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztJQUMxQixDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQzlCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxNQUFNLENBQUM7UUFDM0MsQ0FBQztJQUNMLENBQUM7SUFwQmU7UUFBZixZQUFLLENBQUMsT0FBTyxDQUFDOzt1REFBb0I7SUFGMUIsZUFBZTtRQVQzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFO2dCQUNQLHdCQUF3QjthQUMzQjtTQUNKLENBQUM7eUNBUTRCLFdBQUk7T0FOckIsZUFBZSxDQXVCM0I7SUFBRCxzQkFBQztDQUFBLEFBdkJELElBdUJDO0FBdkJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2NvbG9yJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ0hlYWRlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXG4gICAgICAgICcuL2hlYWRlci5jb21wb25lbnQuY3NzJ1xuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgICBASW5wdXQoJ3RpdGxlJykgaW5wdXRUaXRsZTogc3RyaW5nO1xuXG4gICAgdGl0bGU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRoaXMuaW5wdXRUaXRsZSB8fCAnQ0NCQSc7XG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnBhZ2UuYW5kcm9pZFN0YXR1c0JhckJhY2tncm91bmQgPSBuZXcgQ29sb3IoJyMyMjIyMjInKTtcbiAgICB9XG5cbiAgICBzZXRUaXRsZShuZXdUaXRsZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdpbnB1dFRpdGxlJykpIHtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aGlzLmlucHV0VGl0bGUgfHwgJ0NDQkEnO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==