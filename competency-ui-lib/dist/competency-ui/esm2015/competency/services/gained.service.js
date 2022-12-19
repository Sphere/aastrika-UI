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
let GainedService = class GainedService extends DataService {
    constructor(http) {
        super(http);
    }
    /**
     * for making getall Gained api calls
     *
     */
    fetchUserPassbook(reqBody) {
        const httpOptions = {
            url: urlConfig.getUserPassbook(),
            data: reqBody
        };
        return this.post(httpOptions);
    }
    fetchAllEntity(reqBody) {
        const httpOptions = {
            url: urlConfig.getAllEntity(),
            data: reqBody
        };
        return this.post(httpOptions);
    }
};
GainedService.ctorParameters = () => [
    { type: HttpClient }
];
GainedService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GainedService_Factory() { return new GainedService(i0.ɵɵinject(i1.HttpClient)); }, token: GainedService, providedIn: "root" });
GainedService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], GainedService);
export { GainedService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FpbmVkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWFzdHJpa2FfbnBtanMvY29tcHRlbmN5L2NvbXBldGVuY3kvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9nYWluZWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBR2xEOzs7O0dBSUc7QUFLSCxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFjLFNBQVEsV0FBVztJQUU1QyxZQUFZLElBQWU7UUFDekIsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2IsQ0FBQztJQUVEOzs7T0FHRztJQUVLLGlCQUFpQixDQUFDLE9BQVc7UUFFbkMsTUFBTSxXQUFXLEdBQVE7WUFDdkIsR0FBRyxFQUFFLFNBQVMsQ0FBQyxlQUFlLEVBQUU7WUFDaEMsSUFBSSxFQUFFLE9BQU87U0FDZCxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFHTSxjQUFjLENBQUMsT0FBVztRQUUvQixNQUFNLFdBQVcsR0FBUTtZQUN2QixHQUFHLEVBQUUsU0FBUyxDQUFDLFlBQVksRUFBRTtZQUM3QixJQUFJLEVBQUUsT0FBTztTQUNkLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDL0IsQ0FBQztDQUNGLENBQUE7O1lBM0JrQixVQUFVOzs7QUFGaEIsYUFBYTtJQUh6QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csYUFBYSxDQTZCekI7U0E3QlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFTZXJ2aWNlLCB1cmxDb25maWcgfSBmcm9tICdAYWFzdHJpa2FfbnBtanMvY29tcHRlbmN5L2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IGZvcmtKb2luLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogR2FpbmVkU2VydmljZSB0byBleHRlbmQgRGF0YSBTZXJ2aWNlIFxuICpcbiAqIEBhdXRob3IgVmlzaGFsaSBTYWthciA8dmlzaGFsaS5zYWthckB0YXJlbnRvLmNvbT5cbiAqL1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBHYWluZWRTZXJ2aWNlIGV4dGVuZHMgRGF0YVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKGh0dHA6SHR0cENsaWVudCkge1xuICAgIHN1cGVyKGh0dHApXG4gIH1cblxuICAvKipcbiAgICogZm9yIG1ha2luZyBnZXRhbGwgR2FpbmVkIGFwaSBjYWxsc1xuICAgKiBcbiAgICovXG5cbiAgIHB1YmxpYyBmZXRjaFVzZXJQYXNzYm9vayhyZXFCb2R5OmFueSl7XG4gICAgXG4gICAgY29uc3QgaHR0cE9wdGlvbnM6IGFueSA9IHtcbiAgICAgIHVybDogdXJsQ29uZmlnLmdldFVzZXJQYXNzYm9vaygpLFxuICAgICAgZGF0YTogcmVxQm9keVxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMucG9zdChodHRwT3B0aW9ucylcbiAgfVxuXG4gIFxuICBwdWJsaWMgZmV0Y2hBbGxFbnRpdHkocmVxQm9keTphbnkpe1xuICAgIFxuICAgIGNvbnN0IGh0dHBPcHRpb25zOiBhbnkgPSB7XG4gICAgICB1cmw6IHVybENvbmZpZy5nZXRBbGxFbnRpdHkoKSxcbiAgICAgIGRhdGE6IHJlcUJvZHlcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLnBvc3QoaHR0cE9wdGlvbnMpXG4gIH1cbn1cbiJdfQ==