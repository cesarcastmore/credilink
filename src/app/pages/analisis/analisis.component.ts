import { Component, OnInit, TemplateRef } from '@angular/core';
import { Empresa, Usuario } from '../../models';

import { EmpresasService, AuthService } from '../../services';
import { RequestTablaResultados, TablaResultadosService } from '../../services/tabla-resultados.service';
import * as Highcharts from 'highcharts';
import { SpinnerService } from '../../shared/services/spinner.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.css']
})
export class AnalisisComponent implements OnInit {

  public empresa: Empresa;
  public tablaResultados: any;
  modalRef: BsModalRef;



  Highcharts = Highcharts;


  public operational_info;
  public accounting_info;
  public cashflow_info;


  constructor(private auth: AuthService,
    private empresaService: EmpresasService,
    private tablaService: TablaResultadosService,
    private spinnerService: SpinnerService,
    private modalService: BsModalService) {}

  ngOnInit() {
    let user: Usuario = this.auth.getUser();


    let request: RequestTablaResultados = {
      rfc: user.rfc,
      authorization: user.token + ' ' + user.key,
      months_behind: 12,
      customer_type: 'company',
      credit_score: 650
    };

    this.tablaService.get(request).subscribe(respuesta => {
      this.tablaResultados = respuesta;

      console.log("EL RESULTADO ES", this.tablaResultados);
      this.spinnerService.is_active = false;

      this.operational_info = this.tablaService.getChartOperationalInfo(respuesta);
      this.accounting_info = this.tablaService.getChartAccountingInfo(respuesta);
      this.cashflow_info = this.tablaService.getCashflowInfo(respuesta);

    });




  }



  openModal(template: TemplateRef < any > ) {
    this.modalRef = this.modalService.show(template);
  }

  public aceptar(){
    this.modalRef.hide();
  }


}
