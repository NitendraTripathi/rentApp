import { Component } from '@angular/core';

@Component({
  selector: 'app-templatereference',
  templateUrl: './templatereference.component.html',
  styleUrls: ['./templatereference.component.css']
})
export class TemplatereferenceComponent {

  getvalue(val : any)
  {
    console.log(val);
    // console.log(val.value);
    // console.log(val.name);
  }

}
