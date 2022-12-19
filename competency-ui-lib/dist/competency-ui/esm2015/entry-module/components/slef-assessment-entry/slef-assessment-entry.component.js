import * as tslib_1 from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
let SlefAssessmentEntryComponent = class SlefAssessmentEntryComponent {
    constructor(router) {
        this.router = router;
        this.stateChange = new EventEmitter();
    }
    ngOnInit() {
    }
    navigateTo() {
        this.stateChange.emit({ 'navigation': true });
    }
};
SlefAssessmentEntryComponent.ctorParameters = () => [
    { type: Router }
];
tslib_1.__decorate([
    Output()
], SlefAssessmentEntryComponent.prototype, "stateChange", void 0);
SlefAssessmentEntryComponent = tslib_1.__decorate([
    Component({
        selector: 'lib-slef-assessment-entry',
        template: "<button class=\"mat-primary-background \"\r\n  (click)=\"navigateTo()\"> Self Assessment\r\n</button>",
        styles: [":root{font-size:16px;--blue:#1C5D95;--yellow:#FFF4DF;--teal:#A4DFCA;--black:#000000;--white:#ffffff;--light-gray:#eff6fc;--grey-100:#DFEDF9;--gray-200:#8E8E8E;--gray-300:#989898;--gray-400:#808080;--grey-500:#919191;--yellow-500:#FFFBB0;--blue-500:#7CB5E6}.button-primary{background-color:var(--blue)!important;border-radius:50px;gap:8px;color:var(--white)!important;border:none}.mat-primary-background{padding:9px 40px;background:#1c5d95!important;border-radius:50px;color:#fff;border:none;gap:8px;width:310px;cursor:pointer}"]
    })
], SlefAssessmentEntryComponent);
export { SlefAssessmentEntryComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xlZi1hc3Nlc3NtZW50LWVudHJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYXN0cmlrYS9jb21wdGVuY3kvIiwic291cmNlcyI6WyJlbnRyeS1tb2R1bGUvY29tcG9uZW50cy9zbGVmLWFzc2Vzc21lbnQtZW50cnkvc2xlZi1hc3Nlc3NtZW50LWVudHJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU16QyxJQUFhLDRCQUE0QixHQUF6QyxNQUFhLDRCQUE0QjtJQUV2QyxZQUFtQixNQUFhO1FBQWIsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUR0QixnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFckMsUUFBUTtJQUNSLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBQyxZQUFZLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0NBRUYsQ0FBQTs7WUFUMkIsTUFBTTs7QUFEdEI7SUFBVCxNQUFNLEVBQUU7aUVBQXFEO0FBRG5ELDRCQUE0QjtJQUx4QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsMkJBQTJCO1FBQ3JDLGlIQUFxRDs7S0FFdEQsQ0FBQztHQUNXLDRCQUE0QixDQVd4QztTQVhZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1zbGVmLWFzc2Vzc21lbnQtZW50cnknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zbGVmLWFzc2Vzc21lbnQtZW50cnkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NsZWYtYXNzZXNzbWVudC1lbnRyeS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTbGVmQXNzZXNzbWVudEVudHJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBAT3V0cHV0KCkgc3RhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXI6Um91dGVyKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBuYXZpZ2F0ZVRvKCl7XHJcbiAgICB0aGlzLnN0YXRlQ2hhbmdlLmVtaXQoeyduYXZpZ2F0aW9uJzp0cnVlfSlcclxuICB9XHJcblxyXG59XHJcbiJdfQ==