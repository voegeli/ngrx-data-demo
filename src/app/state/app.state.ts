import { Comment } from 'src/app/models/Comment';
import { Post } from 'src/app/models/Post';

export interface AppState {
    selectedPost: Post;
    selectedComment: Comment;
}
