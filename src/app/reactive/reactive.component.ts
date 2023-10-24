import { Component, OnChanges, OnInit } from '@angular/core';

import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';
import { CommonService } from '../Services/common.service';




@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit,OnChanges {
   gender : string[]=[];

  constructor( private fb : FormBuilder, private api : CommonService)
  {
    console.log("I am from constructer");
  }
  ngOnInit(): void {
    console.log(" I am from oninit");
    debugger;
    this.gender=this.api.getGender();
  }

  ngOnChanges() {
    console.log("The book property changed")
    }
    AfterContentInit()
    {

    }

  myForm = this.fb.group({
    email : new FormControl('',Validators.required),
    gender: new FormControl('',Validators.required),
    pwd : new FormControl('', [Validators.required, Validators.minLength(3)]),
    chk : new FormControl('')
  })

  myForm1 = this.fb.group({
    education : new FormControl('',Validators.required),

  })

  formSubmit()
  {
    console.log(this. myForm);
    console.log(this. myForm.value);

    console.log(this.myForm.get("email")?.value)  ;
    console.log(this.myForm.get("gender")?.value)  ;
    console.log(this.myForm.get("pwd")?.value)  ;
    console.log(this.myForm.get("chk")?.value)  ;
  }

  setValues()
  {
    this.myForm.setValue({
      "email" : "rajee@gmail.com",
      "gender": "Male",
      "pwd" : "1234",
      "chk" : "true"
    })
  }

  PatchValues()
  {
    this.myForm.patchValue({

      "gender": "Male",
      "pwd" : "1234",

    })
  }
}
