import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { SelfAssessmentService } from '../../service/self-assessment.service';
import { RequestUtil } from '../../service/request-util.service';
import { map } from 'rxjs/operators';
var SelfAssessmentComponent = /** @class */ (function () {
    function SelfAssessmentComponent(location, selfAssessmentService) {
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
    SelfAssessmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.getCompetencyCourse().pipe(map(function (res) {
            var formatedResponse = _this.requestUtil.formatedCompetencyCourseData(res);
            return formatedResponse;
        })).subscribe(function (res) {
            _this.selfAssessmentData = res;
            _this.loading = false;
        });
        this.selfAssessmentService.startAssessment$.pipe().subscribe(function (res) {
            console.log(res);
            /**
         * here we will redirect to player screen
         *
         */
        });
    };
    SelfAssessmentComponent.prototype.getCompetencyCourse = function () {
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
            template: "<lib-app-loader *ngIf=\"loading === true\"></lib-app-loader>\n<div class=\"content\"  *ngIf=\"selfAssessmentData.length>0\">\n    <mat-icon (click)=\"navigateBack()\" class=\"cursor-pointer\">chevron_left</mat-icon>\n    <h1 class=\" mb-1 pl-2 \">Self Assessment</h1>\n    <ng-container *ngFor=\"let cardData   of selfAssessmentData\">\n        <ng-container *ngIf=\"cardData\">\n            <lib-self-assessment-card [cardData]=\"cardData\"></lib-self-assessment-card>\n        </ng-container>\n    </ng-container>\n</div>",
            styles: [".content{padding:60px 20px 50px;margin:auto}@media only screen and (min-width:960px){.content{max-width:30%}}@media only screen and (min-width:1280px){.content{max-width:35%}}@media only screen and (min-width:1920px){.content{max-width:30%}}@media only screen and (min-width:600px) and (max-width:959px){.content{max-width:50%}}@media only screen and (max-width:599px){.content{max-width:90%}}"]
        })
    ], SelfAssessmentComponent);
    return SelfAssessmentComponent;
}());
export { SelfAssessmentComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZi1hc3Nlc3NtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYXN0cmlrYV9ucG1qcy9jb21wdGVuY3kvc2VsZi1hc3Nlc3NtZW50LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9zZWxmLWFzc2Vzc21lbnQvc2VsZi1hc3Nlc3NtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUE7QUFDMUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDOUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxHQUFHLEVBQVksTUFBTSxnQkFBZ0IsQ0FBQztBQVMvQztJQUtFLGlDQUNVLFFBQWtCLEVBQ2xCLHFCQUE2QztRQUQ3QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBd0I7UUFMdkQsdUJBQWtCLEdBQUcsRUFBRSxDQUFBO1FBRXZCLFlBQU8sR0FBRyxLQUFLLENBQUE7UUFNYixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUE7SUFDdEMsQ0FBQztJQUNEOzs7T0FHRztJQUNILDBDQUFRLEdBQVI7UUFBQSxpQkFnQkM7UUFmQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtRQUNuQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBTztZQUMxQyxJQUFNLGdCQUFnQixHQUFJLEtBQUksQ0FBQyxXQUFXLENBQUMsNEJBQTRCLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDNUUsT0FBTyxnQkFBZ0IsQ0FBQTtRQUN6QixDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQUc7WUFDaEIsS0FBSSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQTtZQUM3QixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtRQUN0QixDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFPO1lBQ25FLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDaEI7OztXQUdEO1FBQ0QsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQscURBQW1CLEdBQW5CO1FBQ0UsSUFBTSxPQUFPLEdBQUc7WUFDZCxTQUFTLEVBQUU7Z0JBQ1AsU0FBUyxFQUFFO29CQUNQLGlCQUFpQixFQUFFO3dCQUNmLFFBQVE7cUJBQ1g7b0JBQ0QsYUFBYSxFQUFFO3dCQUNYLFFBQVE7cUJBQ1g7b0JBQ0QsUUFBUSxFQUFFO3dCQUNOLE1BQU07cUJBQ1Q7b0JBQ0QsWUFBWSxFQUFDLElBQUk7aUJBQ3BCO2FBQ0o7WUFDRCxPQUFPLEVBQUUsRUFBRTtZQUNYLE1BQU0sRUFBRTtnQkFDSjtvQkFDSSxlQUFlLEVBQUUsTUFBTTtpQkFDMUI7YUFDSjtTQUNKLENBQUE7UUFDQyxPQUFRLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyw2QkFBNkIsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMzRSxDQUFDO0lBR0QsOENBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDdEIsQ0FBQzs7Z0JBekRtQixRQUFRO2dCQUNNLHFCQUFxQjs7SUFQNUMsdUJBQXVCO1FBTG5DLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsdWhCQUErQzs7U0FFaEQsQ0FBQztPQUNXLHVCQUF1QixDQWlFbkM7SUFBRCw4QkFBQztDQUFBLEFBakVELElBaUVDO1NBakVZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcbmltcG9ydCB7IFNlbGZBc3Nlc3NtZW50U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2Uvc2VsZi1hc3Nlc3NtZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVxdWVzdFV0aWwgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL3JlcXVlc3QtdXRpbC5zZXJ2aWNlJztcbmltcG9ydCB7IG1hcCwgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaC1lcyc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc2VsZi1hc3Nlc3NtZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGYtYXNzZXNzbWVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlbGYtYXNzZXNzbWVudC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlbGZBc3Nlc3NtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBzZWxmQXNzZXNzbWVudERhdGEgPSBbXVxuICByZXF1ZXN0VXRpbDogYW55XG4gIGxvYWRpbmcgPSBmYWxzZVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcbiAgICBwcml2YXRlIHNlbGZBc3Nlc3NtZW50U2VydmljZSA6IFNlbGZBc3Nlc3NtZW50U2VydmljZSxcbiAgKSB7IFxuXG4gICAgdGhpcy5yZXF1ZXN0VXRpbCA9IG5ldyBSZXF1ZXN0VXRpbCgpXG4gIH1cbiAgLyoqXG4gICAqZ2V0dGluZyB0aGUgZGV0YWlscyBvZiBjb3Vyc2UgYnkgcGFzaW5nIHRoZSBpZGVudGlmaWVyIGFuZCBoaWVyYXJjaHlUeXBlXG4gICAqIFxuICAgKi9cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxuICAgIHRoaXMuZ2V0Q29tcGV0ZW5jeUNvdXJzZSgpLnBpcGUobWFwKChyZXM6YW55KT0+e1xuICAgICAgY29uc3QgZm9ybWF0ZWRSZXNwb25zZSA9ICB0aGlzLnJlcXVlc3RVdGlsLmZvcm1hdGVkQ29tcGV0ZW5jeUNvdXJzZURhdGEocmVzKVxuICAgICAgcmV0dXJuIGZvcm1hdGVkUmVzcG9uc2VcbiAgICB9KSkuc3Vic2NyaWJlKChyZXMpPT57XG4gICAgICB0aGlzLnNlbGZBc3Nlc3NtZW50RGF0YSA9IHJlc1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICB9KVxuICAgIHRoaXMuc2VsZkFzc2Vzc21lbnRTZXJ2aWNlLnN0YXJ0QXNzZXNzbWVudCQucGlwZSgpLnN1YnNjcmliZSgocmVzOmFueSk9PntcbiAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgIC8qKlxuICAgKiBoZXJlIHdlIHdpbGwgcmVkaXJlY3QgdG8gcGxheWVyIHNjcmVlbiBcbiAgICogXG4gICAqL1xuICAgIH0pXG4gIH1cblxuICBnZXRDb21wZXRlbmN5Q291cnNlKCl7XG4gICAgY29uc3QgcmVxQm9keSA9IHtcbiAgICAgIFwicmVxdWVzdFwiOiB7XG4gICAgICAgICAgXCJmaWx0ZXJzXCI6IHtcbiAgICAgICAgICAgICAgXCJwcmltYXJ5Q2F0ZWdvcnlcIjogW1xuICAgICAgICAgICAgICAgICAgXCJDb3Vyc2VcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNvbnRlbnRUeXBlXCI6IFtcbiAgICAgICAgICAgICAgICAgIFwiQ291cnNlXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJzdGF0dXNcIjogW1xuICAgICAgICAgICAgICAgICAgXCJMaXZlXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjb21wZXRlbmN5XCI6dHJ1ZVxuICAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInF1ZXJ5XCI6IFwiXCIsXG4gICAgICBcInNvcnRcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJsYXN0VXBkYXRlZE9uXCI6IFwiZGVzY1wiXG4gICAgICAgICAgfVxuICAgICAgXVxuICB9XG4gICAgcmV0dXJuICB0aGlzLnNlbGZBc3Nlc3NtZW50U2VydmljZS5nZXRDb21wZXRlbmN5Q291cnNlSWRlbnRpZmllcihyZXFCb2R5KVxuICB9XG4gIFxuXG4gIG5hdmlnYXRlQmFjaygpIHtcbiAgICB0aGlzLmxvY2F0aW9uLmJhY2soKVxuICB9XG5cbn1cbiJdfQ==