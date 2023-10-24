import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {

  caption : string ="Show";
  isShow : boolean = false;
  showHide()
  {
    if(this.caption == "Show")
    {
      this.caption="Hide";
      this.isShow=true;
    }
    else
    {
      this.caption="Show";
      this.isShow=false;
    }

  }

}
