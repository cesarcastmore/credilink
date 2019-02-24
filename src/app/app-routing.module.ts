import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MenusComponent } from './pages/menus/menus.component';
import { AnalisisComponent } from './pages/analisis/analisis.component';

const routes: Routes = [{
    path: 'login',
    component: LoginComponent
  },{
    path: 'logout',
    component: LoginComponent
  }, {
    path: '',
    component: MenusComponent,
    children: [{
      path: 'analisis',
      component: AnalisisComponent
    }]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
