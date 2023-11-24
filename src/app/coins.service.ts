import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn : "root"})

export class coinsService {
   
  constructor(private http: HttpClient){}

  news = new BehaviorSubject<string>('')

  getNews(){

   return this.http.get('https://jsonplaceholder.typicode.com/posts/1', {
    headers : new HttpHeaders({'Auth' : 'coin'}),
    params : new HttpParams().set('param' , 'abc')
    
   })
    
  }

}