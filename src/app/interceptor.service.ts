import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class InterCeptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler){

        console.log('http request is delivered');

        console.log(req.url);

        let newReq = req.clone({

            headers : req.headers.append("auth" , "abc")

        })
        
        return next.handle(newReq).pipe(tap(event =>{

            if(event.type === HttpEventType.Response){

                console.log("Incoming Request");

                console.log(event.body);
                
                
            }
            
            
        }))
        
    }
}