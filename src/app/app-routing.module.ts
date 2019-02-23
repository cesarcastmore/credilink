import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import  { DetallesComponent } from './pages/detalles/detalles.component';
const routes: Routes = [{
	path: 'login', 
	component: LoginComponent
} , {
	path: 'detalles', 
	component: DetallesComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
