
import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '../login/login.component';
import { SurveyComponent } from '../survey/survey.component';
import { HrqolComponent } from '../hrqol/hrqol.component';
import { CatComponent } from '../cat/cat.component';
import { EconomicComponent } from '../economic/economic.component';
import { GosComponent } from '../gos/gos.component';
import { PsychosocialComponent } from '../psychosocial/psychosocial.component';
import { RespiratoryFLComponent } from '../respiratoryFL/respiratoryFL.component';
import { RespiratorySComponent } from '../respiratoryS/respiratoryS.component';
import { HomeComponent } from '../home/home.component';
const routes: Routes = [
  { path: 'survey', component: SurveyComponent },
  { path: 'login', component: LoginComponent },
  { path: 'hrqol', component: HrqolComponent },
  { path: 'cat', component: CatComponent },
  { path: 'economic', component: EconomicComponent },
  { path: 'gos', component: GosComponent},
  { path: 'psychosocial', component: PsychosocialComponent},
  { path: 'respiratoryFL', component: RespiratoryFLComponent},
  { path: 'respiratoryS', component: RespiratorySComponent},
  { path: 'home', component: HomeComponent},
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