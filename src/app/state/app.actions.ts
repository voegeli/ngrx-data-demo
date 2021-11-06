import { createAction, props } from '@ngrx/store';
import { Comment } from 'src/app/models/Comment';
import { Post } from 'src/app/models/Post';

export const setSelectedPost = createAction(
    '[App] Set selected Post',
    props<{ post: Post | undefined }>()
)
export const setSelectedComment = createAction(
    '[App] Set selected Comment',
    props<{ comment: Comment | undefined }>()
)
