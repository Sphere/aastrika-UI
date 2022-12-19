import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var SelfAssessmentCardComponent = /** @class */ (function () {
    function SelfAssessmentCardComponent() {
    }
    SelfAssessmentCardComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input()
    ], SelfAssessmentCardComponent.prototype, "cardData", void 0);
    SelfAssessmentCardComponent = tslib_1.__decorate([
        Component({
            selector: 'lib-self-assessment-card',
            template: "<div class=\"card_box\">\r\n  <ng-container *ngIf=\"cardData?.title\">\r\n    <div class=\"title\">{{ cardData?.title }}</div>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"cardData?.description\">\r\n    <div class=\"description\">{{ cardData?.description }}</div>\r\n  </ng-container>\r\n\r\n  <button mat-button class=\"startBtn\">Start</button>\r\n</div>\r\n",
            styles: [":root{font-size:16px;--blue:#1C5D95;--yellow:#FFF4DF;--teal:#A4DFCA;--black:#000000;--white:#ffffff;--light-gray:#eff6fc;--grey-100:#DFEDF9;--gray-200:#8E8E8E;--gray-300:#989898;--gray-400:#808080;--grey-500:#919191;--yellow-500:#FFFBB0;--blue-500:#7CB5E6}.button-primary{background-color:var(--blue)!important;border-radius:50px;gap:8px;color:var(--white)!important;border:none}.mat-primary-background{padding:9px 40px;width:310px;cursor:pointer}.card_box{margin:7px 2px 15px;padding:16px 10px 20px 14px;box-shadow:0 0 4px rgba(0,0,0,.15);border-radius:10px;background:#fff}.title{font-size:24px;line-height:29px;letter-spacing:-.02em;margin-bottom:7px}.description{font-size:14px;line-height:17px;letter-spacing:-.02em}.startBtn{background-color:#1c5d95!important;border-radius:50px;padding:8px 32px;gap:8px;font-size:16px;line-height:19px;color:#fff!important;margin-top:10px;border:none}.proficiency{color:#1c5d96;font-style:italic;font-size:14px;line-height:17px;cursor:pointer;margin-top:4px}"]
        })
    ], SelfAssessmentCardComponent);
    return SelfAssessmentCardComponent;
}());
export { SelfAssessmentCardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZi1hc3Nlc3NtZW50LWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFhc3RyaWthL2NvbXB0ZW5jeS8iLCJzb3VyY2VzIjpbInNlbGYtYXNzZXNzbWVudC9jb21wb25lbnRzL3NlbGYtYXNzZXNzbWVudC1jYXJkL3NlbGYtYXNzZXNzbWVudC1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFPekQ7SUFLRTtJQUFnQixDQUFDO0lBRWpCLDhDQUFRLEdBQVI7SUFDQSxDQUFDO0lBTlE7UUFBUixLQUFLLEVBQUU7aUVBQWM7SUFGWCwyQkFBMkI7UUFMdkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDBCQUEwQjtZQUNwQyx3WEFBb0Q7O1NBRXJELENBQUM7T0FDVywyQkFBMkIsQ0FVdkM7SUFBRCxrQ0FBQztDQUFBLEFBVkQsSUFVQztTQVZZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItc2VsZi1hc3Nlc3NtZW50LWNhcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWxmLWFzc2Vzc21lbnQtY2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2VsZi1hc3Nlc3NtZW50LWNhcmQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VsZkFzc2Vzc21lbnRDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgY2FyZERhdGE6IGFueVxyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=