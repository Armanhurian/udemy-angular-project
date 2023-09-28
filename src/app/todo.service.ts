import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos : string[] = []

  userName : string = ''

  addClickFormsBtn(){ 

    this.todos.push(this.userName)
    console.log(this.todos);
    this.userName = ''

  }
}
