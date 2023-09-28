import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
import { GameControlComponent } from './game-control/game-control.component';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';
import { RouterModule, Routes } from '@angular/router';
import { TodoNumberComponent } from './todo-number/todo-number.component';
import { UsersComponent } from './users/users.component';
import { UserLoginComponent } from './users/user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    TodoComponent,
    EvenComponent,
    OddComponent,
    GameControlComponent,
    HomeComponent,
    TodosComponent,
    TodoNumberComponent,
    UsersComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
