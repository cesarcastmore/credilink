import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  constructor(private http: HttpClient) {}


  public getEmpresas(rfc: string) {

    let usuario: Usuario = JSON.parse(localStorage.getItem('usuario'));

    let headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', usuario.token + ' ' + usuario.key);

    let params: HttpParams= new HttpParams().set('_where', 'eq(rfc, "' +  usuario.rfc + '")');


    return this.http.get < any > (environment.api + 'entity/empresas', {
    	headers: headers,
    	params: params
    });


    

  }
}
