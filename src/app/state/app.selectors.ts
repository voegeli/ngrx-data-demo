import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';

export const selectAppState = createFeatureSelector<AppState>('AppState');

export const getSelectedPost = createSelector(
    selectAppState,
    state => state.selectedPost
)

export const getSelectedComment = createSelector(
    selectAppState,
    state => state.selectedComment
)
