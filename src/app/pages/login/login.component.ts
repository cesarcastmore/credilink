import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public active: number = 1;


  constructor() {

  }

  ngOnInit() {

  }

  public validarRfc(event: any) {
  	this.active=2;


  }


  public validarBanco(event: any) {

  	this.active=3;

  }




  public validarContalink(event: any) {

  }

}
