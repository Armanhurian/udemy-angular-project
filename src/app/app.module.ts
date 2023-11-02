import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
import { GameControlComponent } from './game-control/game-control.component';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';
import { RouterModule, Routes } from '@angular/router';
import { TodoNumberComponent } from './todo-number/todo-number.component';
import { UsersComponent } from './users/users.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { DrivenExampleFormComponent } from './driven-example-form/driven-example-form.component';
import { ProjectComponent } from './project/project.component';
import { UsersService } from './users.service';
import { FilterPipe } from './filter.pipe';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { InterCeptorService } from './interceptor.service';
import { CoinsComponent } from './coins/coins.component';
import { alertComponent } from './alert/alert-component';

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
    UserLoginComponent,
    DrivenExampleFormComponent,
    ProjectComponent,
    FilterPipe,
    alertComponent,
    CoinsComponent
  ],
  providers : [{
    provide : HTTP_INTERCEPTORS , 
    useClass : InterCeptorService , 
    multi : true
  }],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
