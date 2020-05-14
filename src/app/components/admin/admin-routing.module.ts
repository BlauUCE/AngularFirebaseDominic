import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ListPostModule } from '../posts/list-post/list-post.module';

const routes: Routes = [
  { path: '', component: AdminComponent,
    children: [
      { path: "posts",
        loadChildren: ('../posts/list-posts/list-posts.module.ts').then(
          m => ListPostModule
        )
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
