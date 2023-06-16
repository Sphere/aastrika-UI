import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap } from 'rxjs/operators'
import { of as observableOf, throwError as observableThrowError, Observable } from 'rxjs';
import { ConfigService } from '@aastrika_npmjs/comptency/entry-module';
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
  constructor(http: HttpClient, public configService: ConfigService,) {
    this.http = http
  }
  /**
   * for making get api calls
   *
   * @param requestParam interface
   */
  get(requestParam: any): Observable<any> {
    let config = this.configService.getConfig()
    let httpOptions: any = {
      headers: config.session ? this.setHeader(config.session) : requestParam.header ? requestParam.header : this.getHeader(),
      params: requestParam.param,
      observe: 'response'
    };
    return this.http.get(requestParam.url, httpOptions).pipe(
      mergeMap(({ body, headers }: any) => {
        if (body.responseCode !== 'OK') {
          return observableThrowError(body);
        }
        return observableOf(body);
      }));
  }


  getwithouTAuthorization(requestParam) {
    let config = this.configService.getConfig()
    let httpOptions: any = {
      headers: this.getHeader(),
      params: requestParam.param,
      observe: 'response'
    };
    return this.http.get(requestParam.url, httpOptions).pipe(
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
  post(requestParam: any) {
    let config = this.configService.getConfig()
    const httpOptions: any = {
      headers: config.session ? this.setHeader(config.session, requestParam.header ? requestParam.header : "") : requestParam.header ? requestParam.header : this.getHeader(),
      params: requestParam.param
    }
    // console.log('log in data service',requestParam)
    return this.http.post(requestParam.url, requestParam.data, httpOptions).pipe(
      mergeMap((data: any) => {
        if (data.responseCode === 200 || data.responseCode === 'OK') {
          return observableOf(data);
        } else {
          return observableThrowError(data);
        }

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

  private setHeader(session, header?: any) {
    const default_headers = {
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJTNHNNVFdjZUZqYkxUWGxiczkzUzk4dmFtODBhdkRPUiJ9.nPOCY0-bVX28iNcxxnYbGpihY3ZzfNwx0-SFCnJwjas`,
      'X-authenticated-user-token': session ? session.access_token : '',
    }
    if (header) {
      return { ...default_headers, ...header }
    } else {

      return { ...default_headers }
    }
  }
}
