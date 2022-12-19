import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
/**
 * DataService to make http call
 *
 * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
 */
export declare class DataService {
    /**
   * Contains base Url for api end points
   */
    baseUrl: string;
    /**
   * angular HttpClient
   */
    http: HttpClient;
    constructor(http: HttpClient);
    /**
     * for making get api calls
     *
     * @param requestParam interface
     */
    get(requestParam: any): Observable<any>;
    /**
    * for making get api calls
    *
    * @param requestParam interface
    */
    post(requestParam: any): Observable<any>;
    /**
     * for preparing headers
     */
    private getHeader;
}
