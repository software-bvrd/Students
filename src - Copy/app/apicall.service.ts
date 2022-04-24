
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from './users';
import { Users2,Users2Response } from './users2';
//import {Observable, throwError, fromEvent}  from "rxjs";
import { from, Observable, pipe, throwError } from 'rxjs';
import { students } from './students';
//import { map} from 'rxjs/Rx/';
//import { map } 'rxjs/add/operator/map'
import {catchError, map} from 'rxjs/operators';
 



@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private httpClient: HttpClient) {}
  public dashContent: Users = {  success	:  true,
    usuarioid	:  "",
    nombre		:  "",
    apellido	:  "",
    tipo		:  "",
    email		:   ""}

     //_apiurl: string = 'http://apirest2.local:8083/api/'
     _apiurl: string = 'http://localhost:56809/api/'
     public _contact!: Array<Users2>; 

  getUsers() {
    return this.httpClient.get<Users[]>(`${this._apiurl}Usuarios1/`).
        pipe(
           map((data: Users[]) => {
             return data;
           }), catchError( error => {
             return throwError( 'Something went wrong!' );
           })
        )
    }
    
    getUsers1() {
      return this.httpClient.get<any[]>(`${this._apiurl}Usuarios1/`).
          pipe(
             map((data: any) => {
               return data;
             }), catchError( error => {
               return throwError( 'Something went wrong!' );
             })
          )
      }

    getUsersONE(codigo :string) {
      return this.httpClient.get<any>(`${this._apiurl}Usuarios1/`+codigo).
    pipe(
       map((data: any) => {
         return data;
       }), catchError( error => {
         return throwError( 'Something went wrong!' );
       })
    )
      } 

      PostUsers( _success:string, _usuarioid :string, _nombre:string, _apellido:string, _tipo:string, _email:string ): Observable<any> {
        return this.httpClient.post(`${this._apiurl}Usuarios1/`,{
        success : _success,
        usuarioid :_usuarioid,                                        
        nombre :_nombre,                                             
        apellido :_apellido,                                           
        tipo :_tipo,                                            
        email:_email 
        }, {headers : new HttpHeaders({
          'Content-Type' :'applicationCache.json'})}
        ) 
      }
       
      PostUsers1( _success:string, _usuarioid :string, _nombre:string, _apellido:string, _tipo:string, _email:string )
      {
        return this.httpClient.post<any>(`${this._apiurl}Usuarios1/`,{ 
           success : _success,
            usuarioid :_usuarioid,                                        
            nombre :_nombre,                                             
            apellido :_apellido,                                           
            tipo :_tipo,                                            
            email:_email  

        } 
         /* ,{headers : new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods': 'POST,GET,OPTIONS, PUT, DELETE',
          'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'    })}
          */
          //'content-type': 'application/json; charset=utf-8'
        )
        .toPromise()
        .then(res => console.log(res.json()))//.pipe(catchError(this.handleError)) 
      }

       httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }; 
      PostUsers2( _success:boolean, _usuarioid :string, _nombre:string, _apellido:string, _tipo:string, _email:string )
      {
    
        /*
        return this.httpClient.post<any>(`${this._apiurl}Usuarios1/`,{ 
           success : _success,
            usuarioid :_usuarioid,                                        
            nombre :_nombre,                                             
            apellido :_apellido,                                           
            tipo :_tipo,                                            
            email:_email  

        }  ,{headers : new HttpHeaders({
          'Access-Control-Allow-Origin' : 'http://localhost:4200'   })}
          //'content-type': 'application/json; charset=utf-8'
        )//.pipe(catchError(this.handleError)) 
        */
        return this.httpClient.post<any>(`${this._apiurl}Usuarios1/`, { 
          success : _success,
           usuarioid :_usuarioid,                                        
           nombre :_nombre,                                             
           apellido :_apellido,                                           
           tipo :_tipo,                                            
           email:_email  

       } /*,this.httpOptions*/).pipe(map(res => res));
      }

      getstudents() {
        return this.httpClient.get<students[]>(`${this._apiurl}students/`).
            pipe(
               map((data: students[]) => {
                 return data;
               }), catchError( error => {
                 return throwError( 'Something went wrong!' );
               })
            )
        }
 
      //    Deletestudent(codigo :string) {
      //      return this.httpClient.delete<any>(`${this._apiurl}students/`+codigo) 
      //   {headers : new HttpHeaders({  
      //    'Content-Type':'application/problem+json; charset=utf-8 ',
      //     'Access-Control-Allow-Methods': 'POST,GET,OPTIONS, PUT, DELETE',
      //    'Access-Control-Allow-Credentials': 'true',
      //    'accept' :'*/*',
      //    'Access-Control-Allow-Origin': 'http://apirest2.local:8083', 
      //    'date': 'Wed09 Mar 2022 21:18:13 GMT', 
      //    'server': 'Kestrel' ,
      //    'Access-Control-Max-Age': '86400',
      //    'Vary': 'Accept-Encoding, Origin',
      //    'Keep-Alive': 'timeout=2, max=100',
      //    'Connection': 'Keep-Alive',
      //  })}
      //      }
      Deletestudent(codigo :string) {
      return this.httpClient.delete<students[]>(`${this._apiurl}students/`+codigo).
      pipe(map((data: students[]) => {
           return data;
         }), catchError( error => {
           return throwError( error);
         })
      )
  }

 

Deletestudent2( codigo :string )
{
 // return this.httpClient.delete<any>(`${this._apiurl}students/`+codigo, { } ).pipe(map(res => res));

 return this.httpClient.delete<any>(`${this._apiurl}students/`+codigo+`/`) 
         {headers : new HttpHeaders({  
          'Content-Type':'application/problem+json; charset=utf-8 ',
           'Access-Control-Allow-Methods': 'POST,GET,OPTIONS, PUT, DELETE',
          'Access-Control-Allow-Credentials': 'true',
          'accept' :'*/*',
          'Access-Control-Allow-Origin': 'http://apirest2.local:8083', 
          'date': 'Wed09 Mar 2022 21:18:13 GMT', 
          'server': 'Kestrel' ,
          'Access-Control-Max-Age': '86400',
          'Vary': 'Accept-Encoding, Origin',
          'Keep-Alive': 'timeout=2, max=100',
          'Connection': 'Keep-Alive',
        })}  
  }

}
  
    
    
 

 
