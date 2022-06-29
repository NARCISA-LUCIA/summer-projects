import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HowIAmDoingComponent } from './how-i-am-doing/how-i-am-doing.component';


const routes: Routes = [
  { path: 'how-i-am-doing', component: HowIAmDoingComponent },
  { path: 'blog', component: BlogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
