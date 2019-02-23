import { Component } from '@angular/core';
import { Usuario } from './models/usuario';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router,
    private auth: AuthService) {

    let user: Usuario = this.auth.getUser();

    if (user != null) {
      this.router.navigate(['/analisis']);
    } else {
      this.router.navigate(['/login']);

    }




  }

}
