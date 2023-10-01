import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  myText : string = 'Test'

  projectForm = new FormGroup ({
    'projectName' : new FormControl ('',[Validators.required,this.forbiddenTestText.bind(this)]),
    'email' : new FormControl('',[Validators.required,Validators.email]),
    'status' : new FormControl('Critical')
  })

  submitForm(){
    console.log(this.projectForm.get('projectName')?.errors);
  }


  forbiddenTestText(control : FormControl): {[s:string]: boolean} | null{

    if(this.myText.indexOf(control.value) !== -1){

      return {'nameIsForbidden' : true}

    }else{

      return null
    }
  
  }

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
