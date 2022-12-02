(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('rxjs/operators'), require('rxjs'), require('lodash-es'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@aastrika/comptency/core', ['exports', '@angular/core', '@angular/common/http', 'rxjs/operators', 'rxjs', 'lodash-es', '@angular/common'], factory) :
    (global = global || self, factory((global.aastrika = global.aastrika || {}, global.aastrika.comptency = global.aastrika.comptency || {}, global.aastrika.comptency.core = {}), global.ng.core, global.ng.common.http, global.rxjs.operators, global.rxjs, global.lodashEs, global.ng.common));
}(this, (function (exports, core, http, operators, rxjs, lodashEs, common) { 'use strict';

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

    var ɵ0 = function () { return "" + urlConfig.host + urlConfig.apiSlug; }, ɵ1 = function () { return "" + urlConfig.host + urlConfig.apiProxy; }, ɵ2 = function (id) { return urlConfig.apiBasePath() + "/entityCompetency/getEntityById/" + id; }, ɵ3 = function () { return urlConfig.apiBasePath() + "/entityCompetency/getAllEntity"; }, ɵ4 = function () { return urlConfig.apiBaseProxy() + "/user/v1/passbook"; };
    /**
     * urlConfig to return the api url
     *
     * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
     */
    var urlConfig = {
        // endpoint configs...!
        // host: 'http://localhost:3002',
        host: 'http://localhost:3000',
        apiSlug: '/apis/protected/v8',
        apiProxy: '/apis/proxies/v8',
        apiBasePath: ɵ0,
        apiBaseProxy: ɵ1,
        getEntityById: ɵ2,
        getAllEntity: ɵ3,
        getUserPassbook: ɵ4,
    };

    /**
     * DataService to make http call
     *
     * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
     */
    var DataService = /** @class */ (function () {
        function DataService(http) {
            this.http = http;
        }
        /**
         * for making get api calls
         *
         * @param requestParam interface
         */
        DataService.prototype.get = function (requestParam) {
            var httpOptions = {
                headers: requestParam.header ? requestParam.header : this.getHeader(),
                params: requestParam.param,
                observe: 'response'
            };
            return this.http.get(this.baseUrl + requestParam.url, httpOptions).pipe(operators.mergeMap(function (_a) {
                var body = _a.body, headers = _a.headers;
                if (body.responseCode !== 'OK') {
                    return rxjs.throwError(body);
                }
                return rxjs.of(body);
            }));
        };
        /**
        * for making get api calls
        *
        * @param requestParam interface
        */
        DataService.prototype.post = function (requestParam) {
            var httpOptions = {
                headers: requestParam.header ? this.getHeader(requestParam.header) : this.getHeader(),
                params: requestParam.param
            };
            // console.log('log in data service',requestParam)
            return this.http.post(requestParam.url, requestParam.data, httpOptions).pipe(operators.mergeMap(function (data) {
                if (data.responseCode === 200 || data.responseCode === 'OK') {
                    return rxjs.of(data);
                }
                else {
                    return rxjs.throwError(data);
                }
            }));
        };
        /**
         * for preparing headers
         */
        DataService.prototype.getHeader = function (headers) {
            var default_headers = {
                'Accept': 'application/json',
            };
            if (headers) {
                return __assign({}, default_headers, headers);
            }
            else {
                return __assign({}, default_headers);
            }
        };
        DataService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        DataService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DataService_Factory() { return new DataService(core.ɵɵinject(http.HttpClient)); }, token: DataService, providedIn: "root" });
        DataService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], DataService);
        return DataService;
    }());

    var AppLoaderComponent = /** @class */ (function () {
        function AppLoaderComponent() {
        }
        AppLoaderComponent.prototype.ngOnInit = function () {
            this.headerMessage = 'Please wait';
            this.loaderMessage = 'We are fetching details';
            if (this.data) {
                this.headerMessage = lodashEs.get(this.data, 'headerMessage') || this.headerMessage;
                this.loaderMessage = lodashEs.get(this.data, 'loaderMessage') || this.loaderMessage;
            }
        };
        __decorate([
            core.Input()
        ], AppLoaderComponent.prototype, "data", void 0);
        AppLoaderComponent = __decorate([
            core.Component({
                selector: 'lib-app-loader',
                template: "<ng-container>\r\n    <div class=\"loader-content\">\r\n         <p class=\"loader\"></p>\r\n    </div>\r\n</ng-container>\r\n  ",
                styles: [".sbt-app-loader-container{background:var(--sbt-compt-bg);width:94%!important;margin:0 auto;border-radius:1.5rem;border:0}.loader-content{display:flex;justify-content:center;align-items:center;margin-top:38px}.message{margin:0;font-size:16px;color:#919191}.loader{width:30px;height:30px;margin:-76px 0 0 -76px;border:4px solid #f3f3f3;border-radius:50%;border-top:4px solid #555;animation:2s linear infinite spin}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}"]
            })
        ], AppLoaderComponent);
        return AppLoaderComponent;
    }());

    /**
     * Core Module
     *
     * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
     */
    var CoreModule = /** @class */ (function () {
        function CoreModule() {
        }
        CoreModule = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule,
                    http.HttpClientModule,
                ],
                declarations: [AppLoaderComponent],
                exports: [AppLoaderComponent],
                providers: [DataService]
            })
        ], CoreModule);
        return CoreModule;
    }());

    exports.AppLoaderComponent = AppLoaderComponent;
    exports.CoreModule = CoreModule;
    exports.DataService = DataService;
    exports.urlConfig = urlConfig;
    exports.ɵ0 = ɵ0;
    exports.ɵ1 = ɵ1;
    exports.ɵ2 = ɵ2;
    exports.ɵ3 = ɵ3;
    exports.ɵ4 = ɵ4;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=aastrika-comptency-core.umd.js.map
