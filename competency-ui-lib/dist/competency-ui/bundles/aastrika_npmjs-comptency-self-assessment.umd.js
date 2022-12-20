(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@aastrika_npmjs/comptency/core'), require('@angular/common/http'), require('rxjs'), require('@angular/common'), require('lodash-es'), require('rxjs/operators'), require('@angular/material')) :
    typeof define === 'function' && define.amd ? define('@aastrika_npmjs/comptency/self-assessment', ['exports', '@angular/core', '@aastrika_npmjs/comptency/core', '@angular/common/http', 'rxjs', '@angular/common', 'lodash-es', 'rxjs/operators', '@angular/material'], factory) :
    (global = global || self, factory((global.aastrika_npmjs = global.aastrika_npmjs || {}, global.aastrika_npmjs.comptency = global.aastrika_npmjs.comptency || {}, global.aastrika_npmjs.comptency['self-assessment'] = {}), global.ng.core, global.aastrika_npmjs.comptency.core, global.ng.common.http, global.rxjs, global.ng.common, global.lodashEs, global.rxjs.operators, global.ng.material));
}(this, (function (exports, core, core$1, http, rxjs, common, lodashEs, operators, material) { 'use strict';

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

    exports.SelfAssessmentCardComponent = SelfAssessmentCardComponent;
    exports.SelfAssessmentComponent = SelfAssessmentComponent;
    exports.SelfAssessmentModule = SelfAssessmentModule;
    exports.ɵa = SelfAssessmentService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=aastrika_npmjs-comptency-self-assessment.umd.js.map
