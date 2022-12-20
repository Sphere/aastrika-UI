import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { SelfAssessmentService } from '../../service/self-assessment.service';
let SelfAssessmentCardComponent = class SelfAssessmentCardComponent {
    constructor(selfAssessmentService) {
        this.selfAssessmentService = selfAssessmentService;
    }
    ngOnInit() {
    }
    startSelfAssesment(data) {
        this.selfAssessmentService.startAssessment.next(data);
    }
};
SelfAssessmentCardComponent.ctorParameters = () => [
    { type: SelfAssessmentService }
];
tslib_1.__decorate([
    Input()
], SelfAssessmentCardComponent.prototype, "cardData", void 0);
SelfAssessmentCardComponent = tslib_1.__decorate([
    Component({
        selector: 'lib-self-assessment-card',
        template: "<div class=\"card_box\">\n  <ng-container *ngIf=\"cardData?.title\">\n    <div class=\"title\">{{ cardData?.title }}</div>\n  </ng-container>\n  <ng-container *ngIf=\"cardData?.description\">\n    <div class=\"description\">{{ cardData?.description }}</div>\n  </ng-container>\n\n  <button mat-button class=\"startBtn\"(click)=\"startSelfAssesment(cardData)\">Start</button>\n</div>\n",
        styles: [":root{font-size:16px;--blue:#1C5D95;--yellow:#FFF4DF;--teal:#A4DFCA;--black:#000000;--white:#ffffff;--light-gray:#eff6fc;--grey-100:#DFEDF9;--gray-200:#8E8E8E;--gray-300:#989898;--gray-400:#808080;--grey-500:#919191;--yellow-500:#FFFBB0;--blue-500:#7CB5E6}.button-primary{background-color:var(--blue)!important;border-radius:50px;gap:8px;color:var(--white)!important;border:none}.mat-primary-background{padding:9px 40px;width:310px;cursor:pointer}.card_box{margin:7px 2px 15px;padding:16px 10px 20px 14px;box-shadow:0 0 4px rgba(0,0,0,.15);border-radius:10px;background:#fff}.title{font-size:24px;line-height:29px;letter-spacing:-.02em;margin-bottom:7px}.description{font-size:14px;line-height:17px;letter-spacing:-.02em}.startBtn{background-color:#1c5d95!important;border-radius:50px;padding:8px 32px;gap:8px;font-size:16px;line-height:19px;color:#fff!important;margin-top:10px;border:none}.proficiency{color:#1c5d96;font-style:italic;font-size:14px;line-height:17px;cursor:pointer;margin-top:4px}"]
    })
], SelfAssessmentCardComponent);
export { SelfAssessmentCardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZi1hc3Nlc3NtZW50LWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFhc3RyaWthX25wbWpzL2NvbXB0ZW5jeS9zZWxmLWFzc2Vzc21lbnQvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3NlbGYtYXNzZXNzbWVudC1jYXJkL3NlbGYtYXNzZXNzbWVudC1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFNOUUsSUFBYSwyQkFBMkIsR0FBeEMsTUFBYSwyQkFBMkI7SUFLdEMsWUFBc0IscUJBQTZDO1FBQTdDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBd0I7SUFBSyxDQUFDO0lBRXpFLFFBQVE7SUFDUixDQUFDO0lBQ0Qsa0JBQWtCLENBQUMsSUFBUTtRQUN6QixJQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN2RCxDQUFDO0NBQ0YsQ0FBQTs7WUFQK0MscUJBQXFCOztBQUgxRDtJQUFSLEtBQUssRUFBRTs2REFBYztBQUZYLDJCQUEyQjtJQUx2QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsMEJBQTBCO1FBQ3BDLDRZQUFvRDs7S0FFckQsQ0FBQztHQUNXLDJCQUEyQixDQVl2QztTQVpZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VsZkFzc2Vzc21lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9zZWxmLWFzc2Vzc21lbnQuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc2VsZi1hc3Nlc3NtZW50LWNhcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VsZi1hc3Nlc3NtZW50LWNhcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWxmLWFzc2Vzc21lbnQtY2FyZC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlbGZBc3Nlc3NtZW50Q2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgY2FyZERhdGE6IGFueVxuXG5cbiAgY29uc3RydWN0b3IoICBwcml2YXRlIHNlbGZBc3Nlc3NtZW50U2VydmljZSA6IFNlbGZBc3Nlc3NtZW50U2VydmljZSwpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG4gIHN0YXJ0U2VsZkFzc2VzbWVudChkYXRhOmFueSl7XG4gICAgdGhpcy5zZWxmQXNzZXNzbWVudFNlcnZpY2Uuc3RhcnRBc3Nlc3NtZW50Lm5leHQoZGF0YSlcbiAgfVxufVxuIl19