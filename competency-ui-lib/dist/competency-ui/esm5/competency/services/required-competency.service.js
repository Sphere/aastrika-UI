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
var RequiredCompetencyService = /** @class */ (function (_super) {
    tslib_1.__extends(RequiredCompetencyService, _super);
    function RequiredCompetencyService(http) {
        return _super.call(this, http) || this;
    }
    /**
     * for making getall required competency api calls
     *
     */
    RequiredCompetencyService.prototype.getRequiredCompetencyById = function (reqBody) {
        var httpOptions = {
            url: urlConfig.getEntityById(3),
            data: reqBody
        };
        console.log('reqBody', httpOptions);
        return this.post(httpOptions);
    };
    RequiredCompetencyService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    RequiredCompetencyService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function RequiredCompetencyService_Factory() { return new RequiredCompetencyService(i0.ɵɵinject(i1.HttpClient)); }, token: RequiredCompetencyService, providedIn: "root" });
    RequiredCompetencyService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        })
    ], RequiredCompetencyService);
    return RequiredCompetencyService;
}(DataService));
export { RequiredCompetencyService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWlyZWQtY29tcGV0ZW5jeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFhc3RyaWthL2NvbXB0ZW5jeS9jb21wZXRlbmN5LyIsInNvdXJjZXMiOlsic2VydmljZXMvcmVxdWlyZWQtY29tcGV0ZW5jeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFNBQVMsRUFBRyxNQUFNLDBCQUEwQixDQUFDOzs7QUFDdEQ7Ozs7R0FJRztBQUlIO0lBQStDLHFEQUFXO0lBRXhELG1DQUFZLElBQWU7ZUFDekIsa0JBQU0sSUFBSSxDQUFDO0lBQ1osQ0FBQztJQUVGOzs7T0FHRztJQUVLLDZEQUF5QixHQUFoQyxVQUFpQyxPQUFXO1FBQzNDLElBQU0sV0FBVyxHQUFRO1lBQ3ZCLEdBQUcsRUFBRSxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLEVBQUUsT0FBTztTQUNkLENBQUM7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxXQUFXLENBQUMsQ0FBQTtRQUNsQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDL0IsQ0FBQzs7Z0JBaEJnQixVQUFVOzs7SUFGaEIseUJBQXlCO1FBSHJDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyx5QkFBeUIsQ0FvQnJDO29DQWhDRDtDQWdDQyxBQXBCRCxDQUErQyxXQUFXLEdBb0J6RDtTQXBCWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnQGFhc3RyaWthL2NvbXB0ZW5jeS9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgdXJsQ29uZmlnICB9IGZyb20gJ0BhYXN0cmlrYS9jb21wdGVuY3kvY29yZSc7XHJcbi8qKlxyXG4gKiBSZXF1aXJlZENvbXBldGVuY3lTZXJ2aWNlIHRvIGV4dGVuZCBEYXRhIFNlcnZpY2UgXHJcbiAqXHJcbiAqIEBhdXRob3IgTWFuc3VyIFNoYWlrIDxtYW5zdXIuc2hhaWtAdGFyZW50by5jb20+XHJcbiAqL1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXF1aXJlZENvbXBldGVuY3lTZXJ2aWNlIGV4dGVuZHMgRGF0YVNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihodHRwOkh0dHBDbGllbnQpIHtcclxuICAgIHN1cGVyKGh0dHApXHJcbiAgIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZm9yIG1ha2luZyBnZXRhbGwgcmVxdWlyZWQgY29tcGV0ZW5jeSBhcGkgY2FsbHNcclxuICAgKiBcclxuICAgKi9cclxuXHJcbiAgIHB1YmxpYyBnZXRSZXF1aXJlZENvbXBldGVuY3lCeUlkKHJlcUJvZHk6YW55KXtcclxuICAgIGNvbnN0IGh0dHBPcHRpb25zOiBhbnkgPSB7XHJcbiAgICAgIHVybDogdXJsQ29uZmlnLmdldEVudGl0eUJ5SWQoMyksXHJcbiAgICAgIGRhdGE6IHJlcUJvZHlcclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZygncmVxQm9keScsaHR0cE9wdGlvbnMpXHJcbiAgICByZXR1cm4gdGhpcy5wb3N0KGh0dHBPcHRpb25zKVxyXG4gIH1cclxuICBcclxufVxyXG4iXX0=