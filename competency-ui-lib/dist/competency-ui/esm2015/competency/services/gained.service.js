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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FpbmVkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWFzdHJpa2EvY29tcHRlbmN5L2NvbXBldGVuY3kvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9nYWluZWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBR2xEOzs7O0dBSUc7QUFLSCxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFjLFNBQVEsV0FBVztJQUU1QyxZQUFZLElBQWU7UUFDekIsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2IsQ0FBQztJQUVEOzs7T0FHRztJQUVLLGlCQUFpQixDQUFDLE9BQVc7UUFFbkMsTUFBTSxXQUFXLEdBQVE7WUFDdkIsR0FBRyxFQUFFLFNBQVMsQ0FBQyxlQUFlLEVBQUU7WUFDaEMsSUFBSSxFQUFFLE9BQU87U0FDZCxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFHTSxjQUFjLENBQUMsT0FBVztRQUUvQixNQUFNLFdBQVcsR0FBUTtZQUN2QixHQUFHLEVBQUUsU0FBUyxDQUFDLFlBQVksRUFBRTtZQUM3QixJQUFJLEVBQUUsT0FBTztTQUNkLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDL0IsQ0FBQztDQUNGLENBQUE7O1lBM0JrQixVQUFVOzs7QUFGaEIsYUFBYTtJQUh6QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csYUFBYSxDQTZCekI7U0E3QlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UsIHVybENvbmZpZyB9IGZyb20gJ0BhYXN0cmlrYS9jb21wdGVuY3kvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IGZvcmtKb2luLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG4vKipcclxuICogR2FpbmVkU2VydmljZSB0byBleHRlbmQgRGF0YSBTZXJ2aWNlIFxyXG4gKlxyXG4gKiBAYXV0aG9yIFZpc2hhbGkgU2FrYXIgPHZpc2hhbGkuc2FrYXJAdGFyZW50by5jb20+XHJcbiAqL1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgR2FpbmVkU2VydmljZSBleHRlbmRzIERhdGFTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoaHR0cDpIdHRwQ2xpZW50KSB7XHJcbiAgICBzdXBlcihodHRwKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZm9yIG1ha2luZyBnZXRhbGwgR2FpbmVkIGFwaSBjYWxsc1xyXG4gICAqIFxyXG4gICAqL1xyXG5cclxuICAgcHVibGljIGZldGNoVXNlclBhc3Nib29rKHJlcUJvZHk6YW55KXtcclxuICAgIFxyXG4gICAgY29uc3QgaHR0cE9wdGlvbnM6IGFueSA9IHtcclxuICAgICAgdXJsOiB1cmxDb25maWcuZ2V0VXNlclBhc3Nib29rKCksXHJcbiAgICAgIGRhdGE6IHJlcUJvZHlcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcy5wb3N0KGh0dHBPcHRpb25zKVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgcHVibGljIGZldGNoQWxsRW50aXR5KHJlcUJvZHk6YW55KXtcclxuICAgIFxyXG4gICAgY29uc3QgaHR0cE9wdGlvbnM6IGFueSA9IHtcclxuICAgICAgdXJsOiB1cmxDb25maWcuZ2V0QWxsRW50aXR5KCksXHJcbiAgICAgIGRhdGE6IHJlcUJvZHlcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcy5wb3N0KGh0dHBPcHRpb25zKVxyXG4gIH1cclxufVxyXG4iXX0=