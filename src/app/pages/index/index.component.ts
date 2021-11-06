import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PostEntityService } from 'src/app/data/post-entity.service';
import { Post } from 'src/app/models/Post';
import { setSelectedPost } from 'src/app/state/app.actions';
import { AppState } from 'src/app/state/app.state';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    posts$: Observable<Post[]>;

    constructor(private _store: Store<AppState>, private _postService: PostEntityService, private _router: Router) {
        this.posts$ = this._postService.entities$;
    }

    ngOnInit(): void {
        this._postService
            .getAll()
            .subscribe();
    }

    onRemovePost(post: Post): void {
        this._postService.delete(post).subscribe();
    }

    onAddNewPost() {
        this._router.navigate(['create'])
    }


    onSelectPost(post: Post) {
        this._store.dispatch(setSelectedPost({post}));
    }
}
