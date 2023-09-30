import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-driven-example-form',
  templateUrl: './driven-example-form.component.html',
  styleUrls: ['./driven-example-form.component.css']
})
export class DrivenExampleFormComponent{

  emailText:string = ''

  optionalText : string = ''

  usernameText:string = ''

  usersLogin : object[] = []

  constructor (private usersService : UsersService) {}

  @ViewChild('forms') 'myFormsOptions' : NgForm

  onKeyEmailUp(){

    console.log(this.emailText);
    
  }
  onKeyusernameUp(){

    console.log(this.usernameText);
    
  }
  changedOption(event:any){
    this.optionalText = event.target.value
  }

  onSubmitForm(){

    this.emailText = this.myFormsOptions.value.email 
    this.optionalText = this.myFormsOptions.value.Advanced 
    this.usernameText = this.myFormsOptions.value.username 
    
    
    if(this.emailText && this.optionalText && this.usernameText){
      
      this.usersLogin.push(this.myFormsOptions.value)
    }else{

      alert('لطفا فرم را کامل پر کنید')
      
    }

    this.emailText = ''
    this.optionalText = ''
    this.usernameText = ''
 
    this.usersService.users = this.usersLogin
    
  }

}
