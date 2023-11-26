import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropStyle]'
})
export class DropStyleDirective implements OnInit{

  constructor(private elRef : ElementRef , private renderer : Renderer2) { }

  ngOnInit(): void {
    
    //this.elRef.nativeElement.style.color = 'blue'

    this.renderer.setStyle(this.elRef.nativeElement , 'color', 'blue')
  }

}
