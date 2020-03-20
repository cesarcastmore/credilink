import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../models/usuario';
import { RequestUpdatePasswordSAT, RequestContact, ResponseUpdatePasswordSAT, ResponseContact, CredilinkIntegrationsService } from '../../services/credilink-integrations.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService, CredilinkIntegrationsService]
})
export class LoginComponent implements OnInit {

  public active: number = 1;

  private rfc: string;
  private numero_cuenta: string;
  private contraseña_cuenta: string;
  private contact: any;
  private application_id: number;


  constructor(private messageService: MessageService,
    private router: Router, private auth: AuthService,
    private credilink: CredilinkIntegrationsService) {


  }

  ngOnInit() {

  }


  public sendGeneralInformation(event: any) {

    this.contact = event.contact;

    let request: RequestContact = this.contact;

    this.credilink.contact(request).subscribe(response => {


      if (response.status) {
        this.application_id = response.application_id;

        this.active = event.next;
        this.messageService.add({
          severity: 'success',
          summary: 'Exito',
          detail: response.message
        });
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: response.message
        });
      }
    })





  }


  public sendSATInformation(event: any) {
    let request: RequestUpdatePasswordSAT = event.sat;

    request.application_id = this.application_id;

    this.credilink.updatePasswordSat(request).subscribe(update => {
      if (update.status) {
        this.active = event.next;
        this.messageService.add({
          severity: 'success',
          summary: 'Exito',
          detail: update.message
        });
      } else
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: update.message
        });
    })


  }



}
