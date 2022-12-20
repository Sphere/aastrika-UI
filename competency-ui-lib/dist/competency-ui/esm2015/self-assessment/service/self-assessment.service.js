import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DataService } from '@aastrika_npmjs/comptency/core';
import { HttpClient } from '@angular/common/http';
import { urlConfig } from '@aastrika_npmjs/comptency/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
let SelfAssessmentService = class SelfAssessmentService extends DataService {
    constructor(http) {
        super(http);
    }
    /**
     *searching for the content Identifier
     *
     */
    getCompetencyCourseIdentifier(reqBody) {
        const httpOptions = {
            url: urlConfig.getSearch(),
            data: reqBody
        };
        return this.post(httpOptions);
    }
    /**
    *getting the details of course by pasing the identifier and hierarchyType
    *
    */
    fetchHiearchyDetails(identifier, hierarchyType) {
        const httpOptions = {
            url: urlConfig.getHierachyDetails(identifier, hierarchyType),
        };
        return this.get(httpOptions);
    }
};
SelfAssessmentService.ctorParameters = () => [
    { type: HttpClient }
];
SelfAssessmentService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SelfAssessmentService_Factory() { return new SelfAssessmentService(i0.ɵɵinject(i1.HttpClient)); }, token: SelfAssessmentService, providedIn: "root" });
SelfAssessmentService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], SelfAssessmentService);
export { SelfAssessmentService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZi1hc3Nlc3NtZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWFzdHJpa2FfbnBtanMvY29tcHRlbmN5L3NlbGYtYXNzZXNzbWVudC8iLCJzb3VyY2VzIjpbInNlcnZpY2Uvc2VsZi1hc3Nlc3NtZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFHLE1BQU0sZ0NBQWdDLENBQUM7OztBQUs1RCxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFzQixTQUFRLFdBQVc7SUFFcEQsWUFBWSxJQUFlO1FBQ3pCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNiLENBQUM7SUFFRDs7O09BR0c7SUFDSSw2QkFBNkIsQ0FBQyxPQUFXO1FBRTlDLE1BQU0sV0FBVyxHQUFRO1lBQ3ZCLEdBQUcsRUFBRSxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQzFCLElBQUksRUFBRSxPQUFPO1NBQ2QsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRUE7OztNQUdFO0lBRUksb0JBQW9CLENBQUMsVUFBVSxFQUFFLGFBQWE7UUFFbkQsTUFBTSxXQUFXLEdBQVE7WUFDdkIsR0FBRyxFQUFFLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDO1NBQzdELENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDOUIsQ0FBQztDQUdGLENBQUE7O1lBaENrQixVQUFVOzs7QUFGaEIscUJBQXFCO0lBSGpDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxxQkFBcUIsQ0FrQ2pDO1NBbENZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnQGFhc3RyaWthX25wbWpzL2NvbXB0ZW5jeS9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyB1cmxDb25maWcgIH0gZnJvbSAnQGFhc3RyaWthX25wbWpzL2NvbXB0ZW5jeS9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2VsZkFzc2Vzc21lbnRTZXJ2aWNlIGV4dGVuZHMgRGF0YVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKGh0dHA6SHR0cENsaWVudCkge1xuICAgIHN1cGVyKGh0dHApXG4gIH1cblxuICAvKipcbiAgICpzZWFyY2hpbmcgZm9yIHRoZSBjb250ZW50IElkZW50aWZpZXJcbiAgICogXG4gICAqL1xuICBwdWJsaWMgZ2V0Q29tcGV0ZW5jeUNvdXJzZUlkZW50aWZpZXIocmVxQm9keTphbnkpeyBcbiAgIFxuICAgIGNvbnN0IGh0dHBPcHRpb25zOiBhbnkgPSB7XG4gICAgICB1cmw6IHVybENvbmZpZy5nZXRTZWFyY2goKSxcbiAgICAgIGRhdGE6IHJlcUJvZHlcbiAgICB9O1xuICAgIFxuICAgIHJldHVybiB0aGlzLnBvc3QoaHR0cE9wdGlvbnMpXG4gIH1cblxuICAgLyoqXG4gICAqZ2V0dGluZyB0aGUgZGV0YWlscyBvZiBjb3Vyc2UgYnkgcGFzaW5nIHRoZSBpZGVudGlmaWVyIGFuZCBoaWVyYXJjaHlUeXBlXG4gICAqIFxuICAgKi9cblxuICBwdWJsaWMgZmV0Y2hIaWVhcmNoeURldGFpbHMoaWRlbnRpZmllciwgaGllcmFyY2h5VHlwZSl7XG4gICAgXG4gICAgY29uc3QgaHR0cE9wdGlvbnM6IGFueSA9IHtcbiAgICAgIHVybDogdXJsQ29uZmlnLmdldEhpZXJhY2h5RGV0YWlscyhpZGVudGlmaWVyLCBoaWVyYXJjaHlUeXBlKSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmdldChodHRwT3B0aW9ucylcbiAgfVxuXG5cbn1cbiJdfQ==