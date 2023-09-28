import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todos/todos.component';
import { TodoNumberComponent } from './todo-number/todo-number.component';
import { UsersComponent } from './users/users.component';

const routes : Routes = [
  {path : 'home' , component : HomeComponent},
  {path : 'servers' , component : ServersComponent},
  {path : 'todos' , component : TodosComponent , children : [
    {path : ':id' , component : TodoNumberComponent }
  ]},
  {path : 'users' , component : UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
