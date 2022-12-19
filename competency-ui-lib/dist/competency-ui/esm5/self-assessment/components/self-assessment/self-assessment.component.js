import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Location } from '@angular/common';
var SelfAssessmentComponent = /** @class */ (function () {
    function SelfAssessmentComponent(location) {
        this.location = location;
        this.gainedproficencyData = [
            {
                title: 'Sector Meetings',
                description: 'Documents and discuss HCM, THR, growth monitoring and referral related issues in sector meetings',
            },
            {
                title: 'Counselling ',
                description: 'Lorem ipsum dolor sit amet, consectetur',
            }
        ];
    }
    SelfAssessmentComponent.prototype.ngOnInit = function () {
    };
    SelfAssessmentComponent.prototype.navigateBack = function () {
        this.location.back();
    };
    SelfAssessmentComponent.ctorParameters = function () { return [
        { type: Location }
    ]; };
    SelfAssessmentComponent = tslib_1.__decorate([
        Component({
            selector: 'lib-self-assessment',
            template: "<div class=\"content\">\r\n    <mat-icon (click)=\"navigateBack()\" class=\"cursor-pointer\">chevron_left</mat-icon>\r\n  \r\n    <h1 class=\" mb-1 pl-2 \">Self Assessment</h1>\r\n\r\n    <ng-container *ngFor=\"let gainedproficency  of gainedproficencyData\">\r\n        <lib-self-assessment-card [cardData]=\"gainedproficency\"></lib-self-assessment-card>\r\n      </ng-container>\r\n  \r\n  </div>\r\n",
            styles: [".content{padding:60px 20px 50px;margin:auto}@media only screen and (min-width:960px){.content{max-width:30%}}@media only screen and (min-width:1280px){.content{max-width:35%}}@media only screen and (min-width:1920px){.content{max-width:30%}}@media only screen and (min-width:600px) and (max-width:959px){.content{max-width:50%}}@media only screen and (max-width:599px){.content{max-width:90%}}"]
        })
    ], SelfAssessmentComponent);
    return SelfAssessmentComponent;
}());
export { SelfAssessmentComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZi1hc3Nlc3NtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYXN0cmlrYS9jb21wdGVuY3kvIiwic291cmNlcyI6WyJzZWxmLWFzc2Vzc21lbnQvY29tcG9uZW50cy9zZWxmLWFzc2Vzc21lbnQvc2VsZi1hc3Nlc3NtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUE7QUFPMUM7SUFlRSxpQ0FDVSxRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBZDVCLHlCQUFvQixHQUFHO1lBQ3JCO2dCQUNFLEtBQUssRUFBRSxpQkFBaUI7Z0JBQ3hCLFdBQVcsRUFBRSxrR0FBa0c7YUFFaEg7WUFDRDtnQkFDRSxLQUFLLEVBQUUsY0FBYztnQkFDckIsV0FBVyxFQUFFLHlDQUF5QzthQUV2RDtTQUNGLENBQUE7SUFJRyxDQUFDO0lBRUwsMENBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCw4Q0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUN0QixDQUFDOztnQkFSbUIsUUFBUTs7SUFoQmpCLHVCQUF1QjtRQUxuQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLCtaQUErQzs7U0FFaEQsQ0FBQztPQUNXLHVCQUF1QixDQTBCbkM7SUFBRCw4QkFBQztDQUFBLEFBMUJELElBMEJDO1NBMUJZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItc2VsZi1hc3Nlc3NtZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2VsZi1hc3Nlc3NtZW50LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zZWxmLWFzc2Vzc21lbnQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VsZkFzc2Vzc21lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBnYWluZWRwcm9maWNlbmN5RGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdTZWN0b3IgTWVldGluZ3MnLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ0RvY3VtZW50cyBhbmQgZGlzY3VzcyBIQ00sIFRIUiwgZ3Jvd3RoIG1vbml0b3JpbmcgYW5kIHJlZmVycmFsIHJlbGF0ZWQgaXNzdWVzIGluIHNlY3RvciBtZWV0aW5ncycsXHJcbiAgICAgIFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdDb3Vuc2VsbGluZyAnLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1cicsXHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIF1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvblxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGVCYWNrKCkge1xyXG4gICAgdGhpcy5sb2NhdGlvbi5iYWNrKClcclxuICB9XHJcblxyXG59XHJcbiJdfQ==