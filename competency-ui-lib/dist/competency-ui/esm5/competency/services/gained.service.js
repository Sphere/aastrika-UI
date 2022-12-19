import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DataService, urlConfig } from '@aastrika_npmjs/comptency/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
/**
 * GainedService to extend Data Service
 *
 * @author Vishali Sakar <vishali.sakar@tarento.com>
 */
var GainedService = /** @class */ (function (_super) {
    tslib_1.__extends(GainedService, _super);
    function GainedService(http) {
        return _super.call(this, http) || this;
    }
    /**
     * for making getall Gained api calls
     *
     */
    GainedService.prototype.fetchUserPassbook = function (reqBody) {
        var httpOptions = {
            url: urlConfig.getUserPassbook(),
            data: reqBody
        };
        return this.post(httpOptions);
    };
    GainedService.prototype.fetchAllEntity = function (reqBody) {
        var httpOptions = {
            url: urlConfig.getAllEntity(),
            data: reqBody
        };
        return this.post(httpOptions);
    };
    GainedService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    GainedService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GainedService_Factory() { return new GainedService(i0.ɵɵinject(i1.HttpClient)); }, token: GainedService, providedIn: "root" });
    GainedService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        })
    ], GainedService);
    return GainedService;
}(DataService));
export { GainedService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FpbmVkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWFzdHJpa2FfbnBtanMvY29tcHRlbmN5L2NvbXBldGVuY3kvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9nYWluZWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBR2xEOzs7O0dBSUc7QUFLSDtJQUFtQyx5Q0FBVztJQUU1Qyx1QkFBWSxJQUFlO2VBQ3pCLGtCQUFNLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRDs7O09BR0c7SUFFSyx5Q0FBaUIsR0FBeEIsVUFBeUIsT0FBVztRQUVuQyxJQUFNLFdBQVcsR0FBUTtZQUN2QixHQUFHLEVBQUUsU0FBUyxDQUFDLGVBQWUsRUFBRTtZQUNoQyxJQUFJLEVBQUUsT0FBTztTQUNkLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUdNLHNDQUFjLEdBQXJCLFVBQXNCLE9BQVc7UUFFL0IsSUFBTSxXQUFXLEdBQVE7WUFDdkIsR0FBRyxFQUFFLFNBQVMsQ0FBQyxZQUFZLEVBQUU7WUFDN0IsSUFBSSxFQUFFLE9BQU87U0FDZCxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQy9CLENBQUM7O2dCQTFCZ0IsVUFBVTs7O0lBRmhCLGFBQWE7UUFIekIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGFBQWEsQ0E2QnpCO3dCQTNDRDtDQTJDQyxBQTdCRCxDQUFtQyxXQUFXLEdBNkI3QztTQTdCWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UsIHVybENvbmZpZyB9IGZyb20gJ0BhYXN0cmlrYV9ucG1qcy9jb21wdGVuY3kvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgZm9ya0pvaW4sIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBHYWluZWRTZXJ2aWNlIHRvIGV4dGVuZCBEYXRhIFNlcnZpY2UgXG4gKlxuICogQGF1dGhvciBWaXNoYWxpIFNha2FyIDx2aXNoYWxpLnNha2FyQHRhcmVudG8uY29tPlxuICovXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEdhaW5lZFNlcnZpY2UgZXh0ZW5kcyBEYXRhU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoaHR0cDpIdHRwQ2xpZW50KSB7XG4gICAgc3VwZXIoaHR0cClcbiAgfVxuXG4gIC8qKlxuICAgKiBmb3IgbWFraW5nIGdldGFsbCBHYWluZWQgYXBpIGNhbGxzXG4gICAqIFxuICAgKi9cblxuICAgcHVibGljIGZldGNoVXNlclBhc3Nib29rKHJlcUJvZHk6YW55KXtcbiAgICBcbiAgICBjb25zdCBodHRwT3B0aW9uczogYW55ID0ge1xuICAgICAgdXJsOiB1cmxDb25maWcuZ2V0VXNlclBhc3Nib29rKCksXG4gICAgICBkYXRhOiByZXFCb2R5XG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGh0dHBPcHRpb25zKVxuICB9XG5cbiAgXG4gIHB1YmxpYyBmZXRjaEFsbEVudGl0eShyZXFCb2R5OmFueSl7XG4gICAgXG4gICAgY29uc3QgaHR0cE9wdGlvbnM6IGFueSA9IHtcbiAgICAgIHVybDogdXJsQ29uZmlnLmdldEFsbEVudGl0eSgpLFxuICAgICAgZGF0YTogcmVxQm9keVxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMucG9zdChodHRwT3B0aW9ucylcbiAgfVxufVxuIl19