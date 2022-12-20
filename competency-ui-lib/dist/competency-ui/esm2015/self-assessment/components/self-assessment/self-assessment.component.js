import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { SelfAssessmentService } from '../../service/self-assessment.service';
import { RequestUtil } from '../../service/request-util.service';
import { mergeMap } from 'rxjs/operators';
let SelfAssessmentComponent = class SelfAssessmentComponent {
    constructor(location, selfAssessmentService) {
        this.location = location;
        this.selfAssessmentService = selfAssessmentService;
        this.selfAssessmentData = [];
        this.requestUtil = new RequestUtil();
    }
    /**
     *getting the details of course by pasing the identifier and hierarchyType
     *
     */
    ngOnInit() {
        this.getCompetencyCourseIdentifier().pipe(mergeMap((res) => {
            const identifier = res.result.content[0].identifier;
            return this.fetchHiearchyDetails(identifier);
        })).subscribe((res) => {
            this.selfAssessmentData = this.requestUtil.formatedcompetencyData(res);
        });
    }
    getCompetencyCourseIdentifier() {
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
    fetchHiearchyDetails(identifier) {
        return this.selfAssessmentService.fetchHiearchyDetails(identifier, 'detail');
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
        template: "<div class=\"content\">\n    <mat-icon (click)=\"navigateBack()\" class=\"cursor-pointer\">chevron_left</mat-icon>\n    <h1 class=\" mb-1 pl-2 \">Self Assessment</h1>\n    <ng-container *ngFor=\"let cardData   of selfAssessmentData\">\n        <ng-container *ngIf=\"selfAssessmentData\">\n            <lib-self-assessment-card [cardData]=\"cardData\"></lib-self-assessment-card>\n        </ng-container>\n    </ng-container>\n</div>",
        styles: [".content{padding:60px 20px 50px;margin:auto}@media only screen and (min-width:960px){.content{max-width:30%}}@media only screen and (min-width:1280px){.content{max-width:35%}}@media only screen and (min-width:1920px){.content{max-width:30%}}@media only screen and (min-width:600px) and (max-width:959px){.content{max-width:50%}}@media only screen and (max-width:599px){.content{max-width:90%}}"]
    })
], SelfAssessmentComponent);
export { SelfAssessmentComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZi1hc3Nlc3NtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYXN0cmlrYV9ucG1qcy9jb21wdGVuY3kvc2VsZi1hc3Nlc3NtZW50LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9zZWxmLWFzc2Vzc21lbnQvc2VsZi1hc3Nlc3NtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUE7QUFDMUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDOUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVExQyxJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtJQUtsQyxZQUNVLFFBQWtCLEVBQ2xCLHFCQUE2QztRQUQ3QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBd0I7UUFMdkQsdUJBQWtCLEdBQUcsRUFBRSxDQUFBO1FBUXJCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQTtJQUN0QyxDQUFDO0lBQ0Q7OztPQUdHO0lBQ0gsUUFBUTtRQUNOLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFPLEVBQUMsRUFBRTtZQUM1RCxNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7WUFDcEQsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDN0MsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUMsRUFBRTtZQUNwQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUN2RSxDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFFRCw2QkFBNkI7UUFDM0IsTUFBTSxPQUFPLEdBQUc7WUFDZCxTQUFTLEVBQUU7Z0JBQ1AsU0FBUyxFQUFFO29CQUNQLGlCQUFpQixFQUFFO3dCQUNmLFFBQVE7cUJBQ1g7b0JBQ0QsYUFBYSxFQUFFO3dCQUNYLFFBQVE7cUJBQ1g7b0JBQ0QsUUFBUSxFQUFFO3dCQUNOLE1BQU07cUJBQ1Q7b0JBQ0QsWUFBWSxFQUFDLElBQUk7aUJBQ3BCO2FBQ0o7WUFDRCxPQUFPLEVBQUUsRUFBRTtZQUNYLE1BQU0sRUFBRTtnQkFDSjtvQkFDSSxlQUFlLEVBQUUsTUFBTTtpQkFDMUI7YUFDSjtTQUNKLENBQUE7UUFDQyxPQUFRLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyw2QkFBNkIsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMzRSxDQUFDO0lBQ0Qsb0JBQW9CLENBQUMsVUFBVTtRQUM3QixPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLEVBQUMsUUFBUSxDQUFDLENBQUE7SUFFN0UsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ3RCLENBQUM7Q0FFRixDQUFBOztZQXJEcUIsUUFBUTtZQUNNLHFCQUFxQjs7QUFQNUMsdUJBQXVCO0lBTG5DLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxxQkFBcUI7UUFDL0IsNGJBQStDOztLQUVoRCxDQUFDO0dBQ1csdUJBQXVCLENBMkRuQztTQTNEWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nXG5pbXBvcnQgeyBTZWxmQXNzZXNzbWVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL3NlbGYtYXNzZXNzbWVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFJlcXVlc3RVdGlsIH0gZnJvbSAnLi4vLi4vc2VydmljZS9yZXF1ZXN0LXV0aWwuc2VydmljZSc7XG5pbXBvcnQgeyBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoLWVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXNlbGYtYXNzZXNzbWVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWxmLWFzc2Vzc21lbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWxmLWFzc2Vzc21lbnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWxmQXNzZXNzbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgc2VsZkFzc2Vzc21lbnREYXRhID0gW11cbiAgcmVxdWVzdFV0aWw6IGFueVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLFxuICAgIHByaXZhdGUgc2VsZkFzc2Vzc21lbnRTZXJ2aWNlIDogU2VsZkFzc2Vzc21lbnRTZXJ2aWNlLFxuICApIHsgXG5cbiAgICB0aGlzLnJlcXVlc3RVdGlsID0gbmV3IFJlcXVlc3RVdGlsKClcbiAgfVxuICAvKipcbiAgICpnZXR0aW5nIHRoZSBkZXRhaWxzIG9mIGNvdXJzZSBieSBwYXNpbmcgdGhlIGlkZW50aWZpZXIgYW5kIGhpZXJhcmNoeVR5cGVcbiAgICogXG4gICAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmdldENvbXBldGVuY3lDb3Vyc2VJZGVudGlmaWVyKCkucGlwZShtZXJnZU1hcCgocmVzOmFueSk9PntcbiAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSByZXMucmVzdWx0LmNvbnRlbnRbMF0uaWRlbnRpZmllcjtcbiAgICAgIHJldHVybiB0aGlzLmZldGNoSGllYXJjaHlEZXRhaWxzKGlkZW50aWZpZXIpXG4gICAgIH0pKS5zdWJzY3JpYmUoKHJlcyk9PntcbiAgICAgIHRoaXMuc2VsZkFzc2Vzc21lbnREYXRhID0gdGhpcy5yZXF1ZXN0VXRpbC5mb3JtYXRlZGNvbXBldGVuY3lEYXRhKHJlcylcbiAgICAgfSlcbiAgfVxuXG4gIGdldENvbXBldGVuY3lDb3Vyc2VJZGVudGlmaWVyKCl7XG4gICAgY29uc3QgcmVxQm9keSA9IHtcbiAgICAgIFwicmVxdWVzdFwiOiB7XG4gICAgICAgICAgXCJmaWx0ZXJzXCI6IHtcbiAgICAgICAgICAgICAgXCJwcmltYXJ5Q2F0ZWdvcnlcIjogW1xuICAgICAgICAgICAgICAgICAgXCJDb3Vyc2VcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNvbnRlbnRUeXBlXCI6IFtcbiAgICAgICAgICAgICAgICAgIFwiQ291cnNlXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJzdGF0dXNcIjogW1xuICAgICAgICAgICAgICAgICAgXCJMaXZlXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjb21wZXRlbmN5XCI6dHJ1ZVxuICAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInF1ZXJ5XCI6IFwiXCIsXG4gICAgICBcInNvcnRcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJsYXN0VXBkYXRlZE9uXCI6IFwiZGVzY1wiXG4gICAgICAgICAgfVxuICAgICAgXVxuICB9XG4gICAgcmV0dXJuICB0aGlzLnNlbGZBc3Nlc3NtZW50U2VydmljZS5nZXRDb21wZXRlbmN5Q291cnNlSWRlbnRpZmllcihyZXFCb2R5KVxuICB9XG4gIGZldGNoSGllYXJjaHlEZXRhaWxzKGlkZW50aWZpZXIpe1xuICAgIHJldHVybiB0aGlzLnNlbGZBc3Nlc3NtZW50U2VydmljZS5mZXRjaEhpZWFyY2h5RGV0YWlscyhpZGVudGlmaWVyLCdkZXRhaWwnKVxuICAgIFxuICB9XG5cbiAgbmF2aWdhdGVCYWNrKCkge1xuICAgIHRoaXMubG9jYXRpb24uYmFjaygpXG4gIH1cblxufVxuIl19