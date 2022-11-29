import { Injectable } from '@angular/core';
import { Subject,BehaviorSubject } from 'rxjs';
/**
 * Service to fetch config details.
 *
 */
@Injectable()
export class ConfigService {
  public config$: Subject<any> = new BehaviorSubject<any>({});
  private _config = this.config$.asObservable()
  constructor(){

  }
  public setConfig(context) {
    this.config$.next(context)
  }
  public getConfig(){
    const config = this._config.subscribe((res:any)=>{
      return res
    })
    return config
  }
  
}

