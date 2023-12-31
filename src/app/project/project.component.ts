import { Component, OnInit, computed, signal } from '@angular/core';
import { FormArray, FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators, isFormControl } from '@angular/forms';
import { forbiddenValidators } from './forbidden-validators';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';

@Component({
  standalone : true , 
  imports : [ReactiveFormsModule , CommonModule],
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit{

  isValidTestText = false;

  x = signal(5)

  y = signal(3)



  projectForm = new FormGroup ({
    'projectName' :new FormControl('',[Validators.required,forbiddenValidators.customForbidden]) ,
    'email' : new FormControl('',[Validators.required,Validators.email]),
    'status' : new FormControl('Critical'),
    'skills' : new FormArray([])
  })

  ngOnInit(): void {
    console.log(this.projectForm.get('skills')?.value);
    
    let z = computed(()=> this.x() + this.y())

    this.y.set(10)

    console.log(z());
    
    setInterval(()=>{
      
      this.x.update((prevNumber) => prevNumber + 1)
      
    },1000)

  }

  get mySkills():any{
    return this.projectForm.get('skills')?.value
  }

  
  submitForm(){


    (<FormArray>this.projectForm.get('skills')).push(this.projectForm.get('email'))

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
