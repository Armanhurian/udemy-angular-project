import { NgModule } from "@angular/core";
import { TodoComponent } from "../todo/todo.component";
import { TodosComponent } from "./todos.component";
import { TodoNumberComponent } from "../todo-number/todo-number.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

const routes : Routes = [
    {path : 'todos' , component : TodosComponent , children : [
        {path : ':id' , component : TodoNumberComponent }
    ]},
]

@NgModule({

    declarations : [TodosComponent,TodoNumberComponent],

    imports : [RouterModule.forRoot(routes) , CommonModule , FormsModule ,TodoComponent],

    exports : [TodoComponent,TodosComponent,TodoNumberComponent]

})
export class TodosModule{}