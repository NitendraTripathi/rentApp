import { Component } from '@angular/core';


@Component({
  selector: 'app-oneway',
  templateUrl: './oneway.component.html',
  styleUrls: ['./oneway.component.css']
})
export class OnewayComponent {

  imgpath : string ="./assets/img1.jpeg";
  myName: string ="Nitendra";
  isDisable: boolean = false;
  msg : string ="";
  color1 : string="";

Red()
{
this.msg=" you have selected red";
}

MouseOver()
{
  alert("hello");
}

Blue()
{
  this.msg=" you have selected blue";
}

color(val: any)
{
  console.log(this.color1);
  if (this.color1 == "Red")
  {
    this.msg=" you have selected red";
  }
  else
  {
    this.msg=" you have selected blue";
  }

}

  method1()
  {
    console.log("method1");
  }
  method2()
  {
    alert("you clicked me");
  }
}
