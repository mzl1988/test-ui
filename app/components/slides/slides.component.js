"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var slide_component_1 = require("../slide/slide.component");
var Subject_1 = require("rxjs/Subject");
var enums = require("tns-core-modules/ui/enums");
var SlidesComponent = (function () {
    function SlidesComponent() {
        this.load = new core_1.EventEmitter();
        this.swipe = new core_1.EventEmitter();
        this.tap = new core_1.EventEmitter();
        this.pan = new core_1.EventEmitter();
        this.animatefinished = new core_1.EventEmitter();
        this.activedItemIndex = 0;
        this.onAnimation = false;
    }
    SlidesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.initIndex) {
            setTimeout(function () {
                var tem = _this.animateDuration;
                var self = _this;
                _this.animateDuration = 0;
                _this.setInit(_this.initIndex)
                    .subscribe(function () {
                    self.animateDuration = tem;
                });
            }, 30);
        }
    };
    SlidesComponent.prototype.onTap = function (args) {
        this.tap.emit(args);
    };
    SlidesComponent.prototype.onLoad = function (args) {
        this.load.emit(args);
    };
    SlidesComponent.prototype.onPan = function (args) {
        this.pan.emit(args);
    };
    SlidesComponent.prototype.onSwipe = function (args) {
        this.swipe.emit(args);
    };
    SlidesComponent.prototype.move = function (step) {
        var _this = this;
        if (this.onAnimation) {
            return null;
        }
        var subject = new Subject_1.Subject();
        if (this.activedItemIndex + step >= this.slides.length) {
            subject.next(this.slides.length - 1);
        }
        else if (this.activedItemIndex + step < 0) {
            subject.next(0);
        }
        else {
            this.onAnimation = true;
            var targetIndex_1 = this.activedItemIndex + step;
            var slides = this.slides.toArray();
            var slidesContainer = this.slidesContainerRef.nativeElement;
            var distance_1 = slides[targetIndex_1].getElement().getLocationRelativeTo(slidesContainer).x;
            var actionQueue = slides.map(function (slide, index) {
                return slide.getElement().animate({
                    translate: {
                        x: slide.getElement().translateX - distance_1,
                        y: 0
                    },
                    curve: enums.AnimationCurve.easeOut,
                    duration: _this.animateDuration === undefined ? 250 : _this.animateDuration
                });
            });
            Promise.all(actionQueue)
                .then(function () {
                _this.activedItemIndex = targetIndex_1;
                _this.animatefinished.emit(_this.activedItemIndex);
                _this.onAnimation = false;
                subject.next(_this.activedItemIndex);
            })
                .catch(function (err) {
                _this.onAnimation = false;
                subject.error(err);
            });
        }
        return subject;
    };
    SlidesComponent.prototype.moveTo = function (index) {
        var steps = index - this.activedItemIndex;
        return this.move(steps);
    };
    SlidesComponent.prototype.setInit = function (initIndex) {
        return this.moveTo(initIndex);
    };
    __decorate([
        core_1.Input('animateDuration'),
        __metadata("design:type", Number)
    ], SlidesComponent.prototype, "animateDuration", void 0);
    __decorate([
        core_1.Input('initIndex'),
        __metadata("design:type", Number)
    ], SlidesComponent.prototype, "initIndex", void 0);
    __decorate([
        core_1.Output('load'),
        __metadata("design:type", core_1.EventEmitter)
    ], SlidesComponent.prototype, "load", void 0);
    __decorate([
        core_1.Output('swipe'),
        __metadata("design:type", core_1.EventEmitter)
    ], SlidesComponent.prototype, "swipe", void 0);
    __decorate([
        core_1.Output('tap'),
        __metadata("design:type", core_1.EventEmitter)
    ], SlidesComponent.prototype, "tap", void 0);
    __decorate([
        core_1.Output('pan'),
        __metadata("design:type", core_1.EventEmitter)
    ], SlidesComponent.prototype, "pan", void 0);
    __decorate([
        core_1.Output('animatefinished'),
        __metadata("design:type", core_1.EventEmitter)
    ], SlidesComponent.prototype, "animatefinished", void 0);
    __decorate([
        core_1.ViewChild('slides'),
        __metadata("design:type", core_1.ElementRef)
    ], SlidesComponent.prototype, "slidesContainerRef", void 0);
    __decorate([
        core_1.ContentChildren(slide_component_1.SlideComponent),
        __metadata("design:type", core_1.QueryList)
    ], SlidesComponent.prototype, "slides", void 0);
    SlidesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Slides',
            templateUrl: './slides.component.html',
            styleUrls: [
                './slides.component.css'
            ]
        })
    ], SlidesComponent);
    return SlidesComponent;
}());
exports.SlidesComponent = SlidesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNsaWRlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEg7QUFDMUgsNERBQTBEO0FBQzFELHdDQUF1QztBQUN2QyxpREFBbUQ7QUFXbkQ7SUFUQTtRQWMyQixTQUFJLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQzVDLFVBQUssR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDaEQsUUFBRyxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUM1QyxRQUFHLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ2hDLG9CQUFlLEdBQXlCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBS3RGLHFCQUFnQixHQUFVLENBQUMsQ0FBQztRQUM1QixnQkFBVyxHQUFZLEtBQUssQ0FBQztJQWlGeEMsQ0FBQztJQS9FRyx5Q0FBZSxHQUFmO1FBQUEsaUJBWUM7UUFYRyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUEsQ0FBQztZQUNmLFVBQVUsQ0FBQztnQkFDUCxJQUFJLEdBQUcsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDO2dCQUMvQixJQUFJLElBQUksR0FBRyxLQUFJLENBQUM7Z0JBQ2hCLEtBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO2dCQUN6QixLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUM7cUJBQ3ZCLFNBQVMsQ0FBQztvQkFDUCxJQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQztnQkFDL0IsQ0FBQyxDQUFDLENBQUM7WUFDWCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDWCxDQUFDO0lBQ0wsQ0FBQztJQUVNLCtCQUFLLEdBQVosVUFBYSxJQUFJO1FBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJ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QSxBQWhHRCxJQWdHQztBQWhHWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBRdWVyeUxpc3QsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQ29udGVudENoaWxkcmVuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTbGlkZUNvbXBvbmVudCB9IGZyb20gJy4uL3NsaWRlL3NsaWRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9TdWJqZWN0JztcbmltcG9ydCAqIGFzIGVudW1zIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZW51bXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnU2xpZGVzJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2xpZGVzLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6W1xuICAgICAgICAnLi9zbGlkZXMuY29tcG9uZW50LmNzcydcbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgU2xpZGVzQ29tcG9uZW50e1xuICAgIFxuICAgIEBJbnB1dCgnYW5pbWF0ZUR1cmF0aW9uJykgcHVibGljIGFuaW1hdGVEdXJhdGlvbjogbnVtYmVyO1xuICAgIEBJbnB1dCgnaW5pdEluZGV4JykgcHVibGljIGluaXRJbmRleDogbnVtYmVyO1xuXG4gICAgQE91dHB1dCgnbG9hZCcpIHB1YmxpYyBsb2FkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCdzd2lwZScpIHB1YmxpYyBzd2lwZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgndGFwJykgcHVibGljIHRhcDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgncGFuJykgcHVibGljIHBhbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgnYW5pbWF0ZWZpbmlzaGVkJykgcHVibGljIGFuaW1hdGVmaW5pc2hlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAVmlld0NoaWxkKCdzbGlkZXMnKSBzbGlkZXNDb250YWluZXJSZWY6IEVsZW1lbnRSZWY7XG4gICAgQENvbnRlbnRDaGlsZHJlbihTbGlkZUNvbXBvbmVudCkgcHVibGljIHNsaWRlczogUXVlcnlMaXN0PFNsaWRlQ29tcG9uZW50PjtcblxuICAgIHB1YmxpYyBhY3RpdmVkSXRlbUluZGV4Om51bWJlciA9IDA7XG4gICAgcHVibGljIG9uQW5pbWF0aW9uOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKXtcbiAgICAgICAgaWYodGhpcy5pbml0SW5kZXgpe1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRlbSA9IHRoaXMuYW5pbWF0ZUR1cmF0aW9uO1xuICAgICAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGVEdXJhdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJbml0KHRoaXMuaW5pdEluZGV4KVxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYW5pbWF0ZUR1cmF0aW9uID0gdGVtO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDMwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblRhcChhcmdzKXtcbiAgICAgICAgdGhpcy50YXAuZW1pdChhcmdzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Mb2FkKGFyZ3Mpe1xuICAgICAgICB0aGlzLmxvYWQuZW1pdChhcmdzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25QYW4oYXJncyl7XG4gICAgICAgIHRoaXMucGFuLmVtaXQoYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uU3dpcGUoYXJncyl7XG4gICAgICAgIHRoaXMuc3dpcGUuZW1pdChhcmdzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbW92ZShzdGVwOiBudW1iZXIpOiBTdWJqZWN0PG51bWJlcj4gfCBudWxse1xuICAgICAgICBpZih0aGlzLm9uQW5pbWF0aW9uKXsgcmV0dXJuIG51bGw7IH1cbiAgICAgICAgbGV0IHN1YmplY3Q6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0KCk7XG4gICAgICAgIGlmKHRoaXMuYWN0aXZlZEl0ZW1JbmRleCArIHN0ZXAgPj0gdGhpcy5zbGlkZXMubGVuZ3RoKXsgXG4gICAgICAgICAgICBzdWJqZWN0Lm5leHQodGhpcy5zbGlkZXMubGVuZ3RoIC0gMSk7IFxuICAgICAgICB9ZWxzZSBpZih0aGlzLmFjdGl2ZWRJdGVtSW5kZXggKyBzdGVwIDwgMCl7XG4gICAgICAgICAgICBzdWJqZWN0Lm5leHQoMCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5vbkFuaW1hdGlvbiA9IHRydWU7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0SW5kZXggPSB0aGlzLmFjdGl2ZWRJdGVtSW5kZXggKyBzdGVwO1xuICAgICAgICAgICAgbGV0IHNsaWRlcyA9IHRoaXMuc2xpZGVzLnRvQXJyYXkoKTtcbiAgICAgICAgICAgIGxldCBzbGlkZXNDb250YWluZXIgPSB0aGlzLnNsaWRlc0NvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gc2xpZGVzW3RhcmdldEluZGV4XS5nZXRFbGVtZW50KCkuZ2V0TG9jYXRpb25SZWxhdGl2ZVRvKHNsaWRlc0NvbnRhaW5lcikueDtcblxuICAgICAgICAgICAgbGV0IGFjdGlvblF1ZXVlID0gc2xpZGVzLm1hcCgoc2xpZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNsaWRlLmdldEVsZW1lbnQoKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlOntcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNsaWRlLmdldEVsZW1lbnQoKS50cmFuc2xhdGVYIC0gZGlzdGFuY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlT3V0LFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5hbmltYXRlRHVyYXRpb24gPT09IHVuZGVmaW5lZCA/IDI1MCA6IHRoaXMuYW5pbWF0ZUR1cmF0aW9uXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBQcm9taXNlLmFsbChhY3Rpb25RdWV1ZSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZWRJdGVtSW5kZXggPSB0YXJnZXRJbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGVmaW5pc2hlZC5lbWl0KHRoaXMuYWN0aXZlZEl0ZW1JbmRleCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkFuaW1hdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHN1YmplY3QubmV4dCh0aGlzLmFjdGl2ZWRJdGVtSW5kZXgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkFuaW1hdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHN1YmplY3QuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3ViamVjdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgbW92ZVRvKGluZGV4OiBudW1iZXIpOiBTdWJqZWN0PG51bWJlcj57XG4gICAgICAgIGxldCBzdGVwcyA9IGluZGV4IC0gdGhpcy5hY3RpdmVkSXRlbUluZGV4O1xuICAgICAgICByZXR1cm4gdGhpcy5tb3ZlKHN0ZXBzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0SW5pdChpbml0SW5kZXg6IG51bWJlcil7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdmVUbyhpbml0SW5kZXgpO1xuICAgIH1cbn0iXX0=