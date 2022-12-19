import * as tslib_1 from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
var SlefAssessmentEntryComponent = /** @class */ (function () {
    function SlefAssessmentEntryComponent(router) {
        this.router = router;
        this.stateChange = new EventEmitter();
    }
    SlefAssessmentEntryComponent.prototype.ngOnInit = function () {
    };
    SlefAssessmentEntryComponent.prototype.navigateTo = function () {
        this.stateChange.emit({ 'navigation': true });
    };
    SlefAssessmentEntryComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    tslib_1.__decorate([
        Output()
    ], SlefAssessmentEntryComponent.prototype, "stateChange", void 0);
    SlefAssessmentEntryComponent = tslib_1.__decorate([
        Component({
            selector: 'lib-slef-assessment-entry',
            template: "<button class=\"mat-primary-background \"\n  (click)=\"navigateTo()\"> Self Assessment\n</button>",
            styles: [":root{font-size:16px;--blue:#1C5D95;--yellow:#FFF4DF;--teal:#A4DFCA;--black:#000000;--white:#ffffff;--light-gray:#eff6fc;--grey-100:#DFEDF9;--gray-200:#8E8E8E;--gray-300:#989898;--gray-400:#808080;--grey-500:#919191;--yellow-500:#FFFBB0;--blue-500:#7CB5E6}.button-primary{background-color:var(--blue)!important;border-radius:50px;gap:8px;color:var(--white)!important;border:none}.mat-primary-background{padding:9px 40px;background:#1c5d95!important;border-radius:50px;color:#fff;border:none;gap:8px;width:310px;cursor:pointer}"]
        })
    ], SlefAssessmentEntryComponent);
    return SlefAssessmentEntryComponent;
}());
export { SlefAssessmentEntryComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xlZi1hc3Nlc3NtZW50LWVudHJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYXN0cmlrYV9ucG1qcy9jb21wdGVuY3kvIiwic291cmNlcyI6WyJlbnRyeS1tb2R1bGUvY29tcG9uZW50cy9zbGVmLWFzc2Vzc21lbnQtZW50cnkvc2xlZi1hc3Nlc3NtZW50LWVudHJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU16QztJQUVFLHNDQUFtQixNQUFhO1FBQWIsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUR0QixnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFckMsK0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxpREFBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBQyxZQUFZLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQTtJQUM1QyxDQUFDOztnQkFQeUIsTUFBTTs7SUFEdEI7UUFBVCxNQUFNLEVBQUU7cUVBQXFEO0lBRG5ELDRCQUE0QjtRQUx4QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLDZHQUFxRDs7U0FFdEQsQ0FBQztPQUNXLDRCQUE0QixDQVd4QztJQUFELG1DQUFDO0NBQUEsQUFYRCxJQVdDO1NBWFksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXNsZWYtYXNzZXNzbWVudC1lbnRyeScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zbGVmLWFzc2Vzc21lbnQtZW50cnkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zbGVmLWFzc2Vzc21lbnQtZW50cnkuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTbGVmQXNzZXNzbWVudEVudHJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQE91dHB1dCgpIHN0YXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29uc3RydWN0b3IocHVibGljIHJvdXRlcjpSb3V0ZXIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgbmF2aWdhdGVUbygpe1xuICAgIHRoaXMuc3RhdGVDaGFuZ2UuZW1pdCh7J25hdmlnYXRpb24nOnRydWV9KVxuICB9XG5cbn1cbiJdfQ==