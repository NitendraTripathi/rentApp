import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  userlist: any;
  studentslist: any;
constructor(private api:CommonService)
{

}
  ngOnInit(): void {
    this.api.getAllUserList().subscribe(data=>{
      console.log(data);
      this.userlist=data;
    });

this.api.getAllStudents().subscribe(data => {
  console.log(data);
  this.studentslist=data;
});
  }

}
