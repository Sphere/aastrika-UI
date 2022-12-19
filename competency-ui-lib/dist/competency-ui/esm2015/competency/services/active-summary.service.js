import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DataService } from '@aastrika/comptency/core';
import { HttpClient } from '@angular/common/http';
import { urlConfig } from '@aastrika/comptency/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
/**
 * ActiveSummaryService to extend Data Service
 *
 * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
 */
let ActiveSummaryService = class ActiveSummaryService extends DataService {
    constructor(http) {
        super(http);
    }
    /**
    * for making getall activity api calls
    *
    */
    getActivityById(reqBody) {
        // console.log('calling getActivityById>>')
        const httpOptions = {
            url: urlConfig.getEntityById(reqBody.id),
            data: reqBody
        };
        // console.log('reqBody',httpOptions)
        return this.post(httpOptions);
    }
};
ActiveSummaryService.ctorParameters = () => [
    { type: HttpClient }
];
ActiveSummaryService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ActiveSummaryService_Factory() { return new ActiveSummaryService(i0.ɵɵinject(i1.HttpClient)); }, token: ActiveSummaryService, providedIn: "root" });
ActiveSummaryService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ActiveSummaryService);
export { ActiveSummaryService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLXN1bW1hcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYXN0cmlrYS9jb21wdGVuY3kvY29tcGV0ZW5jeS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2FjdGl2ZS1zdW1tYXJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFHLE1BQU0sMEJBQTBCLENBQUM7OztBQUN0RDs7OztHQUlHO0FBSUgsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBcUIsU0FBUSxXQUFXO0lBRW5ELFlBQVksSUFBZTtRQUN6QixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDYixDQUFDO0lBRUE7OztNQUdFO0lBQ00sZUFBZSxDQUFDLE9BQVc7UUFDaEMsMkNBQTJDO1FBQzNDLE1BQU0sV0FBVyxHQUFRO1lBQ3ZCLEdBQUcsRUFBRSxTQUFTLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDeEMsSUFBSSxFQUFFLE9BQU87U0FDZCxDQUFDO1FBQ0YscUNBQXFDO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUMvQixDQUFDO0NBQ0osQ0FBQTs7WUFqQmtCLFVBQVU7OztBQUZoQixvQkFBb0I7SUFIaEMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLG9CQUFvQixDQW1CaEM7U0FuQlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJ0BhYXN0cmlrYS9jb21wdGVuY3kvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IHVybENvbmZpZyAgfSBmcm9tICdAYWFzdHJpa2EvY29tcHRlbmN5L2NvcmUnO1xyXG4vKipcclxuICogQWN0aXZlU3VtbWFyeVNlcnZpY2UgdG8gZXh0ZW5kIERhdGEgU2VydmljZSBcclxuICpcclxuICogQGF1dGhvciBBbWFuIEt1bWFyIFNoYXJtYSA8YW1hbmt1bWFyLnNoYXJtYUB0YXJlbnRvLmNvbT5cclxuICovXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFjdGl2ZVN1bW1hcnlTZXJ2aWNlIGV4dGVuZHMgRGF0YVNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihodHRwOkh0dHBDbGllbnQpIHtcclxuICAgIHN1cGVyKGh0dHApXHJcbiAgfVxyXG5cclxuICAgLyoqXHJcbiAgICogZm9yIG1ha2luZyBnZXRhbGwgYWN0aXZpdHkgYXBpIGNhbGxzXHJcbiAgICogXHJcbiAgICovXHJcbiAgICBwdWJsaWMgZ2V0QWN0aXZpdHlCeUlkKHJlcUJvZHk6YW55KXtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ2NhbGxpbmcgZ2V0QWN0aXZpdHlCeUlkPj4nKVxyXG4gICAgICBjb25zdCBodHRwT3B0aW9uczogYW55ID0ge1xyXG4gICAgICAgIHVybDogdXJsQ29uZmlnLmdldEVudGl0eUJ5SWQocmVxQm9keS5pZCksXHJcbiAgICAgICAgZGF0YTogcmVxQm9keVxyXG4gICAgICB9O1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygncmVxQm9keScsaHR0cE9wdGlvbnMpXHJcbiAgICAgIHJldHVybiB0aGlzLnBvc3QoaHR0cE9wdGlvbnMpXHJcbiAgICB9XHJcbn1cclxuIl19