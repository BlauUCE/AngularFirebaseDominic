import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './components/posts/post/post.component';


const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',
    loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },

  //no se necesita
  //{ path: 'posts',
  //  loadChildren: () => import('./components/posts/list-post/list-post.module').then(m => m.ListPostModule) }];

  { path: 'post/:id', component: PostComponent},
  { path: 'about',
    loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
