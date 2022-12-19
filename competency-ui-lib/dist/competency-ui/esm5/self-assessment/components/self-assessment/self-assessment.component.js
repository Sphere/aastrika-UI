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
            template: "<div class=\"content\">\n    <mat-icon (click)=\"navigateBack()\" class=\"cursor-pointer\">chevron_left</mat-icon>\n  \n    <h1 class=\" mb-1 pl-2 \">Self Assessment</h1>\n\n    <ng-container *ngFor=\"let gainedproficency  of gainedproficencyData\">\n        <lib-self-assessment-card [cardData]=\"gainedproficency\"></lib-self-assessment-card>\n      </ng-container>\n  \n  </div>\n",
            styles: [".content{padding:60px 20px 50px;margin:auto}@media only screen and (min-width:960px){.content{max-width:30%}}@media only screen and (min-width:1280px){.content{max-width:35%}}@media only screen and (min-width:1920px){.content{max-width:30%}}@media only screen and (min-width:600px) and (max-width:959px){.content{max-width:50%}}@media only screen and (max-width:599px){.content{max-width:90%}}"]
        })
    ], SelfAssessmentComponent);
    return SelfAssessmentComponent;
}());
export { SelfAssessmentComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZi1hc3Nlc3NtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYXN0cmlrYV9ucG1qcy9jb21wdGVuY3kvIiwic291cmNlcyI6WyJzZWxmLWFzc2Vzc21lbnQvY29tcG9uZW50cy9zZWxmLWFzc2Vzc21lbnQvc2VsZi1hc3Nlc3NtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUE7QUFPMUM7SUFlRSxpQ0FDVSxRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBZDVCLHlCQUFvQixHQUFHO1lBQ3JCO2dCQUNFLEtBQUssRUFBRSxpQkFBaUI7Z0JBQ3hCLFdBQVcsRUFBRSxrR0FBa0c7YUFFaEg7WUFDRDtnQkFDRSxLQUFLLEVBQUUsY0FBYztnQkFDckIsV0FBVyxFQUFFLHlDQUF5QzthQUV2RDtTQUNGLENBQUE7SUFJRyxDQUFDO0lBRUwsMENBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCw4Q0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUN0QixDQUFDOztnQkFSbUIsUUFBUTs7SUFoQmpCLHVCQUF1QjtRQUxuQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLDJZQUErQzs7U0FFaEQsQ0FBQztPQUNXLHVCQUF1QixDQTBCbkM7SUFBRCw4QkFBQztDQUFBLEFBMUJELElBMEJDO1NBMUJZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXNlbGYtYXNzZXNzbWVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWxmLWFzc2Vzc21lbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWxmLWFzc2Vzc21lbnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWxmQXNzZXNzbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgZ2FpbmVkcHJvZmljZW5jeURhdGEgPSBbXG4gICAge1xuICAgICAgdGl0bGU6ICdTZWN0b3IgTWVldGluZ3MnLFxuICAgICAgZGVzY3JpcHRpb246ICdEb2N1bWVudHMgYW5kIGRpc2N1c3MgSENNLCBUSFIsIGdyb3d0aCBtb25pdG9yaW5nIGFuZCByZWZlcnJhbCByZWxhdGVkIGlzc3VlcyBpbiBzZWN0b3IgbWVldGluZ3MnLFxuICAgICAgXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0NvdW5zZWxsaW5nICcsXG4gICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1cicsXG4gICAgICBcbiAgICB9XG4gIF1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvblxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgbmF2aWdhdGVCYWNrKCkge1xuICAgIHRoaXMubG9jYXRpb24uYmFjaygpXG4gIH1cblxufVxuIl19