import { Inject, Injectable, Optional } from '@angular/core';
import { Subject,BehaviorSubject } from 'rxjs';
import { ConfigurationContext } from './configuration-context';
import * as _ from 'lodash-es';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public config$: Subject<any> = new BehaviorSubject<any>({});
  private _config = this.config$.asObservable()
 
  constructor(@Optional() @Inject('config') public config:ConfigurationContext ) { 
    console.log('log in config service ', config)
    if(!_.isEmpty(config)){
      console.log('context log in config service ------ ', config)
      this.setConfig(config)
    }
  }
  public setConfig(context) {
    this.config$.next(context)
  }
  public getConfig(){
    let config :any 
    this._config.subscribe((res:any)=>{
      if(!_.isEmpty(res)){
        config =  res
      } else {
        const c_cofig = JSON.parse(localStorage.getItem('competency'))
        config = c_cofig
      }
     
    })
    return config
  }
 
}
