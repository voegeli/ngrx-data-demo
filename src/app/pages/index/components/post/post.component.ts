import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent {

    @Input()
    post: Post | undefined;

    @Output()
    removePostChange = new EventEmitter<Post>();

    onRemovePost(): void {
        this.removePostChange.emit(this.post);
    }

}
