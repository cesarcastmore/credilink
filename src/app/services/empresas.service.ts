import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  constructor(private http: HttpClient) {
   }


   public getEmpresas(empresa_id: number){
   	this.http.get<any>(environment.api + 'entity/empresas/' + empresa_id)
   }
}
