import { ElementRef, OnInit, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure : false
})
export class FilterPipe implements PipeTransform{


  transform(value: any , filterServer : string , textOfIndex : string){


    let filterValue = value.filter(( item : any ) => {

      
      if(item[textOfIndex].toLowerCase().includes(filterServer) !== ''){
        
        return item[textOfIndex].toLowerCase().includes(filterServer) 
        
      }

    })


    return filterValue
    



  }


}
