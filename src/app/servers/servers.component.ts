import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [`
  p {
    font-weight : bold;
    color : darkblue
  }
  `],
  encapsulation : ViewEncapsulation.None
})
export class ServersComponent {

}
