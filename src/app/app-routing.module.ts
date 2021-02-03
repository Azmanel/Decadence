import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { Blog1Component } from './blog1/blog1.component';
import { Blog2Component } from './blog2/blog2.component';
import { Blog3Component } from './blog3/blog3.component';
import { Blog4Component } from './blog4/blog4.component';
import { BlogsComponent } from './blogs/blogs.component';
import { EditorComponent } from './editor/editor.component';
import { IndexComponent } from './index/index.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {path: "", component: IndexComponent},
  {path: "index", redirectTo: '', pathMatch:'full'},
  {path: "info", component: InfoComponent},
  {path: "blog", component: BlogComponent},
  {path: "blog1", component: Blog1Component},
  {path: "blog2", component: Blog2Component},
  {path: "blog3", component: Blog3Component},
  {path: "blog4", component: Blog4Component},
  {path: "blogs", component: BlogsComponent},
  {path: "editor", component: EditorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
