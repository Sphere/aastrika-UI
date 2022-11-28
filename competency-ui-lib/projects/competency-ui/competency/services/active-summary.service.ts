import { Injectable } from '@angular/core';
import { DataService } from '@aastrika/comptency/core';
import { HttpClient } from '@angular/common/http';
import { urlConfig  } from '@aastrika/comptency/core';
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
      console.log('calling getActivityById>>')
      const httpOptions: any = {
        url: urlConfig.getEntityById(reqBody.id),
        data: reqBody
      };
      console.log('reqBody',httpOptions)
      return this.post(httpOptions)
    }
}
