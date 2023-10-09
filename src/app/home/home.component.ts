import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  constructor( private http : HttpClient ){}
  
  
  getAnimals(){

    let searchMyParams = new HttpParams()
    searchMyParams = searchMyParams.append('type' , 'fast').append('options', 'fullStack')
    //searchMyParams = searchMyParams.append('options' , 'fullStack')

    this.http.get('http://api.agromonitoring.com/agro/1.0/polygons/incorrect',
    
    {

      headers : new HttpHeaders({'custom' : 'change'}),
      params : searchMyParams
      
    }

    ).subscribe((data)=>{
      console.log(data); 
    })
  }

}
