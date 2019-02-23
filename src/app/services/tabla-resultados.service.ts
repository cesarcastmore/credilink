import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Usuario } from '../models/usuario';

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
}


export interface RequestTablaResultados {
  rfc: string;
  authorization: string;
  months_behind: number;
  customer_type: string;
}
