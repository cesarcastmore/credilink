import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  public active: number = 1;

  private rfc: string;


  constructor(private messageService: MessageService,
    private router: Router, private auth: AuthService) {


  }

  ngOnInit() {

  }

  public validarRfc(event: any) {

    if (event.success) {
      this.messageService.add({
        severity: 'success',
        summary: 'Exito',
        detail: event.msg, 
      });
      this.active = 2;
      this.rfc = event.rfc;

    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: event.msg
      });
    }


  }


  public validarBanco(event: any) {

    if (event.success) {
      this.messageService.add({
        severity: 'success',
        summary: 'Exito',
        detail: event.msg
      });
      this.active = 3;

    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: event.msg
      });
    }





  }




  public validarContalink(event: any) {
    if (event.success) {

      let user: Usuario = event.user;
      user.rfc= this.rfc;

      this.auth.setUser(user);
      
      this.messageService.add({
        severity: 'success',
        summary: 'Exito',
        detail: event.msg
      });


      this.router.navigate(['/analisis']);


    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: event.msg
      });
    }


  }

}
