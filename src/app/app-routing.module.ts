import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { RegistrationComponent } from './registration/registration.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { DirectiveComponent } from './directive/directive.component';
import { PipeComponent } from './pipe/pipe.component';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"contact", component:ContactComponent},
  {path:"registration", component:RegistrationComponent},
  {path:"directive", component:DirectiveComponent},
  {path:"pipe", component:PipeComponent},
  {path:"template", component:TemplateComponent},
  {path:"reactive", component:ReactiveComponent},
  {path:"employee", component:EmployeeComponent},
  {path:"**", component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
