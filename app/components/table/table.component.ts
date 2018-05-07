import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import frame = require('ui/frame');
import { Page } from 'ui/page';
import { StackLayout } from "ui/layouts/stack-layout";
import { Color } from "color";

@Component({
    moduleId: module.id,
    selector: 'Table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit, OnChanges {
    @Input() columns: Array<any>;
    @Input() rows: Array<any>;
    @Output() cellClicked: EventEmitter<any> = new EventEmitter();
    gridLayoutColumns: Array<any>;
    gridLayoutRows: Array<any>;

    constructor() {

    }

    ngOnInit() {

    }

    ngOnChanges(changes: SimpleChanges) {
        // console.dir(this.columns);
        // console.dir(this.rows);
        if (changes.hasOwnProperty('columns')) {
            this.gridLayoutColumns = [];
            this.gridLayoutRows = []
            this.gridLayoutRows.push('*');

            this.columns.forEach(column => {
                let width: any = column.width ? column.width : '*';
                this.gridLayoutColumns.push(width);
            });
            this.rows.forEach(row => {
                let height: any = row.height ? row.height : '*';
                this.gridLayoutRows.push(height);
            });
            // console.log(String(this.gridLayoutColumns));
            // console.log(String(this.gridLayoutRows));
        }

    }

    cellTap(data: any, rowIndex: number) {
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


    }

}