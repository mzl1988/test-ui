import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppUIModule } from "./app.module";

platformNativeScriptDynamic({ createFrameOnBootstrap: true }).bootstrapModule(AppUIModule);
