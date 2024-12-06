import { Inject, Injectable, Optional } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { ConfigurationContext } from './configuration-context';
import * as _ from 'lodash-es';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public config$: Subject<any> = new BehaviorSubject<any>({});
  private _config = this.config$.asObservable()

  constructor(@Optional() @Inject('config') public config: ConfigurationContext) {
    console.log('Constructor initialized in ConfigService');
    console.log('Received config:', config);

    if (config && !_.isEmpty(config)) {
      console.log('Valid config provided:', config);
      this.setConfig(config);
    } else {
      console.log('No valid config provided, checking localStorage for default.');
      const defaultConfig = JSON.parse(localStorage.getItem('competency') || '{}');
      console.log('Retrieved default config from localStorage:', defaultConfig);
      this.setConfig(defaultConfig);
    }
  }
  public setConfig(context) {
    this.config$.next(context)
  }
  public getConfig() {
    let config: any
    this._config.subscribe((res: any) => {
      if (!_.isEmpty(res)) {
        config = res
      } else {
        const c_cofig = JSON.parse(localStorage.getItem('competency'))
        config = c_cofig
      }

    })
    return config
  }
  public clearConfig() {
    this.config$.next({});
  }
}
