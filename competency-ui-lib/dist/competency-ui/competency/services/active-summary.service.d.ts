import { DataService } from '@aastrika_npmjs/comptency/core';
import { HttpClient } from '@angular/common/http';
/**
 * ActiveSummaryService to extend Data Service
 *
 * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
 */
export declare class ActiveSummaryService extends DataService {
    constructor(http: HttpClient);
    /**
    * for making getall activity api calls
    *
    */
    getActivityById(reqBody: any): import("rxjs").Observable<any>;
}
