import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  standalone : true
})
export class DropdownDirective implements OnInit {

  constructor(private elementRef : ElementRef) { }

  isOpen : boolean = false 


  

  @HostListener('document:click' , ['$event']) getMyCoins(event : Event){

    this.isOpen =!this.isOpen

    if(!this.isOpen){
      
      this.elementRef.nativeElement.classList.remove('open')
      this.elementRef.nativeElement.classList.add('close')

    }else{
      this.elementRef.nativeElement.classList.remove('close')
      this.elementRef.nativeElement.classList.add('open')
    }
    
  }
  
  ngOnInit(): void {
    
    console.log(this.elementRef.nativeElement.className);
    
    
  }

}
