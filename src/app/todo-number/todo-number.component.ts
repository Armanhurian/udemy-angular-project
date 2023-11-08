import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TodoService } from '../todo.service';
import { Subject, Subscription, fromEvent, pipe } from 'rxjs';

@Component({
  selector: 'app-todo-number',
  templateUrl: './todo-number.component.html',
  styleUrls: ['./todo-number.component.css']
})
export class TodoNumberComponent implements OnInit , OnDestroy{

  index ?: number | any

  id ?:number;

  myTodos : string[] = []

  subscribtion ?: Subscription

  constructor(private route : ActivatedRoute , public todoService : TodoService ){}


  ngOnInit(): void {

    
    this.subscribtion = this.route.params.subscribe((params : Params)=>{
      
      this.myTodos = this.todoService.todos
      
      this.index = Number(params['id']) - 1

      let counter = signal(this.index + 1)
  
      setInterval(()=>{
  
        counter.update((prevCount) => prevCount + 1)
  
        this.id = counter()
        
      },1000)
      
      console.log(this.index);
      
      
      console.log(this.myTodos);
      
    })
    
    
  }
  
  ngOnDestroy(): void {

    this.subscribtion?.unsubscribe()

  }


}
