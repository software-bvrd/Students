import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { observable } from 'rxjs';
import { ApicallService } from './apicall.service';
import { Users } from './users';
import { Users2, Users2Response } from './users2';   
import { Router ,RouterModule, Routes} from '@angular/router';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  ,styleUrls: ['./app.component.css']  
})


export class AppComponent {
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
    //this.getUserList();
  }

  getUserList() {
    this.apiService
    .getUsers()
    .subscribe((data:Users[]) => {
      console.log(data);
      this.users = data;
    });
  }

  getUserList1() {
    this.apiService
    .getUsers1()
    .subscribe((data:any) => {
      console.log(data);
      this.users = data
    });
  }

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
 
  getUsersPorCodigo(){ 
    const codigo = (document.querySelector('#codigo') as HTMLInputElement).value
 
    /*
    this.apiService    
    .getUsersONE(codigo)
    .subscribe((data:any) => {
      //console.log(data);
      this.users3 = data ;
      
      // data !== null; : this.users[1].nombre;
    });
    */
  
  /*
    this.apiService    
    .getUsersONE(codigo)
    .subscribe((data:any) => { 
      console.log(data);  
      var cuenta =  data.headers.get('X-Total-Count'); 
      console.log("TOTAL DE DATOS: "+ cuenta) 
      var cuenta1 = data.headers.get('authorization');
      console.log("TOTAL DE DATOS1111: "+ cuenta1)
      
      if (cuenta >1)
      {
        this.users = data
      }
      else
      {
      //this.users = [""];
      this.users.push(data) 
      } 
    });*/
 

    
/*
    this.apiService.getUsersONE("4")
    .subscribe( res => {
      //console.log(res.json());
      //this.cargando = false;
       res; // Before this.productos = res.json(); 
    });
*/
   /*
    this.apiService.getUsersONE("4").
    subscribe((data:any) =>
    { console.log(data);
      //this.users =data;
      this.users.push(data) 
    }); 
   */
  /*
  this.apiService.getUsersONE("4").subscribe(
      data=>{
       //this.users[]
       console.log(data);
       this.users3=data;
       this.users3.push(data) 
  });  */

  this.apiService    
  .getUsersONE(codigo)
  .subscribe((data) => { 
    console.log(data);   
    this.users3.push(data)  
  });

  
}

SavetUsers(){ 
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
  

  //this.apiService.PostUsers1(_success,_usuarioid,_nombre,_apellido,_tipo,_email);
  /*this.apiService.PostUsers1(_success,_usuarioid,_nombre,_apellido,_tipo,_email).subscribe(data  => 
    {console.log("este es el data ID: "+data.id)
    this.users = data
    }
    )*/
    this.apiService.PostUsers2(true,_usuarioid,_nombre,_apellido,_tipo,_email).subscribe(response =>
      {
        this.users= []
        this.users.push(response) 
      
      } )

}

/*
funLogin(){
  //this.router.navigateByUrl('inputoutput');
  this.router.navigate(['/inputoutputComponent']);
}
*/

input() {
  this.router.navigate(['inputoutput'])}
  inputURL() {
    this.router.navigateByUrl('inputoutput')}
  
}









