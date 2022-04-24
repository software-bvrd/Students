import { HttpClient } from '@angular/common/http';
import { Component, NgModule,OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { ApicallService } from './apicall.service';
import { students } from './students';
import { Router ,RouterModule, Routes} from '@angular/router';
import { InputoutputComponent } from './inputoutput.component'; 

 
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
    this. getstudentsList();
  }

  getstudentsList() {
    this.apiService
    .getstudents()
    .subscribe((data:students[]) => {
      console.log(data);
      this.students = data;
    });
  }
  deletestudents1() {
   const codigo = "fe525849-937a-42dc-aca1-a8cdafecf384"
   console.log(codigo);
    this.apiService
    .Deletestudent(codigo)
    .subscribe((data:students[]) => {
      console.log(data);
      this.students = data;
    });
  }

  deletestudents2(id: string){
    alert("In Delete No:"+id)

    //this.apiService.Deletestudent(id).subscribe((data)=> {this.getstudentsList();},
    //this.apiService.Deletestudent(id).subscribe((data:students[]) => {console.log(data);});
    this.apiService.Deletestudent2(id).subscribe(() => {console.log( `Student with ID = ${id} deleted `);  /*debugger;*/});
    //this.ngOnInit();
    //recarga la pagina
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);

  }
}







/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
*/
