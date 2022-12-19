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
        template: "<div class=\"content\">\r\n    <mat-icon (click)=\"navigateBack()\" class=\"cursor-pointer\">chevron_left</mat-icon>\r\n  \r\n    <h1 class=\" mb-1 pl-2 \">Self Assessment</h1>\r\n\r\n    <ng-container *ngFor=\"let gainedproficency  of gainedproficencyData\">\r\n        <lib-self-assessment-card [cardData]=\"gainedproficency\"></lib-self-assessment-card>\r\n      </ng-container>\r\n  \r\n  </div>\r\n",
        styles: [".content{padding:60px 20px 50px;margin:auto}@media only screen and (min-width:960px){.content{max-width:30%}}@media only screen and (min-width:1280px){.content{max-width:35%}}@media only screen and (min-width:1920px){.content{max-width:30%}}@media only screen and (min-width:600px) and (max-width:959px){.content{max-width:50%}}@media only screen and (max-width:599px){.content{max-width:90%}}"]
    })
], SelfAssessmentComponent);
export { SelfAssessmentComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZi1hc3Nlc3NtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYXN0cmlrYS9jb21wdGVuY3kvIiwic291cmNlcyI6WyJzZWxmLWFzc2Vzc21lbnQvY29tcG9uZW50cy9zZWxmLWFzc2Vzc21lbnQvc2VsZi1hc3Nlc3NtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUE7QUFPMUMsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUFlbEMsWUFDVSxRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBZDVCLHlCQUFvQixHQUFHO1lBQ3JCO2dCQUNFLEtBQUssRUFBRSxpQkFBaUI7Z0JBQ3hCLFdBQVcsRUFBRSxrR0FBa0c7YUFFaEg7WUFDRDtnQkFDRSxLQUFLLEVBQUUsY0FBYztnQkFDckIsV0FBVyxFQUFFLHlDQUF5QzthQUV2RDtTQUNGLENBQUE7SUFJRyxDQUFDO0lBRUwsUUFBUTtJQUNSLENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUN0QixDQUFDO0NBRUYsQ0FBQTs7WUFWcUIsUUFBUTs7QUFoQmpCLHVCQUF1QjtJQUxuQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUscUJBQXFCO1FBQy9CLCtaQUErQzs7S0FFaEQsQ0FBQztHQUNXLHVCQUF1QixDQTBCbkM7U0ExQlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1zZWxmLWFzc2Vzc21lbnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWxmLWFzc2Vzc21lbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NlbGYtYXNzZXNzbWVudC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWxmQXNzZXNzbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGdhaW5lZHByb2ZpY2VuY3lEYXRhID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ1NlY3RvciBNZWV0aW5ncycsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnRG9jdW1lbnRzIGFuZCBkaXNjdXNzIEhDTSwgVEhSLCBncm93dGggbW9uaXRvcmluZyBhbmQgcmVmZXJyYWwgcmVsYXRlZCBpc3N1ZXMgaW4gc2VjdG9yIG1lZXRpbmdzJyxcclxuICAgICAgXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ0NvdW5zZWxsaW5nICcsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyJyxcclxuICAgICAgXHJcbiAgICB9XHJcbiAgXVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBuYXZpZ2F0ZUJhY2soKSB7XHJcbiAgICB0aGlzLmxvY2F0aW9uLmJhY2soKVxyXG4gIH1cclxuXHJcbn1cclxuIl19