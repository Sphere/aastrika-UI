import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DataService } from '@aastrika_npmjs/comptency/core';
import { HttpClient } from '@angular/common/http';
import { urlConfig } from '@aastrika_npmjs/comptency/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
let SelfAssessmentService = class SelfAssessmentService extends DataService {
    constructor(http) {
        super(http);
        this.startAssessment = new BehaviorSubject(undefined);
        this.startAssessment$ = this.startAssessment.asObservable();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZi1hc3Nlc3NtZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWFzdHJpa2FfbnBtanMvY29tcHRlbmN5L3NlbGYtYXNzZXNzbWVudC8iLCJzb3VyY2VzIjpbInNlcnZpY2Uvc2VsZi1hc3Nlc3NtZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFHLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBVyxNQUFNLE1BQU0sQ0FBQzs7O0FBS2hELElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXNCLFNBQVEsV0FBVztJQUdwRCxZQUFZLElBQWU7UUFDekIsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBSEwsb0JBQWUsR0FBRyxJQUFJLGVBQWUsQ0FBTSxTQUFTLENBQUMsQ0FBQztRQUM5RCxxQkFBZ0IsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBR3ZELENBQUM7SUFFRDs7O09BR0c7SUFDSSw2QkFBNkIsQ0FBQyxPQUFXO1FBRTlDLE1BQU0sV0FBVyxHQUFRO1lBQ3ZCLEdBQUcsRUFBRSxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQzFCLElBQUksRUFBRSxPQUFPO1NBQ2QsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRUE7OztNQUdFO0lBRUksb0JBQW9CLENBQUMsVUFBVSxFQUFFLGFBQWE7UUFFbkQsTUFBTSxXQUFXLEdBQVE7WUFDdkIsR0FBRyxFQUFFLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDO1NBQzdELENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDOUIsQ0FBQztDQUdGLENBQUE7O1lBaENrQixVQUFVOzs7QUFIaEIscUJBQXFCO0lBSGpDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxxQkFBcUIsQ0FtQ2pDO1NBbkNZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnQGFhc3RyaWthX25wbWpzL2NvbXB0ZW5jeS9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyB1cmxDb25maWcgIH0gZnJvbSAnQGFhc3RyaWthX25wbWpzL2NvbXB0ZW5jeS9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZWxmQXNzZXNzbWVudFNlcnZpY2UgZXh0ZW5kcyBEYXRhU2VydmljZSB7XG4gIHB1YmxpYyAgc3RhcnRBc3Nlc3NtZW50ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KHVuZGVmaW5lZCk7XG4gIHN0YXJ0QXNzZXNzbWVudCQgPSB0aGlzLnN0YXJ0QXNzZXNzbWVudC5hc09ic2VydmFibGUoKTtcbiAgY29uc3RydWN0b3IoaHR0cDpIdHRwQ2xpZW50KSB7XG4gICAgc3VwZXIoaHR0cClcbiAgfVxuXG4gIC8qKlxuICAgKnNlYXJjaGluZyBmb3IgdGhlIGNvbnRlbnQgSWRlbnRpZmllclxuICAgKiBcbiAgICovXG4gIHB1YmxpYyBnZXRDb21wZXRlbmN5Q291cnNlSWRlbnRpZmllcihyZXFCb2R5OmFueSl7IFxuICAgXG4gICAgY29uc3QgaHR0cE9wdGlvbnM6IGFueSA9IHtcbiAgICAgIHVybDogdXJsQ29uZmlnLmdldFNlYXJjaCgpLFxuICAgICAgZGF0YTogcmVxQm9keVxuICAgIH07XG4gICAgXG4gICAgcmV0dXJuIHRoaXMucG9zdChodHRwT3B0aW9ucylcbiAgfVxuXG4gICAvKipcbiAgICpnZXR0aW5nIHRoZSBkZXRhaWxzIG9mIGNvdXJzZSBieSBwYXNpbmcgdGhlIGlkZW50aWZpZXIgYW5kIGhpZXJhcmNoeVR5cGVcbiAgICogXG4gICAqL1xuXG4gIHB1YmxpYyBmZXRjaEhpZWFyY2h5RGV0YWlscyhpZGVudGlmaWVyLCBoaWVyYXJjaHlUeXBlKXtcbiAgICBcbiAgICBjb25zdCBodHRwT3B0aW9uczogYW55ID0ge1xuICAgICAgdXJsOiB1cmxDb25maWcuZ2V0SGllcmFjaHlEZXRhaWxzKGlkZW50aWZpZXIsIGhpZXJhcmNoeVR5cGUpLFxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGh0dHBPcHRpb25zKVxuICB9XG5cblxufVxuIl19