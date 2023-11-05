import { NgModule } from "@angular/core";

import {HTTP_INTERCEPTORS} from '@angular/common/http'
import { InterCeptorService } from './interceptor.service';

@NgModule({

    providers: [
        {
            provide : HTTP_INTERCEPTORS , 
            useClass : InterCeptorService , 
            multi : true
        }
    ]

})

export class coreModule {}