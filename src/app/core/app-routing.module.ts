
import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '../login/login.component';
import { SurveyComponent } from '../survey/survey.component';
import { HrqolComponent } from '../hrqol/hrqol.component';
const routes: Routes = [
  { path: 'survey', component: SurveyComponent },
  { path: 'login', component: LoginComponent },
  { path: 'hrqol', component: HrqolComponent },
  { path: '', component : LoginComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }