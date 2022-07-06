import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HowIAmDoingComponent } from './how-i-am-doing/how-i-am-doing.component';
import { EducationComponent } from './education/education.component';
import { PortofolioComponent } from './portofolio/portofolio.component';

const routes: Routes = [
  { path: 'how-i-am-doing', component: HowIAmDoingComponent },
  { path: 'blog', component: BlogComponent},
  { path: 'education', component: EducationComponent },
  { path: 'portofolio', component: PortofolioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
