
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from './users';
import { Users2, Users2Response } from './users2';
//import {Observable, throwError, fromEvent}  from "rxjs";
import { from, Observable, pipe, throwError } from 'rxjs';
import { students } from './students';
//import { map} from 'rxjs/Rx/';
//import { map } 'rxjs/add/operator/map'
import { catchError, map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private httpClient: HttpClient) { }
  //public class user 
  public dashContent: Users = {
    success: true,
    usuarioid: "",
    nombre: "",
    apellido: "",
    tipo: "",
    email: ""
  }

  //url to connect to the webapi restful 
  _apiurl: string = 'http://localhost:49154/api/'
  public _contact!: Array<Users2>;

  //method that connect to the webapi to return all users in azure db 
  getUsers() {
    return this.httpClient.get<Users[]>(`${this._apiurl}Usuarios1/`).
      pipe(
        map((data: Users[]) => {
          return data;
        }), catchError(error => {
          return throwError('Something went wrong!');
        })
      )
  }
  //method that connect to the webapi to return all users in azure db 
  getUsers1() {
    return this.httpClient.get<any[]>(`${this._apiurl}Usuarios1/`).
      pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError('Something went wrong!');
        })
      )
  }
  //method that connect to the webapi to return just one user in azure db 
  getUsersONE(codigo: string) {
    return this.httpClient.get<any>(`${this._apiurl}Usuarios1/` + codigo).
      pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError('Something went wrong!');
        })
      )
  }
//method that connect to the webapi to save just one user in azure db 
  PostUsers(_success: string, _usuarioid: string, _nombre: string, _apellido: string, _tipo: string, _email: string): Observable<any> {
    return this.httpClient.post(`${this._apiurl}Usuarios1/`, {
      success: _success,
      usuarioid: _usuarioid,
      nombre: _nombre,
      apellido: _apellido,
      tipo: _tipo,
      email: _email
    }, {
      headers: new HttpHeaders({
        'Content-Type': 'applicationCache.json'
      })
    }
    )
  }

//method that connect to the webapi to save just one user in azure db 
  PostUsers1(_success: string, _usuarioid: string, _nombre: string, _apellido: string, _tipo: string, _email: string) {
    return this.httpClient.post<any>(`${this._apiurl}Usuarios1/`, {
      success: _success,
      usuarioid: _usuarioid,
      nombre: _nombre,
      apellido: _apellido,
      tipo: _tipo,
      email: _email

    }
    )
      .toPromise()
      .then(res => console.log(res.json())) 
  }

//method that connect to the webapi to save just one user in azure db 
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  PostUsers2(_success: boolean, _usuarioid: string, _nombre: string, _apellido: string, _tipo: string, _email: string) {
    return this.httpClient.post<any>(`${this._apiurl}Usuarios1/`, {
      success: _success,
      usuarioid: _usuarioid,
      nombre: _nombre,
      apellido: _apellido,
      tipo: _tipo,
      email: _email

    }).pipe(map(res => res));
  }

//method that connect to the webapi to return all student in azure db 
  getstudents() {
    return this.httpClient.get<students[]>(`${this._apiurl}students/`).
      pipe(
        map((data: students[]) => {
          return data;
        }), catchError(error => {
          return throwError('Something went wrong!');
        })
      )
  }

 //method that connect to the webapi to delete one student in azure db  
  Deletestudent(codigo: string) {
    return this.httpClient.delete<students[]>(`${this._apiurl}students/` + codigo).
      pipe(map((data: students[]) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
      )
  }


//method that connect to the webapi to delete one student in azure db  
   Deletestudent2(codigo: string) { 
    return this.httpClient.delete<any>(`${this._apiurl}students/` + codigo + `/`)
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/problem+json; charset=utf-8 ',
        'Access-Control-Allow-Methods': 'POST,GET,OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Credentials': 'true',
        'accept': '*/*',
        'Access-Control-Allow-Origin': 'http://apirest2.local:8083',
        'date': 'Wed09 Mar 2022 21:18:13 GMT',
        'server': 'Kestrel',
        'Access-Control-Max-Age': '86400',
        'Vary': 'Accept-Encoding, Origin',
        'Keep-Alive': 'timeout=2, max=100',
        'Connection': 'Keep-Alive',
      })
    }
  }

}






