import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DataService } from '@aastrika_npmjs/comptency/core';
import { HttpClient } from '@angular/common/http';
import { urlConfig } from '@aastrika_npmjs/comptency/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
/**
 * RequiredCompetencyService to extend Data Service
 *
 * @author Mansur Shaik <mansur.shaik@tarento.com>
 */
let RequiredCompetencyService = class RequiredCompetencyService extends DataService {
    constructor(http) {
        super(http);
    }
    /**
     * for making getall required competency api calls
     *
     */
    getRequiredCompetencyById(reqBody) {
        const httpOptions = {
            url: urlConfig.getEntityById(3),
            data: reqBody
        };
        console.log('reqBody', httpOptions);
        return this.post(httpOptions);
    }
};
RequiredCompetencyService.ctorParameters = () => [
    { type: HttpClient }
];
RequiredCompetencyService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function RequiredCompetencyService_Factory() { return new RequiredCompetencyService(i0.ɵɵinject(i1.HttpClient)); }, token: RequiredCompetencyService, providedIn: "root" });
RequiredCompetencyService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], RequiredCompetencyService);
export { RequiredCompetencyService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWlyZWQtY29tcGV0ZW5jeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFhc3RyaWthX25wbWpzL2NvbXB0ZW5jeS9jb21wZXRlbmN5LyIsInNvdXJjZXMiOlsic2VydmljZXMvcmVxdWlyZWQtY29tcGV0ZW5jeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFNBQVMsRUFBRyxNQUFNLGdDQUFnQyxDQUFDOzs7QUFDNUQ7Ozs7R0FJRztBQUlILElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQTBCLFNBQVEsV0FBVztJQUV4RCxZQUFZLElBQWU7UUFDekIsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ1osQ0FBQztJQUVGOzs7T0FHRztJQUVLLHlCQUF5QixDQUFDLE9BQVc7UUFDM0MsTUFBTSxXQUFXLEdBQVE7WUFDdkIsR0FBRyxFQUFFLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksRUFBRSxPQUFPO1NBQ2QsQ0FBQztRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUMvQixDQUFDO0NBRUYsQ0FBQTs7WUFsQmtCLFVBQVU7OztBQUZoQix5QkFBeUI7SUFIckMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLHlCQUF5QixDQW9CckM7U0FwQlkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICdAYWFzdHJpa2FfbnBtanMvY29tcHRlbmN5L2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IHVybENvbmZpZyAgfSBmcm9tICdAYWFzdHJpa2FfbnBtanMvY29tcHRlbmN5L2NvcmUnO1xuLyoqXG4gKiBSZXF1aXJlZENvbXBldGVuY3lTZXJ2aWNlIHRvIGV4dGVuZCBEYXRhIFNlcnZpY2UgXG4gKlxuICogQGF1dGhvciBNYW5zdXIgU2hhaWsgPG1hbnN1ci5zaGFpa0B0YXJlbnRvLmNvbT5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUmVxdWlyZWRDb21wZXRlbmN5U2VydmljZSBleHRlbmRzIERhdGFTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihodHRwOkh0dHBDbGllbnQpIHtcbiAgICBzdXBlcihodHRwKVxuICAgfVxuXG4gIC8qKlxuICAgKiBmb3IgbWFraW5nIGdldGFsbCByZXF1aXJlZCBjb21wZXRlbmN5IGFwaSBjYWxsc1xuICAgKiBcbiAgICovXG5cbiAgIHB1YmxpYyBnZXRSZXF1aXJlZENvbXBldGVuY3lCeUlkKHJlcUJvZHk6YW55KXtcbiAgICBjb25zdCBodHRwT3B0aW9uczogYW55ID0ge1xuICAgICAgdXJsOiB1cmxDb25maWcuZ2V0RW50aXR5QnlJZCgzKSxcbiAgICAgIGRhdGE6IHJlcUJvZHlcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKCdyZXFCb2R5JyxodHRwT3B0aW9ucylcbiAgICByZXR1cm4gdGhpcy5wb3N0KGh0dHBPcHRpb25zKVxuICB9XG4gIFxufVxuIl19