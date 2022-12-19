import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Location } from '@angular/common';
let SelfAssessmentComponent = class SelfAssessmentComponent {
    constructor(location) {
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
    ngOnInit() {
    }
    navigateBack() {
        this.location.back();
    }
};
SelfAssessmentComponent.ctorParameters = () => [
    { type: Location }
];
SelfAssessmentComponent = tslib_1.__decorate([
    Component({
        selector: 'lib-self-assessment',
        template: "<div class=\"content\">\n    <mat-icon (click)=\"navigateBack()\" class=\"cursor-pointer\">chevron_left</mat-icon>\n  \n    <h1 class=\" mb-1 pl-2 \">Self Assessment</h1>\n\n    <ng-container *ngFor=\"let gainedproficency  of gainedproficencyData\">\n        <lib-self-assessment-card [cardData]=\"gainedproficency\"></lib-self-assessment-card>\n      </ng-container>\n  \n  </div>\n",
        styles: [".content{padding:60px 20px 50px;margin:auto}@media only screen and (min-width:960px){.content{max-width:30%}}@media only screen and (min-width:1280px){.content{max-width:35%}}@media only screen and (min-width:1920px){.content{max-width:30%}}@media only screen and (min-width:600px) and (max-width:959px){.content{max-width:50%}}@media only screen and (max-width:599px){.content{max-width:90%}}"]
    })
], SelfAssessmentComponent);
export { SelfAssessmentComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZi1hc3Nlc3NtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYXN0cmlrYV9ucG1qcy9jb21wdGVuY3kvIiwic291cmNlcyI6WyJzZWxmLWFzc2Vzc21lbnQvY29tcG9uZW50cy9zZWxmLWFzc2Vzc21lbnQvc2VsZi1hc3Nlc3NtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUE7QUFPMUMsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUFlbEMsWUFDVSxRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBZDVCLHlCQUFvQixHQUFHO1lBQ3JCO2dCQUNFLEtBQUssRUFBRSxpQkFBaUI7Z0JBQ3hCLFdBQVcsRUFBRSxrR0FBa0c7YUFFaEg7WUFDRDtnQkFDRSxLQUFLLEVBQUUsY0FBYztnQkFDckIsV0FBVyxFQUFFLHlDQUF5QzthQUV2RDtTQUNGLENBQUE7SUFJRyxDQUFDO0lBRUwsUUFBUTtJQUNSLENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUN0QixDQUFDO0NBRUYsQ0FBQTs7WUFWcUIsUUFBUTs7QUFoQmpCLHVCQUF1QjtJQUxuQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUscUJBQXFCO1FBQy9CLDJZQUErQzs7S0FFaEQsQ0FBQztHQUNXLHVCQUF1QixDQTBCbkM7U0ExQlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc2VsZi1hc3Nlc3NtZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGYtYXNzZXNzbWVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlbGYtYXNzZXNzbWVudC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlbGZBc3Nlc3NtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBnYWluZWRwcm9maWNlbmN5RGF0YSA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogJ1NlY3RvciBNZWV0aW5ncycsXG4gICAgICBkZXNjcmlwdGlvbjogJ0RvY3VtZW50cyBhbmQgZGlzY3VzcyBIQ00sIFRIUiwgZ3Jvd3RoIG1vbml0b3JpbmcgYW5kIHJlZmVycmFsIHJlbGF0ZWQgaXNzdWVzIGluIHNlY3RvciBtZWV0aW5ncycsXG4gICAgICBcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnQ291bnNlbGxpbmcgJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyJyxcbiAgICAgIFxuICAgIH1cbiAgXVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBuYXZpZ2F0ZUJhY2soKSB7XG4gICAgdGhpcy5sb2NhdGlvbi5iYWNrKClcbiAgfVxuXG59XG4iXX0=