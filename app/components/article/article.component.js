"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ArticleComponent = (function () {
    function ArticleComponent() {
    }
    __decorate([
        core_1.Input('category'),
        __metadata("design:type", String)
    ], ArticleComponent.prototype, "category", void 0);
    __decorate([
        core_1.Input('title'),
        __metadata("design:type", String)
    ], ArticleComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input('postDate'),
        __metadata("design:type", String)
    ], ArticleComponent.prototype, "postDate", void 0);
    __decorate([
        core_1.Input('postUser'),
        __metadata("design:type", String)
    ], ArticleComponent.prototype, "postUser", void 0);
    __decorate([
        core_1.Input('content'),
        __metadata("design:type", String)
    ], ArticleComponent.prototype, "content", void 0);
    ArticleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Article',
            templateUrl: './article.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], ArticleComponent);
    return ArticleComponent;
}());
exports.ArticleComponent = ArticleComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aWNsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcnRpY2xlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRDtBQVNqRDtJQVFJO0lBQ0EsQ0FBQztJQVBrQjtRQUFsQixZQUFLLENBQUMsVUFBVSxDQUFDOztzREFBa0I7SUFDcEI7UUFBZixZQUFLLENBQUMsT0FBTyxDQUFDOzttREFBZTtJQUNYO1FBQWxCLFlBQUssQ0FBQyxVQUFVLENBQUM7O3NEQUFrQjtJQUNqQjtRQUFsQixZQUFLLENBQUMsVUFBVSxDQUFDOztzREFBa0I7SUFDbEI7UUFBakIsWUFBSyxDQUFDLFNBQVMsQ0FBQzs7cURBQWlCO0lBTnpCLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7U0FDMUMsQ0FBQzs7T0FFVyxnQkFBZ0IsQ0FXNUI7SUFBRCx1QkFBQztDQUFBLEFBWEQsSUFXQztBQVhZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnQXJ0aWNsZScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FydGljbGUuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgQXJ0aWNsZUNvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoJ2NhdGVnb3J5JykgY2F0ZWdvcnk6IHN0cmluZztcbiAgICBASW5wdXQoJ3RpdGxlJykgdGl0bGU6IHN0cmluZztcbiAgICBASW5wdXQoJ3Bvc3REYXRlJykgcG9zdERhdGU6IHN0cmluZztcbiAgICBASW5wdXQoJ3Bvc3RVc2VyJykgcG9zdFVzZXI6IHN0cmluZztcbiAgICBASW5wdXQoJ2NvbnRlbnQnKSBjb250ZW50OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbn0iXX0=