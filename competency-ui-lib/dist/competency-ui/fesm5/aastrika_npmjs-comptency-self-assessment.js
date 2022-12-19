import { __decorate } from 'tslib';
import { Input, Component, NgModule } from '@angular/core';
import { Location, CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';

var SelfAssessmentCardComponent = /** @class */ (function () {
    function SelfAssessmentCardComponent() {
    }
    SelfAssessmentCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input()
    ], SelfAssessmentCardComponent.prototype, "cardData", void 0);
    SelfAssessmentCardComponent = __decorate([
        Component({
            selector: 'lib-self-assessment-card',
            template: "<div class=\"card_box\">\n  <ng-container *ngIf=\"cardData?.title\">\n    <div class=\"title\">{{ cardData?.title }}</div>\n  </ng-container>\n  <ng-container *ngIf=\"cardData?.description\">\n    <div class=\"description\">{{ cardData?.description }}</div>\n  </ng-container>\n\n  <button mat-button class=\"startBtn\">Start</button>\n</div>\n",
            styles: [":root{font-size:16px;--blue:#1C5D95;--yellow:#FFF4DF;--teal:#A4DFCA;--black:#000000;--white:#ffffff;--light-gray:#eff6fc;--grey-100:#DFEDF9;--gray-200:#8E8E8E;--gray-300:#989898;--gray-400:#808080;--grey-500:#919191;--yellow-500:#FFFBB0;--blue-500:#7CB5E6}.button-primary{background-color:var(--blue)!important;border-radius:50px;gap:8px;color:var(--white)!important;border:none}.mat-primary-background{padding:9px 40px;width:310px;cursor:pointer}.card_box{margin:7px 2px 15px;padding:16px 10px 20px 14px;box-shadow:0 0 4px rgba(0,0,0,.15);border-radius:10px;background:#fff}.title{font-size:24px;line-height:29px;letter-spacing:-.02em;margin-bottom:7px}.description{font-size:14px;line-height:17px;letter-spacing:-.02em}.startBtn{background-color:#1c5d95!important;border-radius:50px;padding:8px 32px;gap:8px;font-size:16px;line-height:19px;color:#fff!important;margin-top:10px;border:none}.proficiency{color:#1c5d96;font-style:italic;font-size:14px;line-height:17px;cursor:pointer;margin-top:4px}"]
        })
    ], SelfAssessmentCardComponent);
    return SelfAssessmentCardComponent;
}());

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
    SelfAssessmentComponent = __decorate([
        Component({
            selector: 'lib-self-assessment',
            template: "<div class=\"content\">\n    <mat-icon (click)=\"navigateBack()\" class=\"cursor-pointer\">chevron_left</mat-icon>\n  \n    <h1 class=\" mb-1 pl-2 \">Self Assessment</h1>\n\n    <ng-container *ngFor=\"let gainedproficency  of gainedproficencyData\">\n        <lib-self-assessment-card [cardData]=\"gainedproficency\"></lib-self-assessment-card>\n      </ng-container>\n  \n  </div>\n",
            styles: [".content{padding:60px 20px 50px;margin:auto}@media only screen and (min-width:960px){.content{max-width:30%}}@media only screen and (min-width:1280px){.content{max-width:35%}}@media only screen and (min-width:1920px){.content{max-width:30%}}@media only screen and (min-width:600px) and (max-width:959px){.content{max-width:50%}}@media only screen and (max-width:599px){.content{max-width:90%}}"]
        })
    ], SelfAssessmentComponent);
    return SelfAssessmentComponent;
}());

var SelfAssessmentModule = /** @class */ (function () {
    function SelfAssessmentModule() {
    }
    SelfAssessmentModule = __decorate([
        NgModule({
            declarations: [SelfAssessmentCardComponent, SelfAssessmentComponent],
            imports: [
                CommonModule,
                MatIconModule,
            ],
            exports: [SelfAssessmentCardComponent, SelfAssessmentComponent]
        })
    ], SelfAssessmentModule);
    return SelfAssessmentModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { SelfAssessmentCardComponent, SelfAssessmentComponent, SelfAssessmentModule };
//# sourceMappingURL=aastrika_npmjs-comptency-self-assessment.js.map
