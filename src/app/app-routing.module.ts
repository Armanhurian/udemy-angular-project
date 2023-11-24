import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { CoinsComponent } from './coins/coins.component';

const routes : Routes = [
  {path : 'home' , 

   //component : HomeComponent

   loadComponent : () => import('./home/home.component').then((mod) => mod.HomeComponent) 
  },
  {path : 'project' ,

   //component : HomeComponent

   loadComponent : () => import('./project/project.component').then((mod) => mod.ProjectComponent)
  },  
  {path : 'news' ,

   loadComponent : () => import('./coins/coins.component').then((mod) => mod.CoinsComponent)

  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
