import { Injectable } from '@angular/core';
import { DataService } from '@aastrika_npmjs/comptency/core';
import { HttpClient } from '@angular/common/http';
import { urlConfig  } from '@aastrika_npmjs/comptency/core';
import { ConfigService } from '@aastrika_npmjs/comptency/entry-module';
/**
 * RequiredCompetencyService to extend Data Service 
 *
 * @author Mansur Shaik <mansur.shaik@tarento.com>
 */
@Injectable({
  providedIn: 'root'
})
export class RequiredCompetencyService extends DataService {

  constructor(http:HttpClient, public configService: ConfigService) {
    super(http, configService)
   }

  /**
   * for making getall required competency api calls
   * 
   */

   public getRequiredCompetencyById(reqBody:any){
    const httpOptions: any = {
      url: urlConfig.getEntityById(3),
      data: reqBody
    };
    // console.log('reqBody',httpOptions)
    return this.post(httpOptions)
  }
  
}
