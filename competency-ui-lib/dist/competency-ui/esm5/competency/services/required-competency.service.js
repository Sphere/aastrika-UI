import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DataService } from '@aastrika_npmjs/comptency/core';
import { HttpClient } from '@angular/common/http';
import { urlConfig } from '@aastrika_npmjs/comptency/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWlyZWQtY29tcGV0ZW5jeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFhc3RyaWthX25wbWpzL2NvbXB0ZW5jeS9jb21wZXRlbmN5LyIsInNvdXJjZXMiOlsic2VydmljZXMvcmVxdWlyZWQtY29tcGV0ZW5jeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFNBQVMsRUFBRyxNQUFNLGdDQUFnQyxDQUFDOzs7QUFDNUQ7Ozs7R0FJRztBQUlIO0lBQStDLHFEQUFXO0lBRXhELG1DQUFZLElBQWU7ZUFDekIsa0JBQU0sSUFBSSxDQUFDO0lBQ1osQ0FBQztJQUVGOzs7T0FHRztJQUVLLDZEQUF5QixHQUFoQyxVQUFpQyxPQUFXO1FBQzNDLElBQU0sV0FBVyxHQUFRO1lBQ3ZCLEdBQUcsRUFBRSxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLEVBQUUsT0FBTztTQUNkLENBQUM7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxXQUFXLENBQUMsQ0FBQTtRQUNsQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDL0IsQ0FBQzs7Z0JBaEJnQixVQUFVOzs7SUFGaEIseUJBQXlCO1FBSHJDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyx5QkFBeUIsQ0FvQnJDO29DQWhDRDtDQWdDQyxBQXBCRCxDQUErQyxXQUFXLEdBb0J6RDtTQXBCWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJ0BhYXN0cmlrYV9ucG1qcy9jb21wdGVuY3kvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgdXJsQ29uZmlnICB9IGZyb20gJ0BhYXN0cmlrYV9ucG1qcy9jb21wdGVuY3kvY29yZSc7XG4vKipcbiAqIFJlcXVpcmVkQ29tcGV0ZW5jeVNlcnZpY2UgdG8gZXh0ZW5kIERhdGEgU2VydmljZSBcbiAqXG4gKiBAYXV0aG9yIE1hbnN1ciBTaGFpayA8bWFuc3VyLnNoYWlrQHRhcmVudG8uY29tPlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBSZXF1aXJlZENvbXBldGVuY3lTZXJ2aWNlIGV4dGVuZHMgRGF0YVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKGh0dHA6SHR0cENsaWVudCkge1xuICAgIHN1cGVyKGh0dHApXG4gICB9XG5cbiAgLyoqXG4gICAqIGZvciBtYWtpbmcgZ2V0YWxsIHJlcXVpcmVkIGNvbXBldGVuY3kgYXBpIGNhbGxzXG4gICAqIFxuICAgKi9cblxuICAgcHVibGljIGdldFJlcXVpcmVkQ29tcGV0ZW5jeUJ5SWQocmVxQm9keTphbnkpe1xuICAgIGNvbnN0IGh0dHBPcHRpb25zOiBhbnkgPSB7XG4gICAgICB1cmw6IHVybENvbmZpZy5nZXRFbnRpdHlCeUlkKDMpLFxuICAgICAgZGF0YTogcmVxQm9keVxuICAgIH07XG4gICAgY29uc29sZS5sb2coJ3JlcUJvZHknLGh0dHBPcHRpb25zKVxuICAgIHJldHVybiB0aGlzLnBvc3QoaHR0cE9wdGlvbnMpXG4gIH1cbiAgXG59XG4iXX0=