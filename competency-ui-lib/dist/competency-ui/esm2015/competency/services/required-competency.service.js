import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DataService } from '@aastrika/comptency/core';
import { HttpClient } from '@angular/common/http';
import { urlConfig } from '@aastrika/comptency/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWlyZWQtY29tcGV0ZW5jeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFhc3RyaWthL2NvbXB0ZW5jeS9jb21wZXRlbmN5LyIsInNvdXJjZXMiOlsic2VydmljZXMvcmVxdWlyZWQtY29tcGV0ZW5jeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFNBQVMsRUFBRyxNQUFNLDBCQUEwQixDQUFDOzs7QUFDdEQ7Ozs7R0FJRztBQUlILElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQTBCLFNBQVEsV0FBVztJQUV4RCxZQUFZLElBQWU7UUFDekIsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ1osQ0FBQztJQUVGOzs7T0FHRztJQUVLLHlCQUF5QixDQUFDLE9BQVc7UUFDM0MsTUFBTSxXQUFXLEdBQVE7WUFDdkIsR0FBRyxFQUFFLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksRUFBRSxPQUFPO1NBQ2QsQ0FBQztRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUMvQixDQUFDO0NBRUYsQ0FBQTs7WUFsQmtCLFVBQVU7OztBQUZoQix5QkFBeUI7SUFIckMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLHlCQUF5QixDQW9CckM7U0FwQlkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJ0BhYXN0cmlrYS9jb21wdGVuY3kvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IHVybENvbmZpZyAgfSBmcm9tICdAYWFzdHJpa2EvY29tcHRlbmN5L2NvcmUnO1xyXG4vKipcclxuICogUmVxdWlyZWRDb21wZXRlbmN5U2VydmljZSB0byBleHRlbmQgRGF0YSBTZXJ2aWNlIFxyXG4gKlxyXG4gKiBAYXV0aG9yIE1hbnN1ciBTaGFpayA8bWFuc3VyLnNoYWlrQHRhcmVudG8uY29tPlxyXG4gKi9cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVxdWlyZWRDb21wZXRlbmN5U2VydmljZSBleHRlbmRzIERhdGFTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoaHR0cDpIdHRwQ2xpZW50KSB7XHJcbiAgICBzdXBlcihodHRwKVxyXG4gICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGZvciBtYWtpbmcgZ2V0YWxsIHJlcXVpcmVkIGNvbXBldGVuY3kgYXBpIGNhbGxzXHJcbiAgICogXHJcbiAgICovXHJcblxyXG4gICBwdWJsaWMgZ2V0UmVxdWlyZWRDb21wZXRlbmN5QnlJZChyZXFCb2R5OmFueSl7XHJcbiAgICBjb25zdCBodHRwT3B0aW9uczogYW55ID0ge1xyXG4gICAgICB1cmw6IHVybENvbmZpZy5nZXRFbnRpdHlCeUlkKDMpLFxyXG4gICAgICBkYXRhOiByZXFCb2R5XHJcbiAgICB9O1xyXG4gICAgY29uc29sZS5sb2coJ3JlcUJvZHknLGh0dHBPcHRpb25zKVxyXG4gICAgcmV0dXJuIHRoaXMucG9zdChodHRwT3B0aW9ucylcclxuICB9XHJcbiAgXHJcbn1cclxuIl19