import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContalinkService {


private url: string=" https://vru6erjswd.execute-api.us-east-1.amazonaws.com/contalink_prod/auth/login";

  constructor(private http: HttpClient) { 

  }


  public login(usuario: string, contrasenia: string){

  	let params : HttpParams= new HttpParams().set("username", usuario).set("password", contrasenia);
  	let headers: HttpHeaders= new HttpHeaders({'Content-Type':  'application/json'});

  	return this.http.post<any>(this.url, null, {params:params, headers: headers} );
  }


}
