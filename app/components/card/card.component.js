"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var file = require("tns-core-modules/file-system");
var CardComponent = (function () {
    function CardComponent() {
        this.cssClasses = '';
        this.loadMode = 'async';
        this.tap = new core_1.EventEmitter();
        this.swipe = new core_1.EventEmitter();
        this.pan = new core_1.EventEmitter();
    }
    CardComponent.prototype.ngOnInit = function () {
        this.updateImage();
    };
    CardComponent.prototype.ngOnChanges = function () {
        this.updateImage();
    };
    CardComponent.prototype.updateImage = function () {
        if (this.image) {
            this.imageSrc = this.image;
        }
        else if (this.placeholder) {
            this.imageSrc = this.placeholder;
        }
        else {
            this.imageSrc = file.path.join(__dirname, '../../images/dataError.png');
        }
    };
    CardComponent.prototype.onTap = function (args) {
        this.tap.emit(args);
    };
    CardComponent.prototype.onSwipe = function (args) {
        this.swipe.emit(args);
    };
    __decorate([
        core_1.Input('image'),
        __metadata("design:type", String)
    ], CardComponent.prototype, "image", void 0);
    __decorate([
        core_1.Input('category'),
        __metadata("design:type", String)
    ], CardComponent.prototype, "category", void 0);
    __decorate([
        core_1.Input('title'),
        __metadata("design:type", String)
    ], CardComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input('subtext'),
        __metadata("design:type", String)
    ], CardComponent.prototype, "subtext", void 0);
    __decorate([
        core_1.Input('placeholder'),
        __metadata("design:type", String)
    ], CardComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input('class'),
        __metadata("design:type", String)
    ], CardComponent.prototype, "cssClasses", void 0);
    __decorate([
        core_1.Input('loadMode'),
        __metadata("design:type", String)
    ], CardComponent.prototype, "loadMode", void 0);
    __decorate([
        core_1.Output('tap'),
        __metadata("design:type", core_1.EventEmitter)
    ], CardComponent.prototype, "tap", void 0);
    __decorate([
        core_1.Output('swipe'),
        __metadata("design:type", core_1.EventEmitter)
    ], CardComponent.prototype, "swipe", void 0);
    __decorate([
        core_1.Output('pan'),
        __metadata("design:type", core_1.EventEmitter)
    ], CardComponent.prototype, "pan", void 0);
    CardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Card',
            templateUrl: './card.component.html',
            styleUrls: [
                './card.component.css'
            ]
        })
    ], CardComponent);
    return CardComponent;
}());
exports.CardComponent = CardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzRztBQUV0RyxtREFBcUQ7QUFXckQ7SUFUQTtRQWdCMkIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUNyQixhQUFRLEdBQVcsT0FBTyxDQUFDO1FBRS9CLFFBQUcsR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDMUMsVUFBSyxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUNoRCxRQUFHLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO0lBNkJ0RSxDQUFDO0lBekJHLGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVNLG1DQUFXLEdBQWxCO1FBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUM7WUFDWCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDL0IsQ0FBQztRQUFBLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUEsQ0FBQztZQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDckMsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUcsNEJBQTRCLENBQUMsQ0FBQztRQUM3RSxDQUFDO0lBQ0wsQ0FBQztJQUVNLDZCQUFLLEdBQVosVUFBYSxJQUFJO1FBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVNLCtCQUFPLEdBQWQsVUFBZSxJQUFvQztRQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBdENlO1FBQWYsWUFBSyxDQUFDLE9BQU8sQ0FBQzs7Z0RBQXNCO0lBQ2xCO1FBQWxCLFlBQUssQ0FBQyxVQUFVLENBQUM7O21EQUF5QjtJQUMzQjtRQUFmLFlBQUssQ0FBQyxPQUFPLENBQUM7O2dEQUFzQjtJQUNuQjtRQUFqQixZQUFLLENBQUMsU0FBUyxDQUFDOztrREFBd0I7SUFDbkI7UUFBckIsWUFBSyxDQUFDLGFBQWEsQ0FBQzs7c0RBQTRCO0lBQ2pDO1FBQWYsWUFBSyxDQUFDLE9BQU8sQ0FBQzs7cURBQWdDO0lBQzVCO1FBQWxCLFlBQUssQ0FBQyxVQUFVLENBQUM7O21EQUFtQztJQUV0QztRQUFkLGFBQU0sQ0FBQyxLQUFLLENBQUM7a0NBQWEsbUJBQVk7OENBQTJCO0lBQ2pEO1FBQWhCLGFBQU0sQ0FBQyxPQUFPLENBQUM7a0NBQWUsbUJBQVk7Z0RBQTJCO0lBQ3ZEO1FBQWQsYUFBTSxDQUFDLEtBQUssQ0FBQztrQ0FBYSxtQkFBWTs4Q0FBMkI7SUFaekQsYUFBYTtRQVR6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFO2dCQUNQLHNCQUFzQjthQUN6QjtTQUNKLENBQUM7T0FFVyxhQUFhLENBeUN6QjtJQUFELG9CQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7QUF6Q1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGdlc3R1cmVzIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXMnO1xuaW1wb3J0ICogYXMgZmlsZSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ0NhcmQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtcbiAgICAgICAgJy4vY2FyZC5jb21wb25lbnQuY3NzJ1xuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXG4gICAgQElucHV0KCdpbWFnZScpIHB1YmxpYyBpbWFnZTogc3RyaW5nO1xuICAgIEBJbnB1dCgnY2F0ZWdvcnknKSBwdWJsaWMgY2F0ZWdvcnk6IHN0cmluZztcbiAgICBASW5wdXQoJ3RpdGxlJykgcHVibGljIHRpdGxlOiBzdHJpbmc7XG4gICAgQElucHV0KCdzdWJ0ZXh0JykgcHVibGljIHN1YnRleHQ6IHN0cmluZztcbiAgICBASW5wdXQoJ3BsYWNlaG9sZGVyJykgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gICAgQElucHV0KCdjbGFzcycpIHB1YmxpYyBjc3NDbGFzc2VzOiBzdHJpbmcgPSAnJztcbiAgICBASW5wdXQoJ2xvYWRNb2RlJykgcHVibGljIGxvYWRNb2RlOiBzdHJpbmcgPSAnYXN5bmMnO1xuXG4gICAgQE91dHB1dCgndGFwJykgcHVibGljIHRhcDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgnc3dpcGUnKSBwdWJsaWMgc3dpcGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoJ3BhbicpIHB1YmxpYyBwYW46IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgcHVibGljIGltYWdlU3JjOiBzdHJpbmc7XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLnVwZGF0ZUltYWdlKCk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoKXtcbiAgICAgICAgdGhpcy51cGRhdGVJbWFnZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVJbWFnZSgpe1xuICAgICAgICBpZih0aGlzLmltYWdlKXtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VTcmMgPSB0aGlzLmltYWdlO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLnBsYWNlaG9sZGVyKXtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VTcmMgPSB0aGlzLnBsYWNlaG9sZGVyO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VTcmMgPSBmaWxlLnBhdGguam9pbihfX2Rpcm5hbWUsICAnLi4vLi4vaW1hZ2VzL2RhdGFFcnJvci5wbmcnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblRhcChhcmdzKXtcbiAgICAgICAgdGhpcy50YXAuZW1pdChhcmdzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Td2lwZShhcmdzOiBnZXN0dXJlcy5Td2lwZUdlc3R1cmVFdmVudERhdGEpe1xuICAgICAgICB0aGlzLnN3aXBlLmVtaXQoYXJncyk7XG4gICAgfVxufSJdfQ==