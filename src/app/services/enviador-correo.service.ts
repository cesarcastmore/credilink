import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EnviadorCorreoService {

  private url: string = 'https://qspffmjuz0.execute-api.us-east-1.amazonaws.com/qa/cl-sbchack-sendemail';

  constructor(private http: HttpClient) {

  }


  public sendCorreo(request: RequestEnviadorCorreo): Observable < any > {
    let headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('x-api-key', 'TbqKZJ00zT1ZV8Ei8xkozlfmHUdBbJB2RWh9Nikg');

    return this.http.post < any > (this.url, request, {
      headers: headers
    })

  }
}




export interface RequestEnviadorCorreo {
  from: string;
  to: string;
  subject: string;
  message: string;
  attachment: any;

}
