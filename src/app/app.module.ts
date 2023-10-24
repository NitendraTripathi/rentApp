import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { EmployeeregistrationComponent } from './employeeregistration/employeeregistration.component';
import { OnewayComponent } from './oneway/oneway.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { TemplatereferenceComponent } from './templatereference/templatereference.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { RegistrationComponent } from './registration/registration.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { DirectiveComponent } from './directive/directive.component';
import { PipeComponent } from './pipe/pipe.component';
import { CustumPipe } from './custum.pipe';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    HomeComponent,
    EmployeeregistrationComponent,
    OnewayComponent,
    AssignmentComponent,
    TemplatereferenceComponent,
    NavbarComponent,
    ContactComponent,
    RegistrationComponent,
    PagenotfoundComponent,
    LoginComponent,
    DirectiveComponent,
    PipeComponent,
    CustumPipe,
    TemplateComponent,
    ReactiveComponent,
    UserProfileComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
