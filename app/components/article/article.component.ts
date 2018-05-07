import { Component, Input } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'Article',
    templateUrl: './article.component.html'
})

export class ArticleComponent {

    @Input('category') category: string;
    @Input('title') title: string;
    @Input('postDate') postDate: string;
    @Input('postUser') postUser: string;
    @Input('content') content: string;

    constructor() {
    }

}