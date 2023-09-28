import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {

  emailHandler(event : string){
    
    console.log(event);
    
  }
  

}
