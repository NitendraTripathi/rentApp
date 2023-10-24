import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {

  myname: string ="Rajee";

  p1: number=20;
  p2: number=40;

  cuurdate: Date= new Date;

}
