import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators, isFormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { forbiddenValidators } from './forbidden-validators';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  isValidTestText = false;


  projectForm = new FormGroup ({
    'projectName' :new FormControl('',[Validators.required,forbiddenValidators.customForbidden]) ,
    'email' : new FormControl('',[Validators.required,Validators.email]),
    'status' : new FormControl('Critical')
  })

  submitForm(){
    if(this.projectForm.get('projectName')?.errors){

      this.isValidTestText = true

    }else{
      
      this.isValidTestText = false
    }

    if(!this.isValidTestText && this.projectForm.get('projectName')?.value && this.projectForm.get('email')?.value){

      console.log(this.projectForm.value);
    }

    
  }


  // forbiddenTestText(control : FormControl): {[s:string]: boolean} | null{

  //   if(this.myText.indexOf(control.value) !== -1){

  //     return {'nameIsForbidden' : true}

  //   }else{

  //     return null
  //   }
  
  // }

  // forbiddenTestText(control : FormControl) : Promise<any> | Observable<any> {

  //   const promise = new Promise<any>((resolve,reject)=>{

  //     setTimeout(() => {

  //       if(control.value === this.myText){

  //         resolve({'nameIsForbidden' : true})

  //       }else{
  //         resolve(null)
  //       }

  //     },1500)

  //   })

  //   return promise

  // }

}
