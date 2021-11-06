import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/Post';

@Injectable({providedIn: 'root'})
export class PostDataService extends DefaultDataService<Post> {
    constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
        super('Post', http, httpUrlGenerator);
    }

}
