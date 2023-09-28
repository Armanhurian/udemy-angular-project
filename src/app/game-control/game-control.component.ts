import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent{

  count : number = 0

  @Output() intervalFire = new EventEmitter<Number>()

  startInterval ?: any ;

  startGame(){

    this.startInterval = setInterval(()=>{
       
      this.count++
      this.intervalFire.emit(this.count)
      
    },1000) 
    
  }

  stopGame(){
    clearInterval(this.startInterval)
  }
 

}
