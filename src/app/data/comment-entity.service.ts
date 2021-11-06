import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable({providedIn: 'root'})
export class CommentEntityService extends EntityCollectionServiceBase<Comment> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Comment', serviceElementsFactory);
    }
}
