import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';

@Injectable({providedIn: 'root'})
export class CommentDataService extends DefaultDataService<Comment> {
    constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
        super('Comment', http, httpUrlGenerator);
    }
}
