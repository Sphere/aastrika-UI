import { DataService } from '@aastrika_npmjs/comptency/core';
import { HttpClient } from '@angular/common/http';
/**
 * RequiredCompetencyService to extend Data Service
 *
 * @author Mansur Shaik <mansur.shaik@tarento.com>
 */
export declare class RequiredCompetencyService extends DataService {
    constructor(http: HttpClient);
    /**
     * for making getall required competency api calls
     *
     */
    getRequiredCompetencyById(reqBody: any): import("rxjs").Observable<any>;
}
