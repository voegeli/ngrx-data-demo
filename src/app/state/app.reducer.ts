import { Action, createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';
import { AppState } from './app.state';

export const initialState: AppState = {
    selectedComment: undefined!,
    selectedPost: undefined!
}

export const reducer = createReducer(
    initialState,
    on(AppActions.setSelectedPost, (state, action) => {
        return {
            ...state,
            selectedPost: action.post
        }
    }),
    on(AppActions.setSelectedComment, (state, action) => {
        return {
            ...state,
            selectedComment: action.comment
        }
    })
)

export function appReducer(state: AppState | undefined, action: Action): any {
    return reducer(state, action);
}
