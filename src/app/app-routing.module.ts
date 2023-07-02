import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ 
  path: '',
  children:[
    {
      path: "posts",
      loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
    },
    { 
      path: 'rxjs', 
      loadChildren: () => import('./rxjs/rxjs.module').then(m => m.RxjsModule) 
    }
  ]
},]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
