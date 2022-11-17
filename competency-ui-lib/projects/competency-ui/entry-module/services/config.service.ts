import { Injectable, Optional } from '@angular/core';

import { Subject,BehaviorSubject } from 'rxjs';
import { ConfigurationContext } from './configuration-context';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private _config: any
  public config$: Subject<any> = new BehaviorSubject<any>({});
  constructor(@Optional() context: ConfigurationContext) { 
    if(context){
      console.log('context log in config service ------ ', context)
      this.setConfig(context)
    }
  }

  public setConfig(context) {
    this.config$.next(context)
  }
}
