import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from '../ngRx/reducers/posts.reducer';

const routes: Routes = [{ path: '', component: PostsComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    StoreModule.forFeature("posts", postsReducer)
  ],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
