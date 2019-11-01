
import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '../login/login.component';
import { SurveyComponent } from '../survey/survey.component';
import { HrqolComponent } from '../hrqol/hrqol.component';
import { CatComponent } from '../cat/cat.component';
import { EconomicComponent } from '../economic/economic.component';
const routes: Routes = [
  { path: 'survey', component: SurveyComponent },
  { path: 'login', component: LoginComponent },
  { path: 'hrqol', component: HrqolComponent },
  { path: 'cat', component: CatComponent },
  { path: 'economic', component: EconomicComponent },
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