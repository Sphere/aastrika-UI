(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('@angular/material'), require('rxjs'), require('@aastrika_npmjs/comptency/core'), require('@angular/common/http'), require('lodash-es'), require('rxjs/operators'), require('@aastrika_npmjs/comptency/entry-module')) :
    typeof define === 'function' && define.amd ? define('@aastrika_npmjs/comptency', ['exports', '@angular/core', '@angular/common', '@angular/router', '@angular/material', 'rxjs', '@aastrika_npmjs/comptency/core', '@angular/common/http', 'lodash-es', 'rxjs/operators', '@aastrika_npmjs/comptency/entry-module'], factory) :
    (global = global || self, factory((global.aastrika_npmjs = global.aastrika_npmjs || {}, global.aastrika_npmjs.comptency = {}), global.ng.core, global.ng.common, global.ng.router, global.ng.material, global.rxjs, global.aastrika_npmjs.comptency.core, global.ng.common.http, global.lodashEs, global.rxjs.operators, global.aastrika_npmjs.comptency['entry-module']));
}(this, (function (exports, core, common, router, material, rxjs, core$1, http, lodashEs, operators, entryModule) { 'use strict';

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
                template: "<button class=\"mat-primary-background \"\n  (click)=\"navigateTo()\"> Self Assessment\n</button>",
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
                template: "<button class=\"mat-primary-background \"\n  (click)=\"navigateTo()\"> Competency Dashboard\n</button>",
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

    var ConfigService = /** @class */ (function () {
        function ConfigService(config) {
            this.config = config;
            this.config$ = new rxjs.BehaviorSubject({});
            this._config = this.config$.asObservable();
            if (config) {
                console.log('context log in config service ------ ', config);
                this.setConfig(config);
            }
        }
        ConfigService.prototype.setConfig = function (context) {
            this.config$.next(context);
        };
        ConfigService.prototype.getConfig = function () {
            var config;
            this._config.subscribe(function (res) {
                config = res;
            });
            return config;
        };
        ConfigService.ctorParameters = function () { return [
            { type: ConfigurationContext, decorators: [{ type: core.Optional }, { type: core.Inject, args: ['config',] }] }
        ]; };
        ConfigService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ConfigService_Factory() { return new ConfigService(core.ɵɵinject("config", 8)); }, token: ConfigService, providedIn: "root" });
        ConfigService = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __param(0, core.Optional()), __param(0, core.Inject('config'))
        ], ConfigService);
        return ConfigService;
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
            return {
                ngModule: EntryModule_1,
                providers: [ConfigService,
                    { provide: 'config', useValue: configContext.config }
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

    var SelfAssessmentService = /** @class */ (function (_super) {
        __extends(SelfAssessmentService, _super);
        function SelfAssessmentService(http) {
            var _this = _super.call(this, http) || this;
            _this.startAssessment = new rxjs.BehaviorSubject(undefined);
            _this.startAssessment$ = _this.startAssessment.asObservable();
            return _this;
        }
        /**
         *searching for the content Identifier
         *
         */
        SelfAssessmentService.prototype.getCompetencyCourseIdentifier = function (reqBody) {
            var httpOptions = {
                url: core$1.urlConfig.getSearch(),
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
                url: core$1.urlConfig.getHierachyDetails(identifier, hierarchyType),
            };
            return this.get(httpOptions);
        };
        SelfAssessmentService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        SelfAssessmentService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SelfAssessmentService_Factory() { return new SelfAssessmentService(core.ɵɵinject(http.HttpClient)); }, token: SelfAssessmentService, providedIn: "root" });
        SelfAssessmentService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], SelfAssessmentService);
        return SelfAssessmentService;
    }(core$1.DataService));

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
            core.Input()
        ], SelfAssessmentCardComponent.prototype, "cardData", void 0);
        SelfAssessmentCardComponent = __decorate([
            core.Component({
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
            if (lodashEs.get(data, 'result')) {
                if (lodashEs.get(data, 'result.content').competency === true) {
                    var children = lodashEs.get(data, 'result.content').children;
                    if (children.length > 0) {
                        lodashEs.forEach(children, function (value) {
                            result.push({
                                'title': lodashEs.get(value, 'name'),
                                'courseId': lodashEs.get(value, 'parent'),
                                'contentId': lodashEs.get(value, 'identifier'),
                                'contentType': lodashEs.get(value, 'contentType'),
                                'artifactUrl': lodashEs.get(value, 'artifactUrl'),
                            });
                        });
                        return result;
                    }
                }
            }
        };
        RequestUtil.prototype.formatedCompetencyCourseData = function (data) {
            var result = [];
            if (lodashEs.get(data, 'result')) {
                var content = lodashEs.get(data, 'result.content');
                if (content.length > 0) {
                    lodashEs.forEach(content, function (value) {
                        result.push({
                            'title': lodashEs.get(value, 'name'),
                            'contentId': lodashEs.get(value, 'identifier'),
                            'contentType': lodashEs.get(value, 'contentType'),
                            'subTitle': lodashEs.get(value, 'subTitle'),
                            'description': lodashEs.get(value, 'description'),
                            'creator': lodashEs.get(value, 'creator'),
                            'duration': lodashEs.get(value, 'duration')
                        });
                    });
                    return result;
                }
            }
        };
        RequestUtil.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function RequestUtil_Factory() { return new RequestUtil(); }, token: RequestUtil, providedIn: "root" });
        RequestUtil = __decorate([
            core.Injectable({
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
            this.getCompetencyCourse().pipe(operators.map(function (res) {
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
            { type: common.Location },
            { type: SelfAssessmentService }
        ]; };
        SelfAssessmentComponent = __decorate([
            core.Component({
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
            core.NgModule({
                declarations: [SelfAssessmentCardComponent, SelfAssessmentComponent],
                imports: [
                    common.CommonModule,
                    material.MatIconModule,
                    http.HttpClientModule,
                    core$1.CoreModule
                ],
                exports: [SelfAssessmentCardComponent, SelfAssessmentComponent]
            })
        ], SelfAssessmentModule);
        return SelfAssessmentModule;
    }());

    var RequestUtil$1 = /** @class */ (function () {
        function RequestUtil() {
            this.formatedActivities = function (data) {
                if (!lodashEs.isEmpty(data)) {
                    return data;
                }
            };
            this.formatedActivitityByPostion = function (data) {
                if (lodashEs.get(data, 'result')) {
                    var children = lodashEs.get(data, 'result.response').children;
                    if (children.length > 0) {
                        var result = lodashEs.reduce(children, function (result, value) {
                            result.push({
                                'roles': lodashEs.get(value, 'name'),
                                'id': lodashEs.get(value, 'id'),
                                'description': lodashEs.get(value, 'description'),
                            });
                            return result;
                        }, []);
                        return result;
                    }
                }
            };
            this.formatedActivitityByRoleId = function (data) {
                if (lodashEs.get(data, 'result')) {
                    var children = lodashEs.get(data, 'result.response').children;
                    if (children.length > 0) {
                        var result = lodashEs.reduce(children, function (result, value) {
                            result.push({
                                'title': lodashEs.get(value, 'name'),
                                'cid': lodashEs.get(value, 'id'),
                                'description': lodashEs.get(value, 'description')
                            });
                            return result;
                        }, []);
                        return result;
                    }
                }
            };
            this.formatedCompetency = function (data) {
                var result = [];
                lodashEs.forEach(data, function (data) {
                    if (lodashEs.get(data, 'result')) {
                        var children = lodashEs.get(data, 'result.response').children;
                        if (children.length > 0) {
                            lodashEs.forEach(children, function (value) {
                                result.push({
                                    'competency': lodashEs.get(value, 'name'),
                                    'id': lodashEs.get(value, 'id'),
                                    'description': lodashEs.get(value, 'description'),
                                    'levels': ['Level 4', 'Level 5'],
                                    'cid': lodashEs.get(data, 'result.response').id
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
            lodashEs.forEach(entity, function (value) {
                var cid = lodashEs.get(value, 'id');
                lodashEs.forEach(passbook, function (passbookValue) {
                    if (passbookValue.competencies.hasOwnProperty(cid)) {
                        var competency = passbookValue.competencies[cid];
                        response.push({
                            'title': lodashEs.get(competency, 'additionalParams.competencyName'),
                            'logs': _this.acquiredPassbookLogs(lodashEs.get(competency, 'acquiredDetails')),
                            'proficiencyLevels': _this.acauiredChannelColourCode(lodashEs.get(competency, 'acquiredDetails'))
                        });
                    }
                });
            });
            return response;
        };
        RequestUtil.prototype.acquiredPassbookLogs = function (acquiredDetails) {
            var response = [];
            if (acquiredDetails.length > 0) {
                lodashEs.forEach(acquiredDetails, function (value) {
                    response.push({
                        'header': lodashEs.get(value, 'courseName') ? lodashEs.get(value, 'courseName') : '',
                        'date': lodashEs.get(value, 'createdDate'),
                        'description': lodashEs.get(value, 'additionalParams.description'),
                        'keyboardArrowUp': true,
                        'level': lodashEs.get(value, 'competencyLevelId')
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
            lodashEs.forEach(acquiredDetails, function (value) {
                var channel = lodashEs.get(value, 'acquiredChannel');
                switch (channel) {
                    case 'course': {
                        lodashEs.forEach(response, function (level) {
                            if (level.displayLevel == lodashEs.get(value, 'competencyLevelId')) {
                                level.color = '#FFFBB0';
                                level.selected = true;
                            }
                        });
                        break;
                    }
                    case 'selfAssessment': {
                        lodashEs.forEach(response, function (level) {
                            if (level.displayLevel == lodashEs.get(value, 'competencyLevelId')) {
                                level.color = '#7CB5E6';
                                level.selected = true;
                            }
                        });
                        break;
                    }
                    case 'admin': {
                        lodashEs.forEach(response, function (level) {
                            if (level.displayLevel == lodashEs.get(value, 'competencyLevelId')) {
                                level.color = '#A4DFCA';
                                level.selected = true;
                            }
                        });
                        break;
                    }
                    default: {
                        lodashEs.forEach(response, function (level) {
                            if (level.displayLevel == lodashEs.get(value, 'competencyLevelId')) {
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
            this.requestUtil = new RequestUtil$1();
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
                template: "<ng-container *ngFor=\"let competency of competencyData\"\n  ><div class=\"card-container\">\n    <mat-accordion>\n      <mat-expansion-panel\n        class=\"w-full panel\"\n        (opened)=\"panelOpenState = true\"\n        (closed)=\"panelOpenState = false\"\n      >\n        <mat-expansion-panel-header\n          class=\"flex-between items-center panel-header w-full\"\n          collapsedHeight=\"auto\"\n          expandedHeight=\"auto\"\n        >\n          <mat-panel-description class=\"panel-header-description\">\n            <ng-container *ngIf=\"competency?.title\">\n              <div class=\"title\">{{ competency?.title }}</div>\n            </ng-container>\n          </mat-panel-description>\n          <!-- <div class=\"level mb-0 pointer-events\">\n            <mat-icon [ngClass]=\"{ arrowReverse: panelOpenState }\"\n              >keyboard_arrow_down</mat-icon\n            >\n          </div> -->\n        </mat-expansion-panel-header>\n\n        <lib-app-loader *ngIf=\"loading === true\"></lib-app-loader>\n        <div class=\"logs\">\n          <span class=\"log-title\">Levels:</span>\n          <ng-container *ngFor=\"let log of logs\">\n            <div class=\"log\">\n              <ng-container *ngIf=\"log.header\">\n                <span class=\"flex-1 log-items\"\n                  >{{ log.index }} : {{ log.header }}</span\n                >\n              </ng-container>\n            </div>\n          </ng-container>\n        </div>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </div>\n</ng-container>\n",
                styles: [":root{font-size:16px;--blue:#1C5D95;--yellow:#FFF4DF;--teal:#A4DFCA;--black:#000000;--white:#ffffff;--light-gray:#eff6fc;--grey-100:#DFEDF9;--gray-200:#8E8E8E;--gray-300:#989898;--gray-400:#808080;--grey-500:#919191;--yellow-500:#FFFBB0;--blue-500:#7CB5E6}.button-primary{background-color:var(--blue)!important;border-radius:50px;gap:8px;color:var(--white)!important;border:none}.mat-primary-background{padding:9px 40px;width:310px;cursor:pointer}.card-container{margin:15px 2px;padding:16px 10px 20px 14px;box-shadow:0 0 4px rgba(0,0,0,.15);border-radius:10px;background:#fff}.title{font-size:16px;line-height:19px;letter-spacing:-.02em;color:#000}.description{font-size:14px;line-height:17px;letter-spacing:-.02em}.start-btn{background-color:#1c5d95!important;border-radius:50px;padding:8px 32px;gap:8px;font-size:16px;line-height:19px;color:#fff!important;margin-top:10px;border:none}.proficiency{color:#1c5d96;font-size:20px;cursor:pointer;margin-top:15px}.log-title{font-size:14px;line-height:24px;letter-spacing:-.02em;color:#1c5d95}.log{border-bottom:1px solid #ddd;padding-bottom:9px;margin-top:10px}.logs{padding:5px}.log-items{font-size:16px;line-height:19px;letter-spacing:-.02em;color:#000}::ng-deep .mat-expansion-panel-header{padding:0 5px!important}:host ::ng-deep .mat-expansion-panel-header:hover{background:rgba(255,255,255,.98)!important}:host ::ng-deep .mat-content{display:flex!important}.level{-ms-grid-row-align:flex-end;-ms-grid-column-align:flex-end;place-self:flex-end}"]
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
            this.requestUtil = new RequestUtil$1();
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
                template: "<lib-app-loader *ngIf=\"loading === true\"></lib-app-loader>\n<ng-container *ngFor=\"let proficency of gainedproficencyData\">\n<div class=\"card-container example-container container-balanced\">\n    <!-- <div class=\"date justify-end mr-2\">\n        {{date}}\n    </div> -->\n    <ng-container *ngIf=\"proficency?.title\">\n        <div class=\"title\">{{proficency?.title}}</div>\n    </ng-container>\n\n    <div class=\"levelsTitle\">\n        Levels:\n    </div>\n    <mat-accordion>\n        <mat-expansion-panel class=\"w-full panel\" hideToggle (opened)=\"panelOpenState = true\"\n            (closed)=\"panelOpenState = false\">\n            <mat-expansion-panel-header class=\"flex-between items-center panel-header w-full\">\n                <mat-panel-description class=\"panel-header-description\">\n                    <ng-container *ngFor=\"let proficiency of proficency?.proficiencyLevels\">\n                        <ng-container *ngIf=\"proficiency.selected; else addLevel\">\n                            <div class=\"level mb-1\" [ngStyle]=\"{'background-color': proficiency.color}\">\n                                {{proficiency?.displayLevel}}\n                            </div>\n                        </ng-container>\n                        <ng-template #addLevel>\n                            <div (click)=\"$event.stopPropagation();\" class=\"level mb-1 pointer-events\">\n                                {{proficiency?.displayLevel}}\n                            </div>\n                        </ng-template>\n                    </ng-container>\n                    <div class=\"level mb-1 pointer-events\">\n                        <mat-icon [ngClass]=\"{'arrowReverse': panelOpenState }\">keyboard_arrow_down</mat-icon>\n                    </div>\n                </mat-panel-description>\n            </mat-expansion-panel-header>\n            <div>\n                <span class=\"log-header\">Log:</span>\n                <ng-container *ngFor=\"let log of proficency?.logs; let logIndex = index\">\n                    <div class=\"log\">\n                        <div class=\"flex\">\n                            <ng-container *ngIf=\"log.header\">\n                                <span class=\"flex-1\">Level {{log.level}}: {{log.header}}</span>\n                                <span class=\"log-date mr-2\">{{log?.date| date:'dd/MM/yyyy'}}</span>\n                            </ng-container>\n                        </div>\n                        <ng-container *ngIf=\"log.description\">\n                            <div class=\"mt-2\" [ngClass]=\"{'hideContent': !log.keyboardArrowUp}\">{{log.description}}</div>\n                            <div class=\"justify-end\">\n                                <mat-icon (click)=\"log.keyboardArrowUp = !log.keyboardArrowUp\" class=\"mr-3 pointer-events\" [ngClass]=\"{'arrowReverse': log.keyboardArrowUp }\">keyboard_arrow_down</mat-icon>\n                            </div>\n                        </ng-container>\n                    </div>\n                </ng-container>\n            </div>\n        </mat-expansion-panel>\n    </mat-accordion>\n</div>\n</ng-container>",
                styles: [":root{font-size:16px;--blue:#1C5D95;--yellow:#FFF4DF;--teal:#A4DFCA;--black:#000000;--white:#ffffff;--light-gray:#eff6fc;--grey-100:#DFEDF9;--gray-200:#8E8E8E;--gray-300:#989898;--gray-400:#808080;--grey-500:#919191;--yellow-500:#FFFBB0;--blue-500:#7CB5E6}.button-primary{background-color:var(--blue)!important;border-radius:50px;gap:8px;color:var(--white)!important;border:none}.mat-primary-background{padding:9px 40px;width:310px;cursor:pointer}.date{font-size:12px;line-height:14px;letter-spacing:-.02em;color:var(--gray-300)}.justify-end{display:flex;justify-content:flex-end}.card-container{margin:15px 2px;padding:14px 10px 20px 14px;box-shadow:0 0 4px rgba(0,0,0,.15);border-radius:10px;background:var(--white)}.title{font-size:24px;line-height:29px;letter-spacing:-.02em;margin-bottom:18px}.levelsTitle{font-size:14px;line-height:24px;letter-spacing:-.02em;color:var(--black)}.panel{box-shadow:0 0!important;padding:1px 3px 1px 0;pointer-events:none}.panel-header{padding:0!important;background:0 0!important}.panel-header-description{margin:0!important;padding:1px}.pointer-events{pointer-events:all;cursor:pointer}.arrowReverse{transform:rotateX(180deg)}.level{width:47px;max-width:16.6%;height:36px;display:flex;justify-content:center;align-items:center;box-shadow:0 0 2.17333px #00000040}.log-header{font-size:14px;line-height:24px;letter-spacing:-.02em;color:var(--black)}.log{font-style:italic;font-size:14px;line-height:16px;letter-spacing:-.02em;color:var(--gray-400);border-bottom:1px solid #ddd;padding-bottom:9px;margin-top:10px}.log-date{font-style:normal;font-size:12px;line-height:14px;letter-spacing:-.02em;color:var(--gray-400)}::ng-deep .mat-expansion-panel-body{padding:0!important}:host ::ng-deep .mat-content{display:unset!important}.hideContent{display:none}"]
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
                template: "<div class=\"content\">\n  <mat-icon (click)=\"navigateBack()\" class=\"cursor-pointer mb-3\">chevron_left</mat-icon>\n\n  <h1 class=\" pl-2 mb-0\">Competency Dashboard</h1>\n\n  <div class=\"pl-2 tab-container\">\n    <ng-container *ngIf=\"tabIndex === 0\">\n      <div class=\"sortIcon\">\n        <img src=\"./assets/comptency/images/filter.png\">\n      </div>\n    </ng-container>\n    <mat-tab-group [ngClass]=\"{'header-width-icon': tabIndex === 0}\" class=\"remove-border-bottom\"\n      animationDuration=\"0ms\" selectedIndex=\"0\" (selectedTabChange)=\"changeTab($event)\">\n\n        <!-- gained  -->\n        <mat-tab label=\"Gained\">\n          <div class=\"legend-container\">\n            <div class=\"legend legend-blue \"></div>\n            <h5>Self Assessment</h5>\n            <div class=\"legend legend-yellow\"></div>\n            <h5>Course</h5>\n            <div class=\"legend legend-green\"></div>\n            <h5>Admin added</h5>\n          </div>      \n            <lib-gained-comptency-card *ngIf=\"tabIndex === 0\"></lib-gained-comptency-card>\n        </mat-tab>\n     \n      <!-- Active Summary -->\n      <mat-tab label=\"Activity Summary\" >         \n            <lib-active-summary *ngIf=\"tabIndex === 1\"></lib-active-summary>\n      </mat-tab>\n\n       <!-- required -->\n       <mat-tab label=\"Required\">\n        <div class=\"required-comperencies\">          \n            <lib-required-comptency-card *ngIf=\"tabIndex === 2\"></lib-required-comptency-card>\n        </div>\n        <div class=\"btn-container\">\n          <button class=\"btn-start\" (click)=\"startSelfAssessment()\">Start Self Assessment</button>\n        </div>\n      </mat-tab>\n\n\n\n    </mat-tab-group>\n\n\n  </div>\n</div>",
                styles: [":root{font-size:16px;--blue:#1C5D95;--yellow:#FFF4DF;--teal:#A4DFCA;--black:#000000;--white:#ffffff;--light-gray:#eff6fc;--grey-100:#DFEDF9;--gray-200:#8E8E8E;--gray-300:#989898;--gray-400:#808080;--grey-500:#919191;--yellow-500:#FFFBB0;--blue-500:#7CB5E6}.button-primary{background-color:var(--blue)!important;border-radius:50px;gap:8px;color:var(--white)!important;border:none}.mat-primary-background{padding:9px 40px;width:310px;cursor:pointer}.content{padding:60px 0 50px;margin:auto}@media only screen and (min-width:960px){.content{max-width:30%;padding:20px 20px 0}}@media only screen and (min-width:1280px){.content{max-width:35%}}@media only screen and (min-width:1920px){.content{max-width:30%}}@media only screen and (min-width:600px) and (max-width:959px){.content{max-width:50%}}.remove-border-bottom .mat-tab-header{border-bottom:none}:host ::ng-deep .remove-border-bottom .mat-tab-header{border-bottom:none!important}::ng-deep .mat-tab-label{padding:0!important;min-width:65px!important;color:var(--gray-200)!important;opacity:1.6!important;font-size:16px!important;margin-right:10px}::ng-deep .mat-tab-label-active{color:var(--blue)!important}:host ::ng-deep .mat-ink-bar{height:3px!important;background:var(--blue)!important;border-radius:5px!important}::ng-deep .theme-igot.day-mode .mat-ink-bar{background-color:var(--blue)!important}.legend-container{display:flex;gap:10px;margin-top:20px;align-items:center;margin-bottom:20px}.legend-container h5{margin:0;font-weight:400;font-size:16px}@media only screen and (max-width:599px){.content{max-width:90%}.legend-container{gap:5px}.legend-container h5{font-size:12px}}.legend-container .legend{min-width:15px;height:15px;background:#dfedf9;border-radius:50%}.legend-container .legend-green{background:var(--teal)}.legend-container .legend-blue{background:#7cb5e6}.legend-container .legend-yellow{background:#fffbb0}.required-comperencies{height:calc(100vh - 270px);overflow:auto}.btn-start{width:311px;height:35px;background:var(--blue);border-radius:50px;border:none;color:var(--white)}.tab-container{display:flex;flex-direction:column;gap:10px;position:relative}.tab-container .btn-container{display:flex;justify-content:center}.tab-container .sortIcon{position:absolute;right:0;top:13px;width:20px}.mat-tab-header-sortIcon ::ng-deep .mat-tab-header{width:calc(100% - 25px)}"]
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
            this.requestUtil = new RequestUtil$1();
            this.profileData = this.configService.getConfig().profileData[0].designation;
        }
        ActiveSummaryComponent.prototype.ngOnInit = function () {
            var _this = this;
            setTimeout(function () {
                _this.loading = true;
                _this.unsubscribe = _this.getActivityByRole().pipe(operators.mergeMap(function (res) {
                    var formatedResponse = _this.requestUtil.formatedActivitityByPostion(res);
                    return rxjs.of(formatedResponse);
                })).subscribe(function (res) {
                    _this.loading = false;
                    _this.roleactivitySummaries = res;
                });
            }, 500);
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
                template: "<lib-app-loader *ngIf=\"loading === true\"></lib-app-loader>\n<ng-container *ngFor=\"let role of roleactivitySummaries\">\n  <div class=\"\">\n    <mat-accordion>\n      <mat-expansion-panel\n        class=\"w-full panel r\"\n        (opened)=\"getActivityByRoleId(role.id)\"\n        (closed)=\"panelOpenState = false\"\n      >\n        <mat-expansion-panel-header\n          class=\"card-containe flex-between items-center panel-header w-full\"\n          collapsedHeight=\"auto\"\n          expandedHeight=\"auto\"\n        >\n          <mat-panel-description class=\"panel-header-description\">\n            <ng-container *ngIf=\"role?.roles\">\n              <div class=\"title\">{{ role?.roles }}</div>\n            </ng-container>\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <lib-app-loader *ngIf=\"acordianLoading === true\"></lib-app-loader>\n        <div class=\"expand-container\" *ngIf=\"roleactivitySummaries.length>0\">\n          <ng-container\n            *ngFor=\"let activity of role?.activities; let i = index\"\n          >\n            <div class=\"activity-title\">\n              {{ i + 1 }}.{{ activity.title }}\n            </div>\n            <div class=\"competency-container\">\n              <div class=\"competency-title\">{{ activity.competency }}</div>\n              <div class=\"level\">\n                <ng-container *ngFor=\"let level of activity.levels\">\n                  {{ level }}\n                </ng-container>\n              </div>\n            </div>\n          </ng-container>\n        </div>\n      </mat-expansion-panel>\n    </mat-accordion>\n   \n  </div>\n</ng-container>\n",
                styles: [":root{font-size:16px;--blue:#1C5D95;--yellow:#FFF4DF;--teal:#A4DFCA;--black:#000000;--white:#ffffff;--light-gray:#eff6fc;--grey-100:#DFEDF9;--gray-200:#8E8E8E;--gray-300:#989898;--gray-400:#808080;--grey-500:#919191;--yellow-500:#FFFBB0;--blue-500:#7CB5E6}.button-primary{background-color:var(--blue)!important;border-radius:50px;gap:8px;color:var(--white)!important;border:none}.mat-primary-background{padding:9px 40px;width:310px;cursor:pointer}.card-container{margin:15px 2px;padding:16px 10px 20px 14px;box-shadow:0 0 4px rgba(0,0,0,.15);border-radius:10px;background:var(--light-gray)!important}.spinner-loading{display:flex;justify-content:center}.title{font-size:16px;line-height:19px;letter-spacing:-.02em;color:var(--blue)}.icon-down{-ms-grid-row-align:flex-end;-ms-grid-column-align:flex-end;place-self:flex-end;color:var(--blue)!important}:host ::ng-deep .mat-expansion-panel{margin:10px 0;height:auto}:host ::ng-deep .mat-expansion-panel-header:hover{background:#eff6fc!important}:host ::ng-deep .mat-expansion-panel-header{padding:15px!important;background-color:var(--light-gray)!important;border-radius:10px!important}:host ::ng-deep .mat-expansion-indicator:after{color:var(--blue)!important}.activity-title{font-size:24px;line-height:28px;letter-spacing:-.02em;color:var(--black)}.competency-container{background:var(--white);box-shadow:0 0 4px rgba(0,0,0,.15);border-radius:10px;padding:10px;margin:18px 0 15px}.competency-container .competency-title{font-size:20px;line-height:25px;letter-spacing:-.02em;color:var(--black);margin-bottom:20px}.competency-container .level{font-size:24px;line-height:24px;letter-spacing:-.02em;color:var(--blue)}.expand-container{padding:15px 15px 0}"]
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
    exports.ɵc = ConfigService;
    exports.ɵd = ConfigurationContext;
    exports.ɵe = SelfAssessmentCardComponent;
    exports.ɵf = SelfAssessmentService;
    exports.ɵg = SelfAssessmentComponent;
    exports.ɵh = RequiredComptencyCardComponent;
    exports.ɵi = RequiredCompetencyService;
    exports.ɵj = GainedComptencyCardComponent;
    exports.ɵk = GainedService;
    exports.ɵl = CompetencyDashboardComponent;
    exports.ɵm = ActiveSummaryComponent;
    exports.ɵn = ActiveSummaryService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=aastrika_npmjs-comptency.umd.js.map
