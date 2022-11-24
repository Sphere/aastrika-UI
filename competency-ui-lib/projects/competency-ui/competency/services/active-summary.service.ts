import { Injectable } from '@angular/core';
import { DataService } from 'projects/competency-ui/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ActiveSummaryService extends DataService {

  constructor(http:HttpClient) {
    super(http)
    this.baseUrl = ''
  }
  /**
   * for making getall activity api calls
   * 
   */
  public getAllActivity(reqBody:any){
    const httpOptions: any = {
      url: '',
      data: reqBody
    };
    return this.post(httpOptions)
  }
   /**
   * for making getall activity api calls
   * 
   */
    public getActivityById(reqBody:any){
      const httpOptions: any = {
        url: '',
        data: reqBody
      };
      return this.post(httpOptions)
    }
}
