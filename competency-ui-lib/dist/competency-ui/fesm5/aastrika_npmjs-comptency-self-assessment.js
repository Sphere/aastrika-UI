import { __extends, __decorate } from 'tslib';
import { ɵɵdefineInjectable, ɵɵinject, Injectable, Input, Component, NgModule } from '@angular/core';
import { urlConfig, DataService, CoreModule } from '@aastrika_npmjs/comptency/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Location, CommonModule } from '@angular/common';
import { get, forEach } from 'lodash-es';
import { map } from 'rxjs/operators';
import { MatIconModule } from '@angular/material';

var SelfAssessmentService = /** @class */ (function (_super) {
    __extends(SelfAssessmentService, _super);
    function SelfAssessmentService(http) {
        var _this = _super.call(this, http) || this;
        _this.startAssessment = new BehaviorSubject(undefined);
        _this.startAssessment$ = _this.startAssessment.asObservable();
        return _this;
    }
    /**
     *searching for the content Identifier
     *
     */
    SelfAssessmentService.prototype.getCompetencyCourseIdentifier = function (reqBody) {
        var httpOptions = {
            url: urlConfig.getSearch(),
            data: reqBody
        };
        return this.post(httpOptions);
    };
    /**
    *getting the details of course by pasing the identifier and hierarchyType
    *
    */
    SelfAssessmentService.prototype.fetchHiearchyDetails = function (identifier, hierarchyType) {
        var httpOptions = {
            url: urlConfig.getHierachyDetails(identifier, hierarchyType),
        };
        return this.get(httpOptions);
    };
    SelfAssessmentService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    SelfAssessmentService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SelfAssessmentService_Factory() { return new SelfAssessmentService(ɵɵinject(HttpClient)); }, token: SelfAssessmentService, providedIn: "root" });
    SelfAssessmentService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], SelfAssessmentService);
    return SelfAssessmentService;
}(DataService));

var SelfAssessmentCardComponent = /** @class */ (function () {
    function SelfAssessmentCardComponent(selfAssessmentService) {
        this.selfAssessmentService = selfAssessmentService;
    }
    SelfAssessmentCardComponent.prototype.ngOnInit = function () {
    };
    SelfAssessmentCardComponent.prototype.startSelfAssesment = function (data) {
        this.selfAssessmentService.startAssessment.next(data);
    };
    SelfAssessmentCardComponent.ctorParameters = function () { return [
        { type: SelfAssessmentService }
    ]; };
    __decorate([
        Input()
    ], SelfAssessmentCardComponent.prototype, "cardData", void 0);
    SelfAssessmentCardComponent = __decorate([
        Component({
            selector: 'lib-self-assessment-card',
            template: "<div class=\"card_box\">\n  <ng-container *ngIf=\"cardData?.title\">\n    <div class=\"title\">{{ cardData?.title }}</div>\n  </ng-container>\n  <ng-container *ngIf=\"cardData?.description\">\n    <div class=\"description\">{{ cardData?.description }}</div>\n  </ng-container>\n\n  <button mat-button class=\"startBtn\"(click)=\"startSelfAssesment(cardData)\">Start</button>\n</div>\n",
            styles: [":root{font-size:16px;--blue:#1C5D95;--yellow:#FFF4DF;--teal:#A4DFCA;--black:#000000;--white:#ffffff;--light-gray:#eff6fc;--grey-100:#DFEDF9;--gray-200:#8E8E8E;--gray-300:#989898;--gray-400:#808080;--grey-500:#919191;--yellow-500:#FFFBB0;--blue-500:#7CB5E6}.button-primary{background-color:var(--blue)!important;border-radius:50px;gap:8px;color:var(--white)!important;border:none}.mat-primary-background{padding:9px 40px;width:310px;cursor:pointer}.card_box{margin:7px 2px 15px;padding:16px 10px 20px 14px;box-shadow:0 0 4px rgba(0,0,0,.15);border-radius:10px;background:#fff}.title{font-size:24px;line-height:29px;letter-spacing:-.02em;margin-bottom:7px}.description{font-size:14px;line-height:17px;letter-spacing:-.02em}.startBtn{background-color:#1c5d95!important;border-radius:50px;padding:8px 32px;gap:8px;font-size:16px;line-height:19px;color:#fff!important;margin-top:10px;border:none}.proficiency{color:#1c5d96;font-style:italic;font-size:14px;line-height:17px;cursor:pointer;margin-top:4px}"]
        })
    ], SelfAssessmentCardComponent);
    return SelfAssessmentCardComponent;
}());

var RequestUtil = /** @class */ (function () {
    function RequestUtil() {
    }
    RequestUtil.prototype.formatedcompetencyData = function (data) {
        var result = [];
        if (get(data, 'result')) {
            if (get(data, 'result.content').competency === true) {
                var children = get(data, 'result.content').children;
                if (children.length > 0) {
                    forEach(children, function (value) {
                        result.push({
                            'title': get(value, 'name'),
                            'courseId': get(value, 'parent'),
                            'contentId': get(value, 'identifier'),
                            'contentType': get(value, 'contentType'),
                            'artifactUrl': get(value, 'artifactUrl'),
                        });
                    });
                    return result;
                }
            }
        }
    };
    RequestUtil.prototype.formatedCompetencyCourseData = function (data) {
        var result = [];
        if (get(data, 'result')) {
            var content = get(data, 'result.content');
            if (content.length > 0) {
                forEach(content, function (value) {
                    result.push({
                        'title': get(value, 'name'),
                        'contentId': get(value, 'identifier'),
                        'contentType': get(value, 'contentType'),
                        'subTitle': get(value, 'subTitle'),
                        'description': get(value, 'description'),
                        'creator': get(value, 'creator'),
                        'duration': get(value, 'duration')
                    });
                });
                return result;
            }
        }
    };
    RequestUtil.ngInjectableDef = ɵɵdefineInjectable({ factory: function RequestUtil_Factory() { return new RequestUtil(); }, token: RequestUtil, providedIn: "root" });
    RequestUtil = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], RequestUtil);
    return RequestUtil;
}());

var SelfAssessmentComponent = /** @class */ (function () {
    function SelfAssessmentComponent(location, selfAssessmentService) {
        this.location = location;
        this.selfAssessmentService = selfAssessmentService;
        this.selfAssessmentData = [];
        this.loading = false;
        this.requestUtil = new RequestUtil();
    }
    /**
     *getting the details of course by pasing the identifier and hierarchyType
     *
     */
    SelfAssessmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.getCompetencyCourse().pipe(map(function (res) {
            var formatedResponse = _this.requestUtil.formatedCompetencyCourseData(res);
            return formatedResponse;
        })).subscribe(function (res) {
            _this.selfAssessmentData = res;
            _this.loading = false;
        });
        this.selfAssessmentService.startAssessment$.pipe().subscribe(function (res) {
            console.log(res);
            /**
         * here we will redirect to player screen
         *
         */
        });
    };
    SelfAssessmentComponent.prototype.getCompetencyCourse = function () {
        var reqBody = {
            "request": {
                "filters": {
                    "primaryCategory": [
                        "Course"
                    ],
                    "contentType": [
                        "Course"
                    ],
                    "status": [
                        "Live"
                    ],
                    "competency": true
                }
            },
            "query": "",
            "sort": [
                {
                    "lastUpdatedOn": "desc"
                }
            ]
        };
        return this.selfAssessmentService.getCompetencyCourseIdentifier(reqBody);
    };
    SelfAssessmentComponent.prototype.navigateBack = function () {
        this.location.back();
    };
    SelfAssessmentComponent.ctorParameters = function () { return [
        { type: Location },
        { type: SelfAssessmentService }
    ]; };
    SelfAssessmentComponent = __decorate([
        Component({
            selector: 'lib-self-assessment',
            template: "<lib-app-loader *ngIf=\"loading === true\"></lib-app-loader>\n<div class=\"content\">\n    <mat-icon (click)=\"navigateBack()\" class=\"cursor-pointer\">chevron_left</mat-icon>\n    <h1 class=\" mb-1 pl-2 \">Self Assessment</h1>\n    <ng-container *ngFor=\"let cardData   of selfAssessmentData\">\n        <ng-container *ngIf=\"selfAssessmentData\">\n            <lib-self-assessment-card [cardData]=\"cardData\"></lib-self-assessment-card>\n        </ng-container>\n    </ng-container>\n</div>",
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
                HttpClientModule,
                CoreModule
            ],
            exports: [SelfAssessmentCardComponent, SelfAssessmentComponent]
        })
    ], SelfAssessmentModule);
    return SelfAssessmentModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { SelfAssessmentCardComponent, SelfAssessmentComponent, SelfAssessmentModule, SelfAssessmentService as ɵa };
//# sourceMappingURL=aastrika_npmjs-comptency-self-assessment.js.map
