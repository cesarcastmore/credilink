import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import {StepsModule} from 'primeng/steps';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { RfcComponent } from './pages/rfc/rfc.component';
import { BancoComponent } from './pages/banco/banco.component';
import { ContalinkComponent } from './pages/contalink/contalink.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetallesComponent,
    RfcComponent,
    BancoComponent,
    ContalinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StepsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
