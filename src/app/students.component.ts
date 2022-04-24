import { HttpClient } from '@angular/common/http';
import { Component, NgModule,OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { ApicallService } from './apicall.service';
import { students } from './students';
import { Router ,RouterModule, Routes} from '@angular/router'; 

 
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})


export class studentsComponent {
  [x: string]: any; 
   public students : students[]= [];
  public students3:Array<any>=[];

  
  constructor(
    public http: HttpClient, 
    private apiService: ApicallService,
    private router: Router
     ){

      }
       
  ngOnInit(){
    //execute the method getstudentsList to fill the html from the beginning
    this. getstudentsList();
   
  }
//This method is to invoke and subscribe to the apiservice component to return the students from the DB 
  getstudentsList() {
    this.apiService
    .getstudents()
    .subscribe((data:students[]) => {
      console.log(data);
      this.students = data;
    });
  }
  /*
  deletestudents1() {
   const codigo = ""
   console.log(codigo);
    this.apiService
    .Deletestudent(codigo)
    .subscribe((data:students[]) => {
      console.log(data);
      this.students = data;
    });
  }
*/
//his method is to invoke and subscribe to the apiservice component to delete one student from the DB
  deletestudents2(id: string){
    alert("In Delete No:"+id)
    this.apiService.Deletestudent2(id).subscribe(() => {console.log( `Student with ID = ${id} deleted `);  /*debugger;*/});
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);

  }
}
