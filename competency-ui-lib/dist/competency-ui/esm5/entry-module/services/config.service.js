import * as tslib_1 from "tslib";
import { Injectable, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ConfigurationContext } from './configuration-context';
import * as i0 from "@angular/core";
import * as i1 from "./configuration-context";
var ConfigService = /** @class */ (function () {
    function ConfigService(context) {
        this.config$ = new BehaviorSubject({});
        this._config = this.config$.asObservable();
        if (context) {
            console.log('context log in config service ------ ', context);
            this.setConfig(context);
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
        { type: ConfigurationContext, decorators: [{ type: Optional }] }
    ]; };
    ConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ConfigService_Factory() { return new ConfigService(i0.ɵɵinject(i1.ConfigurationContext, 8)); }, token: ConfigService, providedIn: "root" });
    ConfigService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__param(0, Optional())
    ], ConfigService);
    return ConfigService;
}());
export { ConfigService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWFzdHJpa2EvY29tcHRlbmN5L2VudHJ5LW1vZHVsZS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQVUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7QUFJL0Q7SUFHRSx1QkFBd0IsT0FBNkI7UUFGOUMsWUFBTyxHQUFpQixJQUFJLGVBQWUsQ0FBTSxFQUFFLENBQUMsQ0FBQztRQUNwRCxZQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUUzQyxJQUFHLE9BQU8sRUFBQztZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLEVBQUUsT0FBTyxDQUFDLENBQUE7WUFDN0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUN4QjtJQUNILENBQUM7SUFDTSxpQ0FBUyxHQUFoQixVQUFpQixPQUFPO1FBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFDTSxpQ0FBUyxHQUFoQjtRQUNFLElBQUksTUFBVyxDQUFBO1FBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFPO1lBQzdCLE1BQU0sR0FBSSxHQUFHLENBQUE7UUFDZixDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sTUFBTSxDQUFBO0lBQ2YsQ0FBQzs7Z0JBZmdDLG9CQUFvQix1QkFBeEMsUUFBUTs7O0lBSFYsYUFBYTtRQUh6QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO1FBSWEsbUJBQUEsUUFBUSxFQUFFLENBQUE7T0FIWixhQUFhLENBb0J6Qjt3QkExQkQ7Q0EwQkMsQUFwQkQsSUFvQkM7U0FwQlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QsQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25Db250ZXh0IH0gZnJvbSAnLi9jb25maWd1cmF0aW9uLWNvbnRleHQnO1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25maWdTZXJ2aWNlIHtcclxuICBwdWJsaWMgY29uZmlnJDogU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KHt9KTtcclxuICBwcml2YXRlIF9jb25maWcgPSB0aGlzLmNvbmZpZyQuYXNPYnNlcnZhYmxlKClcclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBjb250ZXh0OiBDb25maWd1cmF0aW9uQ29udGV4dCwgKSB7IFxyXG4gICAgaWYoY29udGV4dCl7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdjb250ZXh0IGxvZyBpbiBjb25maWcgc2VydmljZSAtLS0tLS0gJywgY29udGV4dClcclxuICAgICAgdGhpcy5zZXRDb25maWcoY29udGV4dClcclxuICAgIH1cclxuICB9XHJcbiAgcHVibGljIHNldENvbmZpZyhjb250ZXh0KSB7XHJcbiAgICB0aGlzLmNvbmZpZyQubmV4dChjb250ZXh0KVxyXG4gIH1cclxuICBwdWJsaWMgZ2V0Q29uZmlnKCl7XHJcbiAgICBsZXQgY29uZmlnIDphbnkgXHJcbiAgICB0aGlzLl9jb25maWcuc3Vic2NyaWJlKChyZXM6YW55KT0+e1xyXG4gICAgICBjb25maWcgPSAgcmVzXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGNvbmZpZ1xyXG4gIH1cclxuIFxyXG59XHJcbiJdfQ==