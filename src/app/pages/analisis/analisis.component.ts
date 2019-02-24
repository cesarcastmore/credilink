import { Component, OnInit, TemplateRef } from '@angular/core';
import { Empresa, Usuario } from '../../models';

import { EmpresasService, AuthService } from '../../services';
import { RequestTablaResultados, TablaResultadosService } from '../../services/tabla-resultados.service';
import * as Highcharts from 'highcharts';
import { SpinnerService } from '../../shared/services/spinner.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { RequestEnviadorCorreo, EnviadorCorreoService } from '../../services/enviador-correo.service';
import { HsbcService } from '../../services/hsbc.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.css'],
  providers: [HsbcService, MessageService]
})
export class AnalisisComponent implements OnInit {

  public empresa: Empresa;
  public tablaResultados: any;
  modalRef: BsModalRef;



  Highcharts = Highcharts;


  public operational_info;
  public accounting_info;
  public cashflow_info;

  private user: Usuario;
  private transacciones: any;


  constructor(private auth: AuthService,
    private empresaService: EmpresasService,
    private tablaService: TablaResultadosService,
    private spinnerService: SpinnerService,
    private modalService: BsModalService,
    private enviador: EnviadorCorreoService,
    private hsbc: HsbcService,
    private messageService: MessageService) {

  }

  ngOnInit() {
    this.user = this.auth.getUser();


    let request: RequestTablaResultados = {
      rfc: this.user.rfc,
      authorization: this.user.token + ' ' + this.user.key,
      months_behind: 12,
      customer_type: 'company',
      credit_score: 650
    };

    this.tablaService.get(request).subscribe(respuesta => {

      this.spinnerService.is_active = false;

      if (respuesta.actual_status) {

        this.tablaResultados = respuesta;

        this.operational_info = this.tablaService.getChartOperationalInfo(respuesta);
        this.accounting_info = this.tablaService.getChartAccountingInfo(respuesta);
        this.cashflow_info = this.tablaService.getCashflowInfo(respuesta);
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'El empresa no existe en la base de datos de contalink'
        });
      }

    });


    this.hsbc.getTransaciones(this.user.rfc, this.user.numero_cuenta).subscribe(trans => {
      this.transacciones = trans;

    });




  }



  openModal(template: TemplateRef < any > , banco: any) {
    this.modalRef = this.modalService.show(template);

    let resultados: any = this.tablaResultados;

    resultados.offers = banco



    this.enviador.sendCorreo({
      to: 'ewilliams@contalink.com',
      from: 'prospectos@credilink.com',
      message: 'Te informamos que cliente ' + this.tablaResultados.actual_status.company_name + ' ha sido preaprobado dentro de nuestra plataforma con un credito por un monto de ' +
        banco.amount + ' a una tasa de ' + banco.rate + '%.\n Este Cliente tiene ventas anuales por ' + this.tablaResultados.actual_status.yearly_sales +
        ' y cuenta con un saldo promedio de ' + this.tablaResultados.actual_status.average_bank_balance + ' en los ultimos doce meses, tiene un indice ' +
        ' de endeudamiento de ' + this.tablaResultados.actual_status.debt_index + ' y un indice de cobertura de deuda de' + this.tablaResultados.actual_status.dscr + '\n\n' +
        ' Se incluye toda la información anexa, agradecemos el oportuno seguimiento.',
      subject: 'CrediLink: Tenemos un nuevo prospecto',
      attachment: {
        resultados: resultados,
        transacciones: this.transacciones
      }
    }).subscribe(enviado => {

      console.log("ENVIANDO", enviado);

    });


  }

  public aceptar() {
    this.modalRef.hide();
  }


}
