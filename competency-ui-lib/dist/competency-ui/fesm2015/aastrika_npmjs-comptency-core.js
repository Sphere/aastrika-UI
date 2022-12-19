import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, ɵɵinject, Injectable, Input, Component, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { mergeMap } from 'rxjs/operators';
import { throwError, of } from 'rxjs';
import { get } from 'lodash-es';
import { CommonModule } from '@angular/common';

const ɵ0 = () => `${urlConfig.host}${urlConfig.apiSlug}`, ɵ1 = () => `${urlConfig.host}${urlConfig.apiProxy}`, ɵ2 = (id) => `${urlConfig.apiBasePath()}/entityCompetency/getEntityById/${id}`, ɵ3 = () => `${urlConfig.apiBasePath()}/entityCompetency/getAllEntity`, ɵ4 = () => `${urlConfig.apiBaseProxy()}/user/v1/passbook`;
/**
 * urlConfig to return the api url
 *
 * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
 */
const urlConfig = {
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
let DataService = class DataService {
    constructor(http) {
        this.http = http;
    }
    /**
     * for making get api calls
     *
     * @param requestParam interface
     */
    get(requestParam) {
        const httpOptions = {
            headers: requestParam.header ? requestParam.header : this.getHeader(),
            params: requestParam.param,
            observe: 'response'
        };
        return this.http.get(this.baseUrl + requestParam.url, httpOptions).pipe(mergeMap(({ body, headers }) => {
            if (body.responseCode !== 'OK') {
                return throwError(body);
            }
            return of(body);
        }));
    }
    /**
    * for making get api calls
    *
    * @param requestParam interface
    */
    post(requestParam) {
        const httpOptions = {
            headers: requestParam.header ? this.getHeader(requestParam.header) : this.getHeader(),
            params: requestParam.param
        };
        // console.log('log in data service',requestParam)
        return this.http.post(requestParam.url, requestParam.data, httpOptions).pipe(mergeMap((data) => {
            if (data.responseCode === 200 || data.responseCode === 'OK') {
                return of(data);
            }
            else {
                return throwError(data);
            }
        }));
    }
    /**
     * for preparing headers
     */
    getHeader(headers) {
        const default_headers = {
            'Accept': 'application/json',
        };
        if (headers) {
            return Object.assign({}, default_headers, headers);
        }
        else {
            return Object.assign({}, default_headers);
        }
    }
};
DataService.ctorParameters = () => [
    { type: HttpClient }
];
DataService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DataService_Factory() { return new DataService(ɵɵinject(HttpClient)); }, token: DataService, providedIn: "root" });
DataService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], DataService);

let AppLoaderComponent = class AppLoaderComponent {
    constructor() { }
    ngOnInit() {
        this.headerMessage = 'Please wait';
        this.loaderMessage = 'We are fetching details';
        if (this.data) {
            this.headerMessage = get(this.data, 'headerMessage') || this.headerMessage;
            this.loaderMessage = get(this.data, 'loaderMessage') || this.loaderMessage;
        }
    }
};
__decorate([
    Input()
], AppLoaderComponent.prototype, "data", void 0);
AppLoaderComponent = __decorate([
    Component({
        selector: 'lib-app-loader',
        template: "<ng-container>\n    <div class=\"loader-content\">\n         <p class=\"loader\"></p>\n    </div>\n</ng-container>\n  ",
        styles: [".sbt-app-loader-container{background:var(--sbt-compt-bg);width:94%!important;margin:0 auto;border-radius:1.5rem;border:0}.loader-content{display:flex;justify-content:center;align-items:center;margin-top:38px}.message{margin:0;font-size:16px;color:#919191}.loader{width:30px;height:30px;margin:-76px 0 0 -76px;border:4px solid #f3f3f3;border-radius:50%;border-top:4px solid #555;-webkit-animation:2s linear infinite spin;animation:2s linear infinite spin}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}"]
    })
], AppLoaderComponent);

/**
 * Core Module
 *
 * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
 */
let CoreModule = class CoreModule {
};
CoreModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            HttpClientModule,
        ],
        declarations: [AppLoaderComponent],
        exports: [AppLoaderComponent],
        providers: [DataService]
    })
], CoreModule);

/**
 * Generated bundle index. Do not edit.
 */

export { AppLoaderComponent, CoreModule, DataService, urlConfig, ɵ0, ɵ1, ɵ2, ɵ3, ɵ4 };
//# sourceMappingURL=aastrika_npmjs-comptency-core.js.map
