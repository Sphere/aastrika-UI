import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DataService } from '@aastrika_npmjs/comptency/core';
import { HttpClient } from '@angular/common/http';
import { urlConfig } from '@aastrika_npmjs/comptency/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLXN1bW1hcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYXN0cmlrYV9ucG1qcy9jb21wdGVuY3kvY29tcGV0ZW5jeS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2FjdGl2ZS1zdW1tYXJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFHLE1BQU0sZ0NBQWdDLENBQUM7OztBQUM1RDs7OztHQUlHO0FBSUgsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBcUIsU0FBUSxXQUFXO0lBRW5ELFlBQVksSUFBZTtRQUN6QixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDYixDQUFDO0lBRUE7OztNQUdFO0lBQ00sZUFBZSxDQUFDLE9BQVc7UUFDaEMsMkNBQTJDO1FBQzNDLE1BQU0sV0FBVyxHQUFRO1lBQ3ZCLEdBQUcsRUFBRSxTQUFTLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDeEMsSUFBSSxFQUFFLE9BQU87U0FDZCxDQUFDO1FBQ0YscUNBQXFDO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUMvQixDQUFDO0NBQ0osQ0FBQTs7WUFqQmtCLFVBQVU7OztBQUZoQixvQkFBb0I7SUFIaEMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLG9CQUFvQixDQW1CaEM7U0FuQlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICdAYWFzdHJpa2FfbnBtanMvY29tcHRlbmN5L2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IHVybENvbmZpZyAgfSBmcm9tICdAYWFzdHJpa2FfbnBtanMvY29tcHRlbmN5L2NvcmUnO1xuLyoqXG4gKiBBY3RpdmVTdW1tYXJ5U2VydmljZSB0byBleHRlbmQgRGF0YSBTZXJ2aWNlIFxuICpcbiAqIEBhdXRob3IgQW1hbiBLdW1hciBTaGFybWEgPGFtYW5rdW1hci5zaGFybWFAdGFyZW50by5jb20+XG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZVN1bW1hcnlTZXJ2aWNlIGV4dGVuZHMgRGF0YVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKGh0dHA6SHR0cENsaWVudCkge1xuICAgIHN1cGVyKGh0dHApXG4gIH1cblxuICAgLyoqXG4gICAqIGZvciBtYWtpbmcgZ2V0YWxsIGFjdGl2aXR5IGFwaSBjYWxsc1xuICAgKiBcbiAgICovXG4gICAgcHVibGljIGdldEFjdGl2aXR5QnlJZChyZXFCb2R5OmFueSl7XG4gICAgICAvLyBjb25zb2xlLmxvZygnY2FsbGluZyBnZXRBY3Rpdml0eUJ5SWQ+PicpXG4gICAgICBjb25zdCBodHRwT3B0aW9uczogYW55ID0ge1xuICAgICAgICB1cmw6IHVybENvbmZpZy5nZXRFbnRpdHlCeUlkKHJlcUJvZHkuaWQpLFxuICAgICAgICBkYXRhOiByZXFCb2R5XG4gICAgICB9O1xuICAgICAgLy8gY29uc29sZS5sb2coJ3JlcUJvZHknLGh0dHBPcHRpb25zKVxuICAgICAgcmV0dXJuIHRoaXMucG9zdChodHRwT3B0aW9ucylcbiAgICB9XG59XG4iXX0=