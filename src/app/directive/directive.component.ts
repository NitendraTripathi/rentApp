import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
isShow: boolean=false;
gender : string[]=["Male","Female","other"]

employees : string[]= ["Nitendra","Rajee","Supriya","Monika"]

friendslist = [
  {
    name: 'Nishant',
    gender:"Male",
    age: 25,
    salary :500000
  },
  {
    name: 'Shailesh',
    gender:"Male",
    age: 45,
    salary :10000
  },
  {
    name: 'Abhishek',
    gender:"Male",
    age: 36,
    salary :400000
  },
  {
    name: 'Akshay',
    gender:"Male",
    age: 65,
    salary :300000
  },
  {
    name: 'Ashish',
    gender:"Male",
    age: 12,
    salary :500000
  },
  {
    name: 'Uday',
    gender:"Male",
    age: 31,
    salary :800000
  },
  {
    name: 'Mayank',
    gender:"Male",
    age: 45,
    salary :600000
  },
  {
    name: 'Rajee',
    gender:"Female",
    age: 74,
    salary :200000
  },
]

num: number=0;
ShowHide()
{
  this.isShow=true;
}

style12={
  'backgound':'yellow',
  'border' : '10px solid green'
}

}
