import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostEntityService } from 'src/app/data/post-entity.service';
import { Post } from 'src/app/models/Post';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

    post: Post = {}

    constructor(private _postEntityService: PostEntityService, private _router: Router) {
    }

    ngOnInit(): void {
    }

    onPostChange($event: Post) {
        this._postEntityService
            .add($event)
            .subscribe(() => this._router.navigate(['/']))
    }

}
