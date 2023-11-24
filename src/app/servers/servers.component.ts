import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Servers } from './servers.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServersModule } from './servers.module';

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
export class ServersComponent{

  @ViewChild('myElem') 'myElem' : ElementRef 

  filterServer : string = ''

  servers : Servers[] = [
    {
      instanceType: 'medium',
      name: 'Production',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'Testing My Server',
      status: 'critical',
      started: new Date(15, 1, 2017)
    },
  ];


  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }

  clickToAddServer(){
    

    this.servers.push(new Servers('medium','my DB','critical',new Date(15, 1, 2017)))

    


  }

}
