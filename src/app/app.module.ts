import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
import { GameControlComponent } from './game-control/game-control.component';
import { HomeComponent } from './home/home.component';
import { DrivenExampleFormComponent } from './driven-example-form/driven-example-form.component';
import { ProjectComponent } from './project/project.component';
import { CoinsComponent } from './coins/coins.component';
import { HttpClientModule } from '@angular/common/http';
import { coreModule } from './core.module';
import { userModule } from './users/user.module';
import { ServersModule } from './servers/servers.module';
import { TodosModule } from './todos/todos.module';

@NgModule({
  declarations: [
    AppComponent,
    EvenComponent,
    OddComponent,
    GameControlComponent,
    HomeComponent,
    DrivenExampleFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectComponent,
    ReactiveFormsModule,
    CoinsComponent,
    FormsModule,
    ServersModule,
    TodosModule,
    HttpClientModule,
    coreModule,
    userModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
