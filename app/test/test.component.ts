import { Component } from "@angular/core";

@Component({
    selector: "TestLabel",
    template: `
    <Label class="h4" [text]="test"></Label>
    `
})

export class TestLabel {
    test = 'test';
}
