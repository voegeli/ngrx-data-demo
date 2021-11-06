import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { PostEntityService } from 'src/app/data/post-entity.service';
import { Post } from 'src/app/models/Post';


@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss'],
})
export class EditComponent {

    post: Post = {}
    id = -1

    constructor(private _postEntityService: PostEntityService, private _route: ActivatedRoute, private _router: Router) {
        this.id = +(this._route.snapshot.paramMap.get('id') as string);
        this._postEntityService.getByKey(this.id).subscribe(post => this.post = _.cloneDeep(post));
    }

    onPostChange($event: Post) {
        this._postEntityService
            .update($event)
            .subscribe(() => this._router.navigate(['/']))
    }
}
