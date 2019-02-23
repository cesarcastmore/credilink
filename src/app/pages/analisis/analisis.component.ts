import { Component, OnInit } from '@angular/core';
import {Empresa, Usuario}  from '../../models';

import {EmpresasService, AuthService} from '../../services';

@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.css']
})
export class AnalisisComponent implements OnInit {

	public empresa: Empresa;

  constructor(private auth: AuthService, 
  	private empresaService: EmpresasService) { 
  }

  ngOnInit() {
  	let user: Usuario= this.auth.getUser();

  	this.empresaService.getEmpresas(user.rfc).subscribe(respuesta=> {
  		this.empresa= respuesta.entity[0];

  	});


  }

}
