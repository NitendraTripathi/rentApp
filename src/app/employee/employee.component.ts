import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../Services/student.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
studentlst: any;
isEdit: boolean= false;
  myform= new FormGroup({
      "id": new FormControl('0'),
      "name": new FormControl(),
      "classname": new FormControl(),
      "address": new FormControl(),
  });
  constructor( private api: StudentService){}
  ngOnInit(): void {
    this. getAllStudent();
  }

  StudentRegistration()
  {
    if (this.isEdit == true)
    {
        this.UpdateStudent();
    }
    else
    {
        this.AddStudent()
    }
  }

  AddStudent()
  {
    debugger;
    console.log(this.myform.value);
    this.api.AddStudents(this.myform.value).subscribe( data => {

      alert("Student added succesfully");
      this.getAllStudent();
      this.myform.reset();
    });
  }

  UpdateStudent()
  {
    debugger;
    console.log(this.myform.value);
    this.api.UpdateStudents(this.myform.value).subscribe( data => {

      alert("Student updated succesfully");
      this.getAllStudent();
      this.myform.reset();
      this.isEdit=false;
    });
  }
  OnDelete(stid:any)
  {
    if(confirm("Do wants to delete students"))
    {
    debugger
      this.api.DeleteStudent(stid).subscribe(data => {
        alert("Student deleted succesfully");
        this.getAllStudent();

      })
    }
  }
  getAllStudent()
  {
    this.api.getAllStudents().subscribe(data => {
      this.studentlst= data;
    })
  }
  OnEdit(st :any)
  {
    this.isEdit=true
      console.log(st);
      this.myform.setValue({
        "id":st.id,
        "name":st.name,
        "classname":st.classname,
        "address":st.address,
      })

  }
  Reset()
  {
    this.isEdit=false;
    this.myform.reset();
  }

}
