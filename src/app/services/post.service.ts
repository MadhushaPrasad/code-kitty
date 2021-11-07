import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiURL: string;
  private apiPath: string;
  private fullUrl: string;

  constructor(private http: HttpClient) {
    this.apiURL = environment.apiURL;
    this.apiPath = environment.postAPIPath;
    this.fullUrl = `${this.apiURL}/${this.apiPath}`;
  }

  /**
   * Create new Post
   * @param post
   */

  public addPost(post: Post) {
    return this.http.post<Post>(this.fullUrl, post);
  }
}
