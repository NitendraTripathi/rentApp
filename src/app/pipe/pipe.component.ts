import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
myName: string="Nitendra"

salary: number=4500000
dateToday = new Date().toDateString();

employee={
  name: "Nitendra",
  mobilenum: 9911360342,
  email :"nitendra@gmail.com"
}

}
