import { Injectable } from '@angular/core';
import * as urlConfig from './url.config.json';


/**
 * Service to fetch config details.
 *
 */
@Injectable()
export class ConfigService {
  /**
   * property containing url config
   *
   */
  urlConFig = (<any>urlConfig['default']);
  
}

