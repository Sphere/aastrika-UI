import { DataService } from '@aastrika/comptency/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
/**
 * GainedService to extend Data Service
 *
 * @author Vishali Sakar <vishali.sakar@tarento.com>
 */
export declare class GainedService extends DataService {
    constructor(http: HttpClient);
    /**
     * for making getall Gained api calls
     *
     */
    fetchUserPassbook(reqBody: any): Observable<any>;
    fetchAllEntity(reqBody: any): Observable<any>;
}
