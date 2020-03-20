import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { StepsModule } from 'primeng/steps';
import { RfcComponent } from './pages/rfc/rfc.component';
import { BancoComponent } from './pages/banco/banco.component';
import { ContalinkComponent } from './pages/contalink/contalink.component';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import {
  HttpClientModule
} from '@angular/common/http';
import { MenusComponent } from './pages/menus/menus.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './shared/shared.module';
import { AnalisisComponent } from './pages/analisis/analisis.component';
import {AuthService } from './services/auth.service';
import { ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { LogoutComponent } from './pages/logout/logout.component';
import { ReactiveFormsModule }  from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DatosGeneralesComponent } from './pages/datos-generales/datos-generales.component';
import { CredencialesSatComponent } from './pages/credenciales-sat/credenciales-sat.component';
import { ConfirmacionComponent } from './pages/confirmacion/confirmacion.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RfcComponent,
    BancoComponent,
    ContalinkComponent,
    MenusComponent,
    AnalisisComponent,
    LogoutComponent,
    DatosGeneralesComponent,
    CredencialesSatComponent,
    ConfirmacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StepsModule,
    ToastModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    SharedModule,
    ChartModule,
    HighchartsChartModule,
    ReactiveFormsModule,
    ModalModule.forRoot()


  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
