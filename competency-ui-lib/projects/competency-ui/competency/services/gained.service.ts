import { Injectable } from '@angular/core';
import { DataService, urlConfig } from '@aastrika_npmjs/comptency/core';
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
      data: reqBody
    };
    return this.post(httpOptions)
  }
}
