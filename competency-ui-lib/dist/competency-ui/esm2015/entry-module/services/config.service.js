import * as tslib_1 from "tslib";
import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ConfigurationContext } from './configuration-context';
import * as i0 from "@angular/core";
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
ConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ConfigService_Factory() { return new ConfigService(i0.ɵɵinject("config", 8)); }, token: ConfigService, providedIn: "root" });
ConfigService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject('config'))
], ConfigService);
export { ConfigService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWFzdHJpa2FfbnBtanMvY29tcHRlbmN5LyIsInNvdXJjZXMiOlsiZW50cnktbW9kdWxlL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFVLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFJL0QsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQUl4QixZQUFpRCxNQUEyQjtRQUEzQixXQUFNLEdBQU4sTUFBTSxDQUFxQjtRQUhyRSxZQUFPLEdBQWlCLElBQUksZUFBZSxDQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELFlBQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFBO1FBRzNDLElBQUcsTUFBTSxFQUFDO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsRUFBRSxNQUFNLENBQUMsQ0FBQTtZQUM1RCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQ3ZCO0lBQ0gsQ0FBQztJQUNNLFNBQVMsQ0FBQyxPQUFPO1FBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFDTSxTQUFTO1FBQ2QsSUFBSSxNQUFXLENBQUE7UUFDZixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQU8sRUFBQyxFQUFFO1lBQ2hDLE1BQU0sR0FBSSxHQUFHLENBQUE7UUFDZixDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sTUFBTSxDQUFBO0lBQ2YsQ0FBQztDQUVGLENBQUE7O1lBakJ5RCxvQkFBb0IsdUJBQS9ELFFBQVEsWUFBSSxNQUFNLFNBQUMsUUFBUTs7O0FBSjdCLGFBQWE7SUFIekIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztJQUthLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0dBSjlCLGFBQWEsQ0FxQnpCO1NBckJZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvbkNvbnRleHQgfSBmcm9tICcuL2NvbmZpZ3VyYXRpb24tY29udGV4dCc7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb25maWdTZXJ2aWNlIHtcbiAgcHVibGljIGNvbmZpZyQ6IFN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55Pih7fSk7XG4gIHByaXZhdGUgX2NvbmZpZyA9IHRoaXMuY29uZmlnJC5hc09ic2VydmFibGUoKVxuIFxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KCdjb25maWcnKSBwdWJsaWMgY29uZmlnOkNvbmZpZ3VyYXRpb25Db250ZXh0ICkgeyBcbiAgICBpZihjb25maWcpe1xuICAgICAgY29uc29sZS5sb2coJ2NvbnRleHQgbG9nIGluIGNvbmZpZyBzZXJ2aWNlIC0tLS0tLSAnLCBjb25maWcpXG4gICAgICB0aGlzLnNldENvbmZpZyhjb25maWcpXG4gICAgfVxuICB9XG4gIHB1YmxpYyBzZXRDb25maWcoY29udGV4dCkge1xuICAgIHRoaXMuY29uZmlnJC5uZXh0KGNvbnRleHQpXG4gIH1cbiAgcHVibGljIGdldENvbmZpZygpe1xuICAgIGxldCBjb25maWcgOmFueSBcbiAgICB0aGlzLl9jb25maWcuc3Vic2NyaWJlKChyZXM6YW55KT0+e1xuICAgICAgY29uZmlnID0gIHJlc1xuICAgIH0pXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG4gXG59XG4iXX0=