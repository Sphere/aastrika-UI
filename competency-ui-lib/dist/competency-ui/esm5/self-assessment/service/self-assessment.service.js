import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DataService } from '@aastrika_npmjs/comptency/core';
import { HttpClient } from '@angular/common/http';
import { urlConfig } from '@aastrika_npmjs/comptency/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var SelfAssessmentService = /** @class */ (function (_super) {
    tslib_1.__extends(SelfAssessmentService, _super);
    function SelfAssessmentService(http) {
        return _super.call(this, http) || this;
    }
    /**
     *searching for the content Identifier
     *
     */
    SelfAssessmentService.prototype.getCompetencyCourseIdentifier = function (reqBody) {
        var httpOptions = {
            url: urlConfig.getSearch(),
            data: reqBody
        };
        return this.post(httpOptions);
    };
    /**
    *getting the details of course by pasing the identifier and hierarchyType
    *
    */
    SelfAssessmentService.prototype.fetchHiearchyDetails = function (identifier, hierarchyType) {
        var httpOptions = {
            url: urlConfig.getHierachyDetails(identifier, hierarchyType),
        };
        return this.get(httpOptions);
    };
    SelfAssessmentService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    SelfAssessmentService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SelfAssessmentService_Factory() { return new SelfAssessmentService(i0.ɵɵinject(i1.HttpClient)); }, token: SelfAssessmentService, providedIn: "root" });
    SelfAssessmentService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        })
    ], SelfAssessmentService);
    return SelfAssessmentService;
}(DataService));
export { SelfAssessmentService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZi1hc3Nlc3NtZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWFzdHJpa2FfbnBtanMvY29tcHRlbmN5L3NlbGYtYXNzZXNzbWVudC8iLCJzb3VyY2VzIjpbInNlcnZpY2Uvc2VsZi1hc3Nlc3NtZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFHLE1BQU0sZ0NBQWdDLENBQUM7OztBQUs1RDtJQUEyQyxpREFBVztJQUVwRCwrQkFBWSxJQUFlO2VBQ3pCLGtCQUFNLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRDs7O09BR0c7SUFDSSw2REFBNkIsR0FBcEMsVUFBcUMsT0FBVztRQUU5QyxJQUFNLFdBQVcsR0FBUTtZQUN2QixHQUFHLEVBQUUsU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUMxQixJQUFJLEVBQUUsT0FBTztTQUNkLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVBOzs7TUFHRTtJQUVJLG9EQUFvQixHQUEzQixVQUE0QixVQUFVLEVBQUUsYUFBYTtRQUVuRCxJQUFNLFdBQVcsR0FBUTtZQUN2QixHQUFHLEVBQUUsU0FBUyxDQUFDLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUM7U0FDN0QsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUM5QixDQUFDOztnQkE3QmdCLFVBQVU7OztJQUZoQixxQkFBcUI7UUFIakMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLHFCQUFxQixDQWtDakM7Z0NBMUNEO0NBMENDLEFBbENELENBQTJDLFdBQVcsR0FrQ3JEO1NBbENZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnQGFhc3RyaWthX25wbWpzL2NvbXB0ZW5jeS9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyB1cmxDb25maWcgIH0gZnJvbSAnQGFhc3RyaWthX25wbWpzL2NvbXB0ZW5jeS9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2VsZkFzc2Vzc21lbnRTZXJ2aWNlIGV4dGVuZHMgRGF0YVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKGh0dHA6SHR0cENsaWVudCkge1xuICAgIHN1cGVyKGh0dHApXG4gIH1cblxuICAvKipcbiAgICpzZWFyY2hpbmcgZm9yIHRoZSBjb250ZW50IElkZW50aWZpZXJcbiAgICogXG4gICAqL1xuICBwdWJsaWMgZ2V0Q29tcGV0ZW5jeUNvdXJzZUlkZW50aWZpZXIocmVxQm9keTphbnkpeyBcbiAgIFxuICAgIGNvbnN0IGh0dHBPcHRpb25zOiBhbnkgPSB7XG4gICAgICB1cmw6IHVybENvbmZpZy5nZXRTZWFyY2goKSxcbiAgICAgIGRhdGE6IHJlcUJvZHlcbiAgICB9O1xuICAgIFxuICAgIHJldHVybiB0aGlzLnBvc3QoaHR0cE9wdGlvbnMpXG4gIH1cblxuICAgLyoqXG4gICAqZ2V0dGluZyB0aGUgZGV0YWlscyBvZiBjb3Vyc2UgYnkgcGFzaW5nIHRoZSBpZGVudGlmaWVyIGFuZCBoaWVyYXJjaHlUeXBlXG4gICAqIFxuICAgKi9cblxuICBwdWJsaWMgZmV0Y2hIaWVhcmNoeURldGFpbHMoaWRlbnRpZmllciwgaGllcmFyY2h5VHlwZSl7XG4gICAgXG4gICAgY29uc3QgaHR0cE9wdGlvbnM6IGFueSA9IHtcbiAgICAgIHVybDogdXJsQ29uZmlnLmdldEhpZXJhY2h5RGV0YWlscyhpZGVudGlmaWVyLCBoaWVyYXJjaHlUeXBlKSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmdldChodHRwT3B0aW9ucylcbiAgfVxuXG5cbn1cbiJdfQ==