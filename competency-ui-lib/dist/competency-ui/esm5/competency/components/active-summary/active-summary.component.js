import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { RequestUtil } from '../../services/request-util';
import { ActiveSummaryService } from '../../services/active-summary.service';
import { mergeMap } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';
import * as _ from 'lodash-es';
import { ConfigService } from '@aastrika_npmjs/comptency/entry-module';
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
        this.profileData = this.configService.getConfig().profileData[0].designation;
    }
    ActiveSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.loading = true;
            _this.unsubscribe = _this.getActivityByRole().pipe(mergeMap(function (res) {
                var formatedResponse = _this.requestUtil.formatedActivitityByPostion(res);
                return of(formatedResponse);
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
        var index = _.findIndex(this.roleactivitySummaries, { 'id': id });
        this.roleactivitySummaries[index]['activities'] = [];
        this.getEntityById(id).pipe(mergeMap(function (res) {
            var respone = _this.requestUtil.formatedActivitityByRoleId(res);
            _this.roleactivitySummaries[index]['activities'] = respone;
            var cidArr = _.map(_this.roleactivitySummaries[index]['activities'], 'cid');
            var calls = [];
            _.forEach(cidArr, function (value) {
                calls.push(_this.getEntityById(value));
            });
            _this.acordianLoading = false;
            return forkJoin.apply(void 0, tslib_1.__spread(calls));
        })).subscribe(function (res) {
            var response = _this.requestUtil.formatedCompetency(res);
            _this.roleactivitySummaries[index]['activities'] = _.values(_.merge(_.keyBy(response, 'cid'), _.keyBy(_this.roleactivitySummaries[index]['activities'], 'cid')));
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
    ActiveSummaryComponent = tslib_1.__decorate([
        Component({
            selector: 'lib-active-summary',
            template: "<lib-app-loader *ngIf=\"loading === true\"></lib-app-loader>\n<ng-container *ngFor=\"let role of roleactivitySummaries\">\n  <div class=\"\">\n    <mat-accordion>\n      <mat-expansion-panel\n        class=\"w-full panel r\"\n        (opened)=\"getActivityByRoleId(role.id)\"\n        (closed)=\"panelOpenState = false\"\n      >\n        <mat-expansion-panel-header\n          class=\"card-containe flex-between items-center panel-header w-full\"\n          collapsedHeight=\"auto\"\n          expandedHeight=\"auto\"\n        >\n          <mat-panel-description class=\"panel-header-description\">\n            <ng-container *ngIf=\"role?.roles\">\n              <div class=\"title\">{{ role?.roles }}</div>\n            </ng-container>\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <lib-app-loader *ngIf=\"acordianLoading === true\"></lib-app-loader>\n        <div class=\"expand-container\" *ngIf=\"roleactivitySummaries.length>0\">\n          <ng-container\n            *ngFor=\"let activity of role?.activities; let i = index\"\n          >\n            <div class=\"activity-title\">\n              {{ i + 1 }}.{{ activity.title }}\n            </div>\n            <div class=\"competency-container\">\n              <div class=\"competency-title\">{{ activity.competency }}</div>\n              <div class=\"level\">\n                <ng-container *ngFor=\"let level of activity.levels\">\n                  {{ level }}\n                </ng-container>\n              </div>\n            </div>\n          </ng-container>\n        </div>\n      </mat-expansion-panel>\n    </mat-accordion>\n   \n  </div>\n</ng-container>\n",
            styles: [":root{font-size:16px;--blue:#1C5D95;--yellow:#FFF4DF;--teal:#A4DFCA;--black:#000000;--white:#ffffff;--light-gray:#eff6fc;--grey-100:#DFEDF9;--gray-200:#8E8E8E;--gray-300:#989898;--gray-400:#808080;--grey-500:#919191;--yellow-500:#FFFBB0;--blue-500:#7CB5E6}.button-primary{background-color:var(--blue)!important;border-radius:50px;gap:8px;color:var(--white)!important;border:none}.mat-primary-background{padding:9px 40px;width:310px;cursor:pointer}.card-container{margin:15px 2px;padding:16px 10px 20px 14px;box-shadow:0 0 4px rgba(0,0,0,.15);border-radius:10px;background:var(--light-gray)!important}.spinner-loading{display:flex;justify-content:center}.title{font-size:16px;line-height:19px;letter-spacing:-.02em;color:var(--blue)}.icon-down{-ms-grid-row-align:flex-end;-ms-grid-column-align:flex-end;place-self:flex-end;color:var(--blue)!important}:host ::ng-deep .mat-expansion-panel{margin:10px 0;height:auto}:host ::ng-deep .mat-expansion-panel-header:hover{background:#eff6fc!important}:host ::ng-deep .mat-expansion-panel-header{padding:15px!important;background-color:var(--light-gray)!important;border-radius:10px!important}:host ::ng-deep .mat-expansion-indicator:after{color:var(--blue)!important}.activity-title{font-size:24px;line-height:28px;letter-spacing:-.02em;color:var(--black)}.competency-container{background:var(--white);box-shadow:0 0 4px rgba(0,0,0,.15);border-radius:10px;padding:10px;margin:18px 0 15px}.competency-container .competency-title{font-size:20px;line-height:25px;letter-spacing:-.02em;color:var(--black);margin-bottom:20px}.competency-container .level{font-size:24px;line-height:24px;letter-spacing:-.02em;color:var(--blue)}.expand-container{padding:15px 15px 0}"]
        })
    ], ActiveSummaryComponent);
    return ActiveSummaryComponent;
}());
export { ActiveSummaryComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLXN1bW1hcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFhc3RyaWthX25wbWpzL2NvbXB0ZW5jeS9jb21wZXRlbmN5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9hY3RpdmUtc3VtbWFyeS9hY3RpdmUtc3VtbWFyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sS0FBSyxDQUFDLE1BQU0sV0FBVyxDQUFDO0FBQy9CLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQU12RTtJQWNFLGdDQUFtQixvQkFBMEMsRUFBUyxhQUE0QjtRQUEvRSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQVMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFibEc7Ozs7U0FJQztRQUNELG1CQUFjLEdBQVksSUFBSSxDQUFBO1FBSzlCLFlBQU8sR0FBRyxLQUFLLENBQUE7UUFDZixvQkFBZSxHQUFHLEtBQUssQ0FBQTtRQUdyQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUE7UUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUE7SUFDL0UsQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFBQSxpQkFXQztRQVZDLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxP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Q0FBQyxDQUFDLENBQUE7UUFDeEUsQ0FBQyxDQUFDLENBQUE7SUFFSixDQUFDO0lBQ0QsOENBQWEsR0FBYixVQUFjLEVBQU07UUFDbEIsSUFBTSxPQUFPLEdBQUc7WUFDZCxNQUFNLEVBQUU7Z0JBQ04sVUFBVSxFQUFFLElBQUk7YUFDakI7WUFDRCxFQUFFLEVBQUUsRUFBRTtTQUNQLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDM0QsQ0FBQztJQUNELDRDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ2hDLENBQUM7O2dCQTlEd0Msb0JBQW9CO2dCQUF3QixhQUFhOztJQWR2RixzQkFBc0I7UUFMbEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixpcERBQThDOztTQUUvQyxDQUFDO09BQ1csc0JBQXNCLENBNkVsQztJQUFELDZCQUFDO0NBQUEsQUE3RUQsSUE2RUM7U0E3RVksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXF1ZXN0VXRpbCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3JlcXVlc3QtdXRpbCc7XG5pbXBvcnQgeyBBY3RpdmVTdW1tYXJ5U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FjdGl2ZS1zdW1tYXJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBmb3JrSm9pbiwgb2YsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BhYXN0cmlrYV9ucG1qcy9jb21wdGVuY3kvZW50cnktbW9kdWxlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1hY3RpdmUtc3VtbWFyeScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hY3RpdmUtc3VtbWFyeS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FjdGl2ZS1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWN0aXZlU3VtbWFyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICogQ29yZSBNb2R1bGUgIFxuICpcbiAqIEBhdXRob3IgQW1hbiBLdW1hciBTaGFybWEgPGFtYW5rdW1hci5zaGFybWFAdGFyZW50by5jb20+XG4gKi9cbiAgcGFuZWxPcGVuU3RhdGU6IEJvb2xlYW4gPSB0cnVlXG4gIHJlcXVlc3RVdGlsOiBhbnlcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZTogU3Vic2NyaXB0aW9uO1xuICByb2xlYWN0aXZpdHlTdW1tYXJpZXM6YW55XG4gIGFjdGl2aXR5U3VtbWFyaWVzOmFueVxuICBsb2FkaW5nID0gZmFsc2VcbiAgYWNvcmRpYW5Mb2FkaW5nID0gZmFsc2VcbiAgcHJvZmlsZURhdGE6YW55XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhY3RpdmVTdW1tYXJ5U2VydmljZTogQWN0aXZlU3VtbWFyeVNlcnZpY2UsIHB1YmxpYyBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlKSB7XG4gICAgdGhpcy5yZXF1ZXN0VXRpbCA9IG5ldyBSZXF1ZXN0VXRpbCgpXG4gICAgdGhpcy5wcm9maWxlRGF0YSA9IHRoaXMuY29uZmlnU2VydmljZS5nZXRDb25maWcoKSEucHJvZmlsZURhdGFbMF0uZGVzaWduYXRpb25cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgIHRoaXMudW5zdWJzY3JpYmUgPSB0aGlzLmdldEFjdGl2aXR5QnlSb2xlKCkucGlwZShtZXJnZU1hcCgocmVzOmFueSk9PntcbiAgICAgIGNvbnN0IGZvcm1hdGVkUmVzcG9uc2UgPSAgdGhpcy5yZXF1ZXN0VXRpbC5mb3JtYXRlZEFjdGl2aXRpdHlCeVBvc3Rpb24ocmVzKVxuICAgICAgcmV0dXJuIG9mKGZvcm1hdGVkUmVzcG9uc2UpXG4gICAgfSkpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICB0aGlzLnJvbGVhY3Rpdml0eVN1bW1hcmllcyA9IHJlc1xuICAgIH0pXG4gICAgfSw1MDApXG4gIH1cblxuICBwcml2YXRlIGdldEFjdGl2aXR5QnlSb2xlKCkge1xuICAgIGNvbnN0IHJlcUJvZHkgPSB7XG4gICAgICBmaWx0ZXI6IHtcbiAgICAgICAgXCJpc0RldGFpbFwiOiB0cnVlXG4gICAgICB9LFxuICAgICAgaWQ6IHRoaXMucHJvZmlsZURhdGEgPT09ICdBV1cnID8gOTUgOiAxXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVTdW1tYXJ5U2VydmljZS5nZXRBY3Rpdml0eUJ5SWQocmVxQm9keSlcbiAgfVxuXG4gIHB1YmxpYyBnZXRBY3Rpdml0eUJ5Um9sZUlkKGlkOmFueSl7XG4gICAgdGhpcy5wYW5lbE9wZW5TdGF0ZSA9IHRydWVcbiAgICB0aGlzLmFjb3JkaWFuTG9hZGluZyA9IHRydWVcbiAgICBjb25zdCBpbmRleCA9IF8uZmluZEluZGV4KHRoaXMucm9sZWFjdGl2aXR5U3VtbWFyaWVzLCB7J2lkJzogaWR9KVxuICAgIHRoaXMucm9sZWFjdGl2aXR5U3VtbWFyaWVzW2luZGV4XVsnYWN0aXZpdGllcyddID0gW11cbiAgICB0aGlzLmdldEVudGl0eUJ5SWQoaWQpLnBpcGUobWVyZ2VNYXAoKHJlcyk9PntcbiAgICAgIGNvbnN0IHJlc3BvbmUgPSB0aGlzLnJlcXVlc3RVdGlsLmZvcm1hdGVkQWN0aXZpdGl0eUJ5Um9sZUlkKHJlcylcbiAgICAgIHRoaXMucm9sZWFjdGl2aXR5U3VtbWFyaWVzW2luZGV4XVsnYWN0aXZpdGllcyddID0gcmVzcG9uZVxuICAgICAgY29uc3QgY2lkQXJyID0gXy5tYXAodGhpcy5yb2xlYWN0aXZpdHlTdW1tYXJpZXNbaW5kZXhdWydhY3Rpdml0aWVzJ10sICdjaWQnKVxuICAgICAgbGV0IGNhbGxzID0gW107XG4gICAgICBfLmZvckVhY2goY2lkQXJyLCh2YWx1ZTphbnkpPT57XG4gICAgICAgIGNhbGxzLnB1c2godGhpcy5nZXRFbnRpdHlCeUlkKHZhbHVlKSlcbiAgICAgIH0pXG4gICAgICB0aGlzLmFjb3JkaWFuTG9hZGluZyA9IGZhbHNlXG4gICAgICByZXR1cm4gZm9ya0pvaW4oLi4uY2FsbHMpXG4gICAgfSkpLnN1YnNjcmliZSgocmVzOmFueSk9PntcbiAgICAgIFxuICAgICAgY29uc3QgcmVzcG9uc2UgPSB0aGlzLnJlcXVlc3RVdGlsLmZvcm1hdGVkQ29tcGV0ZW5jeShyZXMpXG4gICAgICB0aGlzLnJvbGVhY3Rpdml0eVN1bW1hcmllc1tpbmRleF1bJ2FjdGl2aXRpZXMnXSA9IF8udmFsdWVzKCBfLm1lcmdlKF8ua2V5QnkocmVzcG9uc2UsICdjaWQnKSwgXG4gICAgICAgICAgIF8ua2V5QnkodGhpcy5yb2xlYWN0aXZpdHlTdW1tYXJpZXNbaW5kZXhdWydhY3Rpdml0aWVzJ10sICdjaWQnKSkpXG4gICAgfSlcbiAgICBcbiAgfVxuICBnZXRFbnRpdHlCeUlkKGlkOmFueSl7XG4gICAgY29uc3QgcmVxQm9keSA9IHtcbiAgICAgIGZpbHRlcjoge1xuICAgICAgICBcImlzRGV0YWlsXCI6IHRydWVcbiAgICAgIH0sXG4gICAgICBpZDogaWRcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZVN1bW1hcnlTZXJ2aWNlLmdldEFjdGl2aXR5QnlJZChyZXFCb2R5KVxuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUudW5zdWJzY3JpYmUoKVxuICB9XG59XG4iXX0=