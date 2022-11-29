import { Injectable, Optional } from '@angular/core';
import { Subject,BehaviorSubject } from 'rxjs';
import { ConfigurationContext } from './configuration-context';
import { ConfigService as CoreConfig} from '@aastrika/comptency/core';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(@Optional() context: ConfigurationContext, public config: CoreConfig) { 
    if(context){
      console.log('context log in config service ------ ', context)
      this.config.setConfig(context)
    }
  }

 
}
