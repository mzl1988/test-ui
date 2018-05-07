import { Component, ElementRef, ViewChild, Injectable, AfterViewInit, OnInit, OnChanges, ChangeDetectorRef, Input, SimpleChanges } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { RadSideDrawer, DrawerStateChangedEventArgs, SideDrawerLocation } from "nativescript-pro-ui/sidedrawer";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataService } from "./data.service";
import { DependencyObservable, Property, PropertyMetadataSettings } from "tns-core-modules/ui/core/dependency-observable";


@Component({
    moduleId: module.id,
    selector: 'SideDrawerLocation',
    templateUrl: './side-drawer-location.component.html',
    providers: [DataService],
    styleUrls: [
        './side-drawer-location.component.css'
    ]
})

export class SideDrawerLocationComponent implements AfterViewInit, OnInit, OnChanges {
    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;
    @Input() gesturesEnabled = true;
    @Input() location: string
    @Input() drawerContentSize: number;
    private _currentLocation: SideDrawerLocation;

    constructor(private page: Page, private _dataService: DataService, private _changeDetectionRef: ChangeDetectorRef) {
        this.page.on("loaded", this.onLoaded, this);
    }

    public onLoaded() {
        if (this.drawer.android) {
            this.drawer.android.setDrawerCloseThreshold(20);
        }
    }

    ngOnInit() {

    }

    

    ngOnChanges(changes: SimpleChanges) {
        this.location = this.location || 'bottom';
        this.currentLocation = SideDrawerLocation.Bottom;
        this.drawer = this.drawerComponent.sideDrawer;
        this.drawer.gesturesEnabled = this.gesturesEnabled;
        if(this.drawerContentSize) {
            console.log('drawerContentSize: ' + this.drawerContentSize);
            this.drawer.drawerContentSize = this.drawerContentSize;
        }
        this._changeDetectionRef.detectChanges();
    }

    ngAfterViewInit() {
    }

    get currentLocation(): SideDrawerLocation {
        return this._currentLocation;
    }

    set currentLocation(value: SideDrawerLocation) {
        this._currentLocation = value;
    }

    public onDrawerOpened(args: DrawerStateChangedEventArgs) {
        this.drawer.gesturesEnabled = true;
    }

    public onDrawerClosed(args: DrawerStateChangedEventArgs) {
        this.drawer.gesturesEnabled = this.gesturesEnabled;
    }

    public onCloseDrawerTap() {
        this.drawer.closeDrawer();
    }

    public onRightLocationTap() {
        this.currentLocation = SideDrawerLocation.Right;
        this._changeDetectionRef.detectChanges();

        this.drawer.showDrawer();
    }

    public onLeftLocationTap() {
        this.currentLocation = SideDrawerLocation.Left;
        this._changeDetectionRef.detectChanges();

        this.drawer.showDrawer();
    }

    public onBottomLocationTap() {
        this.currentLocation = SideDrawerLocation.Bottom;
        this._changeDetectionRef.detectChanges();

        this.drawer.showDrawer();
    }

    public onTopLocationTap() {
        this.currentLocation = SideDrawerLocation.Top;
        this._changeDetectionRef.detectChanges();

        this.drawer.showDrawer();
    }

    public onLocationTap() {
        switch (this.location) {
            case 'left':
                this.onLeftLocationTap();
                break;
            case 'right':
                this.onRightLocationTap();
                break;
            case 'top':
                this.onTopLocationTap();
                break;
            case 'bottom':
                this.onBottomLocationTap();
                break;
            default:
                break;
        }
    }
}