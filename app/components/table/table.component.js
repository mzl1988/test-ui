"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TableComponent = (function () {
    function TableComponent() {
        this.cellClicked = new core_1.EventEmitter();
    }
    TableComponent.prototype.ngOnInit = function () {
    };
    TableComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        // console.dir(this.columns);
        // console.dir(this.rows);
        if (changes.hasOwnProperty('columns')) {
            this.gridLayoutColumns = [];
            this.gridLayoutRows = [];
            this.gridLayoutRows.push('*');
            this.columns.forEach(function (column) {
                var width = column.width ? column.width : '*';
                _this.gridLayoutColumns.push(width);
            });
            this.rows.forEach(function (row) {
                var height = row.height ? row.height : '*';
                _this.gridLayoutRows.push(height);
            });
            // console.log(String(this.gridLayoutColumns));
            // console.log(String(this.gridLayoutRows));
        }
    };
    TableComponent.prototype.cellTap = function (data, rowIndex) {
        this.cellClicked.emit({ rowIndex: rowIndex, data: data });
        // let page = <Page>frame.topmost().currentPage;
        // let stackLayout: StackLayout = <StackLayout>page.getViewById(`table_row_${rowIndex}`);
        // let duration = 300;
        // stackLayout.animate({
        //     backgroundColor: new Color("#CFCFCF"),
        //     duration: duration,
        // }).then(() => {
        //     stackLayout.animate({
        //         backgroundColor: new Color("#F3F3F3"),
        //         duration: duration,
        //     })
        // }).catch((e) => {
        //     console.log(e.message);
        // });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], TableComponent.prototype, "columns", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], TableComponent.prototype, "rows", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], TableComponent.prototype, "cellClicked", void 0);
    TableComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Table',
            templateUrl: './table.component.html',
            styleUrls: ['./table.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlHO0FBYXpHO0lBT0k7UUFKVSxnQkFBVyxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQU05RCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQVksT0FBc0I7UUFBbEMsaUJBb0JDO1FBbkJHLDZCQUE2QjtRQUM3QiwwQkFBMEI7UUFDMUIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQTtZQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUU5QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLE1BQU07Z0JBQ3ZCLElBQUksS0FBSyxHQUFRLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQ25ELEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkMsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7Z0JBQ2pCLElBQUksTUFBTSxHQUFRLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7Z0JBQ2hELEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsK0NBQStDO1lBQy9DLDRDQUE0QztRQUNoRCxDQUFDO0lBRUwsQ0FBQztJQUVELGdDQUFPLEdBQVAsVUFBUSxJQUFTLEVBQUUsUUFBZ0I7UUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzFELGdEQUFnRDtRQUNoRCx5RkFBeUY7UUFDekYsc0JBQXNCO1FBQ3RCLHdCQUF3QjtRQUN4Qiw2Q0FBNkM7UUFDN0MsMEJBQTBCO1FBQzFCLGtCQUFrQjtRQUNsQiw0QkFBNEI7UUFDNUIsaURBQWlEO1FBQ2pELDhCQUE4QjtRQUM5QixTQUFTO1FBQ1Qsb0JBQW9CO1FBQ3BCLDhCQUE4QjtRQUM5QixNQUFNO0lBR1YsQ0FBQztJQXREUTtRQUFSLFlBQUssRUFBRTtrQ0FBVSxLQUFLO21EQUFNO0lBQ3BCO1FBQVIsWUFBSyxFQUFFO2tDQUFPLEtBQUs7Z0RBQU07SUFDaEI7UUFBVCxhQUFNLEVBQUU7a0NBQWMsbUJBQVk7dURBQTJCO0lBSHJELGNBQWM7UUFQMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsT0FBTztZQUNqQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3ZDLENBQUM7O09BRVcsY0FBYyxDQXlEMUI7SUFBRCxxQkFBQztDQUFBLEFBekRELElBeURDO0FBekRZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgZnJhbWUgPSByZXF1aXJlKCd1aS9mcmFtZScpO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdUYWJsZScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi90YWJsZS5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgICBASW5wdXQoKSBjb2x1bW5zOiBBcnJheTxhbnk+O1xuICAgIEBJbnB1dCgpIHJvd3M6IEFycmF5PGFueT47XG4gICAgQE91dHB1dCgpIGNlbGxDbGlja2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBncmlkTGF5b3V0Q29sdW1uczogQXJyYXk8YW55PjtcbiAgICBncmlkTGF5b3V0Um93czogQXJyYXk8YW55PjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIC8vIGNvbnNvbGUuZGlyKHRoaXMuY29sdW1ucyk7XG4gICAgICAgIC8vIGNvbnNvbGUuZGlyKHRoaXMucm93cyk7XG4gICAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdjb2x1bW5zJykpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZExheW91dENvbHVtbnMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuZ3JpZExheW91dFJvd3MgPSBbXVxuICAgICAgICAgICAgdGhpcy5ncmlkTGF5b3V0Um93cy5wdXNoKCcqJyk7XG5cbiAgICAgICAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHdpZHRoOiBhbnkgPSBjb2x1bW4ud2lkdGggPyBjb2x1bW4ud2lkdGggOiAnKic7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkTGF5b3V0Q29sdW1ucy5wdXNoKHdpZHRoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5yb3dzLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaGVpZ2h0OiBhbnkgPSByb3cuaGVpZ2h0ID8gcm93LmhlaWdodCA6ICcqJztcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRMYXlvdXRSb3dzLnB1c2goaGVpZ2h0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coU3RyaW5nKHRoaXMuZ3JpZExheW91dENvbHVtbnMpKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFN0cmluZyh0aGlzLmdyaWRMYXlvdXRSb3dzKSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNlbGxUYXAoZGF0YTogYW55LCByb3dJbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuY2VsbENsaWNrZWQuZW1pdCh7IHJvd0luZGV4OiByb3dJbmRleCwgZGF0YTogZGF0YSB9KTtcbiAgICAgICAgLy8gbGV0IHBhZ2UgPSA8UGFnZT5mcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2U7XG4gICAgICAgIC8vIGxldCBzdGFja0xheW91dDogU3RhY2tMYXlvdXQgPSA8U3RhY2tMYXlvdXQ+cGFnZS5nZXRWaWV3QnlJZChgdGFibGVfcm93XyR7cm93SW5kZXh9YCk7XG4gICAgICAgIC8vIGxldCBkdXJhdGlvbiA9IDMwMDtcbiAgICAgICAgLy8gc3RhY2tMYXlvdXQuYW5pbWF0ZSh7XG4gICAgICAgIC8vICAgICBiYWNrZ3JvdW5kQ29sb3I6IG5ldyBDb2xvcihcIiNDRkNGQ0ZcIiksXG4gICAgICAgIC8vICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgIC8vIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAvLyAgICAgc3RhY2tMYXlvdXQuYW5pbWF0ZSh7XG4gICAgICAgIC8vICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBuZXcgQ29sb3IoXCIjRjNGM0YzXCIpLFxuICAgICAgICAvLyAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xuICAgICAgICAvLyB9KTtcblxuXG4gICAgfVxuXG59Il19