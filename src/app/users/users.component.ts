import { Component, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent{

  constructor (private usersService : UsersService) {}

  usersList : any[] = this.usersService.users

  isSubmit:boolean = false

  closeAlert(){
    this.isSubmit = false
  }

  emailHandler(event : string){
    
    console.log(event);

    console.log(this.usersList);
    
    this.isSubmit = true

    console.log(this.isSubmit);
    
    
  }
  

}
