"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SubTitleLabelComponent = (function () {
    function SubTitleLabelComponent() {
        this.tap = new core_1.EventEmitter();
    }
    SubTitleLabelComponent.prototype.onTap = function (args) {
        this.tap.emit(args);
    };
    __decorate([
        core_1.Input('subTitle'),
        __metadata("design:type", String)
    ], SubTitleLabelComponent.prototype, "subTitle", void 0);
    __decorate([
        core_1.Output('tap'),
        __metadata("design:type", core_1.EventEmitter)
    ], SubTitleLabelComponent.prototype, "tap", void 0);
    SubTitleLabelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'SubTitleLabel',
            templateUrl: './sub-title-label.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], SubTitleLabelComponent);
    return SubTitleLabelComponent;
}());
exports.SubTitleLabelComponent = SubTitleLabelComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLXRpdGxlLWxhYmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1Yi10aXRsZS1sYWJlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBdUU7QUFRdkU7SUFJSTtRQUZlLFFBQUcsR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFHM0QsQ0FBQztJQUVELHNDQUFLLEdBQUwsVUFBTSxJQUFTO1FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQVJrQjtRQUFsQixZQUFLLENBQUMsVUFBVSxDQUFDOzs0REFBa0I7SUFDckI7UUFBZCxhQUFNLENBQUMsS0FBSyxDQUFDO2tDQUFNLG1CQUFZO3VEQUEyQjtJQUZsRCxzQkFBc0I7UUFObEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsa0NBQWtDO1NBQ2xELENBQUM7O09BRVcsc0JBQXNCLENBV2xDO0lBQUQsNkJBQUM7Q0FBQSxBQVhELElBV0M7QUFYWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnU3ViVGl0bGVMYWJlbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3N1Yi10aXRsZS1sYWJlbC5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBTdWJUaXRsZUxhYmVsQ29tcG9uZW50IHtcbiAgICBASW5wdXQoJ3N1YlRpdGxlJykgc3ViVGl0bGU6IHN0cmluZztcbiAgICBAT3V0cHV0KCd0YXAnKSB0YXA6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgb25UYXAoYXJnczogYW55KXtcbiAgICAgICAgdGhpcy50YXAuZW1pdChhcmdzKTtcbiAgICB9XG5cbn0iXX0=