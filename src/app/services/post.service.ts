import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/model/post';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class PostService {
  posturl = 'https://jsonplaceholder.typicode.com/posts';
  puturl = 'https://jsonplaceholder.typicode.com/posts/1';

  constructor(private http: HttpClient) { }

  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.posturl);
  }
  savePost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.posturl, post, httpOption);
  }
  updatePost(post: Post): Observable<Post> {
    const url = `${this.posturl}/${post.id}`;
    return this.http.put<Post>(url, post, httpOption);
  }
  removePost(post: Post | number): Observable<Post> {
    const id = typeof post === 'number' ? post : post.id;
    const url = `${this.posturl}/${id}`;
    return this.http.delete<Post>(url, httpOption);
  }
}
