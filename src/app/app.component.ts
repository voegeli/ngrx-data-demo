import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PostEntityService } from 'src/app/data/post-entity.service';
import { Post } from 'src/app/models/Post';
import { AppState } from 'src/app/state/app.state';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'ngrx-data-demo';

    posts: Observable<Post[]>;

    constructor(private _store: Store<AppState>, private _postService: PostEntityService) {
        this.posts = this._postService.entities$;
    }

    ngOnInit(): void {
        this._postService
            .getAll()
            .subscribe();
    }


}
