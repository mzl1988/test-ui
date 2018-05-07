"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DemicalMarkerDirective = (function () {
    function DemicalMarkerDirective() {
    }
    DemicalMarkerDirective.prototype.transform = function (value) {
        return value.toString().replace(/(?=(?!^)(\d{3})+$)/g, ',');
    };
    DemicalMarkerDirective = __decorate([
        core_1.Pipe({
            name: 'decimalMarker'
        })
    ], DemicalMarkerDirective);
    return DemicalMarkerDirective;
}());
exports.DemicalMarkerDirective = DemicalMarkerDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjaW1hbE1hcmtlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZWNpbWFsTWFya2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRDtBQU1wRDtJQUFBO0lBSUEsQ0FBQztJQUhHLDBDQUFTLEdBQVQsVUFBVSxLQUFhO1FBQ25CLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQy9ELENBQUM7SUFIUSxzQkFBc0I7UUFKbEMsV0FBSSxDQUFDO1lBQ0YsSUFBSSxFQUFFLGVBQWU7U0FDeEIsQ0FBQztPQUVXLHNCQUFzQixDQUlsQztJQUFELDZCQUFDO0NBQUEsQUFKRCxJQUlDO0FBSlksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gICAgbmFtZTogJ2RlY2ltYWxNYXJrZXInXG59KVxuXG5leHBvcnQgY2xhc3MgRGVtaWNhbE1hcmtlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm17XG4gICAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIpOiBzdHJpbmd7XG4gICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpLnJlcGxhY2UoLyg/PSg/IV4pKFxcZHszfSkrJCkvZywgJywnKVxuICAgIH1cbn0iXX0=