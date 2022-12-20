import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
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
            /**
         * here we will redirect to player screen
         *
         */
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
SelfAssessmentComponent = tslib_1.__decorate([
    Component({
        selector: 'lib-self-assessment',
        template: "<lib-app-loader *ngIf=\"loading === true\"></lib-app-loader>\n<div class=\"content\">\n    <mat-icon (click)=\"navigateBack()\" class=\"cursor-pointer\">chevron_left</mat-icon>\n    <h1 class=\" mb-1 pl-2 \">Self Assessment</h1>\n    <ng-container *ngFor=\"let cardData   of selfAssessmentData\">\n        <ng-container *ngIf=\"selfAssessmentData\">\n            <lib-self-assessment-card [cardData]=\"cardData\"></lib-self-assessment-card>\n        </ng-container>\n    </ng-container>\n</div>",
        styles: [".content{padding:60px 20px 50px;margin:auto}@media only screen and (min-width:960px){.content{max-width:30%}}@media only screen and (min-width:1280px){.content{max-width:35%}}@media only screen and (min-width:1920px){.content{max-width:30%}}@media only screen and (min-width:600px) and (max-width:959px){.content{max-width:50%}}@media only screen and (max-width:599px){.content{max-width:90%}}"]
    })
], SelfAssessmentComponent);
export { SelfAssessmentComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZi1hc3Nlc3NtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYXN0cmlrYV9ucG1qcy9jb21wdGVuY3kvc2VsZi1hc3Nlc3NtZW50LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9zZWxmLWFzc2Vzc21lbnQvc2VsZi1hc3Nlc3NtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUE7QUFDMUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDOUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxHQUFHLEVBQVksTUFBTSxnQkFBZ0IsQ0FBQztBQVMvQyxJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtJQUtsQyxZQUNVLFFBQWtCLEVBQ2xCLHFCQUE2QztRQUQ3QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBd0I7UUFMdkQsdUJBQWtCLEdBQUcsRUFBRSxDQUFBO1FBRXZCLFlBQU8sR0FBRyxLQUFLLENBQUE7UUFNYixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUE7SUFDdEMsQ0FBQztJQUNEOzs7T0FHRztJQUNILFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtRQUNuQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBTyxFQUFDLEVBQUU7WUFDN0MsTUFBTSxnQkFBZ0IsR0FBSSxJQUFJLENBQUMsV0FBVyxDQUFDLDRCQUE0QixDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQzVFLE9BQU8sZ0JBQWdCLENBQUE7UUFDekIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsR0FBRyxDQUFBO1lBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO1FBQ3RCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQU8sRUFBQyxFQUFFO1lBQ3RFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDaEI7OztXQUdEO1FBQ0QsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLE1BQU0sT0FBTyxHQUFHO1lBQ2QsU0FBUyxFQUFFO2dCQUNQLFNBQVMsRUFBRTtvQkFDUCxpQkFBaUIsRUFBRTt3QkFDZixRQUFRO3FCQUNYO29CQUNELGFBQWEsRUFBRTt3QkFDWCxRQUFRO3FCQUNYO29CQUNELFFBQVEsRUFBRTt3QkFDTixNQUFNO3FCQUNUO29CQUNELFlBQVksRUFBQyxJQUFJO2lCQUNwQjthQUNKO1lBQ0QsT0FBTyxFQUFFLEVBQUU7WUFDWCxNQUFNLEVBQUU7Z0JBQ0o7b0JBQ0ksZUFBZSxFQUFFLE1BQU07aUJBQzFCO2FBQ0o7U0FDSixDQUFBO1FBQ0MsT0FBUSxJQUFJLENBQUMscUJBQXFCLENBQUMsNkJBQTZCLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDM0UsQ0FBQztJQUdELFlBQVk7UUFDVixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ3RCLENBQUM7Q0FFRixDQUFBOztZQTNEcUIsUUFBUTtZQUNNLHFCQUFxQjs7QUFQNUMsdUJBQXVCO0lBTG5DLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxxQkFBcUI7UUFDL0IsMGZBQStDOztLQUVoRCxDQUFDO0dBQ1csdUJBQXVCLENBaUVuQztTQWpFWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nXG5pbXBvcnQgeyBTZWxmQXNzZXNzbWVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL3NlbGYtYXNzZXNzbWVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFJlcXVlc3RVdGlsIH0gZnJvbSAnLi4vLi4vc2VydmljZS9yZXF1ZXN0LXV0aWwuc2VydmljZSc7XG5pbXBvcnQgeyBtYXAsIG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXNlbGYtYXNzZXNzbWVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWxmLWFzc2Vzc21lbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWxmLWFzc2Vzc21lbnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWxmQXNzZXNzbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgc2VsZkFzc2Vzc21lbnREYXRhID0gW11cbiAgcmVxdWVzdFV0aWw6IGFueVxuICBsb2FkaW5nID0gZmFsc2VcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXG4gICAgcHJpdmF0ZSBzZWxmQXNzZXNzbWVudFNlcnZpY2UgOiBTZWxmQXNzZXNzbWVudFNlcnZpY2UsXG4gICkgeyBcblxuICAgIHRoaXMucmVxdWVzdFV0aWwgPSBuZXcgUmVxdWVzdFV0aWwoKVxuICB9XG4gIC8qKlxuICAgKmdldHRpbmcgdGhlIGRldGFpbHMgb2YgY291cnNlIGJ5IHBhc2luZyB0aGUgaWRlbnRpZmllciBhbmQgaGllcmFyY2h5VHlwZVxuICAgKiBcbiAgICovXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICB0aGlzLmdldENvbXBldGVuY3lDb3Vyc2UoKS5waXBlKG1hcCgocmVzOmFueSk9PntcbiAgICAgIGNvbnN0IGZvcm1hdGVkUmVzcG9uc2UgPSAgdGhpcy5yZXF1ZXN0VXRpbC5mb3JtYXRlZENvbXBldGVuY3lDb3Vyc2VEYXRhKHJlcylcbiAgICAgIHJldHVybiBmb3JtYXRlZFJlc3BvbnNlXG4gICAgfSkpLnN1YnNjcmliZSgocmVzKT0+e1xuICAgICAgdGhpcy5zZWxmQXNzZXNzbWVudERhdGEgPSByZXNcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgfSlcbiAgICB0aGlzLnNlbGZBc3Nlc3NtZW50U2VydmljZS5zdGFydEFzc2Vzc21lbnQkLnBpcGUoKS5zdWJzY3JpYmUoKHJlczphbnkpPT57XG4gICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAvKipcbiAgICogaGVyZSB3ZSB3aWxsIHJlZGlyZWN0IHRvIHBsYXllciBzY3JlZW4gXG4gICAqIFxuICAgKi9cbiAgICB9KVxuICB9XG5cbiAgZ2V0Q29tcGV0ZW5jeUNvdXJzZSgpe1xuICAgIGNvbnN0IHJlcUJvZHkgPSB7XG4gICAgICBcInJlcXVlc3RcIjoge1xuICAgICAgICAgIFwiZmlsdGVyc1wiOiB7XG4gICAgICAgICAgICAgIFwicHJpbWFyeUNhdGVnb3J5XCI6IFtcbiAgICAgICAgICAgICAgICAgIFwiQ291cnNlXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjb250ZW50VHlwZVwiOiBbXG4gICAgICAgICAgICAgICAgICBcIkNvdXJzZVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwic3RhdHVzXCI6IFtcbiAgICAgICAgICAgICAgICAgIFwiTGl2ZVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY29tcGV0ZW5jeVwiOnRydWVcbiAgICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJxdWVyeVwiOiBcIlwiLFxuICAgICAgXCJzb3J0XCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibGFzdFVwZGF0ZWRPblwiOiBcImRlc2NcIlxuICAgICAgICAgIH1cbiAgICAgIF1cbiAgfVxuICAgIHJldHVybiAgdGhpcy5zZWxmQXNzZXNzbWVudFNlcnZpY2UuZ2V0Q29tcGV0ZW5jeUNvdXJzZUlkZW50aWZpZXIocmVxQm9keSlcbiAgfVxuICBcblxuICBuYXZpZ2F0ZUJhY2soKSB7XG4gICAgdGhpcy5sb2NhdGlvbi5iYWNrKClcbiAgfVxuXG59XG4iXX0=