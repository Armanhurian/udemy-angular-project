import { Component,  Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  @Output() emailUser = new Subject<string>()

  userSubmit(form : NgForm){

    this.emailUser.next(form.form.value['email'])

  }

}
