import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any , filterServer: string , filterIndex : string){

    let filterArray = value.filter((item:any)=>{

      item[filterIndex] === filterServer
      
    })
    return filterArray;
  }

}
