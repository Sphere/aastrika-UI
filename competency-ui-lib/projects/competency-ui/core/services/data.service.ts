import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {mergeMap} from 'rxjs/operators'
import { of as observableOf, throwError as observableThrowError, Observable } from 'rxjs';
/**
 * DataService to make http call
 *
 * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
 */
@Injectable({
  providedIn: 'root'
})
export class DataService {
    /**
   * Contains base Url for api end points
   */
     baseUrl: string;
    /**
   * angular HttpClient
   */
  http: HttpClient;
  constructor(http:HttpClient) {
    this.http = http
   }
  /**
   * for making get api calls
   *
   * @param requestParam interface
   */
  get(requestParam:any):Observable<any>{
    const httpOptions: any = {
      headers: requestParam.header ? requestParam.header : this.getHeader(),
      params: requestParam.param,
      observe: 'response'
    };
    return this.http.get(this.baseUrl + requestParam.url, httpOptions).pipe(
      mergeMap(({ body, headers }: any) => {
        if (body.responseCode !== 'OK') {
          return observableThrowError(body);
        }
        return observableOf(body);
      }));
  }
   /**
   * for making get api calls
   *
   * @param requestParam interface
   */
  post(requestParam:any){
    const httpOptions:any = {
      headers: requestParam.header ? this.getHeader(requestParam.header) : this.getHeader(),
      params: requestParam.param
    }
    console.log('log in data service',requestParam)
    return this.http.post(requestParam.url,requestParam.data,httpOptions).pipe(
      mergeMap((data:any)=>{
        if (data.responseCode !== 200) {
          return observableThrowError(data);
        }
        return observableOf(data);
      })
    )
  }
  /**
   * for preparing headers
   */
   private getHeader(headers?: any): any {
    
    const default_headers = {
      'Accept': 'application/json',
     
    };
    
    if (headers) {
      return { ...default_headers, ...headers };
    } else {
      return { ...default_headers };
    }
  }
}
