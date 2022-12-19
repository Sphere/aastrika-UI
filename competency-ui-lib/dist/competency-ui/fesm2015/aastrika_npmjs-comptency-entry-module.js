import { __decorate, __param } from 'tslib';
import { EventEmitter, Output, Component, Optional, Inject, ɵɵdefineInjectable, ɵɵinject, Injectable, NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';

let SlefAssessmentEntryComponent = class SlefAssessmentEntryComponent {
    constructor(router) {
        this.router = router;
        this.stateChange = new EventEmitter();
    }
    ngOnInit() {
    }
    navigateTo() {
        this.stateChange.emit({ 'navigation': true });
    }
};
SlefAssessmentEntryComponent.ctorParameters = () => [
    { type: Router }
];
__decorate([
    Output()
], SlefAssessmentEntryComponent.prototype, "stateChange", void 0);
SlefAssessmentEntryComponent = __decorate([
    Component({
        selector: 'lib-slef-assessment-entry',
        template: "<button class=\"mat-primary-background \"\n  (click)=\"navigateTo()\"> Self Assessment\n</button>",
        styles: [":root{font-size:16px;--blue:#1C5D95;--yellow:#FFF4DF;--teal:#A4DFCA;--black:#000000;--white:#ffffff;--light-gray:#eff6fc;--grey-100:#DFEDF9;--gray-200:#8E8E8E;--gray-300:#989898;--gray-400:#808080;--grey-500:#919191;--yellow-500:#FFFBB0;--blue-500:#7CB5E6}.button-primary{background-color:var(--blue)!important;border-radius:50px;gap:8px;color:var(--white)!important;border:none}.mat-primary-background{padding:9px 40px;background:#1c5d95!important;border-radius:50px;color:#fff;border:none;gap:8px;width:310px;cursor:pointer}"]
    })
], SlefAssessmentEntryComponent);

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
__decorate([
    Output()
], CompetencyEntryComponent.prototype, "stateChange", void 0);
CompetencyEntryComponent = __decorate([
    Component({
        selector: 'lib-competency-entry',
        template: "<button class=\"mat-primary-background \"\n  (click)=\"navigateTo()\"> Competency Dashboard\n</button>",
        styles: [":root{font-size:16px;--blue:#1C5D95;--yellow:#FFF4DF;--teal:#A4DFCA;--black:#000000;--white:#ffffff;--light-gray:#eff6fc;--grey-100:#DFEDF9;--gray-200:#8E8E8E;--gray-300:#989898;--gray-400:#808080;--grey-500:#919191;--yellow-500:#FFFBB0;--blue-500:#7CB5E6}.button-primary{background-color:var(--blue)!important;border-radius:50px;gap:8px;color:var(--white)!important;border:none}.mat-primary-background{padding:9px 40px;background:#1c5d95!important;border-radius:50px;color:#fff;border:none;gap:8px;width:310px;cursor:pointer}"]
    })
], CompetencyEntryComponent);

class ConfigurationContext {
}

let ConfigService = class ConfigService {
    constructor(config) {
        this.config = config;
        this.config$ = new BehaviorSubject({});
        this._config = this.config$.asObservable();
        if (config) {
            console.log('context log in config service ------ ', config);
            this.setConfig(config);
        }
    }
    setConfig(context) {
        this.config$.next(context);
    }
    getConfig() {
        let config;
        this._config.subscribe((res) => {
            config = res;
        });
        return config;
    }
};
ConfigService.ctorParameters = () => [
    { type: ConfigurationContext, decorators: [{ type: Optional }, { type: Inject, args: ['config',] }] }
];
ConfigService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ConfigService_Factory() { return new ConfigService(ɵɵinject("config", 8)); }, token: ConfigService, providedIn: "root" });
ConfigService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(0, Optional()), __param(0, Inject('config'))
], ConfigService);

var EntryModule_1;
let EntryModule = EntryModule_1 = class EntryModule {
    /**
   * Take the config from consuming apps
   *
   * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
   */
    static forRoot(configContext) {
        return {
            ngModule: EntryModule_1,
            providers: [ConfigService,
                { provide: 'config', useValue: configContext.config }
            ]
        };
    }
};
EntryModule = EntryModule_1 = __decorate([
    NgModule({
        declarations: [SlefAssessmentEntryComponent, CompetencyEntryComponent,],
        imports: [
            CommonModule,
            RouterModule,
            MatIconModule,
        ],
        exports: [
            SlefAssessmentEntryComponent,
            CompetencyEntryComponent,
        ],
        providers: []
    })
], EntryModule);

/**
 * Generated bundle index. Do not edit.
 */

export { CompetencyEntryComponent, ConfigService, EntryModule, SlefAssessmentEntryComponent, ConfigurationContext as ɵa };
//# sourceMappingURL=aastrika_npmjs-comptency-entry-module.js.map
