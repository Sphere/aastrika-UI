import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { SelfAssessmentService } from '../../service/self-assessment.service';
import { RequestUtil } from '../../service/request-util.service';
import { mergeMap } from 'rxjs/operators';
var SelfAssessmentComponent = /** @class */ (function () {
    function SelfAssessmentComponent(location, selfAssessmentService) {
        this.location = location;
        this.selfAssessmentService = selfAssessmentService;
        this.selfAssessmentData = [];
        this.requestUtil = new RequestUtil();
    }
    /**
     *getting the details of course by pasing the identifier and hierarchyType
     *
     */
    SelfAssessmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCompetencyCourseIdentifier().pipe(mergeMap(function (res) {
            var identifier = res.result.content[0].identifier;
            return _this.fetchHiearchyDetails(identifier);
        })).subscribe(function (res) {
            _this.selfAssessmentData = _this.requestUtil.formatedcompetencyData(res);
        });
    };
    SelfAssessmentComponent.prototype.getCompetencyCourseIdentifier = function () {
        var reqBody = {
            "request": {
                "filters": {
                    "primaryCategory": [
                        "Course"
                    ],
                    "contentType": [
                        "Course"
                    ],
                    "status": [
                        "Live"
                    ],
                    "competency": true
                }
            },
            "query": "",
            "sort": [
                {
                    "lastUpdatedOn": "desc"
                }
            ]
        };
        return this.selfAssessmentService.getCompetencyCourseIdentifier(reqBody);
    };
    SelfAssessmentComponent.prototype.fetchHiearchyDetails = function (identifier) {
        return this.selfAssessmentService.fetchHiearchyDetails(identifier, 'detail');
    };
    SelfAssessmentComponent.prototype.navigateBack = function () {
        this.location.back();
    };
    SelfAssessmentComponent.ctorParameters = function () { return [
        { type: Location },
        { type: SelfAssessmentService }
    ]; };
    SelfAssessmentComponent = tslib_1.__decorate([
        Component({
            selector: 'lib-self-assessment',
            template: "<div class=\"content\">\n    <mat-icon (click)=\"navigateBack()\" class=\"cursor-pointer\">chevron_left</mat-icon>\n    <h1 class=\" mb-1 pl-2 \">Self Assessment</h1>\n    <ng-container *ngFor=\"let cardData   of selfAssessmentData\">\n        <ng-container *ngIf=\"selfAssessmentData\">\n            <lib-self-assessment-card [cardData]=\"cardData\"></lib-self-assessment-card>\n        </ng-container>\n    </ng-container>\n</div>",
            styles: [".content{padding:60px 20px 50px;margin:auto}@media only screen and (min-width:960px){.content{max-width:30%}}@media only screen and (min-width:1280px){.content{max-width:35%}}@media only screen and (min-width:1920px){.content{max-width:30%}}@media only screen and (min-width:600px) and (max-width:959px){.content{max-width:50%}}@media only screen and (max-width:599px){.content{max-width:90%}}"]
        })
    ], SelfAssessmentComponent);
    return SelfAssessmentComponent;
}());
export { SelfAssessmentComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZi1hc3Nlc3NtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYXN0cmlrYV9ucG1qcy9jb21wdGVuY3kvc2VsZi1hc3Nlc3NtZW50LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9zZWxmLWFzc2Vzc21lbnQvc2VsZi1hc3Nlc3NtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUE7QUFDMUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDOUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVExQztJQUtFLGlDQUNVLFFBQWtCLEVBQ2xCLHFCQUE2QztRQUQ3QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBd0I7UUFMdkQsdUJBQWtCLEdBQUcsRUFBRSxDQUFBO1FBUXJCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQTtJQUN0QyxDQUFDO0lBQ0Q7OztPQUdHO0lBQ0gsMENBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLDZCQUE2QixFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFDLEdBQU87WUFDekQsSUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1lBQ3BELE9BQU8sS0FBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzdDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsR0FBRztZQUNqQixLQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUN2RSxDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFFRCwrREFBNkIsR0FBN0I7UUFDRSxJQUFNLE9BQU8sR0FBRztZQUNkLFNBQVMsRUFBRTtnQkFDUCxTQUFTLEVBQUU7b0JBQ1AsaUJBQWlCLEVBQUU7d0JBQ2YsUUFBUTtxQkFDWDtvQkFDRCxhQUFhLEVBQUU7d0JBQ1gsUUFBUTtxQkFDWDtvQkFDRCxRQUFRLEVBQUU7d0JBQ04sTUFBTTtxQkFDVDtvQkFDRCxZQUFZLEVBQUMsSUFBSTtpQkFDcEI7YUFDSjtZQUNELE9BQU8sRUFBRSxFQUFFO1lBQ1gsTUFBTSxFQUFFO2dCQUNKO29CQUNJLGVBQWUsRUFBRSxNQUFNO2lCQUMxQjthQUNKO1NBQ0osQ0FBQTtRQUNDLE9BQVEsSUFBSSxDQUFDLHFCQUFxQixDQUFDLDZCQUE2QixDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQzNFLENBQUM7SUFDRCxzREFBb0IsR0FBcEIsVUFBcUIsVUFBVTtRQUM3QixPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLEVBQUMsUUFBUSxDQUFDLENBQUE7SUFFN0UsQ0FBQztJQUVELDhDQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ3RCLENBQUM7O2dCQW5EbUIsUUFBUTtnQkFDTSxxQkFBcUI7O0lBUDVDLHVCQUF1QjtRQUxuQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLDRiQUErQzs7U0FFaEQsQ0FBQztPQUNXLHVCQUF1QixDQTJEbkM7SUFBRCw4QkFBQztDQUFBLEFBM0RELElBMkRDO1NBM0RZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcbmltcG9ydCB7IFNlbGZBc3Nlc3NtZW50U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2Uvc2VsZi1hc3Nlc3NtZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVxdWVzdFV0aWwgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL3JlcXVlc3QtdXRpbC5zZXJ2aWNlJztcbmltcG9ydCB7IG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gtZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc2VsZi1hc3Nlc3NtZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGYtYXNzZXNzbWVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlbGYtYXNzZXNzbWVudC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlbGZBc3Nlc3NtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBzZWxmQXNzZXNzbWVudERhdGEgPSBbXVxuICByZXF1ZXN0VXRpbDogYW55XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXG4gICAgcHJpdmF0ZSBzZWxmQXNzZXNzbWVudFNlcnZpY2UgOiBTZWxmQXNzZXNzbWVudFNlcnZpY2UsXG4gICkgeyBcblxuICAgIHRoaXMucmVxdWVzdFV0aWwgPSBuZXcgUmVxdWVzdFV0aWwoKVxuICB9XG4gIC8qKlxuICAgKmdldHRpbmcgdGhlIGRldGFpbHMgb2YgY291cnNlIGJ5IHBhc2luZyB0aGUgaWRlbnRpZmllciBhbmQgaGllcmFyY2h5VHlwZVxuICAgKiBcbiAgICovXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZ2V0Q29tcGV0ZW5jeUNvdXJzZUlkZW50aWZpZXIoKS5waXBlKG1lcmdlTWFwKChyZXM6YW55KT0+e1xuICAgICAgY29uc3QgaWRlbnRpZmllciA9IHJlcy5yZXN1bHQuY29udGVudFswXS5pZGVudGlmaWVyO1xuICAgICAgcmV0dXJuIHRoaXMuZmV0Y2hIaWVhcmNoeURldGFpbHMoaWRlbnRpZmllcilcbiAgICAgfSkpLnN1YnNjcmliZSgocmVzKT0+e1xuICAgICAgdGhpcy5zZWxmQXNzZXNzbWVudERhdGEgPSB0aGlzLnJlcXVlc3RVdGlsLmZvcm1hdGVkY29tcGV0ZW5jeURhdGEocmVzKVxuICAgICB9KVxuICB9XG5cbiAgZ2V0Q29tcGV0ZW5jeUNvdXJzZUlkZW50aWZpZXIoKXtcbiAgICBjb25zdCByZXFCb2R5ID0ge1xuICAgICAgXCJyZXF1ZXN0XCI6IHtcbiAgICAgICAgICBcImZpbHRlcnNcIjoge1xuICAgICAgICAgICAgICBcInByaW1hcnlDYXRlZ29yeVwiOiBbXG4gICAgICAgICAgICAgICAgICBcIkNvdXJzZVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY29udGVudFR5cGVcIjogW1xuICAgICAgICAgICAgICAgICAgXCJDb3Vyc2VcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInN0YXR1c1wiOiBbXG4gICAgICAgICAgICAgICAgICBcIkxpdmVcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNvbXBldGVuY3lcIjp0cnVlXG4gICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicXVlcnlcIjogXCJcIixcbiAgICAgIFwic29ydFwiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcImxhc3RVcGRhdGVkT25cIjogXCJkZXNjXCJcbiAgICAgICAgICB9XG4gICAgICBdXG4gIH1cbiAgICByZXR1cm4gIHRoaXMuc2VsZkFzc2Vzc21lbnRTZXJ2aWNlLmdldENvbXBldGVuY3lDb3Vyc2VJZGVudGlmaWVyKHJlcUJvZHkpXG4gIH1cbiAgZmV0Y2hIaWVhcmNoeURldGFpbHMoaWRlbnRpZmllcil7XG4gICAgcmV0dXJuIHRoaXMuc2VsZkFzc2Vzc21lbnRTZXJ2aWNlLmZldGNoSGllYXJjaHlEZXRhaWxzKGlkZW50aWZpZXIsJ2RldGFpbCcpXG4gICAgXG4gIH1cblxuICBuYXZpZ2F0ZUJhY2soKSB7XG4gICAgdGhpcy5sb2NhdGlvbi5iYWNrKClcbiAgfVxuXG59XG4iXX0=