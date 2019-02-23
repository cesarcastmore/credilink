import { Component, OnInit } from '@angular/core';
import { Empresa, Usuario } from '../../models';

import { EmpresasService, AuthService } from '../../services';
import { RequestTablaResultados, TablaResultadosService } from '../../services/tabla-resultados.service';

@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.css']
})
export class AnalisisComponent implements OnInit {

  public empresa: Empresa;
  public tablaResultados: any;

  constructor(private auth: AuthService,
    private empresaService: EmpresasService,
    private tablaService: TablaResultadosService) {}

  ngOnInit() {
    let user: Usuario = this.auth.getUser();

    this.empresaService.getEmpresas(user.rfc).subscribe(respuesta => {
      this.empresa = respuesta.entity[0];

    });

    let request: RequestTablaResultados = {
      rfc: user.rfc,
      authorization: user.token + ' ' + user.key,
      months_behind: 24,
      customer_type: 'company'
    };

    this.tablaService.get(request).subscribe(respuesta => {
      this.tablaResultados = respuesta;
    });





  }

}
