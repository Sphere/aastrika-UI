import * as tslib_1 from "tslib";
import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ConfigurationContext } from './configuration-context';
import * as i0 from "@angular/core";
var ConfigService = /** @class */ (function () {
    function ConfigService(config) {
        this.config = config;
        this.config$ = new BehaviorSubject({});
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
        { type: ConfigurationContext, decorators: [{ type: Optional }, { type: Inject, args: ['config',] }] }
    ]; };
    ConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ConfigService_Factory() { return new ConfigService(i0.ɵɵinject("config", 8)); }, token: ConfigService, providedIn: "root" });
    ConfigService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject('config'))
    ], ConfigService);
    return ConfigService;
}());
export { ConfigService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWFzdHJpa2FfbnBtanMvY29tcHRlbmN5LyIsInNvdXJjZXMiOlsiZW50cnktbW9kdWxlL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFVLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFJL0Q7SUFJRSx1QkFBaUQsTUFBMkI7UUFBM0IsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7UUFIckUsWUFBTyxHQUFpQixJQUFJLGVBQWUsQ0FBTSxFQUFFLENBQUMsQ0FBQztRQUNwRCxZQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUczQyxJQUFHLE1BQU0sRUFBQztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLEVBQUUsTUFBTSxDQUFDLENBQUE7WUFDNUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtTQUN2QjtJQUNILENBQUM7SUFDTSxpQ0FBUyxHQUFoQixVQUFpQixPQUFPO1FBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFDTSxpQ0FBUyxHQUFoQjtRQUNFLElBQUksTUFBVyxDQUFBO1FBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFPO1lBQzdCLE1BQU0sR0FBSSxHQUFHLENBQUE7UUFDZixDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sTUFBTSxDQUFBO0lBQ2YsQ0FBQzs7Z0JBZnVELG9CQUFvQix1QkFBL0QsUUFBUSxZQUFJLE1BQU0sU0FBQyxRQUFROzs7SUFKN0IsYUFBYTtRQUh6QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO1FBS2EsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7T0FKOUIsYUFBYSxDQXFCekI7d0JBM0JEO0NBMkJDLEFBckJELElBcUJDO1NBckJZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvbkNvbnRleHQgfSBmcm9tICcuL2NvbmZpZ3VyYXRpb24tY29udGV4dCc7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb25maWdTZXJ2aWNlIHtcbiAgcHVibGljIGNvbmZpZyQ6IFN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55Pih7fSk7XG4gIHByaXZhdGUgX2NvbmZpZyA9IHRoaXMuY29uZmlnJC5hc09ic2VydmFibGUoKVxuIFxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KCdjb25maWcnKSBwdWJsaWMgY29uZmlnOkNvbmZpZ3VyYXRpb25Db250ZXh0ICkgeyBcbiAgICBpZihjb25maWcpe1xuICAgICAgY29uc29sZS5sb2coJ2NvbnRleHQgbG9nIGluIGNvbmZpZyBzZXJ2aWNlIC0tLS0tLSAnLCBjb25maWcpXG4gICAgICB0aGlzLnNldENvbmZpZyhjb25maWcpXG4gICAgfVxuICB9XG4gIHB1YmxpYyBzZXRDb25maWcoY29udGV4dCkge1xuICAgIHRoaXMuY29uZmlnJC5uZXh0KGNvbnRleHQpXG4gIH1cbiAgcHVibGljIGdldENvbmZpZygpe1xuICAgIGxldCBjb25maWcgOmFueSBcbiAgICB0aGlzLl9jb25maWcuc3Vic2NyaWJlKChyZXM6YW55KT0+e1xuICAgICAgY29uZmlnID0gIHJlc1xuICAgIH0pXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG4gXG59XG4iXX0=