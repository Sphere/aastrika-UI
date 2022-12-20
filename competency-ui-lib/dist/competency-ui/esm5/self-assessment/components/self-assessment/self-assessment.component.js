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
            template: "<lib-app-loader *ngIf=\"loading === true\"></lib-app-loader>\n<div class=\"content\">\n    <mat-icon (click)=\"navigateBack()\" class=\"cursor-pointer\">chevron_left</mat-icon>\n    <h1 class=\" mb-1 pl-2 \">Self Assessment</h1>\n    <ng-container *ngFor=\"let cardData   of selfAssessmentData\">\n        <ng-container *ngIf=\"selfAssessmentData\">\n            <lib-self-assessment-card [cardData]=\"cardData\"></lib-self-assessment-card>\n        </ng-container>\n    </ng-container>\n</div>",
            styles: [".content{padding:60px 20px 50px;margin:auto}@media only screen and (min-width:960px){.content{max-width:30%}}@media only screen and (min-width:1280px){.content{max-width:35%}}@media only screen and (min-width:1920px){.content{max-width:30%}}@media only screen and (min-width:600px) and (max-width:959px){.content{max-width:50%}}@media only screen and (max-width:599px){.content{max-width:90%}}"]
        })
    ], SelfAssessmentComponent);
    return SelfAssessmentComponent;
}());
export { SelfAssessmentComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZi1hc3Nlc3NtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYXN0cmlrYV9ucG1qcy9jb21wdGVuY3kvc2VsZi1hc3Nlc3NtZW50LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9zZWxmLWFzc2Vzc21lbnQvc2VsZi1hc3Nlc3NtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUE7QUFDMUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDOUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxHQUFHLEVBQVksTUFBTSxnQkFBZ0IsQ0FBQztBQVMvQztJQUtFLGlDQUNVLFFBQWtCLEVBQ2xCLHFCQUE2QztRQUQ3QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBd0I7UUFMdkQsdUJBQWtCLEdBQUcsRUFBRSxDQUFBO1FBRXZCLFlBQU8sR0FBRyxLQUFLLENBQUE7UUFNYixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUE7SUFDdEMsQ0FBQztJQUNEOzs7T0FHRztJQUNILDBDQUFRLEdBQVI7UUFBQSxpQkFnQkM7UUFmQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtRQUNuQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBTztZQUMxQyxJQUFNLGdCQUFnQixHQUFJLEtBQUksQ0FBQyxXQUFXLENBQUMsNEJBQTRCLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDNUUsT0FBTyxnQkFBZ0IsQ0FBQTtRQUN6QixDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQUc7WUFDaEIsS0FBSSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQTtZQUM3QixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtRQUN0QixDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFPO1lBQ25FLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDaEI7OztXQUdEO1FBQ0QsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQscURBQW1CLEdBQW5CO1FBQ0UsSUFBTSxPQUFPLEdBQUc7WUFDZCxTQUFTLEVBQUU7Z0JBQ1AsU0FBUyxFQUFFO29CQUNQLGlCQUFpQixFQUFFO3dCQUNmLFFBQVE7cUJBQ1g7b0JBQ0QsYUFBYSxFQUFFO3dCQUNYLFFBQVE7cUJBQ1g7b0JBQ0QsUUFBUSxFQUFFO3dCQUNOLE1BQU07cUJBQ1Q7b0JBQ0QsWUFBWSxFQUFDLElBQUk7aUJBQ3BCO2FBQ0o7WUFDRCxPQUFPLEVBQUUsRUFBRTtZQUNYLE1BQU0sRUFBRTtnQkFDSjtvQkFDSSxlQUFlLEVBQUUsTUFBTTtpQkFDMUI7YUFDSjtTQUNKLENBQUE7UUFDQyxPQUFRLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyw2QkFBNkIsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMzRSxDQUFDO0lBR0QsOENBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDdEIsQ0FBQzs7Z0JBekRtQixRQUFRO2dCQUNNLHFCQUFxQjs7SUFQNUMsdUJBQXVCO1FBTG5DLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsMGZBQStDOztTQUVoRCxDQUFDO09BQ1csdUJBQXVCLENBaUVuQztJQUFELDhCQUFDO0NBQUEsQUFqRUQsSUFpRUM7U0FqRVksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xuaW1wb3J0IHsgU2VsZkFzc2Vzc21lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9zZWxmLWFzc2Vzc21lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBSZXF1ZXN0VXRpbCB9IGZyb20gJy4uLy4uL3NlcnZpY2UvcmVxdWVzdC11dGlsLnNlcnZpY2UnO1xuaW1wb3J0IHsgbWFwLCBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zZWxmLWFzc2Vzc21lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VsZi1hc3Nlc3NtZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VsZi1hc3Nlc3NtZW50LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2VsZkFzc2Vzc21lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHNlbGZBc3Nlc3NtZW50RGF0YSA9IFtdXG4gIHJlcXVlc3RVdGlsOiBhbnlcbiAgbG9hZGluZyA9IGZhbHNlXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLFxuICAgIHByaXZhdGUgc2VsZkFzc2Vzc21lbnRTZXJ2aWNlIDogU2VsZkFzc2Vzc21lbnRTZXJ2aWNlLFxuICApIHsgXG5cbiAgICB0aGlzLnJlcXVlc3RVdGlsID0gbmV3IFJlcXVlc3RVdGlsKClcbiAgfVxuICAvKipcbiAgICpnZXR0aW5nIHRoZSBkZXRhaWxzIG9mIGNvdXJzZSBieSBwYXNpbmcgdGhlIGlkZW50aWZpZXIgYW5kIGhpZXJhcmNoeVR5cGVcbiAgICogXG4gICAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXG4gICAgdGhpcy5nZXRDb21wZXRlbmN5Q291cnNlKCkucGlwZShtYXAoKHJlczphbnkpPT57XG4gICAgICBjb25zdCBmb3JtYXRlZFJlc3BvbnNlID0gIHRoaXMucmVxdWVzdFV0aWwuZm9ybWF0ZWRDb21wZXRlbmN5Q291cnNlRGF0YShyZXMpXG4gICAgICByZXR1cm4gZm9ybWF0ZWRSZXNwb25zZVxuICAgIH0pKS5zdWJzY3JpYmUoKHJlcyk9PntcbiAgICAgIHRoaXMuc2VsZkFzc2Vzc21lbnREYXRhID0gcmVzXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgIH0pXG4gICAgdGhpcy5zZWxmQXNzZXNzbWVudFNlcnZpY2Uuc3RhcnRBc3Nlc3NtZW50JC5waXBlKCkuc3Vic2NyaWJlKChyZXM6YW55KT0+e1xuICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgLyoqXG4gICAqIGhlcmUgd2Ugd2lsbCByZWRpcmVjdCB0byBwbGF5ZXIgc2NyZWVuIFxuICAgKiBcbiAgICovXG4gICAgfSlcbiAgfVxuXG4gIGdldENvbXBldGVuY3lDb3Vyc2UoKXtcbiAgICBjb25zdCByZXFCb2R5ID0ge1xuICAgICAgXCJyZXF1ZXN0XCI6IHtcbiAgICAgICAgICBcImZpbHRlcnNcIjoge1xuICAgICAgICAgICAgICBcInByaW1hcnlDYXRlZ29yeVwiOiBbXG4gICAgICAgICAgICAgICAgICBcIkNvdXJzZVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY29udGVudFR5cGVcIjogW1xuICAgICAgICAgICAgICAgICAgXCJDb3Vyc2VcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInN0YXR1c1wiOiBbXG4gICAgICAgICAgICAgICAgICBcIkxpdmVcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNvbXBldGVuY3lcIjp0cnVlXG4gICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicXVlcnlcIjogXCJcIixcbiAgICAgIFwic29ydFwiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcImxhc3RVcGRhdGVkT25cIjogXCJkZXNjXCJcbiAgICAgICAgICB9XG4gICAgICBdXG4gIH1cbiAgICByZXR1cm4gIHRoaXMuc2VsZkFzc2Vzc21lbnRTZXJ2aWNlLmdldENvbXBldGVuY3lDb3Vyc2VJZGVudGlmaWVyKHJlcUJvZHkpXG4gIH1cbiAgXG5cbiAgbmF2aWdhdGVCYWNrKCkge1xuICAgIHRoaXMubG9jYXRpb24uYmFjaygpXG4gIH1cblxufVxuIl19