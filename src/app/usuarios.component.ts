import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { observable } from 'rxjs';
import { ApicallService } from './apicall.service';
import { Users } from './users';
import { Users2, Users2Response } from './users2';   
import { Router ,RouterModule, Routes} from '@angular/router';
 
@Component({
  selector: 'usuarios-root',
  templateUrl: './usuarios.component.html'
  ,styleUrls: ['./usuarios.component.css']  
})


export class usuarios {
  [x: string]: any;
  public users : Users[]= [];
  public users2! : any;
  public users3:Array<any>=[];

  
  constructor(
    public http: HttpClient, 
    private apiService: ApicallService,
    private router: Router
     ){

      }
      
  ngOnInit(){
    //execute the method getUserList to fill the html from the beginning
    this.getUserList();
  }
//This method is to invoke and subscribe to the apiservice component to return the users from the DB 
  getUserList() {
    this.apiService
    .getUsers()
    .subscribe((data:Users[]) => {
      console.log(data);
      this.users = data;
    });
  }

//This method is to invoke and subscribe to the apiservice component to return the users from the DB 
  getUserList1() {
    this.apiService
    .getUsers1()
    .subscribe((data:any) => {
      console.log(data);
      this.users = data
    });
  }
//This method is to invoke and subscribe to the apiservice component to return just one user from the DB 
  getUserList2() {
    const codigo = (document.querySelector('#codigo') as HTMLInputElement).value
    console.log("este es el codigo: "+ codigo);
    this.users = [];
    if (codigo.toString() =="")
    {
      
    this.apiService
    .getUsersONE(codigo)
    .subscribe((data:Users[]) => {
      console.log(data);
      //this.users3.push(data)  
     this.users = data
    });
    }
      else
      {
        this.apiService
        .getUsersONE(codigo)
        .subscribe((data:Users) => {
          console.log(data);
          //this.users3.push(data)  
         //this.users = data
      this.users.push(data)     });
    }
  
  }
 //This another return just one user from the DB 
  getUsersPorCodigo(){ 
   const codigo = (document.querySelector('#codigo') as HTMLInputElement).value
   this.apiService    
  .getUsersONE(codigo)
  .subscribe((data) => { 
    console.log(data);   
    this.users3.push(data)  
  });
}

SaveUsers(){ 
  const _success = (document.querySelector('#success') as HTMLInputElement).value 
  const _usuarioid  = (document.querySelector('#ID') as HTMLInputElement).value                                   
  const _nombre  = (document.querySelector('#nombre') as HTMLInputElement).value                                             
  const _apellido  = (document.querySelector('#apellido') as HTMLInputElement).value                                         
  const _tipo   = (document.querySelector('#tipo') as HTMLInputElement).value                                                  
  const _email  = (document.querySelector('#email') as HTMLInputElement).value   
  console.log(_success);   
  console.log(_usuarioid);   
  console.log(_success);   
  console.log(_nombre);   
  console.log(_apellido);   
  console.log(_tipo);  
  console.log(_email);    
 
    this.apiService.PostUsers2(true,_usuarioid,_nombre,_apellido,_tipo,_email).subscribe(response =>
      {
        this.users= []
        this.users.push(response) 
      
      } )

}


input() {
  this.router.navigate(['inputoutput'])}
  inputURL() {
    this.router.navigateByUrl('inputoutput')}
  
}









