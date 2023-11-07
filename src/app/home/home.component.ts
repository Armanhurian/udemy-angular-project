import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  standalone : true , 
  imports : [CommonModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  constructor( private http : HttpClient ){}

  isUpload : boolean = false

  imageSrc : string = ''

  nameOfUser : string = ''

  emailOfUser : string = ''

  birthDay : string = ''
  
  getAnimals(){

    let searchMyParams = new HttpParams()
    searchMyParams = searchMyParams.append('type' , 'fast').append('options', 'fullStack')
    //searchMyParams = searchMyParams.append('options' , 'fullStack')

    this.http.get('https://randomuser.me/api/',
    
    {

      headers : new HttpHeaders({'custom' : 'change'}),
      params : searchMyParams,
      
    }

    ).subscribe((data)=>{

      this.isUpload = true
   
      this.imageSrc = Object.values(data)[0][0]["picture"]["large"]
      this.nameOfUser = Object.values(data)[0][0]["name"]["first"]
      this.emailOfUser = Object.values(data)[0][0]["email"]
      this.birthDay = Object.values(data)[0][0]["dob"]["date"].slice(0,10)

    })
  }

  removeUser(){
    this.isUpload = false
  }

}
