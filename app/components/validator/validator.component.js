"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ValidatorComponent = (function () {
    function ValidatorComponent() {
        this.listErrors = [];
    }
    ValidatorComponent.prototype.ngOnInit = function () {
    };
    ValidatorComponent.prototype.ngOnChanges = function () {
        this.prepareMessage();
    };
    ValidatorComponent.prototype.prepareMessage = function () {
        this.isItemVisible = false;
        try {
            if (this.listErrors != null && this.listErrors.length > 0) {
                var validationError = this.getValidateError(this.property);
                if (validationError != null && validationError.constraints != null) {
                    var constraints = validationError.constraints;
                    for (var item in constraints) {
                        this.message = constraints[item];
                        this.isItemVisible = true;
                        break;
                    }
                }
            }
        }
        catch (e) {
            console.log(e);
        }
    };
    ValidatorComponent.prototype.getValidateError = function (property) {
        return this.listErrors.filter(function (item) { return item.property === property; })[0];
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], ValidatorComponent.prototype, "listErrors", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ValidatorComponent.prototype, "property", void 0);
    ValidatorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Validator',
            templateUrl: './validator.component.html',
            styleUrls: ['./validator.component.css']
        })
    ], ValidatorComponent);
    return ValidatorComponent;
}());
exports.ValidatorComponent = ValidatorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZhbGlkYXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0U7QUFVcEU7SUFQQTtRQVFhLGVBQVUsR0FBMkIsRUFBRSxDQUFDO0lBbUNyRCxDQUFDO0lBOUJHLHFDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsd0NBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU8sMkNBQWMsR0FBdEI7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUM7WUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCxJQUFJLGVBQWUsR0FBb0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDNUUsRUFBRSxDQUFDLENBQUMsZUFBZSxJQUFJLElBQUksSUFBSSxlQUFlLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ2pFLElBQUksV0FBVyxHQUFRLGVBQWUsQ0FBQyxXQUFXLENBQUM7b0JBQ25ELEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQzt3QkFDMUIsS0FBSyxDQUFDO29CQUNWLENBQUM7Z0JBQ0wsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDO1FBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsQ0FBQztJQUNMLENBQUM7SUFFTyw2Q0FBZ0IsR0FBeEIsVUFBeUIsUUFBZ0I7UUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQTFCLENBQTBCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBakNRO1FBQVIsWUFBSyxFQUFFO2tDQUFhLEtBQUs7MERBQXVCO0lBQ3hDO1FBQVIsWUFBSyxFQUFFOzt3REFBa0I7SUFGakIsa0JBQWtCO1FBUDlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUMzQyxDQUFDO09BRVcsa0JBQWtCLENBb0M5QjtJQUFELHlCQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7QUFwQ1ksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHZhbGlkYXRlLCBWYWxpZGF0aW9uRXJyb3IgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdWYWxpZGF0b3InLFxuICAgIHRlbXBsYXRlVXJsOiAnLi92YWxpZGF0b3IuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3ZhbGlkYXRvci5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gICAgQElucHV0KCkgbGlzdEVycm9yczogQXJyYXk8VmFsaWRhdGlvbkVycm9yPiA9IFtdO1xuICAgIEBJbnB1dCgpIHByb3BlcnR5OiBzdHJpbmc7XG4gICAgaXNJdGVtVmlzaWJsZTogYm9vbGVhbjtcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcygpIHtcbiAgICAgICAgdGhpcy5wcmVwYXJlTWVzc2FnZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcHJlcGFyZU1lc3NhZ2UoKSB7XG4gICAgICAgIHRoaXMuaXNJdGVtVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGlzdEVycm9ycyAhPSBudWxsICYmIHRoaXMubGlzdEVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbGlkYXRpb25FcnJvcjogVmFsaWRhdGlvbkVycm9yID0gdGhpcy5nZXRWYWxpZGF0ZUVycm9yKHRoaXMucHJvcGVydHkpO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uRXJyb3IgIT0gbnVsbCAmJiB2YWxpZGF0aW9uRXJyb3IuY29uc3RyYWludHMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY29uc3RyYWludHM6IGFueSA9IHZhbGlkYXRpb25FcnJvci5jb25zdHJhaW50cztcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBpbiBjb25zdHJhaW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gY29uc3RyYWludHNbaXRlbV07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzSXRlbVZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRWYWxpZGF0ZUVycm9yKHByb3BlcnR5OiBzdHJpbmcpOiBWYWxpZGF0aW9uRXJyb3Ige1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0RXJyb3JzLmZpbHRlcihpdGVtID0+IGl0ZW0ucHJvcGVydHkgPT09IHByb3BlcnR5KVswXTtcbiAgICB9XG5cbn0iXX0=