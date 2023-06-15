import { Injectable } from '@angular/core';
import { DataService, urlConfig } from '@aastrika_npmjs/competency-web/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

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


  constructor(http:HttpClient) {
    super(http)
  }

  /**
   * for making getall Gained api calls
   *
   */

   public fetchUserPassbook(reqBody:any){

    const httpOptions: any = {
      url: urlConfig.getUserPassbook(),
      data: reqBody
    };
    return this.post(httpOptions)
  }


  public fetchAllEntity(reqBody:any){

    const httpOptions: any = {
      url: urlConfig.getAllEntity(),
      data: reqBody
    };
    return this.post(httpOptions)
  }
}
