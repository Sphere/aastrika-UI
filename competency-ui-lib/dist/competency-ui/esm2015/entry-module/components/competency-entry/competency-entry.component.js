import * as tslib_1 from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
let CompetencyEntryComponent = class CompetencyEntryComponent {
    constructor() {
        this.stateChange = new EventEmitter();
    }
    ngOnInit() {
    }
    navigateTo() {
        this.stateChange.emit({ 'navigation': true });
    }
};
tslib_1.__decorate([
    Output()
], CompetencyEntryComponent.prototype, "stateChange", void 0);
CompetencyEntryComponent = tslib_1.__decorate([
    Component({
        selector: 'lib-competency-entry',
        template: "<button class=\"mat-primary-background \"\r\n  (click)=\"navigateTo()\"> Competency Dashboard\r\n</button>",
        styles: [":root{font-size:16px;--blue:#1C5D95;--yellow:#FFF4DF;--teal:#A4DFCA;--black:#000000;--white:#ffffff;--light-gray:#eff6fc;--grey-100:#DFEDF9;--gray-200:#8E8E8E;--gray-300:#989898;--gray-400:#808080;--grey-500:#919191;--yellow-500:#FFFBB0;--blue-500:#7CB5E6}.button-primary{background-color:var(--blue)!important;border-radius:50px;gap:8px;color:var(--white)!important;border:none}.mat-primary-background{padding:9px 40px;background:#1c5d95!important;border-radius:50px;color:#fff;border:none;gap:8px;width:310px;cursor:pointer}"]
    })
], CompetencyEntryComponent);
export { CompetencyEntryComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGV0ZW5jeS1lbnRyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWFzdHJpa2EvY29tcHRlbmN5LyIsInNvdXJjZXMiOlsiZW50cnktbW9kdWxlL2NvbXBvbmVudHMvY29tcGV0ZW5jeS1lbnRyeS9jb21wZXRlbmN5LWVudHJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3hFLElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBRW5DO1FBRFUsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUMsWUFBWSxFQUFDLElBQUksRUFBQyxDQUFDLENBQUE7SUFDNUMsQ0FBQztDQUVGLENBQUE7QUFWVztJQUFULE1BQU0sRUFBRTs2REFBcUQ7QUFEbkQsd0JBQXdCO0lBTHBDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxzQkFBc0I7UUFDaEMsc0hBQWdEOztLQUVqRCxDQUFDO0dBQ1csd0JBQXdCLENBV3BDO1NBWFksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1jb21wZXRlbmN5LWVudHJ5JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29tcGV0ZW5jeS1lbnRyeS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY29tcGV0ZW5jeS1lbnRyeS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21wZXRlbmN5RW50cnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBPdXRwdXQoKSBzdGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBuYXZpZ2F0ZVRvKCl7XHJcbiAgICB0aGlzLnN0YXRlQ2hhbmdlLmVtaXQoeyduYXZpZ2F0aW9uJzp0cnVlfSlcclxuICB9XHJcblxyXG59XHJcbiJdfQ==