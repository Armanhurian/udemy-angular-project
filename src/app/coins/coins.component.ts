import { Component, OnInit } from '@angular/core';
import { coinsService } from '../coins.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit{


  isETH : boolean = false

  constructor(private coinsServise : coinsService){}
  
  getMyCoins(){
     this.coinsServise.getCoin().subscribe((data)=>{

      if(Object.values(data)[0][0]['id'] === 'eth'){

        this.isETH = true
        this.coinsServise.coin.next(Object.values(data)[0][0]['id'])
        
      }else{
        this.isETH = false
      }
      
      console.log(this.isETH);
    })
  }

  ngOnInit(): void {
    this.coinsServise.coin.subscribe(data=>{

      console.log(data);
      
    });
    
  }
}
