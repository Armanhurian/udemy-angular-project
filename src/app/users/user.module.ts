import { NgModule } from "@angular/core";

import { UsersComponent } from '../users/users.component';
import { UserLoginComponent } from '../users/user-login/user-login.component';
import { CommonModule } from "@angular/common";
import { alertComponent } from '../alert/alert-component';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { DrivenExampleFormComponent } from "../driven-example-form/driven-example-form.component";

const myRoute :Routes = [
   {path : 'users'  , children : [
    {path : '' , component : UsersComponent},
    {path : 'driven-forms' , component : DrivenExampleFormComponent}
  ]},
]

@NgModule({
    declarations: [
        UsersComponent,
        UserLoginComponent,
        alertComponent,
    ],
    imports : [RouterModule.forRoot(myRoute), 
    CommonModule,
    FormsModule],

    exports : [
        UsersComponent,
        UserLoginComponent,
        alertComponent,
    ]
})
export class userModule{}