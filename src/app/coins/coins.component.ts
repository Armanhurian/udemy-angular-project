import { Component, OnDestroy, OnInit } from '@angular/core';
import { coinsService } from '../coins.service';
import { Observable,  Subscription,  catchError , exhaustMap, fromEvent, interval, map, pipe , take, throwError } from 'rxjs';
import { HttpErrorResponse, HttpHeaderResponse } from '@angular/common/http';

@Component({
  standalone : true , 
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit , OnDestroy{


  isETH : boolean = false

  subscription ?: Subscription


  constructor(private coinsServise : coinsService ){}
  
  getMyCoins(){
    
    // this.coinsServise.getNews().subscribe((data)=>{

    //   console.log(data);
      
    //   console.log(new HttpHeaderResponse(data).status);
      
    // })

    this.coinsServise.getNews().pipe(map((res)=>{

      let coins = []

      for(const key in res){
        if(res.hasOwnProperty(key)){
          coins.push({...res , id : key})
        }
      }

      return coins

    })).subscribe((result)=> {

      console.log(result);
      
    })

    
  }

  clickWindow(){

    this.subscription = fromEvent(document,'click')

    .pipe(exhaustMap(() => interval(1000)

    .pipe(take(10)))

    ).subscribe(x => console.log(x))

  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
  
  ngOnInit(): void {

    this.clickWindow()
    
    this.coinsServise.news.subscribe((data : any )=>{
      
      console.log(new HttpHeaderResponse(data).status);
      
      console.log(data);
      
    });
  }
}
