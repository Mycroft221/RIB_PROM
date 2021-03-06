import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './core/material.module';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SurveyComponent } from './survey/survey.component';
import { HrqolComponent } from './hrqol/hrqol.component';
import { CatComponent } from './cat/cat.component';
import { AppRoutingModule } from './core/app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatRadioModule
} from '@angular/material';
import { ApiService } from './api.service';
import { HttpModule } from '@angular/http';
import { EconomicComponent } from './economic/economic.component';
import { GosComponent } from './gos/gos.component';
import { PsychosocialComponent } from './psychosocial/psychosocial.component';
import { RespiratoryFLComponent } from './respiratoryFL/respiratoryFL.component';
import { RespiratorySComponent } from './respiratoryS/respiratoryS.component';
import { HomeComponent} from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SurveyComponent,
    NavBarComponent,
    HrqolComponent,
    CatComponent,
    EconomicComponent,
    GosComponent,
    PsychosocialComponent,
    RespiratoryFLComponent,
    RespiratorySComponent,
    HomeComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatRadioModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
