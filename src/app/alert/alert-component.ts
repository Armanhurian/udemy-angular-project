import { Component, Input, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

@Component({
    selector:'app-alert',
    templateUrl:'./alert-component.html',
    styleUrls : ['./alert-component.css']
})

export class alertComponent {

    @Input() isSubmit ?: boolean
    @Output() isClose = new Subject<boolean>()

    onClose(){

      this.isSubmit = false

      this.isClose.next(true)

      console.log(this.isSubmit);

    }

    enterToNextPage(){

      window.open('https://angular.io/docs')

    }
}