"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var class_validator_1 = require("class-validator");
var ValidatorBasicComponent = (function () {
    function ValidatorBasicComponent(arg) {
        this.listErrors = [];
        this.model = arg;
    }
    ValidatorBasicComponent.prototype.validate = function () {
        var _this = this;
        try {
            class_validator_1.validate(this.model).then(function (errors) {
                if (errors.length > 0) {
                    _this.listErrors = errors;
                    _this.verificationFailed();
                }
                else {
                    _this.listErrors = [];
                    _this.afterValidate();
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    ValidatorBasicComponent.prototype.verificationFailed = function () {
    };
    ValidatorBasicComponent.prototype.afterValidate = function () {
    };
    return ValidatorBasicComponent;
}());
exports.ValidatorBasicComponent = ValidatorBasicComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLWJhc2ljLWNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZhbGlkYXRvci1iYXNpYy1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBNEQ7QUFJNUQ7SUFNQyxpQ0FBWSxHQUFNO1FBRmxCLGVBQVUsR0FBMkIsRUFBRSxDQUFDO1FBR3ZDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBQ2xCLENBQUM7SUFFRCwwQ0FBUSxHQUFSO1FBQUEsaUJBY0M7UUFiQSxJQUFJLENBQUM7WUFDSiwwQkFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO2dCQUMvQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLEtBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO29CQUN6QixLQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztnQkFDM0IsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDUCxLQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztvQkFDckIsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUN0QixDQUFDO1lBQ0YsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDO1FBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsQ0FBQztJQUNGLENBQUM7SUFFRCxvREFBa0IsR0FBbEI7SUFFQSxDQUFDO0lBRUQsK0NBQWEsR0FBYjtJQUVBLENBQUM7SUFDRiw4QkFBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0M7QUFqQ3FCLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25FcnJvciwgdmFsaWRhdGUgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuaW1wb3J0IHsgVmFsaWRhdG9yQmFzaWNNb2RlbCB9IGZyb20gXCIuL3ZhbGlkYXRvci1iYXNpYy1tb2RlbFwiO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBWYWxpZGF0b3JCYXNpY0NvbXBvbmVudDxUIGV4dGVuZHMgVmFsaWRhdG9yQmFzaWNNb2RlbD4ge1xuXG5cdG1vZGVsOiBUO1xuXG5cdGxpc3RFcnJvcnM6IEFycmF5PFZhbGlkYXRpb25FcnJvcj4gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihhcmc6IFQpIHtcblx0XHR0aGlzLm1vZGVsID0gYXJnO1xuXHR9XG5cblx0dmFsaWRhdGUoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHZhbGlkYXRlKHRoaXMubW9kZWwpLnRoZW4oZXJyb3JzID0+IHtcblx0XHRcdFx0aWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0dGhpcy5saXN0RXJyb3JzID0gZXJyb3JzO1xuXHRcdFx0XHRcdHRoaXMudmVyaWZpY2F0aW9uRmFpbGVkKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5saXN0RXJyb3JzID0gW107XG5cdFx0XHRcdFx0dGhpcy5hZnRlclZhbGlkYXRlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdH1cblx0fVxuXG5cdHZlcmlmaWNhdGlvbkZhaWxlZCgpIHtcblxuXHR9XG5cblx0YWZ0ZXJWYWxpZGF0ZSgpIHtcblxuXHR9XG59Il19