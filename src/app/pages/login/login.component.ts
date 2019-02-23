import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  public active: number = 1;


  constructor(private messageService: MessageService) {

  }

  ngOnInit() {

  }

  public validarRfc(event: any) {

    if (event.success) {
      this.messageService.add({
        severity: 'success',
        summary: 'Exito',
        detail: event.msg
      });
      this.active = 2;

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
      
      this.messageService.add({
        severity: 'success',
        summary: 'Exito',
        detail: event.msg
      });

    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: event.msg
      });
    }


  }

}
