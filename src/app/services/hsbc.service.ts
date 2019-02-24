import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HsbcService {

	private url: string= "https://qspffmjuz0.execute-api.us-east-1.amazonaws.com/qa/cl-sbchack-bank-againts-contalink-transactions-matcher";

  constructor(private http: HttpClient) {

   }

   
}
