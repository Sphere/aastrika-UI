import { Inject, Injectable, Optional } from '@angular/core';
import { Subject,BehaviorSubject } from 'rxjs';
import { ConfigurationContext } from './configuration-context';
import * as _ from 'lodash-es';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public config$: BehaviorSubject<any> = new BehaviorSubject<any>({});
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
  public getConfig() {
    // First check BehaviorSubject's current value
    const currentValue = this.config$.getValue();
    if (!_.isEmpty(currentValue)) {
      return currentValue;
    }
    // Fallback to localStorage if BehaviorSubject is empty
    const localConfig = JSON.parse(localStorage.getItem('competency') || '{}');
    return localConfig;
  }

  public clearConfig() {
    this.config$.next({});
    localStorage.removeItem('competency');
  }
}
