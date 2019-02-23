import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private url: string = "auth/login";

  constructor(private http: HttpClient) {

  }


  public login(usuario: string, contrasenia: string) {

    let params: HttpParams = new HttpParams().set("username", usuario).set("password", contrasenia);
    let headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post < any > (environment.api + this.url, null, { params: params, headers: headers });
  }

  public setUser(user: Usuario){
  	localStorage.setItem('usuario', JSON.stringify(user));

  }

  public getUser(): Usuario{
  	let usuario: Usuario= JSON.parse(localStorage.getItem("usuario"));
  	return usuario;

  }


}
