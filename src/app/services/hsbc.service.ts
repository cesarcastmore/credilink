import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HsbcService {

  private url: string = "https://qspffmjuz0.execute-api.us-east-1.amazonaws.com/qa/cl-sbchack-bank-againts-contalink-transactions-matcher";

  constructor(private http: HttpClient) {

  }


  public getTransaciones(rfc: string, numero_cuenta: string): Observable<any> {

    let params: HttpParams = new HttpParams().set('rfc', rfc).set("account_number", numero_cuenta);
    let headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');


    return this.http.post < any > (this.url, null, {
      headers: headers,
      params: params
    })


  }


}
