import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as PostsActions from '../ngRx/actions/posts.actions';
import { Observable, of } from 'rxjs';
import { isLoadingSelector } from '../ngRx/selectors/posts.selectors';
import { AppStateInterface } from '../ngRx/states/AppState';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  implements OnInit{
  isLoading$: Observable<boolean>=of(false);
  constructor(private store: Store<AppStateInterface>){
    this.isLoading$=this.store.pipe(select(isLoadingSelector))
  }
  ngOnInit(): void {
    this.store.dispatch(PostsActions.getPosts())
  }

  
}
