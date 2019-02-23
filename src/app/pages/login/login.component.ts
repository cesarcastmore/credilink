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
        detail: event.msg });
      this.active = 2;

    } else {
      this.messageService.add({ 
        severity: 'error', 
        summary: 'Error', 
        detail: event.msg });
    }


  }


  public validarBanco(event: any) {
    this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });


    this.active = 3;

  }




  public validarContalink(event: any) {
    this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });


  }

}
