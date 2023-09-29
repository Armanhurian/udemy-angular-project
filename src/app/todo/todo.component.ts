import { Component, OnInit } from "@angular/core";
import { TodoService } from "../todo.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
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


  clickFormsBtn(){ 

    this.todoService.addClickFormsBtn() 
    
  }

  navigatTo(id : number){

    console.log(id);
    
    this.router.navigate([id] , {relativeTo : this.route})

  }

}