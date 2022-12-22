import * as tslib_1 from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { Location } from '@angular/common';
import { SelfAssessmentService } from '../../service/self-assessment.service';
import { RequestUtil } from '../../service/request-util.service';
import { map } from 'rxjs/operators';
let SelfAssessmentComponent = class SelfAssessmentComponent {
    constructor(location, selfAssessmentService) {
        this.location = location;
        this.selfAssessmentService = selfAssessmentService;
        this.selfAssessmentData = [];
        this.loading = false;
        this.selfAsesment = new EventEmitter();
        this.requestUtil = new RequestUtil();
    }
    /**
     *getting the details of course by pasing the identifier and hierarchyType
     *
     */
    ngOnInit() {
        this.loading = true;
        this.getCompetencyCourse().pipe(map((res) => {
            const formatedResponse = this.requestUtil.formatedCompetencyCourseData(res);
            return formatedResponse;
        })).subscribe((res) => {
            this.selfAssessmentData = res;
            this.loading = false;
        });
        this.selfAssessmentService.startAssessment$.pipe().subscribe((res) => {
            console.log(res);
            this.selfAsesment.emit(res);
        });
    }
    getCompetencyCourse() {
        const reqBody = {
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
    }
    navigateBack() {
        this.location.back();
    }
};
SelfAssessmentComponent.ctorParameters = () => [
    { type: Location },
    { type: SelfAssessmentService }
];
tslib_1.__decorate([
    Output()
], SelfAssessmentComponent.prototype, "selfAsesment", void 0);
SelfAssessmentComponent = tslib_1.__decorate([
    Component({
        selector: 'lib-self-assessment',
        template: "<lib-app-loader *ngIf=\"loading === true\"></lib-app-loader>\n<div class=\"content\"  *ngIf=\"selfAssessmentData.length>0\">\n    <mat-icon (click)=\"navigateBack()\" class=\"cursor-pointer\">chevron_left</mat-icon>\n    <h1 class=\" mb-1 pl-2 \">Self Assessment</h1>\n    <ng-container *ngFor=\"let cardData   of selfAssessmentData\">\n        <ng-container *ngIf=\"cardData\">\n            <lib-self-assessment-card [cardData]=\"cardData\"></lib-self-assessment-card>\n        </ng-container>\n    </ng-container>\n</div>",
        styles: [".content{padding:60px 20px 50px;margin:auto}@media only screen and (min-width:960px){.content{max-width:30%}}@media only screen and (min-width:1280px){.content{max-width:35%}}@media only screen and (min-width:1920px){.content{max-width:30%}}@media only screen and (min-width:600px) and (max-width:959px){.content{max-width:50%}}@media only screen and (max-width:599px){.content{max-width:90%}}"]
    })
], SelfAssessmentComponent);
export { SelfAssessmentComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZi1hc3Nlc3NtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYXN0cmlrYV9ucG1qcy9jb21wdGVuY3kvc2VsZi1hc3Nlc3NtZW50LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9zZWxmLWFzc2Vzc21lbnQvc2VsZi1hc3Nlc3NtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQTtBQUMxQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDakUsT0FBTyxFQUFFLEdBQUcsRUFBWSxNQUFNLGdCQUFnQixDQUFDO0FBUy9DLElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBTWxDLFlBQ1UsUUFBa0IsRUFDbEIscUJBQTZDO1FBRDdDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF3QjtRQU52RCx1QkFBa0IsR0FBRyxFQUFFLENBQUE7UUFFdkIsWUFBTyxHQUFHLEtBQUssQ0FBQTtRQUNMLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQU0xQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUE7SUFDdEMsQ0FBQztJQUNEOzs7T0FHRztJQUNILFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtRQUNuQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBTyxFQUFDLEVBQUU7WUFDN0MsTUFBTSxnQkFBZ0IsR0FBSSxJQUFJLENBQUMsV0FBVyxDQUFDLDRCQUE0QixDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQzVFLE9BQU8sZ0JBQWdCLENBQUE7UUFDekIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsR0FBRyxDQUFBO1lBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO1FBQ3RCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQU8sRUFBQyxFQUFFO1lBQ3RFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDN0IsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLE1BQU0sT0FBTyxHQUFHO1lBQ2QsU0FBUyxFQUFFO2dCQUNQLFNBQVMsRUFBRTtvQkFDUCxpQkFBaUIsRUFBRTt3QkFDZixRQUFRO3FCQUNYO29CQUNELGFBQWEsRUFBRTt3QkFDWCxRQUFRO3FCQUNYO29CQUNELFFBQVEsRUFBRTt3QkFDTixNQUFNO3FCQUNUO29CQUNELFlBQVksRUFBQyxJQUFJO2lCQUNwQjthQUNKO1lBQ0QsT0FBTyxFQUFFLEVBQUU7WUFDWCxNQUFNLEVBQUU7Z0JBQ0o7b0JBQ0ksZUFBZSxFQUFFLE1BQU07aUJBQzFCO2FBQ0o7U0FDSixDQUFBO1FBQ0MsT0FBUSxJQUFJLENBQUMscUJBQXFCLENBQUMsNkJBQTZCLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDM0UsQ0FBQztJQUdELFlBQVk7UUFDVixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ3RCLENBQUM7Q0FFRixDQUFBOztZQXhEcUIsUUFBUTtZQUNNLHFCQUFxQjs7QUFIN0M7SUFBVCxNQUFNLEVBQUU7NkRBQW1DO0FBTGpDLHVCQUF1QjtJQUxuQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUscUJBQXFCO1FBQy9CLHVoQkFBK0M7O0tBRWhELENBQUM7R0FDVyx1QkFBdUIsQ0ErRG5DO1NBL0RZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkluaXQgLE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcbmltcG9ydCB7IFNlbGZBc3Nlc3NtZW50U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2Uvc2VsZi1hc3Nlc3NtZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVxdWVzdFV0aWwgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL3JlcXVlc3QtdXRpbC5zZXJ2aWNlJztcbmltcG9ydCB7IG1hcCwgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaC1lcyc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc2VsZi1hc3Nlc3NtZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGYtYXNzZXNzbWVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlbGYtYXNzZXNzbWVudC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlbGZBc3Nlc3NtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBzZWxmQXNzZXNzbWVudERhdGEgPSBbXVxuICByZXF1ZXN0VXRpbDogYW55XG4gIGxvYWRpbmcgPSBmYWxzZVxuICBAT3V0cHV0KCkgc2VsZkFzZXNtZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcbiAgICBwcml2YXRlIHNlbGZBc3Nlc3NtZW50U2VydmljZSA6IFNlbGZBc3Nlc3NtZW50U2VydmljZSxcbiAgKSB7IFxuXG4gICAgdGhpcy5yZXF1ZXN0VXRpbCA9IG5ldyBSZXF1ZXN0VXRpbCgpXG4gIH1cbiAgLyoqXG4gICAqZ2V0dGluZyB0aGUgZGV0YWlscyBvZiBjb3Vyc2UgYnkgcGFzaW5nIHRoZSBpZGVudGlmaWVyIGFuZCBoaWVyYXJjaHlUeXBlXG4gICAqIFxuICAgKi9cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxuICAgIHRoaXMuZ2V0Q29tcGV0ZW5jeUNvdXJzZSgpLnBpcGUobWFwKChyZXM6YW55KT0+e1xuICAgICAgY29uc3QgZm9ybWF0ZWRSZXNwb25zZSA9ICB0aGlzLnJlcXVlc3RVdGlsLmZvcm1hdGVkQ29tcGV0ZW5jeUNvdXJzZURhdGEocmVzKVxuICAgICAgcmV0dXJuIGZvcm1hdGVkUmVzcG9uc2VcbiAgICB9KSkuc3Vic2NyaWJlKChyZXMpPT57XG4gICAgICB0aGlzLnNlbGZBc3Nlc3NtZW50RGF0YSA9IHJlc1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICB9KVxuICAgIHRoaXMuc2VsZkFzc2Vzc21lbnRTZXJ2aWNlLnN0YXJ0QXNzZXNzbWVudCQucGlwZSgpLnN1YnNjcmliZSgocmVzOmFueSk9PntcbiAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgIHRoaXMuc2VsZkFzZXNtZW50LmVtaXQocmVzKVxuICAgIH0pXG4gIH1cblxuICBnZXRDb21wZXRlbmN5Q291cnNlKCl7XG4gICAgY29uc3QgcmVxQm9keSA9IHtcbiAgICAgIFwicmVxdWVzdFwiOiB7XG4gICAgICAgICAgXCJmaWx0ZXJzXCI6IHtcbiAgICAgICAgICAgICAgXCJwcmltYXJ5Q2F0ZWdvcnlcIjogW1xuICAgICAgICAgICAgICAgICAgXCJDb3Vyc2VcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNvbnRlbnRUeXBlXCI6IFtcbiAgICAgICAgICAgICAgICAgIFwiQ291cnNlXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJzdGF0dXNcIjogW1xuICAgICAgICAgICAgICAgICAgXCJMaXZlXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjb21wZXRlbmN5XCI6dHJ1ZVxuICAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInF1ZXJ5XCI6IFwiXCIsXG4gICAgICBcInNvcnRcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJsYXN0VXBkYXRlZE9uXCI6IFwiZGVzY1wiXG4gICAgICAgICAgfVxuICAgICAgXVxuICB9XG4gICAgcmV0dXJuICB0aGlzLnNlbGZBc3Nlc3NtZW50U2VydmljZS5nZXRDb21wZXRlbmN5Q291cnNlSWRlbnRpZmllcihyZXFCb2R5KVxuICB9XG4gIFxuXG4gIG5hdmlnYXRlQmFjaygpIHtcbiAgICB0aGlzLmxvY2F0aW9uLmJhY2soKVxuICB9XG5cbn1cbiJdfQ==