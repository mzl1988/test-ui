"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("nativescript-angular/forms");
var angular_1 = require("nativescript-checkbox/angular");
var angular_2 = require("nativescript-pro-ui/sidedrawer/angular");
var components_1 = require("../components");
var directives_1 = require("../directives");
var accordion_config_1 = require("../components/accordion/accordion.config");
var radio_group_config_1 = require("../components/radio-group/radio-group.config");
var UIModule = (function () {
    function UIModule() {
    }
    UIModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                angular_1.TNSCheckBoxModule,
                angular_2.NativeScriptUISideDrawerModule,
                forms_1.NativeScriptFormsModule
            ],
            declarations: components_1.Components.concat(directives_1.Directives),
            exports: [
                angular_1.TNSCheckBoxModule
            ].concat(components_1.Components, directives_1.Directives),
            providers: [
                accordion_config_1.AccordionConfig,
                radio_group_config_1.RadioGroupConfig
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], UIModule);
    return UIModule;
}());
exports.UIModule = UIModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidWkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELDBDQUErQztBQUUvQyxvREFBcUU7QUFDckUseURBQWtFO0FBQ2xFLGtFQUF3RjtBQUd4Riw0Q0FBMkM7QUFDM0MsNENBQTJDO0FBRTNDLDZFQUEyRTtBQUMzRSxtRkFBZ0Y7QUEyQmhGO0lBQUE7SUFBd0IsQ0FBQztJQUFaLFFBQVE7UUF6QnBCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxxQkFBWTtnQkFDWiwyQkFBaUI7Z0JBQ2pCLHdDQUE4QjtnQkFDOUIsK0JBQXVCO2FBQzFCO1lBQ0QsWUFBWSxFQUNMLHVCQUFVLFFBQ1YsdUJBQVUsQ0FDaEI7WUFDRCxPQUFPO2dCQUNILDJCQUFpQjtxQkFDZCx1QkFBVSxFQUNWLHVCQUFVLENBQ2hCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLGtDQUFlO2dCQUNmLHFDQUFnQjthQUNuQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BRVcsUUFBUSxDQUFJO0lBQUQsZUFBQztDQUFBLEFBQXpCLElBQXlCO0FBQVosNEJBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFROU0NoZWNrQm94TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNoZWNrYm94L2FuZ3VsYXInO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvbiBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRGlyZWN0aXZlcyB9IGZyb20gJy4uL2RpcmVjdGl2ZXMnO1xuXG5pbXBvcnQgeyBBY2NvcmRpb25Db25maWcgfSBmcm9tICcuLi9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uY29uZmlnJztcbmltcG9ydCB7IFJhZGlvR3JvdXBDb25maWcgfSBmcm9tICcuLi9jb21wb25lbnRzL3JhZGlvLWdyb3VwL3JhZGlvLWdyb3VwLmNvbmZpZyc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFROU0NoZWNrQm94TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgLi4uQ29tcG9uZW50cyxcbiAgICAgICAgLi4uRGlyZWN0aXZlc1xuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBUTlNDaGVja0JveE1vZHVsZSxcbiAgICAgICAgLi4uQ29tcG9uZW50cyxcbiAgICAgICAgLi4uRGlyZWN0aXZlc1xuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEFjY29yZGlvbkNvbmZpZyxcbiAgICAgICAgUmFkaW9Hcm91cENvbmZpZ1xuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIFVJTW9kdWxlIHsgfSJdfQ==