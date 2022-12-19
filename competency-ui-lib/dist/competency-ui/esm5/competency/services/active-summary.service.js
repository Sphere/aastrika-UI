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
var ActiveSummaryService = /** @class */ (function (_super) {
    tslib_1.__extends(ActiveSummaryService, _super);
    function ActiveSummaryService(http) {
        return _super.call(this, http) || this;
    }
    /**
    * for making getall activity api calls
    *
    */
    ActiveSummaryService.prototype.getActivityById = function (reqBody) {
        // console.log('calling getActivityById>>')
        var httpOptions = {
            url: urlConfig.getEntityById(reqBody.id),
            data: reqBody
        };
        // console.log('reqBody',httpOptions)
        return this.post(httpOptions);
    };
    ActiveSummaryService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    ActiveSummaryService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ActiveSummaryService_Factory() { return new ActiveSummaryService(i0.ɵɵinject(i1.HttpClient)); }, token: ActiveSummaryService, providedIn: "root" });
    ActiveSummaryService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        })
    ], ActiveSummaryService);
    return ActiveSummaryService;
}(DataService));
export { ActiveSummaryService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLXN1bW1hcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYXN0cmlrYS9jb21wdGVuY3kvY29tcGV0ZW5jeS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2FjdGl2ZS1zdW1tYXJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFHLE1BQU0sMEJBQTBCLENBQUM7OztBQUN0RDs7OztHQUlHO0FBSUg7SUFBMEMsZ0RBQVc7SUFFbkQsOEJBQVksSUFBZTtlQUN6QixrQkFBTSxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUE7OztNQUdFO0lBQ00sOENBQWUsR0FBdEIsVUFBdUIsT0FBVztRQUNoQywyQ0FBMkM7UUFDM0MsSUFBTSxXQUFXLEdBQVE7WUFDdkIsR0FBRyxFQUFFLFNBQVMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUN4QyxJQUFJLEVBQUUsT0FBTztTQUNkLENBQUM7UUFDRixxQ0FBcUM7UUFDckMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQy9CLENBQUM7O2dCQWhCYyxVQUFVOzs7SUFGaEIsb0JBQW9CO1FBSGhDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxvQkFBb0IsQ0FtQmhDOytCQS9CRDtDQStCQyxBQW5CRCxDQUEwQyxXQUFXLEdBbUJwRDtTQW5CWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnQGFhc3RyaWthL2NvbXB0ZW5jeS9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgdXJsQ29uZmlnICB9IGZyb20gJ0BhYXN0cmlrYS9jb21wdGVuY3kvY29yZSc7XHJcbi8qKlxyXG4gKiBBY3RpdmVTdW1tYXJ5U2VydmljZSB0byBleHRlbmQgRGF0YSBTZXJ2aWNlIFxyXG4gKlxyXG4gKiBAYXV0aG9yIEFtYW4gS3VtYXIgU2hhcm1hIDxhbWFua3VtYXIuc2hhcm1hQHRhcmVudG8uY29tPlxyXG4gKi9cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQWN0aXZlU3VtbWFyeVNlcnZpY2UgZXh0ZW5kcyBEYXRhU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGh0dHA6SHR0cENsaWVudCkge1xyXG4gICAgc3VwZXIoaHR0cClcclxuICB9XHJcblxyXG4gICAvKipcclxuICAgKiBmb3IgbWFraW5nIGdldGFsbCBhY3Rpdml0eSBhcGkgY2FsbHNcclxuICAgKiBcclxuICAgKi9cclxuICAgIHB1YmxpYyBnZXRBY3Rpdml0eUJ5SWQocmVxQm9keTphbnkpe1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnY2FsbGluZyBnZXRBY3Rpdml0eUJ5SWQ+PicpXHJcbiAgICAgIGNvbnN0IGh0dHBPcHRpb25zOiBhbnkgPSB7XHJcbiAgICAgICAgdXJsOiB1cmxDb25maWcuZ2V0RW50aXR5QnlJZChyZXFCb2R5LmlkKSxcclxuICAgICAgICBkYXRhOiByZXFCb2R5XHJcbiAgICAgIH07XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXFCb2R5JyxodHRwT3B0aW9ucylcclxuICAgICAgcmV0dXJuIHRoaXMucG9zdChodHRwT3B0aW9ucylcclxuICAgIH1cclxufVxyXG4iXX0=