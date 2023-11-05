import { NgModule } from "@angular/core";

import { ServersComponent } from "./servers.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { FilterPipe } from "../filter.pipe";
import { RouterModule, Routes } from "@angular/router";


const routes : Routes = [

    {path : 'servers' , component : ServersComponent},

]


@NgModule({

    declarations: [ServersComponent , FilterPipe],

    imports : [RouterModule.forRoot(routes) , CommonModule , FormsModule ], 

    exports : [ServersComponent , FilterPipe]

})

export class ServersModule{}