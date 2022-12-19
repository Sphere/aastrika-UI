(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('@angular/material'), require('@angular/common/http'), require('rxjs'), require('rxjs/operators'), require('lodash'), require('@aastrika/comptency/core'), require('lodash-es'), require('@aastrika/comptency/entry-module')) :
    typeof define === 'function' && define.amd ? define('@aastrika/comptency', ['exports', '@angular/core', '@angular/common', '@angular/router', '@angular/material', '@angular/common/http', 'rxjs', 'rxjs/operators', 'lodash', '@aastrika/comptency/core', 'lodash-es', '@aastrika/comptency/entry-module'], factory) :
    (global = global || self, factory((global.aastrika = global.aastrika || {}, global.aastrika.comptency = {}), global.ng.core, global.ng.common, global.ng.router, global.ng.material, global.ng.common.http, global.rxjs, global.rxjs.operators, global.lodash, global.aastrika.comptency.core, global.lodashEs, global.aastrika.comptency['entry-module']));
}(this, (function (exports, core, common, router, material, http, rxjs, operators, lodash, core$1, lodashEs, entryModule) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var SlefAssessmentEntryComponent = /** @class */ (function () {
        function SlefAssessmentEntryComponent(router) {
            this.router = router;
            this.stateChange = new core.EventEmitter();
        }
        SlefAssessmentEntryComponent.prototype.ngOnInit = function () {
        };
        SlefAssessmentEntryComponent.prototype.navigateTo = function () {
            this.stateChange.emit({ 'navigation': true });
        };
        SlefAssessmentEntryComponent.ctorParameters = function () { return [
            { type: router.Router }
        ]; };
        __decorate([
            core.Output()
        ], SlefAssessmentEntryComponent.prototype, "stateChange", void 0);
        SlefAssessmentEntryComponent = __decorate([
            core.Component({
                selector: 'lib-slef-assessment-entry',
                template: "<button class=\"mat-primary-background \"\r\n  (click)=\"navigateTo()\"> Self Assessment\r\n</button>",
                styles: [":root{font-size:16px;--blue:#1C5D95;--yellow:#FFF4DF;--teal:#A4DFCA;--black:#000000;--white:#ffffff;--light-gray:#eff6fc;--grey-100:#DFEDF9;--gray-200:#8E8E8E;--gray-300:#989898;--gray-400:#808080;--grey-500:#919191;--yellow-500:#FFFBB0;--blue-500:#7CB5E6}.button-primary{background-color:var(--blue)!important;border-radius:50px;gap:8px;color:var(--white)!important;border:none}.mat-primary-background{padding:9px 40px;background:#1c5d95!important;border-radius:50px;color:#fff;border:none;gap:8px;width:310px;cursor:pointer}"]
            })
        ], SlefAssessmentEntryComponent);
        return SlefAssessmentEntryComponent;
    }());

    var CompetencyEntryComponent = /** @class */ (function () {
        function CompetencyEntryComponent() {
            this.stateChange = new core.EventEmitter();
        }
        CompetencyEntryComponent.prototype.ngOnInit = function () {
        };
        CompetencyEntryComponent.prototype.navigateTo = function () {
            this.stateChange.emit({ 'navigation': true });
        };
        __decorate([
            core.Output()
        ], CompetencyEntryComponent.prototype, "stateChange", void 0);
        CompetencyEntryComponent = __decorate([
            core.Component({
                selector: 'lib-competency-entry',
                template: "<button class=\"mat-primary-background \"\r\n  (click)=\"navigateTo()\"> Competency Dashboard\r\n</button>",
                styles: [":root{font-size:16px;--blue:#1C5D95;--yellow:#FFF4DF;--teal:#A4DFCA;--black:#000000;--white:#ffffff;--light-gray:#eff6fc;--grey-100:#DFEDF9;--gray-200:#8E8E8E;--gray-300:#989898;--gray-400:#808080;--grey-500:#919191;--yellow-500:#FFFBB0;--blue-500:#7CB5E6}.button-primary{background-color:var(--blue)!important;border-radius:50px;gap:8px;color:var(--white)!important;border:none}.mat-primary-background{padding:9px 40px;background:#1c5d95!important;border-radius:50px;color:#fff;border:none;gap:8px;width:310px;cursor:pointer}"]
            })
        ], CompetencyEntryComponent);
        return CompetencyEntryComponent;
    }());

    var ConfigurationContext = /** @class */ (function () {
        function ConfigurationContext() {
        }
        return ConfigurationContext;
    }());

    var EntryModule = /** @class */ (function () {
        function EntryModule() {
        }
        EntryModule_1 = EntryModule;
        /**
       * Take the config from consuming apps
       *
       * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
       */
        EntryModule.forRoot = function (configContext) {
            console.log("Preparing to handle configuration context.");
            console.log('config data ------', configContext.config);
            return {
                ngModule: EntryModule_1,
                providers: [
                    { provide: ConfigurationContext, useValue: configContext.config }
                ]
            };
        };
        var EntryModule_1;
        EntryModule = EntryModule_1 = __decorate([
            core.NgModule({
                declarations: [SlefAssessmentEntryComponent, CompetencyEntryComponent,],
                imports: [
                    common.CommonModule,
                    router.RouterModule,
                    material.MatIconModule,
                ],
                exports: [
                    SlefAssessmentEntryComponent,
                    CompetencyEntryComponent,
                ],
                providers: []
            })
        ], EntryModule);
        return EntryModule;
    }());

    var SelfAssessmentCardComponent = /** @class */ (function () {
        function SelfAssessmentCardComponent() {
        }
        SelfAssessmentCardComponent.prototype.ngOnInit = function () {
        };
        __decorate([
            core.Input()
        ], SelfAssessmentCardComponent.prototype, "cardData", void 0);
        SelfAssessmentCardComponent = __decorate([
            core.Component({
                selector: 'lib-self-assessment-card',
                template: "<div class=\"card_box\">\r\n  <ng-container *ngIf=\"cardData?.title\">\r\n    <div class=\"title\">{{ cardData?.title }}</div>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"cardData?.description\">\r\n    <div class=\"description\">{{ cardData?.description }}</div>\r\n  </ng-container>\r\n\r\n  <button mat-button class=\"startBtn\">Start</button>\r\n</div>\r\n",
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
            { type: common.Location }
        ]; };
        SelfAssessmentComponent = __decorate([
            core.Component({
                selector: 'lib-self-assessment',
                template: "<div class=\"content\">\r\n    <mat-icon (click)=\"navigateBack()\" class=\"cursor-pointer\">chevron_left</mat-icon>\r\n  \r\n    <h1 class=\" mb-1 pl-2 \">Self Assessment</h1>\r\n\r\n    <ng-container *ngFor=\"let gainedproficency  of gainedproficencyData\">\r\n        <lib-self-assessment-card [cardData]=\"gainedproficency\"></lib-self-assessment-card>\r\n      </ng-container>\r\n  \r\n  </div>\r\n",
                styles: [".content{padding:60px 20px 50px;margin:auto}@media only screen and (min-width:960px){.content{max-width:30%}}@media only screen and (min-width:1280px){.content{max-width:35%}}@media only screen and (min-width:1920px){.content{max-width:30%}}@media only screen and (min-width:600px) and (max-width:959px){.content{max-width:50%}}@media only screen and (max-width:599px){.content{max-width:90%}}"]
            })
        ], SelfAssessmentComponent);
        return SelfAssessmentComponent;
    }());

    var SelfAssessmentModule = /** @class */ (function () {
        function SelfAssessmentModule() {
        }
        SelfAssessmentModule = __decorate([
            core.NgModule({
                declarations: [SelfAssessmentCardComponent, SelfAssessmentComponent],
                imports: [
                    common.CommonModule,
                    material.MatIconModule,
                ],
                exports: [SelfAssessmentCardComponent, SelfAssessmentComponent]
            })
        ], SelfAssessmentModule);
        return SelfAssessmentModule;
    }());

    var RequestUtil = /** @class */ (function () {
        function RequestUtil() {
            this.formatedActivities = function (data) {
                if (!lodash.isEmpty(data)) {
                    return data;
                }
            };
            this.formatedActivitityByPostion = function (data) {
                if (lodash.get(data, 'result')) {
                    var children = lodash.get(data, 'result.response').children;
                    if (children.length > 0) {
                        var result = lodash.reduce(children, function (result, value) {
                            result.push({
                                'roles': lodash.get(value, 'name'),
                                'id': lodash.get(value, 'id'),
                                'description': lodash.get(value, 'description'),
                            });
                            return result;
                        }, []);
                        return result;
                    }
                }
            };
            this.formatedActivitityByRoleId = function (data) {
                if (lodash.get(data, 'result')) {
                    var children = lodash.get(data, 'result.response').children;
                    if (children.length > 0) {
                        var result = lodash.reduce(children, function (result, value) {
                            result.push({
                                'title': lodash.get(value, 'name'),
                                'cid': lodash.get(value, 'id'),
                                'description': lodash.get(value, 'description')
                            });
                            return result;
                        }, []);
                        return result;
                    }
                }
            };
            this.formatedCompetency = function (data) {
                var result = [];
                lodash.forEach(data, function (data) {
                    if (lodash.get(data, 'result')) {
                        var children = lodash.get(data, 'result.response').children;
                        if (children.length > 0) {
                            lodash.forEach(children, function (value) {
                                result.push({
                                    'competency': lodash.get(value, 'name'),
                                    'id': lodash.get(value, 'id'),
                                    'description': lodash.get(value, 'description'),
                                    'levels': ['Level 4', 'Level 5'],
                                    'cid': lodash.get(data, 'result.response').id
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
            lodash.forEach(entity, function (value) {
                var cid = lodash.get(value, 'id');
                lodash.forEach(passbook, function (passbookValue) {
                    if (passbookValue.competencies.hasOwnProperty(cid)) {
                        var competency = passbookValue.competencies[cid];
                        response.push({
                            'title': lodash.get(competency, 'additionalParams.competencyName'),
                            'logs': _this.acquiredPassbookLogs(lodash.get(competency, 'acquiredDetails')),
                            'proficiencyLevels': _this.acauiredChannelColourCode(lodash.get(competency, 'acquiredDetails'))
                        });
                    }
                });
            });
            return response;
        };
        RequestUtil.prototype.acquiredPassbookLogs = function (acquiredDetails) {
            var response = [];
            if (acquiredDetails.length > 0) {
                lodash.forEach(acquiredDetails, function (value) {
                    response.push({
                        'header': lodash.get(value, 'courseName') ? lodash.get(value, 'courseName') : '',
                        'date': lodash.get(value, 'createdDate'),
                        'description': lodash.get(value, 'additionalParams.description'),
                        'keyboardArrowUp': true,
                        'level': lodash.get(value, 'competencyLevelId')
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
            lodash.forEach(acquiredDetails, function (value) {
                var channel = lodash.get(value, 'acquiredChannel');
                switch (channel) {
                    case 'course': {
                        lodash.forEach(response, function (level) {
                            if (level.displayLevel == lodash.get(value, 'competencyLevelId')) {
                                level.color = '#FFFBB0';
                                level.selected = true;
                            }
                        });
                        break;
                    }
                    case 'selfAssessment': {
                        lodash.forEach(response, function (level) {
                            if (level.displayLevel == lodash.get(value, 'competencyLevelId')) {
                                level.color = '#7CB5E6';
                                level.selected = true;
                            }
                        });
                        break;
                    }
                    case 'admin': {
                        lodash.forEach(response, function (level) {
                            if (level.displayLevel == lodash.get(value, 'competencyLevelId')) {
                                level.color = '#A4DFCA';
                                level.selected = true;
                            }
                        });
                        break;
                    }
                    default: {
                        lodash.forEach(response, function (level) {
                            if (level.displayLevel == lodash.get(value, 'competencyLevelId')) {
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
                url: core$1.urlConfig.getEntityById(3),
                data: reqBody
            };
            console.log('reqBody', httpOptions);
            return this.post(httpOptions);
        };
        RequiredCompetencyService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        RequiredCompetencyService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function RequiredCompetencyService_Factory() { return new RequiredCompetencyService(core.ɵɵinject(http.HttpClient)); }, token: RequiredCompetencyService, providedIn: "root" });
        RequiredCompetencyService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], RequiredCompetencyService);
        return RequiredCompetencyService;
    }(core$1.DataService));

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
            this.unsubscribe = this.getRequiredByPostion().pipe(operators.mergeMap(function (res) {
                var formatedResponse = _this.requestUtil.formatedActivitityById(res);
                return rxjs.of(formatedResponse);
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
            core.Component({
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
                url: core$1.urlConfig.getUserPassbook(),
                data: reqBody
            };
            return this.post(httpOptions);
        };
        GainedService.prototype.fetchAllEntity = function (reqBody) {
            var httpOptions = {
                url: core$1.urlConfig.getAllEntity(),
                data: reqBody
            };
            return this.post(httpOptions);
        };
        GainedService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        GainedService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function GainedService_Factory() { return new GainedService(core.ɵɵinject(http.HttpClient)); }, token: GainedService, providedIn: "root" });
        GainedService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], GainedService);
        return GainedService;
    }(core$1.DataService));

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
            rxjs.forkJoin([allEntity, userPassbook]).subscribe(function (res) {
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
            core.Component({
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
            this.stateChange = new core.EventEmitter();
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
            { type: common.Location }
        ]; };
        __decorate([
            core.Output()
        ], CompetencyDashboardComponent.prototype, "stateChange", void 0);
        CompetencyDashboardComponent = __decorate([
            core.Component({
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
                url: core$1.urlConfig.getEntityById(reqBody.id),
                data: reqBody
            };
            // console.log('reqBody',httpOptions)
            return this.post(httpOptions);
        };
        ActiveSummaryService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        ActiveSummaryService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ActiveSummaryService_Factory() { return new ActiveSummaryService(core.ɵɵinject(http.HttpClient)); }, token: ActiveSummaryService, providedIn: "root" });
        ActiveSummaryService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], ActiveSummaryService);
        return ActiveSummaryService;
    }(core$1.DataService));

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
            this.unsubscribe = this.getActivityByRole().pipe(operators.mergeMap(function (res) {
                var formatedResponse = _this.requestUtil.formatedActivitityByPostion(res);
                return rxjs.of(formatedResponse);
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
            var index = lodashEs.findIndex(this.roleactivitySummaries, { 'id': id });
            this.roleactivitySummaries[index]['activities'] = [];
            this.getEntityById(id).pipe(operators.mergeMap(function (res) {
                var respone = _this.requestUtil.formatedActivitityByRoleId(res);
                _this.roleactivitySummaries[index]['activities'] = respone;
                var cidArr = lodashEs.map(_this.roleactivitySummaries[index]['activities'], 'cid');
                var calls = [];
                lodashEs.forEach(cidArr, function (value) {
                    calls.push(_this.getEntityById(value));
                });
                _this.acordianLoading = false;
                return rxjs.forkJoin.apply(void 0, __spread(calls));
            })).subscribe(function (res) {
                var response = _this.requestUtil.formatedCompetency(res);
                _this.roleactivitySummaries[index]['activities'] = lodashEs.values(lodashEs.merge(lodashEs.keyBy(response, 'cid'), lodashEs.keyBy(_this.roleactivitySummaries[index]['activities'], 'cid')));
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
            { type: entryModule.ConfigService }
        ]; };
        ActiveSummaryComponent = __decorate([
            core.Component({
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
            core.NgModule({
                declarations: [
                    RequiredComptencyCardComponent,
                    GainedComptencyCardComponent,
                    CompetencyDashboardComponent,
                    ActiveSummaryComponent
                ],
                imports: [
                    common.CommonModule,
                    material.MatTabsModule,
                    material.MatIconModule,
                    material.MatExpansionModule,
                    http.HttpClientModule,
                    core$1.CoreModule
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

    exports.CompetencyModule = CompetencyModule;
    exports.EntryModule = EntryModule;
    exports.SelfAssessmentModule = SelfAssessmentModule;
    exports.ɵa = SlefAssessmentEntryComponent;
    exports.ɵb = CompetencyEntryComponent;
    exports.ɵc = SelfAssessmentCardComponent;
    exports.ɵd = SelfAssessmentComponent;
    exports.ɵe = RequiredComptencyCardComponent;
    exports.ɵf = RequiredCompetencyService;
    exports.ɵg = GainedComptencyCardComponent;
    exports.ɵh = GainedService;
    exports.ɵi = CompetencyDashboardComponent;
    exports.ɵj = ActiveSummaryComponent;
    exports.ɵk = ActiveSummaryService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=aastrika-comptency.umd.js.map
