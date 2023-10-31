import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todos/todos.component';
import { TodoNumberComponent } from './todo-number/todo-number.component';
import { UsersComponent } from './users/users.component';
import { DrivenExampleFormComponent } from './driven-example-form/driven-example-form.component';
import { ProjectComponent } from './project/project.component';
import { CoinsComponent } from './coins/coins.component';

const routes : Routes = [
  {path : 'home' , component : HomeComponent},
  {path : 'servers' , component : ServersComponent},
  {path : 'todos' , component : TodosComponent , children : [
    {path : ':id' , component : TodoNumberComponent }
  ]},
  {path : 'users'  , children : [
    {path : '' , component : UsersComponent},
    {path : 'driven-forms' , component : DrivenExampleFormComponent}
  ]},
  {path : 'project' , component : ProjectComponent},  
  {path : 'news' , component : CoinsComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
