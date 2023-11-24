import { Component, OnInit } from "@angular/core";
import { TodoService } from "../todo.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@Component({
    standalone : true,
    animations : [
      trigger('myState',[
       state('normal', style({
        'background-color': 'blueviolet',
        transform : 'translateX(0px)',
      })),
      state('clickedOn', style({
        'background-color': 'red',
        transform : 'translateX(100px)'
       })),
       transition('normal => clickedOn', animate(300)),
       transition('clickedOn => normal', animate(500)),
      ]),

      trigger('divState',[
        state('left',style({
          transform : 'translateX(-150px)'
        })),
        state('right',style({
          transform : 'translateX(10px)'
        })),
        transition('left => right', animate(300)),
        transition('right => left', animate(300)),
      ])
    ],
    imports: [FormsModule , CommonModule , BrowserAnimationsModule],
    selector : 'app-todo',
    templateUrl : './todo.component.html',
    styles:[`
     h2{
       color: red
     }
    `] 
})

export class TodoComponent{

  constructor(public todoService : TodoService , private router : Router , private route : ActivatedRoute){}

  state  = 'normal'

  motivation = 'left'

  clickFormsBtn(){ 

    this.todoService.addClickFormsBtn() 

    this.state == 'normal' ? this.state = 'clickedOn' : this.state = 'normal'

    this.motivation == 'left' ? this.motivation = 'right' : this.motivation = 'left' 
    
  }

  navigatTo(id : number){

    console.log(id);
    
    this.router.navigate([id] , {relativeTo : this.route})

  }

}