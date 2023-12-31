
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { concatText } from '../store/app.actions';
import { Observable } from 'rxjs';
import { selectText } from '../store/app.selector';

@Component({ 
  
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , AfterViewInit {
  
  constructor( private http : HttpClient , private store : Store<{concat : string}>){}

  @ViewChild('localElem') 'localElem' : ElementRef

  isUpload : boolean = false

  nameOfDeveloper$ ?: Observable<string>

  imageSrc : string = ''

  nameOfUser : string = ''

  emailOfUser : string = ''

  birthDay : string = ''

  myNumber ?: number 

  isShowNumber : boolean = false 

  ngOnInit(): void {
    
    this.nameOfDeveloper$ = this.store.select(selectText)

    //console.log(this.localElem.nativeElement.innerHTML);
    
    
  }
  
  ngAfterViewInit(): void {
    
    console.log(this.localElem.nativeElement.innerHTML);
    
  }

  concatName () {
    this.store.dispatch(concatText({value : 'hurian'}))
  }

  updateCount(event : number){

    console.log(event);

    this.myNumber = event

    this.isShowNumber =! this.isShowNumber
    
  }
  
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
