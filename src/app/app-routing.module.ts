import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { SkillComponent } from './component/skill/skill.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { PortofioComponent } from './component/portofio/portofio.component';
import { EducationComponent } from './component/education/education.component';
import { ContactComponent } from './component/contact/contact.component';


const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'skill', component: SkillComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'portfolio', component: PortofioComponent },
  { path: 'education', component: EducationComponent },
  { path: 'contact', component: ContactComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],

  declarations: []
})
export class AppRoutingModule { }
