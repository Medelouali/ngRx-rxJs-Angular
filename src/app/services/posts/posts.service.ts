import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { PostInterface } from 'src/app/types/commons';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts$: Observable<Array<PostInterface>>=of([
    { id: 1, title: "The best book ever" },
    { id: 2, title: "The best MacBook Pro ever" },
    { id: 3, title: "The best room to rent" },
    { id: 4, title: "The cat to have ever" },
  ]);

  getPosts():Observable<Array<PostInterface>>{
    return this.posts$.pipe(delay(2000));
  }

}
