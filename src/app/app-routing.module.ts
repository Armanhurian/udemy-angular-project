import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { CoinsComponent } from './coins/coins.component';

const routes : Routes = [
  {path : 'home' , component : HomeComponent},
  {path : 'project' , component : ProjectComponent},  
  {path : 'news' , component : CoinsComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
