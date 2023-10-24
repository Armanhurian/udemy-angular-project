import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn : "root"})

export class coinsService {
   
  constructor(private http: HttpClient){}

  coin = new Subject<string>()

  getCoin(){

    return this.http.get('https://api.geckoterminal.com/api/v2/networks?page=1') 
    
  }

}