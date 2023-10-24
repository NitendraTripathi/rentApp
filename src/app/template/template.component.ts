import { Component } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  gender : string[]=[];
user={
  email: "",
  pwd: "1234"
}
constructor(private api :CommonService)
{
  this.gender= this.api.getGender();
}
  OnSubmit(myForm:any)
  {
    var data=myForm.controls;
    var email= data.email.value;
    console.log("Enter email value is " + email);
    console.log("Enter pwd value is " + data.pwd.value);

    console.log("Enter check box value is " + myForm.controls['chk'].value);

  console.log(data)
    console.log(myForm.value)

  }

}
