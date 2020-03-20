import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CredilinkIntegrationsService {

  private url: string = "https://mbuiwlvnzg.execute-api.us-east-1.amazonaws.com/prod/credilink-applications-integration"

  constructor(private http: HttpClient) {

  }


  contact(request: RequestContact): Observable < ResponseContact > {
    let headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('x-api-key', 't9tlybNX9720fO7w2Pi6D6JOu5kRmj1d6SKUlznx');

    request.action = "create_application";
    return this.http.post < ResponseContact > (this.url, request, {
      headers: headers

    });


  }


  updatePasswordSat(request: RequestUpdatePasswordSAT): Observable < ResponseUpdatePasswordSAT > {
    let headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('x-api-key', 't9tlybNX9720fO7w2Pi6D6JOu5kRmj1d6SKUlznx');

    request.action = "update_sat_pass";
    return this.http.post < ResponseUpdatePasswordSAT > (this.url, request, {
      headers: headers

    });
  }
}


export interface RequestContact {

  contact_name: string;
  contact_email: string;
  contact_phone: string;
  rfc: string;
  company_name: string;
  amount_needed: string;
  term_needed: string;
  referrer_code: string;
  action ? : string

}

export interface ResponseContact {
  status: number;
  message: string;
  application_id: number;

}


export interface RequestUpdatePasswordSAT {

  application_id: number;
  password_sat: string;
  action ? : string;


}


export interface ResponseUpdatePasswordSAT {
  status: number;
  message: string;


}
