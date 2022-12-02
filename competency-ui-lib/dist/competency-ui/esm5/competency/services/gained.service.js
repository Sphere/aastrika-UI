import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DataService, urlConfig } from '@aastrika/comptency/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FpbmVkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWFzdHJpa2EvY29tcHRlbmN5L2NvbXBldGVuY3kvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9nYWluZWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBR2xEOzs7O0dBSUc7QUFLSDtJQUFtQyx5Q0FBVztJQUU1Qyx1QkFBWSxJQUFlO2VBQ3pCLGtCQUFNLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRDs7O09BR0c7SUFFSyx5Q0FBaUIsR0FBeEIsVUFBeUIsT0FBVztRQUVuQyxJQUFNLFdBQVcsR0FBUTtZQUN2QixHQUFHLEVBQUUsU0FBUyxDQUFDLGVBQWUsRUFBRTtZQUNoQyxJQUFJLEVBQUUsT0FBTztTQUNkLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUdNLHNDQUFjLEdBQXJCLFVBQXNCLE9BQVc7UUFFL0IsSUFBTSxXQUFXLEdBQVE7WUFDdkIsR0FBRyxFQUFFLFNBQVMsQ0FBQyxZQUFZLEVBQUU7WUFDN0IsSUFBSSxFQUFFLE9BQU87U0FDZCxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQy9CLENBQUM7O2dCQTFCZ0IsVUFBVTs7O0lBRmhCLGFBQWE7UUFIekIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGFBQWEsQ0E2QnpCO3dCQTNDRDtDQTJDQyxBQTdCRCxDQUFtQyxXQUFXLEdBNkI3QztTQTdCWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSwgdXJsQ29uZmlnIH0gZnJvbSAnQGFhc3RyaWthL2NvbXB0ZW5jeS9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgZm9ya0pvaW4sIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbi8qKlxyXG4gKiBHYWluZWRTZXJ2aWNlIHRvIGV4dGVuZCBEYXRhIFNlcnZpY2UgXHJcbiAqXHJcbiAqIEBhdXRob3IgVmlzaGFsaSBTYWthciA8dmlzaGFsaS5zYWthckB0YXJlbnRvLmNvbT5cclxuICovXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHYWluZWRTZXJ2aWNlIGV4dGVuZHMgRGF0YVNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihodHRwOkh0dHBDbGllbnQpIHtcclxuICAgIHN1cGVyKGh0dHApXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBmb3IgbWFraW5nIGdldGFsbCBHYWluZWQgYXBpIGNhbGxzXHJcbiAgICogXHJcbiAgICovXHJcblxyXG4gICBwdWJsaWMgZmV0Y2hVc2VyUGFzc2Jvb2socmVxQm9keTphbnkpe1xyXG4gICAgXHJcbiAgICBjb25zdCBodHRwT3B0aW9uczogYW55ID0ge1xyXG4gICAgICB1cmw6IHVybENvbmZpZy5nZXRVc2VyUGFzc2Jvb2soKSxcclxuICAgICAgZGF0YTogcmVxQm9keVxyXG4gICAgfTtcclxuICAgIHJldHVybiB0aGlzLnBvc3QoaHR0cE9wdGlvbnMpXHJcbiAgfVxyXG5cclxuICBcclxuICBwdWJsaWMgZmV0Y2hBbGxFbnRpdHkocmVxQm9keTphbnkpe1xyXG4gICAgXHJcbiAgICBjb25zdCBodHRwT3B0aW9uczogYW55ID0ge1xyXG4gICAgICB1cmw6IHVybENvbmZpZy5nZXRBbGxFbnRpdHkoKSxcclxuICAgICAgZGF0YTogcmVxQm9keVxyXG4gICAgfTtcclxuICAgIHJldHVybiB0aGlzLnBvc3QoaHR0cE9wdGlvbnMpXHJcbiAgfVxyXG59XHJcbiJdfQ==