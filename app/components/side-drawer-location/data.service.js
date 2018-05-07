"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mock_data_1 = require("./mock-data");
var DataService = (function () {
    function DataService() {
    }
    DataService.prototype.getDrawerLocations = function () {
        return mock_data_1.LOCATIONS;
    };
    DataService = __decorate([
        core_1.Injectable()
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHlDQUF3QztBQUl4QztJQUFBO0lBSUEsQ0FBQztJQUhJLHdDQUFrQixHQUFsQjtRQUNHLE1BQU0sQ0FBQyxxQkFBUyxDQUFDO0lBQ3JCLENBQUM7SUFIUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7T0FDQSxXQUFXLENBSXZCO0lBQUQsa0JBQUM7Q0FBQSxBQUpELElBSUM7QUFKWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExPQ0FUSU9OUyB9IGZyb20gXCIuL21vY2stZGF0YVwiO1xuaW1wb3J0IHsgU2lkZURyYXdlckxvY2F0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNlIHtcbiAgICAgZ2V0RHJhd2VyTG9jYXRpb25zKCk6IFNpZGVEcmF3ZXJMb2NhdGlvbltdIHtcbiAgICAgICAgcmV0dXJuIExPQ0FUSU9OUztcbiAgICB9XG59Il19