import { Component, OnInit } from '@angular/core';
import { Empresa, Usuario } from '../../models';

import { EmpresasService, AuthService } from '../../services';
import { RequestTablaResultados, TablaResultadosService } from '../../services/tabla-resultados.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.css']
})
export class AnalisisComponent implements OnInit {

  public empresa: Empresa;
  public tablaResultados: any;



  Highcharts = Highcharts;

 
 public operational_info;


  constructor(private auth: AuthService,
    private empresaService: EmpresasService,
    private tablaService: TablaResultadosService) {}

  ngOnInit() {
    let user: Usuario = this.auth.getUser();


    let request: RequestTablaResultados = {
      rfc: user.rfc,
      authorization: user.token + ' ' + user.key,
      months_behind: 12,
      customer_type: 'company'
    };

    this.tablaService.get(request).subscribe(respuesta => {
      this.tablaResultados = respuesta;

      this.operational_info= this.tablaService.getChartOperationalInfo(respuesta);

    });




  }



 

}
