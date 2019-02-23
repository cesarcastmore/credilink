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
import {HttpClientModule
 }  from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetallesComponent,
    RfcComponent,
    BancoComponent,
    ContalinkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StepsModule,
    ToastModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
