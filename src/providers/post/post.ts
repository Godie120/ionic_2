import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../../interfaces/post.interface';

@Injectable()
export class PostProvider {
	urlHttp = 'http://jsonplaceholder.typicode.com/posts';

	constructor(public http: HttpClient) {}

	getPostsHttp() {
		return this.http.get<Post[]>(this.urlHttp);
	}
}
