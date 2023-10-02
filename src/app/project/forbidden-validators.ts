import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class forbiddenValidators {


    static customForbidden(control : FormControl):{[s:string ] : boolean} | null{
        if(control.value === 'Test'){

            return {'nameIsForbidden' : true}

        }else{
            return null
        }
    }

    static asyncForbidden(control : FormControl): Promise<any> | Observable <any> {

        const promise = new Promise((resolve,reject)=>{

           setTimeout(()=>{

            if(control.value === 'Test'){
                resolve({'nameIsForbidden' : true})
            }else{
                resolve(null)
            }
           },1500)
        })

        return promise
    }

}