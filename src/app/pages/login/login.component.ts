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
    this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });

    this.active = 2;


  }


  public validarBanco(event: any) {
    this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });


    this.active = 3;

  }




  public validarContalink(event: any) {
    this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });


  }

}
