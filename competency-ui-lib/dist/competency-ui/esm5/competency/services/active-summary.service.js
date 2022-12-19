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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLXN1bW1hcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYXN0cmlrYV9ucG1qcy9jb21wdGVuY3kvY29tcGV0ZW5jeS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2FjdGl2ZS1zdW1tYXJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFHLE1BQU0sZ0NBQWdDLENBQUM7OztBQUM1RDs7OztHQUlHO0FBSUg7SUFBMEMsZ0RBQVc7SUFFbkQsOEJBQVksSUFBZTtlQUN6QixrQkFBTSxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUE7OztNQUdFO0lBQ00sOENBQWUsR0FBdEIsVUFBdUIsT0FBVztRQUNoQywyQ0FBMkM7UUFDM0MsSUFBTSxXQUFXLEdBQVE7WUFDdkIsR0FBRyxFQUFFLFNBQVMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUN4QyxJQUFJLEVBQUUsT0FBTztTQUNkLENBQUM7UUFDRixxQ0FBcUM7UUFDckMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQy9CLENBQUM7O2dCQWhCYyxVQUFVOzs7SUFGaEIsb0JBQW9CO1FBSGhDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxvQkFBb0IsQ0FtQmhDOytCQS9CRDtDQStCQyxBQW5CRCxDQUEwQyxXQUFXLEdBbUJwRDtTQW5CWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJ0BhYXN0cmlrYV9ucG1qcy9jb21wdGVuY3kvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgdXJsQ29uZmlnICB9IGZyb20gJ0BhYXN0cmlrYV9ucG1qcy9jb21wdGVuY3kvY29yZSc7XG4vKipcbiAqIEFjdGl2ZVN1bW1hcnlTZXJ2aWNlIHRvIGV4dGVuZCBEYXRhIFNlcnZpY2UgXG4gKlxuICogQGF1dGhvciBBbWFuIEt1bWFyIFNoYXJtYSA8YW1hbmt1bWFyLnNoYXJtYUB0YXJlbnRvLmNvbT5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQWN0aXZlU3VtbWFyeVNlcnZpY2UgZXh0ZW5kcyBEYXRhU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoaHR0cDpIdHRwQ2xpZW50KSB7XG4gICAgc3VwZXIoaHR0cClcbiAgfVxuXG4gICAvKipcbiAgICogZm9yIG1ha2luZyBnZXRhbGwgYWN0aXZpdHkgYXBpIGNhbGxzXG4gICAqIFxuICAgKi9cbiAgICBwdWJsaWMgZ2V0QWN0aXZpdHlCeUlkKHJlcUJvZHk6YW55KXtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjYWxsaW5nIGdldEFjdGl2aXR5QnlJZD4+JylcbiAgICAgIGNvbnN0IGh0dHBPcHRpb25zOiBhbnkgPSB7XG4gICAgICAgIHVybDogdXJsQ29uZmlnLmdldEVudGl0eUJ5SWQocmVxQm9keS5pZCksXG4gICAgICAgIGRhdGE6IHJlcUJvZHlcbiAgICAgIH07XG4gICAgICAvLyBjb25zb2xlLmxvZygncmVxQm9keScsaHR0cE9wdGlvbnMpXG4gICAgICByZXR1cm4gdGhpcy5wb3N0KGh0dHBPcHRpb25zKVxuICAgIH1cbn1cbiJdfQ==