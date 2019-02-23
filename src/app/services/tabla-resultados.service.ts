import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Usuario } from '../models/usuario';
import * as Highcharts from 'highcharts';

@Injectable({
  providedIn: 'root'
})
export class TablaResultadosService {

  private url: string = 'https://qspffmjuz0.execute-api.us-east-1.amazonaws.com/qa/cl-sbchack-resultboard';

  constructor(private http: HttpClient) {

  }


  public get(data: RequestTablaResultados) {

    let usuario: Usuario = JSON.parse(localStorage.getItem('usuario'));

    let headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('x-api-key', 'TbqKZJ00zT1ZV8Ei8xkozlfmHUdBbJB2RWh9Nikg');



    return this.http.post < any > (this.url, data, {
      headers: headers,
    });

  }

  public getMonth(indice: number): string {

    console.log(indice);
    let meses: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
      'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    return meses[indice];
  }


  public getChartOperationalInfo(response: any) {
    let categories: any[];

    return {

      chart: {
        type: 'column'
      },
      title: {
        text: 'Ingresos y Egresos de tu Empresa'
      },
      xAxis: {
        categories: this.createCategories(response)
      },

      yAxis: {
        allowDecimals: true,
        min: 0,
        title: {
          text: 'Number of fruits'
        }
      },
      tooltip: {
        formatter: function() {
          return '<b>' + this.x + '</b><br/>' +
            this.series.name + ': ' + this.y + '<br/>' +
            'Total: ' + this.point.stackTotal;
        }
      },
      plotOptions: {
        column: {
          stacking: 'normal'
        }
      },
      series: this.createSeriesOperational(response)
    }
  }



  public createCategories(respuesta: any): string[] {

    let cats: string[] = [];



    for (let i = 1; i <= 12; i++) {
      let date: Date = new Date();
      date.setMonth(date.getMonth() - i);
      cats.push(this.getMonth(date.getMonth()));

    }

    return cats.reverse();


  }

  public createSeriesOperational(respuesta: any) {

    let series: any[] = [];
    let sales: number[] = [];
    let expenses: number[] = [];
    let payrolls: number[] = [];


    for (let res of respuesta.actual_status.operational_info) {
      sales.push(res.sales);
      expenses.push(res.expenses);
      payrolls.push(res.payroll);

    }

    series.push({
      name: 'Ventas',
      data: sales.reverse(),
      stack: 'Ingresos'
    });

    series.push({
      name: 'Gastos',
      data: expenses.reverse(),
      stack: 'Egresos'
    });

    series.push({
      name: 'Nomina',
      data: payrolls.reverse(),
      stack: 'Egresos'
    });

    return series;
  }


  public getChartAccountingInfo(response: any) {
    return {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Indice de Endeudamiento'
      },
      subtitle: {
        text: 'Ultimos 12 meses'
      },
      xAxis: {
        categories: this.createCategories(response)
      },
      yAxis: {
        title: {
          text: 'Indice'
        }
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: false
        }
      },
      series: this.createSeriesAccounting(response)
    }
  }


  public createSeriesAccounting(respuesta): number[] {
    let series: any[] = [];
    let debt_index: number[] = [];

    for (let i=0; i< 12; i++) {
      debt_index.push(respuesta.actual_status.accounting_info[i].debt_index);
    }

    series.push({
      name: 'Indice de Deuda',
      data: debt_index.reverse(),
    });

    console.log(series);

    return series;

  }

  public getCashflowInfo(respuesta: any) {
    return {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Historic and Estimated Worldwide Population Growth by Region'
      },
      subtitle: {
        text: 'Source: Wikipedia.org'
      },
      xAxis: {
        categories: this.createCategories(respuesta),
        tickmarkPlacement: 'on',
        title: {
          enabled: false
        }
      },
      yAxis: {
        title: {
          text: 'Pesos'
        },
        labels: {
          formatter: function() {
            return this.value / 1000;
          }
        }
      },
      tooltip: {
        split: true,
        valueSuffix: ' pesos'
      },
      plotOptions: {
        area: {
          stacking: 'normal',
          lineColor: '#666666',
          lineWidth: 1,
          marker: {
            lineWidth: 1,
            lineColor: '#666666'
          }
        }
      },
      series: this.getSeriesCashFlow(respuesta)
    }
  }

  public getSeriesCashFlow(respuesta: any): string[] {

    let dictionary: any= {};

    for(let i=0; i<12; i++){
      let bank_balances = respuesta.actual_status.cashflow_info[i].bank_balances;

      for(let b of bank_balances){

        if(dictionary[b.bank] === undefined)
          dictionary[b.bank]=[];

        dictionary[b.bank].push(b.average_balance)
      }
 
      
    }

    let series: any[]=[]

    for(let attr in dictionary){
      series.push({
        name: attr,
        data: dictionary[attr]
      })

    }

    return series;

  }



}


export interface RequestTablaResultados {
  rfc: string;
  authorization: string;
  months_behind: number;
  customer_type: string;
}
