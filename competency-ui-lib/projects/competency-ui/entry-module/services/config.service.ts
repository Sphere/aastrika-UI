import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private _config: any
  constructor() { }

  setConfig(config) {
    this._config = config;
  }
  public getConfig() {
    return this._config;
  }
}
