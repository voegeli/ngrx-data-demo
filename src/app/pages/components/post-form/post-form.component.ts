import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Post } from 'src/app/models/Post';

@Component({
    selector: 'app-post-form',
    templateUrl: './post-form.component.html',
    styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

    @Input()
    post: Post = {};

    @Output()
    postChange = new EventEmitter<Post>();


    form = new FormGroup({});
    fields: FormlyFieldConfig[] = [
        {
            key: 'title',
            type: 'input',
            templateOptions: {
                label: 'Titel',
                placeholder: 'Enter Title',
                required: true,
            }
        },
        {
            key: 'author',
            type: 'input',
            templateOptions: {
                label: 'Author',
                placeholder: 'Enter Author',
                required: true,
            }
        },
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

    onSubmit(): void {
        this.postChange.emit(this.post)
    }
}
