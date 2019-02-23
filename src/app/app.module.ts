import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { StepsModule } from 'primeng/steps';
import { DetallesComponent } from './pages/detalles/detalles.component';
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



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetallesComponent,
    RfcComponent,
    BancoComponent,
    ContalinkComponent,
    MenusComponent,
    AnalisisComponent,
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


  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
