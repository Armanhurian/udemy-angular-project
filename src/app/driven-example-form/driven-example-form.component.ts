import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-driven-example-form',
  templateUrl: './driven-example-form.component.html',
  styleUrls: ['./driven-example-form.component.css']
})
export class DrivenExampleFormComponent{

  emailText:string = ''

  optionalText : string = ''

  usernameText:string = ''

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
    
    console.log(this.myFormsOptions.value);
  }

}
