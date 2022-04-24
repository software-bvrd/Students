import { BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { Router,RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InputoutputComponent } from './inputoutput.component';
import {IoComponent} from './io.component' 
  import { NavMenuComponent } from './nav-menu.component';
import { BlankpageComponent } from './blankpage.component';  
import { usuarios } from './usuarios.component';
import { studentsComponent } from './students.component';  

@NgModule({
  declarations: [
    AppComponent,
    InputoutputComponent,
    IoComponent ,
    NavMenuComponent,
    BlankpageComponent,
    usuarios,
    studentsComponent
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),    
    HttpClientModule,
    FormsModule,
  RouterModule.forRoot([
    {path: './AppComponent', component: AppComponent},
    {path: 'inputoutput', component: InputoutputComponent},
    {path: 'io', component: IoComponent},
    {path: 'usuarios', component: usuarios},
    {path: 'microsoft', redirectTo: 'www.microsoft.com', pathMatch: 'full'},    
    {path: './BlankpageComponent', component: BlankpageComponent},
    {path: 'students', component:studentsComponent}
  ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


 
 