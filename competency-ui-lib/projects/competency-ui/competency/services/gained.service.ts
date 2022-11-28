import { Injectable } from '@angular/core';
import { DataService, urlConfig } from '@aastrika/comptency/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';

/**
 * GainedService to extend Data Service 
 *
 * @author Vishali Sakar <vishali.sakar@tarento.com>
 */

@Injectable({
  providedIn: 'root'
})
export class GainedService extends DataService {

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
      // url: 'https://sphere.aastrika.org/apis/protected/v8/entityCompetency/getAllEntity',
      data: reqBody
    };
    return this.post(httpOptions)
  }

  // public requestDataFromMultipleSources(entityreqBody, passbookReqBody): Observable<any[]> {
  //   const fetchAllEntityReq: any = {
  //     url: urlConfig.getAllEntity(),
  //     // url: 'https://sphere.aastrika.org/apis/protected/v8/entityCompetency/getAllEntity',
  //     data: entityreqBody
  //   };

  //   const passbookReq: any = {
  //     url: urlConfig.getUserPassbook(),
    
  //     data: passbookReqBody
  //   };
    
    
  //   let fetchAllEntity = this.post(fetchAllEntityReq)
  //   let fetchUserPassbook = this.post(passbookReq)
  //   // Observable.forkJoin (RxJS 5) changes to just forkJoin() in RxJS 6
  //   return forkJoin([fetchAllEntity, fetchUserPassbook]);
  // }


  
}
