import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "TestLabel",
    template: `
    <Label class="h4" [text]="test"></Label>
    `
})

export class TestLabel {
    test = 'test';
}
