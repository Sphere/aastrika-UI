import { __extends, __decorate, __spread } from 'tslib';
import { ɵɵdefineInjectable, ɵɵinject, Injectable, Component, EventEmitter, Output, NgModule } from '@angular/core';
import { of, forkJoin } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { isEmpty, get, reduce, forEach } from 'lodash';
import { urlConfig, DataService, CoreModule } from '@aastrika/comptency/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Location, CommonModule } from '@angular/common';
import { findIndex, map, forEach as forEach$1, values, merge, keyBy } from 'lodash-es';
import { ConfigService } from '@aastrika/comptency/entry-module';
import { MatTabsModule, MatIconModule, MatExpansionModule } from '@angular/material';

var RequestUtil = /** @class */ (function () {
    function RequestUtil() {
        this.formatedActivities = function (data) {
            if (!isEmpty(data)) {
                return data;
            }
        };
        this.formatedActivitityByPostion = function (data) {
            if (get(data, 'result')) {
                var children = get(data, 'result.response').children;
                if (children.length > 0) {
                    var result = reduce(children, function (result, value) {
                        result.push({
                            'roles': get(value, 'name'),
                            'id': get(value, 'id'),
                            'description': get(value, 'description'),
                        });
                        return result;
                    }, []);
                    return result;
                }
            }
        };
        this.formatedActivitityByRoleId = function (data) {
            if (get(data, 'result')) {
                var children = get(data, 'result.response').children;
                if (children.length > 0) {
                    var result = reduce(children, function (result, value) {
                        result.push({
                            'title': get(value, 'name'),
                            'cid': get(value, 'id'),
                            'description': get(value, 'description')
                        });
                        return result;
                    }, []);
                    return result;
                }
            }
        };
        this.formatedCompetency = function (data) {
            var result = [];
            forEach(data, function (data) {
                if (get(data, 'result')) {
                    var children = get(data, 'result.response').children;
                    if (children.length > 0) {
                        forEach(children, function (value) {
                            result.push({
                                'competency': get(value, 'name'),
                                'id': get(value, 'id'),
                                'description': get(value, 'description'),
                                'levels': ['Level 4', 'Level 5'],
                                'cid': get(data, 'result.response').id
                            });
                        });
                    }
                }
            });
            return result;
        };
    }
    /**
   * util method to formate the gained competency
   * for user
   */
    RequestUtil.prototype.formatedGainedCompetency = function (entity, passbook) {
        var _this = this;
        var response = [];
        forEach(entity, function (value) {
            var cid = get(value, 'id');
            forEach(passbook, function (passbookValue) {
                if (passbookValue.competencies.hasOwnProperty(cid)) {
                    var competency = passbookValue.competencies[cid];
                    response.push({
                        'title': get(competency, 'additionalParams.competencyName'),
                        'logs': _this.acquiredPassbookLogs(get(competency, 'acquiredDetails')),
                        'proficiencyLevels': _this.acauiredChannelColourCode(get(competency, 'acquiredDetails'))
                    });
                }
            });
        });
        return response;
    };
    RequestUtil.prototype.acquiredPassbookLogs = function (acquiredDetails) {
        var response = [];
        if (acquiredDetails.length > 0) {
            forEach(acquiredDetails, function (value) {
                response.push({
                    'header': get(value, 'courseName') ? get(value, 'courseName') : '',
                    'date': get(value, 'createdDate'),
                    'description': get(value, 'additionalParams.description'),
                    'keyboardArrowUp': true,
                    'level': get(value, 'competencyLevelId')
                });
            });
        }
        return response;
    };
    RequestUtil.prototype.acauiredChannelColourCode = function (acquiredDetails) {
        var response = [
            {
                'color': '#FFFBB0',
                'displayLevel': 1,
                'selected': false,
            },
            {
                'color': '#FFFBB0',
                'displayLevel': 2,
                'selected': false,
            },
            {
                'color': '#FFFBB0',
                'displayLevel': 3,
                'selected': false,
            },
            {
                'color': '#FFFBB0',
                'displayLevel': 4,
                'selected': false,
            },
            {
                'color': '#FFFBB0',
                'displayLevel': 5,
                'selected': false,
            }
        ];
        forEach(acquiredDetails, function (value) {
            var channel = get(value, 'acquiredChannel');
            switch (channel) {
                case 'course': {
                    forEach(response, function (level) {
                        if (level.displayLevel == get(value, 'competencyLevelId')) {
                            level.color = '#FFFBB0';
                            level.selected = true;
                        }
                    });
                    break;
                }
                case 'selfAssessment': {
                    forEach(response, function (level) {
                        if (level.displayLevel == get(value, 'competencyLevelId')) {
                            level.color = '#7CB5E6';
                            level.selected = true;
                        }
                    });
                    break;
                }
                case 'admin': {
                    forEach(response, function (level) {
                        if (level.displayLevel == get(value, 'competencyLevelId')) {
                            level.color = '#A4DFCA';
                            level.selected = true;
                        }
                    });
                    break;
                }
                default: {
                    forEach(response, function (level) {
                        if (level.displayLevel == get(value, 'competencyLevelId')) {
                            level.color = '#FFFBB0';
                            level.selected = false;
                        }
                    });
                    break;
                }
            }
        });
        return response;
    };
    return RequestUtil;
}());

/**
 * RequiredCompetencyService to extend Data Service
 *
 * @author Mansur Shaik <mansur.shaik@tarento.com>
 */
var RequiredCompetencyService = /** @class */ (function (_super) {
    __extends(RequiredCompetencyService, _super);
    function RequiredCompetencyService(http) {
        return _super.call(this, http) || this;
    }
    /**
     * for making getall required competency api calls
     *
     */
    RequiredCompetencyService.prototype.getRequiredCompetencyById = function (reqBody) {
        var httpOptions = {
            url: urlConfig.getEntityById(3),
            data: reqBody
        };
        console.log('reqBody', httpOptions);
        return this.post(httpOptions);
    };
    RequiredCompetencyService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    RequiredCompetencyService.ngInjectableDef = ɵɵdefineInjectable({ factory: function RequiredCompetencyService_Factory() { return new RequiredCompetencyService(ɵɵinject(HttpClient)); }, token: RequiredCompetencyService, providedIn: "root" });
    RequiredCompetencyService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], RequiredCompetencyService);
    return RequiredCompetencyService;
}(DataService));

var RequiredComptencyCardComponent = /** @class */ (function () {
    function RequiredComptencyCardComponent(requiredCompetencyService) {
        this.requiredCompetencyService = requiredCompetencyService;
        this.competencyData = [
            {
                title: 'Procurement and Distribution of HCM',
                description: 'Manages procurement and store raw materials for HCMs as per the pre-decided menu Supervises the preparation and distribution of HCM by Anganwadi Helper (AWH)',
                requiredLevel: 'level 4'
            },
            {
                title: 'Store management and planning and coordination of THR and Dry ration',
                description: 'Mobilizes children and conducts ECCE activities as per the yearly activity calendar and the ECCE manual ',
                requiredLevel: 'level 4'
            },
            {
                title: 'Procurement and Distribution of HCM',
                description: 'Manages procurement and store raw materials for HCMs as per the pre-decided menu Supervises the preparation and distribution of HCM by Anganwadi Helper (AWH)',
                requiredLevel: 'level 4'
            },
            {
                title: 'Early Childhood Care Education',
                description: 'Mobilizes children and conducts ECCE activities as per the yearly activity calendar and the ECCE manual ',
                requiredLevel: 'level 4'
            },
            {
                title: 'Procurement and Distribution of HCM',
                description: 'Manages procurement and store raw materials for HCMs as per the pre-decided menu Supervises the preparation and distribution of HCM by Anganwadi Helper (AWH)',
                requiredLevel: 'level 4'
            },
            {
                title: 'Early Childhood Care Education',
                description: 'Mobilizes children and conducts ECCE activities as per the yearly activity calendar and the ECCE manual ',
                requiredLevel: 'level 4'
            },
        ];
        this.panelOpenState = true;
        this.customCollapsedHeight = '100px';
        this.customExpandedHeight = '100px';
        this.loading = false;
        this.logs = [
            {
                index: 1,
                header: 'Understands HCM guidelines',
            },
            {
                index: 2,
                header: 'Lists raw material required',
            },
            {
                index: 3,
                header: 'Plans for storage',
            },
            {
                index: 4,
                header: 'Motivates the AWH and children on optimal hygiene and handwashing practices',
            },
            {
                index: 5,
                header: 'Course-Name Completion',
            },
        ];
        this.requestUtil = new RequestUtil();
    }
    RequiredComptencyCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.loading = true
        this.unsubscribe = this.getRequiredByPostion().pipe(mergeMap(function (res) {
            var formatedResponse = _this.requestUtil.formatedActivitityById(res);
            return of(formatedResponse);
        })).subscribe(function (res) {
            console.log(res);
        });
    };
    RequiredComptencyCardComponent.prototype.getRequiredByPostion = function () {
        var reqBody = {
            filter: {
                "isDetail": true
            }
        };
        return this.requiredCompetencyService.getRequiredCompetencyById(reqBody);
    };
    RequiredComptencyCardComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.unsubscribe();
    };
    RequiredComptencyCardComponent.ctorParameters = function () { return [
        { type: RequiredCompetencyService }
    ]; };
    RequiredComptencyCardComponent = __decorate([
        Component({
            selector: 'lib-required-comptency-card',
            template: "<ng-container *ngFor=\"let competency of competencyData\"\r\n  ><div class=\"card-container\">\r\n    <mat-accordion>\r\n      <mat-expansion-panel\r\n        class=\"w-full panel\"\r\n        (opened)=\"panelOpenState = true\"\r\n        (closed)=\"panelOpenState = false\"\r\n      >\r\n        <mat-expansion-panel-header\r\n          class=\"flex-between items-center panel-header w-full\"\r\n          collapsedHeight=\"auto\"\r\n          expandedHeight=\"auto\"\r\n        >\r\n          <mat-panel-description class=\"panel-header-description\">\r\n            <ng-container *ngIf=\"competency?.title\">\r\n              <div class=\"title\">{{ competency?.title }}</div>\r\n            </ng-container>\r\n          </mat-panel-description>\r\n          <!-- <div class=\"level mb-0 pointer-events\">\r\n            <mat-icon [ngClass]=\"{ arrowReverse: panelOpenState }\"\r\n              >keyboard_arrow_down</mat-icon\r\n            >\r\n          </div> -->\r\n        </mat-expansion-panel-header>\r\n\r\n        <lib-app-loader *ngIf=\"loading === true\"></lib-app-loader>\r\n        <div class=\"logs\">\r\n          <span class=\"log-title\">Levels:</span>\r\n          <ng-container *ngFor=\"let log of logs\">\r\n            <div class=\"log\">\r\n              <ng-container *ngIf=\"log.header\">\r\n                <span class=\"flex-1 log-items\"\r\n                  >{{ log.index }} : {{ log.header }}</span\r\n                >\r\n              </ng-container>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n  </div>\r\n</ng-container>\r\n",
            styles: [":root{font-size:16px;--blue:#1C5D95;--yellow:#FFF4DF;--teal:#A4DFCA;--black:#000000;--white:#ffffff;--light-gray:#eff6fc;--grey-100:#DFEDF9;--gray-200:#8E8E8E;--gray-300:#989898;--gray-400:#808080;--grey-500:#919191;--yellow-500:#FFFBB0;--blue-500:#7CB5E6}.button-primary{background-color:var(--blue)!important;border-radius:50px;gap:8px;color:var(--white)!important;border:none}.mat-primary-background{padding:9px 40px;width:310px;cursor:pointer}.card-container{margin:15px 2px;padding:16px 10px 20px 14px;box-shadow:0 0 4px rgba(0,0,0,.15);border-radius:10px;background:#fff}.title{font-size:16px;line-height:19px;letter-spacing:-.02em;color:#000}.description{font-size:14px;line-height:17px;letter-spacing:-.02em}.start-btn{background-color:#1c5d95!important;border-radius:50px;padding:8px 32px;gap:8px;font-size:16px;line-height:19px;color:#fff!important;margin-top:10px;border:none}.proficiency{color:#1c5d96;font-size:20px;cursor:pointer;margin-top:15px}.log-title{font-size:14px;line-height:24px;letter-spacing:-.02em;color:#1c5d95}.log{border-bottom:1px solid #ddd;padding-bottom:9px;margin-top:10px}.logs{padding:5px}.log-items{font-size:16px;line-height:19px;letter-spacing:-.02em;color:#000}::ng-deep .mat-expansion-panel-header{padding:0 5px!important}:host ::ng-deep .mat-expansion-panel-header:hover{background:rgba(255,255,255,.98)!important}:host ::ng-deep .mat-content{display:flex!important}.level{place-self:flex-end}"]
        })
    ], RequiredComptencyCardComponent);
    return RequiredComptencyCardComponent;
}());

/**
 * GainedService to extend Data Service
 *
 * @author Vishali Sakar <vishali.sakar@tarento.com>
 */
var GainedService = /** @class */ (function (_super) {
    __extends(GainedService, _super);
    function GainedService(http) {
        return _super.call(this, http) || this;
    }
    /**
     * for making getall Gained api calls
     *
     */
    GainedService.prototype.fetchUserPassbook = function (reqBody) {
        var httpOptions = {
            url: urlConfig.getUserPassbook(),
            data: reqBody
        };
        return this.post(httpOptions);
    };
    GainedService.prototype.fetchAllEntity = function (reqBody) {
        var httpOptions = {
            url: urlConfig.getAllEntity(),
            data: reqBody
        };
        return this.post(httpOptions);
    };
    GainedService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    GainedService.ngInjectableDef = ɵɵdefineInjectable({ factory: function GainedService_Factory() { return new GainedService(ɵɵinject(HttpClient)); }, token: GainedService, providedIn: "root" });
    GainedService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], GainedService);
    return GainedService;
}(DataService));

var GainedComptencyCardComponent = /** @class */ (function () {
    function GainedComptencyCardComponent(gainedService) {
        this.gainedService = gainedService;
        this.loading = false;
        this.panelOpenState = false;
        this.requestUtil = new RequestUtil();
    }
    GainedComptencyCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        var allEntity = this.getAllEntity();
        var userPassbook = this.getAllUserPassbook();
        forkJoin([allEntity, userPassbook]).subscribe(function (res) {
            var response = _this.requestUtil.formatedGainedCompetency(res[0].result.response, res[1].result.content);
            _this.gainedproficencyData = response;
            _this.loading = false;
        });
    };
    GainedComptencyCardComponent.prototype.getAllUserPassbook = function () {
        var reqBody = {
            "request": {
                "typeName": "competency"
            }
        };
        return this.gainedService.fetchUserPassbook(reqBody);
    };
    GainedComptencyCardComponent.prototype.getAllEntity = function () {
        var reqBody = {
            "search": {
                "type": "Competency"
            }
        };
        return this.gainedService.fetchAllEntity(reqBody);
    };
    GainedComptencyCardComponent.ctorParameters = function () { return [
        { type: GainedService }
    ]; };
    GainedComptencyCardComponent = __decorate([
        Component({
            selector: 'lib-gained-comptency-card',
            template: "<lib-app-loader *ngIf=\"loading === true\"></lib-app-loader>\r\n<ng-container *ngFor=\"let proficency of gainedproficencyData\">\r\n<div class=\"card-container example-container container-balanced\">\r\n    <!-- <div class=\"date justify-end mr-2\">\r\n        {{date}}\r\n    </div> -->\r\n    <ng-container *ngIf=\"proficency?.title\">\r\n        <div class=\"title\">{{proficency?.title}}</div>\r\n    </ng-container>\r\n\r\n    <div class=\"levelsTitle\">\r\n        Levels:\r\n    </div>\r\n    <mat-accordion>\r\n        <mat-expansion-panel class=\"w-full panel\" hideToggle (opened)=\"panelOpenState = true\"\r\n            (closed)=\"panelOpenState = false\">\r\n            <mat-expansion-panel-header class=\"flex-between items-center panel-header w-full\">\r\n                <mat-panel-description class=\"panel-header-description\">\r\n                    <ng-container *ngFor=\"let proficiency of proficency?.proficiencyLevels\">\r\n                        <ng-container *ngIf=\"proficiency.selected; else addLevel\">\r\n                            <div class=\"level mb-1\" [ngStyle]=\"{'background-color': proficiency.color}\">\r\n                                {{proficiency?.displayLevel}}\r\n                            </div>\r\n                        </ng-container>\r\n                        <ng-template #addLevel>\r\n                            <div (click)=\"$event.stopPropagation();\" class=\"level mb-1 pointer-events\">\r\n                                {{proficiency?.displayLevel}}\r\n                            </div>\r\n                        </ng-template>\r\n                    </ng-container>\r\n                    <div class=\"level mb-1 pointer-events\">\r\n                        <mat-icon [ngClass]=\"{'arrowReverse': panelOpenState }\">keyboard_arrow_down</mat-icon>\r\n                    </div>\r\n                </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            <div>\r\n                <span class=\"log-header\">Log:</span>\r\n                <ng-container *ngFor=\"let log of proficency?.logs; let logIndex = index\">\r\n                    <div class=\"log\">\r\n                        <div class=\"flex\">\r\n                            <ng-container *ngIf=\"log.header\">\r\n                                <span class=\"flex-1\">Level {{log.level}}: {{log.header}}</span>\r\n                                <span class=\"log-date mr-2\">{{log?.date| date:'dd/MM/yyyy'}}</span>\r\n                            </ng-container>\r\n                        </div>\r\n                        <ng-container *ngIf=\"log.description\">\r\n                            <div class=\"mt-2\" [ngClass]=\"{'hideContent': !log.keyboardArrowUp}\">{{log.description}}</div>\r\n                            <div class=\"justify-end\">\r\n                                <mat-icon (click)=\"log.keyboardArrowUp = !log.keyboardArrowUp\" class=\"mr-3 pointer-events\" [ngClass]=\"{'arrowReverse': log.keyboardArrowUp }\">keyboard_arrow_down</mat-icon>\r\n                            </div>\r\n                        </ng-container>\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n        </mat-expansion-panel>\r\n    </mat-accordion>\r\n</div>\r\n</ng-container>",
            styles: [":root{font-size:16px;--blue:#1C5D95;--yellow:#FFF4DF;--teal:#A4DFCA;--black:#000000;--white:#ffffff;--light-gray:#eff6fc;--grey-100:#DFEDF9;--gray-200:#8E8E8E;--gray-300:#989898;--gray-400:#808080;--grey-500:#919191;--yellow-500:#FFFBB0;--blue-500:#7CB5E6}.button-primary{background-color:var(--blue)!important;border-radius:50px;gap:8px;color:var(--white)!important;border:none}.mat-primary-background{padding:9px 40px;width:310px;cursor:pointer}.date{font-size:12px;line-height:14px;letter-spacing:-.02em;color:var(--gray-300)}.justify-end{display:flex;justify-content:flex-end}.card-container{margin:15px 2px;padding:14px 10px 20px 14px;box-shadow:0 0 4px rgba(0,0,0,.15);border-radius:10px;background:var(--white)}.title{font-size:24px;line-height:29px;letter-spacing:-.02em;margin-bottom:18px}.levelsTitle{font-size:14px;line-height:24px;letter-spacing:-.02em;color:var(--black)}.panel{box-shadow:0 0!important;padding:1px 3px 1px 0;pointer-events:none}.panel-header{padding:0!important;background:0 0!important}.panel-header-description{margin:0!important;padding:1px}.pointer-events{pointer-events:all;cursor:pointer}.arrowReverse{transform:rotateX(180deg)}.level{width:47px;max-width:16.6%;height:36px;display:flex;justify-content:center;align-items:center;box-shadow:0 0 2.17333px rgba(0,0,0,.2509803922)}.log-header{font-size:14px;line-height:24px;letter-spacing:-.02em;color:var(--black)}.log{font-style:italic;font-size:14px;line-height:16px;letter-spacing:-.02em;color:var(--gray-400);border-bottom:1px solid #ddd;padding-bottom:9px;margin-top:10px}.log-date{font-style:normal;font-size:12px;line-height:14px;letter-spacing:-.02em;color:var(--gray-400)}::ng-deep .mat-expansion-panel-body{padding:0!important}:host ::ng-deep .mat-content{display:unset!important}.hideContent{display:none}"]
        })
    ], GainedComptencyCardComponent);
    return GainedComptencyCardComponent;
}());

var CompetencyDashboardComponent = /** @class */ (function () {
    function CompetencyDashboardComponent(location) {
        this.location = location;
        this.stateChange = new EventEmitter();
        this.tabIndex = 0;
    }
    CompetencyDashboardComponent.prototype.ngOnInit = function () {
    };
    CompetencyDashboardComponent.prototype.navigateBack = function () {
        this.location.back();
    };
    CompetencyDashboardComponent.prototype.changeTab = function (event) {
        this.tabIndex = event.index;
    };
    CompetencyDashboardComponent.prototype.startSelfAssessment = function () {
        this.stateChange.emit({ 'navigation': true });
    };
    CompetencyDashboardComponent.ctorParameters = function () { return [
        { type: Location }
    ]; };
    __decorate([
        Output()
    ], CompetencyDashboardComponent.prototype, "stateChange", void 0);
    CompetencyDashboardComponent = __decorate([
        Component({
            selector: 'lib-competency-dashboard',
            template: "<div class=\"content\">\r\n  <mat-icon (click)=\"navigateBack()\" class=\"cursor-pointer mb-3\">chevron_left</mat-icon>\r\n\r\n  <h1 class=\" pl-2 mb-0\">Competency Dashboard</h1>\r\n\r\n  <div class=\"pl-2 tab-container\">\r\n    <!-- <ng-container *ngIf=\"tabIndex === 0\"> -->\r\n      <!-- <div class=\"sortIcon\">\r\n        <img src=\"./projects/competency-ui/assets/images/filter.png\">\r\n      </div>\r\n    </ng-container> -->\r\n    <mat-tab-group [ngClass]=\"{'header-width-icon': tabIndex === 0}\" class=\"remove-border-bottom\"\r\n      animationDuration=\"0ms\" selectedIndex=\"0\" (selectedTabChange)=\"changeTab($event)\">\r\n\r\n        <!-- gained  -->\r\n        <mat-tab label=\"Gained\">\r\n          <div class=\"legend-container\">\r\n            <div class=\"legend legend-blue \"></div>\r\n            <h5>Self Assessment</h5>\r\n            <div class=\"legend legend-yellow\"></div>\r\n            <h5>Course</h5>\r\n            <div class=\"legend legend-green\"></div>\r\n            <h5>Admin added</h5>\r\n          </div>      \r\n            <lib-gained-comptency-card *ngIf=\"tabIndex === 0\"></lib-gained-comptency-card>\r\n        </mat-tab>\r\n     \r\n      <!-- Active Summary -->\r\n      <mat-tab label=\"Activity Summary\" >         \r\n            <lib-active-summary *ngIf=\"tabIndex === 1\"></lib-active-summary>\r\n      </mat-tab>\r\n\r\n       <!-- required -->\r\n       <mat-tab label=\"Required\">\r\n        <div class=\"required-comperencies\">          \r\n            <lib-required-comptency-card *ngIf=\"tabIndex === 2\"></lib-required-comptency-card>\r\n        </div>\r\n        <div class=\"btn-container\">\r\n          <button class=\"btn-start\" (click)=\"startSelfAssessment()\">Start Self Assessment</button>\r\n        </div>\r\n      </mat-tab>\r\n\r\n\r\n\r\n    </mat-tab-group>\r\n\r\n\r\n  </div>\r\n</div>",
            styles: [":root{font-size:16px;--blue:#1C5D95;--yellow:#FFF4DF;--teal:#A4DFCA;--black:#000000;--white:#ffffff;--light-gray:#eff6fc;--grey-100:#DFEDF9;--gray-200:#8E8E8E;--gray-300:#989898;--gray-400:#808080;--grey-500:#919191;--yellow-500:#FFFBB0;--blue-500:#7CB5E6}.button-primary{background-color:var(--blue)!important;border-radius:50px;gap:8px;color:var(--white)!important;border:none}.mat-primary-background{padding:9px 40px;width:310px;cursor:pointer}.content{padding:60px 0 50px;margin:auto}@media only screen and (min-width:960px){.content{max-width:30%;padding:20px 20px 0}}@media only screen and (min-width:1280px){.content{max-width:35%}}@media only screen and (min-width:1920px){.content{max-width:30%}}@media only screen and (min-width:600px) and (max-width:959px){.content{max-width:50%}}.remove-border-bottom .mat-tab-header{border-bottom:none}:host ::ng-deep .remove-border-bottom .mat-tab-header{border-bottom:none!important}::ng-deep .mat-tab-label{padding:0!important;min-width:65px!important;color:var(--gray-200)!important;opacity:1.6!important;font-size:16px!important;margin-right:10px}::ng-deep .mat-tab-label-active{color:var(--blue)!important}:host ::ng-deep .mat-ink-bar{height:3px!important;background:var(--blue)!important;border-radius:5px!important}::ng-deep .theme-igot.day-mode .mat-ink-bar{background-color:var(--blue)!important}.legend-container{display:flex;gap:10px;margin-top:20px;align-items:center;margin-bottom:20px}.legend-container h5{margin:0;font-weight:400;font-size:16px}@media only screen and (max-width:599px){.content{max-width:90%}.legend-container{gap:5px}.legend-container h5{font-size:12px}}.legend-container .legend{min-width:15px;height:15px;background:#dfedf9;border-radius:50%}.legend-container .legend-green{background:var(--teal)}.legend-container .legend-blue{background:#7cb5e6}.legend-container .legend-yellow{background:#fffbb0}.required-comperencies{height:calc(100vh - 270px);overflow:auto}.btn-start{width:311px;height:35px;background:var(--blue);border-radius:50px;border:none;color:var(--white)}.tab-container{display:flex;flex-direction:column;gap:10px}.tab-container .btn-container{display:flex;justify-content:center}"]
        })
    ], CompetencyDashboardComponent);
    return CompetencyDashboardComponent;
}());

/**
 * ActiveSummaryService to extend Data Service
 *
 * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
 */
var ActiveSummaryService = /** @class */ (function (_super) {
    __extends(ActiveSummaryService, _super);
    function ActiveSummaryService(http) {
        return _super.call(this, http) || this;
    }
    /**
    * for making getall activity api calls
    *
    */
    ActiveSummaryService.prototype.getActivityById = function (reqBody) {
        // console.log('calling getActivityById>>')
        var httpOptions = {
            url: urlConfig.getEntityById(reqBody.id),
            data: reqBody
        };
        // console.log('reqBody',httpOptions)
        return this.post(httpOptions);
    };
    ActiveSummaryService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    ActiveSummaryService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ActiveSummaryService_Factory() { return new ActiveSummaryService(ɵɵinject(HttpClient)); }, token: ActiveSummaryService, providedIn: "root" });
    ActiveSummaryService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], ActiveSummaryService);
    return ActiveSummaryService;
}(DataService));

var ActiveSummaryComponent = /** @class */ (function () {
    function ActiveSummaryComponent(activeSummaryService, configService) {
        this.activeSummaryService = activeSummaryService;
        this.configService = configService;
        /**
       * Core Module
       *
       * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
       */
        this.panelOpenState = true;
        this.loading = false;
        this.acordianLoading = false;
        this.requestUtil = new RequestUtil();
    }
    ActiveSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.unsubscribe = this.getActivityByRole().pipe(mergeMap(function (res) {
            var formatedResponse = _this.requestUtil.formatedActivitityByPostion(res);
            return of(formatedResponse);
        })).subscribe(function (res) {
            _this.loading = false;
            _this.roleactivitySummaries = res;
        });
        this.profileData = JSON.parse(this.configService.getConfig()).profileData[0].designation;
    };
    ActiveSummaryComponent.prototype.getActivityByRole = function () {
        var reqBody = {
            filter: {
                "isDetail": true
            },
            id: this.profileData === 'AWW' ? 95 : 1
        };
        return this.activeSummaryService.getActivityById(reqBody);
    };
    ActiveSummaryComponent.prototype.getActivityByRoleId = function (id) {
        var _this = this;
        this.panelOpenState = true;
        this.acordianLoading = true;
        var index = findIndex(this.roleactivitySummaries, { 'id': id });
        this.roleactivitySummaries[index]['activities'] = [];
        this.getEntityById(id).pipe(mergeMap(function (res) {
            var respone = _this.requestUtil.formatedActivitityByRoleId(res);
            _this.roleactivitySummaries[index]['activities'] = respone;
            var cidArr = map(_this.roleactivitySummaries[index]['activities'], 'cid');
            var calls = [];
            forEach$1(cidArr, function (value) {
                calls.push(_this.getEntityById(value));
            });
            _this.acordianLoading = false;
            return forkJoin.apply(void 0, __spread(calls));
        })).subscribe(function (res) {
            var response = _this.requestUtil.formatedCompetency(res);
            _this.roleactivitySummaries[index]['activities'] = values(merge(keyBy(response, 'cid'), keyBy(_this.roleactivitySummaries[index]['activities'], 'cid')));
        });
    };
    ActiveSummaryComponent.prototype.getEntityById = function (id) {
        var reqBody = {
            filter: {
                "isDetail": true
            },
            id: id
        };
        return this.activeSummaryService.getActivityById(reqBody);
    };
    ActiveSummaryComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.unsubscribe();
    };
    ActiveSummaryComponent.ctorParameters = function () { return [
        { type: ActiveSummaryService },
        { type: ConfigService }
    ]; };
    ActiveSummaryComponent = __decorate([
        Component({
            selector: 'lib-active-summary',
            template: "<lib-app-loader *ngIf=\"loading === true\"></lib-app-loader>\r\n<ng-container *ngFor=\"let role of roleactivitySummaries\">\r\n  <div class=\"\">\r\n    <mat-accordion>\r\n      <mat-expansion-panel\r\n        class=\"w-full panel r\"\r\n        (opened)=\"getActivityByRoleId(role.id)\"\r\n        (closed)=\"panelOpenState = false\"\r\n      >\r\n        <mat-expansion-panel-header\r\n          class=\"card-containe flex-between items-center panel-header w-full\"\r\n          collapsedHeight=\"auto\"\r\n          expandedHeight=\"auto\"\r\n        >\r\n          <mat-panel-description class=\"panel-header-description\">\r\n            <ng-container *ngIf=\"role?.roles\">\r\n              <div class=\"title\">{{ role?.roles }}</div>\r\n            </ng-container>\r\n          </mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n        <lib-app-loader *ngIf=\"acordianLoading === true\"></lib-app-loader>\r\n        <div class=\"expand-container\" *ngIf=\"roleactivitySummaries.length>0\">\r\n          <ng-container\r\n            *ngFor=\"let activity of role?.activities; let i = index\"\r\n          >\r\n            <div class=\"activity-title\">\r\n              {{ i + 1 }}.{{ activity.title }}\r\n            </div>\r\n            <div class=\"competency-container\">\r\n              <div class=\"competency-title\">{{ activity.competency }}</div>\r\n              <div class=\"level\">\r\n                <ng-container *ngFor=\"let level of activity.levels\">\r\n                  {{ level }}\r\n                </ng-container>\r\n              </div>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n   \r\n  </div>\r\n</ng-container>\r\n",
            styles: [":root{font-size:16px;--blue:#1C5D95;--yellow:#FFF4DF;--teal:#A4DFCA;--black:#000000;--white:#ffffff;--light-gray:#eff6fc;--grey-100:#DFEDF9;--gray-200:#8E8E8E;--gray-300:#989898;--gray-400:#808080;--grey-500:#919191;--yellow-500:#FFFBB0;--blue-500:#7CB5E6}.button-primary{background-color:var(--blue)!important;border-radius:50px;gap:8px;color:var(--white)!important;border:none}.mat-primary-background{padding:9px 40px;width:310px;cursor:pointer}.card-container{margin:15px 2px;padding:16px 10px 20px 14px;box-shadow:0 0 4px rgba(0,0,0,.15);border-radius:10px;background:var(--light-gray)!important}.spinner-loading{display:flex;justify-content:center}.title{font-size:16px;line-height:19px;letter-spacing:-.02em;color:var(--blue)}.icon-down{place-self:flex-end;color:var(--blue)!important}:host ::ng-deep .mat-expansion-panel{margin:10px 0;height:auto}:host ::ng-deep .mat-expansion-panel-header:hover{background:#eff6fc!important}:host ::ng-deep .mat-expansion-panel-header{padding:15px!important;background-color:var(--light-gray)!important;border-radius:10px!important}:host ::ng-deep .mat-expansion-indicator:after{color:var(--blue)!important}.activity-title{font-size:24px;line-height:28px;letter-spacing:-.02em;color:var(--black)}.competency-container{background:var(--white);box-shadow:0 0 4px rgba(0,0,0,.15);border-radius:10px;padding:10px;margin:18px 0 15px}.competency-container .competency-title{font-size:20px;line-height:25px;letter-spacing:-.02em;color:var(--black);margin-bottom:20px}.competency-container .level{font-size:24px;line-height:24px;letter-spacing:-.02em;color:var(--blue)}.expand-container{padding:15px 15px 0}"]
        })
    ], ActiveSummaryComponent);
    return ActiveSummaryComponent;
}());

var CompetencyModule = /** @class */ (function () {
    function CompetencyModule() {
    }
    CompetencyModule = __decorate([
        NgModule({
            declarations: [
                RequiredComptencyCardComponent,
                GainedComptencyCardComponent,
                CompetencyDashboardComponent,
                ActiveSummaryComponent
            ],
            imports: [
                CommonModule,
                MatTabsModule,
                MatIconModule,
                MatExpansionModule,
                HttpClientModule,
                CoreModule
            ],
            exports: [RequiredComptencyCardComponent,
                GainedComptencyCardComponent,
                CompetencyDashboardComponent,
                ActiveSummaryComponent
            ]
        })
    ], CompetencyModule);
    return CompetencyModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { CompetencyDashboardComponent, CompetencyModule, GainedComptencyCardComponent, RequestUtil, RequiredComptencyCardComponent, RequiredCompetencyService as ɵa, GainedService as ɵb, ActiveSummaryComponent as ɵc, ActiveSummaryService as ɵd };
//# sourceMappingURL=aastrika-comptency-competency.js.map
