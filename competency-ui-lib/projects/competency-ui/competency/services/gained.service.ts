import { Injectable } from '@angular/core';
import { DataService, urlConfig } from '@aastrika_npmjs/comptency/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ConfigService } from '@aastrika_npmjs/comptency/entry-module';

/**
 * GainedService to extend Data Service 
 *
 * @author Vishali Sakar <vishali.sakar@tarento.com>
 */

@Injectable({
  providedIn: 'root'
})
export class GainedService extends DataService {

  public competencyData = new BehaviorSubject<any>(undefined)
  competencyData$ = this.competencyData.asObservable();


  constructor(http:HttpClient, public configService: ConfigService) {
    super(http, configService)
  }

  /**
   * for making getall Gained api calls
   * 
   */

   public fetchUserPassbook(reqBody:any, id?:any){
    let config = this.configService.getConfig()
    const httpOptions: any = {
      url: config!.isMobileApp ? urlConfig.getUserPassbookMobile() :  urlConfig.getUserPassbook(),
      data: reqBody,
      header: config!.isMobileApp ? {'x-authenticated-userid': id } : ''
    };
    return this.post(httpOptions)
  }

  
  public fetchAllEntity(reqBody:any){
    let config = this.configService.getConfig()
    const httpOptions: any = {
      url: config!.isMobileApp ?  urlConfig.getAllEntityMobile()  : urlConfig.getAllEntity(),
      data: reqBody,
      
    };
    return this.post(httpOptions)
  }
}
