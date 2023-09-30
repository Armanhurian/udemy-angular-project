import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {

  constructor (private usersService : UsersService) {}

  usersList : any[] = this.usersService.users

  emailHandler(event : string){
    
    console.log(event);

    console.log(this.usersList);
    
    
  }
  

}
