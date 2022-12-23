import { Injectable } from '@angular/core';
import { DataService } from '@aastrika_npmjs/comptency/core';
import { HttpClient } from '@angular/common/http';
import { urlConfig  } from '@aastrika_npmjs/comptency/core';
import { map } from 'rxjs/operators';
/**
 * ActiveSummaryService to extend Data Service 
 *
 * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
 */
@Injectable({
  providedIn: 'root'
})
export class ActiveSummaryService extends DataService {

  constructor(http:HttpClient) {
    super(http)
  }

   /**
   * for making getall activity api calls
   * 
   */
    public getActivityById(reqBody:any){
      // console.log('calling getActivityById>>')
      const httpOptions: any = {
        url: urlConfig.getEntityById(reqBody.id),
        data: reqBody
      };
      // console.log('reqBody',httpOptions)
      return this.post(httpOptions)
    }
     /**
   * for making  api calls to get userDetails
   * 
   */
    public getUserdetailsFromRegistry(reqBody:any){
      const httpOptions: any = {
        url: urlConfig.getUserdetailsFromRegistry(reqBody.id),
      };
      return this.get(httpOptions).pipe(map((res: any) => res.result.response))
    }
}
