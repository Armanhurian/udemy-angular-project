import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-number',
  templateUrl: './todo-number.component.html',
  styleUrls: ['./todo-number.component.css']
})
export class TodoNumberComponent implements OnInit{

  index ?: number | any

  myTodos : string[] = []

  constructor(private route : ActivatedRoute , public todoService : TodoService){}

  ngOnInit(): void {
    
    this.route.params.subscribe((params : Params)=>{

      this.myTodos = this.todoService.todos

      this.index = Number(params['id']) - 1

      console.log(this.index);

      console.log(this.myTodos);
      
    })
  }

}
