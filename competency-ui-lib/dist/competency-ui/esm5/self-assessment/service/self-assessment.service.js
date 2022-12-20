import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DataService } from '@aastrika_npmjs/comptency/core';
import { HttpClient } from '@angular/common/http';
import { urlConfig } from '@aastrika_npmjs/comptency/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var SelfAssessmentService = /** @class */ (function (_super) {
    tslib_1.__extends(SelfAssessmentService, _super);
    function SelfAssessmentService(http) {
        var _this = _super.call(this, http) || this;
        _this.startAssessment = new BehaviorSubject(undefined);
        _this.startAssessment$ = _this.startAssessment.asObservable();
        return _this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZi1hc3Nlc3NtZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWFzdHJpa2FfbnBtanMvY29tcHRlbmN5L3NlbGYtYXNzZXNzbWVudC8iLCJzb3VyY2VzIjpbInNlcnZpY2Uvc2VsZi1hc3Nlc3NtZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFHLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBVyxNQUFNLE1BQU0sQ0FBQzs7O0FBS2hEO0lBQTJDLGlEQUFXO0lBR3BELCtCQUFZLElBQWU7UUFBM0IsWUFDRSxrQkFBTSxJQUFJLENBQUMsU0FDWjtRQUpPLHFCQUFlLEdBQUcsSUFBSSxlQUFlLENBQU0sU0FBUyxDQUFDLENBQUM7UUFDOUQsc0JBQWdCLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7SUFHdkQsQ0FBQztJQUVEOzs7T0FHRztJQUNJLDZEQUE2QixHQUFwQyxVQUFxQyxPQUFXO1FBRTlDLElBQU0sV0FBVyxHQUFRO1lBQ3ZCLEdBQUcsRUFBRSxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQzFCLElBQUksRUFBRSxPQUFPO1NBQ2QsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRUE7OztNQUdFO0lBRUksb0RBQW9CLEdBQTNCLFVBQTRCLFVBQVUsRUFBRSxhQUFhO1FBRW5ELElBQU0sV0FBVyxHQUFRO1lBQ3ZCLEdBQUcsRUFBRSxTQUFTLENBQUMsa0JBQWtCLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQztTQUM3RCxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQzlCLENBQUM7O2dCQTdCZ0IsVUFBVTs7O0lBSGhCLHFCQUFxQjtRQUhqQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1cscUJBQXFCLENBbUNqQztnQ0E1Q0Q7Q0E0Q0MsQUFuQ0QsQ0FBMkMsV0FBVyxHQW1DckQ7U0FuQ1kscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICdAYWFzdHJpa2FfbnBtanMvY29tcHRlbmN5L2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IHVybENvbmZpZyAgfSBmcm9tICdAYWFzdHJpa2FfbnBtanMvY29tcHRlbmN5L2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNlbGZBc3Nlc3NtZW50U2VydmljZSBleHRlbmRzIERhdGFTZXJ2aWNlIHtcbiAgcHVibGljICBzdGFydEFzc2Vzc21lbnQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4odW5kZWZpbmVkKTtcbiAgc3RhcnRBc3Nlc3NtZW50JCA9IHRoaXMuc3RhcnRBc3Nlc3NtZW50LmFzT2JzZXJ2YWJsZSgpO1xuICBjb25zdHJ1Y3RvcihodHRwOkh0dHBDbGllbnQpIHtcbiAgICBzdXBlcihodHRwKVxuICB9XG5cbiAgLyoqXG4gICAqc2VhcmNoaW5nIGZvciB0aGUgY29udGVudCBJZGVudGlmaWVyXG4gICAqIFxuICAgKi9cbiAgcHVibGljIGdldENvbXBldGVuY3lDb3Vyc2VJZGVudGlmaWVyKHJlcUJvZHk6YW55KXsgXG4gICBcbiAgICBjb25zdCBodHRwT3B0aW9uczogYW55ID0ge1xuICAgICAgdXJsOiB1cmxDb25maWcuZ2V0U2VhcmNoKCksXG4gICAgICBkYXRhOiByZXFCb2R5XG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4gdGhpcy5wb3N0KGh0dHBPcHRpb25zKVxuICB9XG5cbiAgIC8qKlxuICAgKmdldHRpbmcgdGhlIGRldGFpbHMgb2YgY291cnNlIGJ5IHBhc2luZyB0aGUgaWRlbnRpZmllciBhbmQgaGllcmFyY2h5VHlwZVxuICAgKiBcbiAgICovXG5cbiAgcHVibGljIGZldGNoSGllYXJjaHlEZXRhaWxzKGlkZW50aWZpZXIsIGhpZXJhcmNoeVR5cGUpe1xuICAgIFxuICAgIGNvbnN0IGh0dHBPcHRpb25zOiBhbnkgPSB7XG4gICAgICB1cmw6IHVybENvbmZpZy5nZXRIaWVyYWNoeURldGFpbHMoaWRlbnRpZmllciwgaGllcmFyY2h5VHlwZSksXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5nZXQoaHR0cE9wdGlvbnMpXG4gIH1cblxuXG59XG4iXX0=