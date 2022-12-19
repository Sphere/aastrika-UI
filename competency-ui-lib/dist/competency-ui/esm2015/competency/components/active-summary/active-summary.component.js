import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { RequestUtil } from '../../services/request-util';
import { ActiveSummaryService } from '../../services/active-summary.service';
import { mergeMap } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';
import * as _ from 'lodash-es';
import { ConfigService } from '@aastrika/comptency/entry-module';
let ActiveSummaryComponent = class ActiveSummaryComponent {
    constructor(activeSummaryService, configService) {
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
    ngOnInit() {
        this.loading = true;
        this.unsubscribe = this.getActivityByRole().pipe(mergeMap((res) => {
            const formatedResponse = this.requestUtil.formatedActivitityByPostion(res);
            return of(formatedResponse);
        })).subscribe((res) => {
            this.loading = false;
            this.roleactivitySummaries = res;
        });
        this.profileData = JSON.parse(this.configService.getConfig()).profileData[0].designation;
    }
    getActivityByRole() {
        const reqBody = {
            filter: {
                "isDetail": true
            },
            id: this.profileData === 'AWW' ? 95 : 1
        };
        return this.activeSummaryService.getActivityById(reqBody);
    }
    getActivityByRoleId(id) {
        this.panelOpenState = true;
        this.acordianLoading = true;
        const index = _.findIndex(this.roleactivitySummaries, { 'id': id });
        this.roleactivitySummaries[index]['activities'] = [];
        this.getEntityById(id).pipe(mergeMap((res) => {
            const respone = this.requestUtil.formatedActivitityByRoleId(res);
            this.roleactivitySummaries[index]['activities'] = respone;
            const cidArr = _.map(this.roleactivitySummaries[index]['activities'], 'cid');
            let calls = [];
            _.forEach(cidArr, (value) => {
                calls.push(this.getEntityById(value));
            });
            this.acordianLoading = false;
            return forkJoin(...calls);
        })).subscribe((res) => {
            const response = this.requestUtil.formatedCompetency(res);
            this.roleactivitySummaries[index]['activities'] = _.values(_.merge(_.keyBy(response, 'cid'), _.keyBy(this.roleactivitySummaries[index]['activities'], 'cid')));
        });
    }
    getEntityById(id) {
        const reqBody = {
            filter: {
                "isDetail": true
            },
            id: id
        };
        return this.activeSummaryService.getActivityById(reqBody);
    }
    ngOnDestroy() {
        this.unsubscribe.unsubscribe();
    }
};
ActiveSummaryComponent.ctorParameters = () => [
    { type: ActiveSummaryService },
    { type: ConfigService }
];
ActiveSummaryComponent = tslib_1.__decorate([
    Component({
        selector: 'lib-active-summary',
        template: "<lib-app-loader *ngIf=\"loading === true\"></lib-app-loader>\r\n<ng-container *ngFor=\"let role of roleactivitySummaries\">\r\n  <div class=\"\">\r\n    <mat-accordion>\r\n      <mat-expansion-panel\r\n        class=\"w-full panel r\"\r\n        (opened)=\"getActivityByRoleId(role.id)\"\r\n        (closed)=\"panelOpenState = false\"\r\n      >\r\n        <mat-expansion-panel-header\r\n          class=\"card-containe flex-between items-center panel-header w-full\"\r\n          collapsedHeight=\"auto\"\r\n          expandedHeight=\"auto\"\r\n        >\r\n          <mat-panel-description class=\"panel-header-description\">\r\n            <ng-container *ngIf=\"role?.roles\">\r\n              <div class=\"title\">{{ role?.roles }}</div>\r\n            </ng-container>\r\n          </mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n        <lib-app-loader *ngIf=\"acordianLoading === true\"></lib-app-loader>\r\n        <div class=\"expand-container\" *ngIf=\"roleactivitySummaries.length>0\">\r\n          <ng-container\r\n            *ngFor=\"let activity of role?.activities; let i = index\"\r\n          >\r\n            <div class=\"activity-title\">\r\n              {{ i + 1 }}.{{ activity.title }}\r\n            </div>\r\n            <div class=\"competency-container\">\r\n              <div class=\"competency-title\">{{ activity.competency }}</div>\r\n              <div class=\"level\">\r\n                <ng-container *ngFor=\"let level of activity.levels\">\r\n                  {{ level }}\r\n                </ng-container>\r\n              </div>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n   \r\n  </div>\r\n</ng-container>\r\n",
        styles: [":root{font-size:16px;--blue:#1C5D95;--yellow:#FFF4DF;--teal:#A4DFCA;--black:#000000;--white:#ffffff;--light-gray:#eff6fc;--grey-100:#DFEDF9;--gray-200:#8E8E8E;--gray-300:#989898;--gray-400:#808080;--grey-500:#919191;--yellow-500:#FFFBB0;--blue-500:#7CB5E6}.button-primary{background-color:var(--blue)!important;border-radius:50px;gap:8px;color:var(--white)!important;border:none}.mat-primary-background{padding:9px 40px;width:310px;cursor:pointer}.card-container{margin:15px 2px;padding:16px 10px 20px 14px;box-shadow:0 0 4px rgba(0,0,0,.15);border-radius:10px;background:var(--light-gray)!important}.spinner-loading{display:flex;justify-content:center}.title{font-size:16px;line-height:19px;letter-spacing:-.02em;color:var(--blue)}.icon-down{place-self:flex-end;color:var(--blue)!important}:host ::ng-deep .mat-expansion-panel{margin:10px 0;height:auto}:host ::ng-deep .mat-expansion-panel-header:hover{background:#eff6fc!important}:host ::ng-deep .mat-expansion-panel-header{padding:15px!important;background-color:var(--light-gray)!important;border-radius:10px!important}:host ::ng-deep .mat-expansion-indicator:after{color:var(--blue)!important}.activity-title{font-size:24px;line-height:28px;letter-spacing:-.02em;color:var(--black)}.competency-container{background:var(--white);box-shadow:0 0 4px rgba(0,0,0,.15);border-radius:10px;padding:10px;margin:18px 0 15px}.competency-container .competency-title{font-size:20px;line-height:25px;letter-spacing:-.02em;color:var(--black);margin-bottom:20px}.competency-container .level{font-size:24px;line-height:24px;letter-spacing:-.02em;color:var(--blue)}.expand-container{padding:15px 15px 0}"]
    })
], ActiveSummaryComponent);
export { ActiveSummaryComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLXN1bW1hcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFhc3RyaWthL2NvbXB0ZW5jeS9jb21wZXRlbmN5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9hY3RpdmUtc3VtbWFyeS9hY3RpdmUtc3VtbWFyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sS0FBSyxDQUFDLE1BQU0sV0FBVyxDQUFDO0FBQy9CLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQU1qRSxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQWNqQyxZQUFtQixvQkFBMEMsRUFBUyxhQUE0QjtRQUEvRSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQVMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFibEc7Ozs7U0FJQztRQUNELG1CQUFjLEdBQVksSUFBSSxDQUFBO1FBSzlCLFlBQU8sR0FBRyxLQUFLLENBQUE7UUFDZixvQkFBZSxHQUFHLEtBQUssQ0FBQTtRQUdyQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUE7SUFFdEMsQ0FBQztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtRQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFPLEVB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QyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN4RSxDQUFDLENBQUMsQ0FBQTtJQUVKLENBQUM7SUFDRCxhQUFhLENBQUMsRUFBTTtRQUNsQixNQUFNLE9BQU8sR0FBRztZQUNkLE1BQU0sRUFBRTtnQkFDTixVQUFVLEVBQUUsSUFBSTthQUNqQjtZQUNELEVBQUUsRUFBRSxFQUFFO1NBQ1AsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMzRCxDQUFDO0lBQ0QsV0FBVztRQUNULElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDaEMsQ0FBQztDQUNGLENBQUE7O1lBaEUwQyxvQkFBb0I7WUFBd0IsYUFBYTs7QUFkdkYsc0JBQXNCO0lBTGxDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsdXVEQUE4Qzs7S0FFL0MsQ0FBQztHQUNXLHNCQUFzQixDQThFbEM7U0E5RVksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlcXVlc3RVdGlsIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcmVxdWVzdC11dGlsJztcclxuaW1wb3J0IHsgQWN0aXZlU3VtbWFyeVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hY3RpdmUtc3VtbWFyeS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IGZvcmtKb2luLCBvZiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoLWVzJztcclxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BhYXN0cmlrYS9jb21wdGVuY3kvZW50cnktbW9kdWxlJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItYWN0aXZlLXN1bW1hcnknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hY3RpdmUtc3VtbWFyeS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYWN0aXZlLXN1bW1hcnkuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWN0aXZlU3VtbWFyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLyoqXHJcbiAqIENvcmUgTW9kdWxlICBcclxuICpcclxuICogQGF1dGhvciBBbWFuIEt1bWFyIFNoYXJtYSA8YW1hbmt1bWFyLnNoYXJtYUB0YXJlbnRvLmNvbT5cclxuICovXHJcbiAgcGFuZWxPcGVuU3RhdGU6IEJvb2xlYW4gPSB0cnVlXHJcbiAgcmVxdWVzdFV0aWw6IGFueVxyXG4gIHByaXZhdGUgdW5zdWJzY3JpYmU6IFN1YnNjcmlwdGlvbjtcclxuICByb2xlYWN0aXZpdHlTdW1tYXJpZXM6YW55XHJcbiAgYWN0aXZpdHlTdW1tYXJpZXM6YW55XHJcbiAgbG9hZGluZyA9IGZhbHNlXHJcbiAgYWNvcmRpYW5Mb2FkaW5nID0gZmFsc2VcclxuICBwcm9maWxlRGF0YTphbnlcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYWN0aXZlU3VtbWFyeVNlcnZpY2U6IEFjdGl2ZVN1bW1hcnlTZXJ2aWNlLCBwdWJsaWMgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSkge1xyXG4gICAgdGhpcy5yZXF1ZXN0VXRpbCA9IG5ldyBSZXF1ZXN0VXRpbCgpXHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgIHRoaXMubG9hZGluZyA9IHRydWVcclxuICAgdGhpcy51bnN1YnNjcmliZSA9IHRoaXMuZ2V0QWN0aXZpdHlCeVJvbGUoKS5waXBlKG1lcmdlTWFwKChyZXM6YW55KT0+e1xyXG4gICAgICBjb25zdCBmb3JtYXRlZFJlc3BvbnNlID0gIHRoaXMucmVxdWVzdFV0aWwuZm9ybWF0ZWRBY3Rpdml0aXR5QnlQb3N0aW9uKHJlcylcclxuICAgICAgcmV0dXJuIG9mKGZvcm1hdGVkUmVzcG9uc2UpXHJcbiAgICB9KSkuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICB0aGlzLnJvbGVhY3Rpdml0eVN1bW1hcmllcyA9IHJlc1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgdGhpcy5wcm9maWxlRGF0YSA9IEpTT04ucGFyc2UodGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZygpKSEucHJvZmlsZURhdGFbMF0uZGVzaWduYXRpb25cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRBY3Rpdml0eUJ5Um9sZSgpIHtcclxuICAgIGNvbnN0IHJlcUJvZHkgPSB7XHJcbiAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgIFwiaXNEZXRhaWxcIjogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBpZDogdGhpcy5wcm9maWxlRGF0YSA9PT0gJ0FXVycgPyA5NSA6IDFcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVTdW1tYXJ5U2VydmljZS5nZXRBY3Rpdml0eUJ5SWQocmVxQm9keSlcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRBY3Rpdml0eUJ5Um9sZUlkKGlkOmFueSl7XHJcbiAgICB0aGlzLnBhbmVsT3BlblN0YXRlID0gdHJ1ZVxyXG4gICAgdGhpcy5hY29yZGlhbkxvYWRpbmcgPSB0cnVlXHJcbiAgICBjb25zdCBpbmRleCA9IF8uZmluZEluZGV4KHRoaXMucm9sZWFjdGl2aXR5U3VtbWFyaWVzLCB7J2lkJzogaWR9KVxyXG4gICAgdGhpcy5yb2xlYWN0aXZpdHlTdW1tYXJpZXNbaW5kZXhdWydhY3Rpdml0aWVzJ10gPSBbXVxyXG4gICAgdGhpcy5nZXRFbnRpdHlCeUlkKGlkKS5waXBlKG1lcmdlTWFwKChyZXMpPT57XHJcbiAgICAgIGNvbnN0IHJlc3BvbmUgPSB0aGlzLnJlcXVlc3RVdGlsLmZvcm1hdGVkQWN0aXZpdGl0eUJ5Um9sZUlkKHJlcylcclxuICAgICAgdGhpcy5yb2xlYWN0aXZpdHlTdW1tYXJpZXNbaW5kZXhdWydhY3Rpdml0aWVzJ10gPSByZXNwb25lXHJcbiAgICAgIGNvbnN0IGNpZEFyciA9IF8ubWFwKHRoaXMucm9sZWFjdGl2aXR5U3VtbWFyaWVzW2luZGV4XVsnYWN0aXZpdGllcyddLCAnY2lkJylcclxuICAgICAgbGV0IGNhbGxzID0gW107XHJcbiAgICAgIF8uZm9yRWFjaChjaWRBcnIsKHZhbHVlOmFueSk9PntcclxuICAgICAgICBjYWxscy5wdXNoKHRoaXMuZ2V0RW50aXR5QnlJZCh2YWx1ZSkpXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuYWNvcmRpYW5Mb2FkaW5nID0gZmFsc2VcclxuICAgICAgcmV0dXJuIGZvcmtKb2luKC4uLmNhbGxzKVxyXG4gICAgfSkpLnN1YnNjcmliZSgocmVzOmFueSk9PntcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gdGhpcy5yZXF1ZXN0VXRpbC5mb3JtYXRlZENvbXBldGVuY3kocmVzKVxyXG4gICAgICB0aGlzLnJvbGVhY3Rpdml0eVN1bW1hcmllc1tpbmRleF1bJ2FjdGl2aXRpZXMnXSA9IF8udmFsdWVzKCBfLm1lcmdlKF8ua2V5QnkocmVzcG9uc2UsICdjaWQnKSwgXHJcbiAgICAgICAgICAgXy5rZXlCeSh0aGlzLnJvbGVhY3Rpdml0eVN1bW1hcmllc1tpbmRleF1bJ2FjdGl2aXRpZXMnXSwgJ2NpZCcpKSlcclxuICAgIH0pXHJcbiAgICBcclxuICB9XHJcbiAgZ2V0RW50aXR5QnlJZChpZDphbnkpe1xyXG4gICAgY29uc3QgcmVxQm9keSA9IHtcclxuICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgXCJpc0RldGFpbFwiOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGlkOiBpZFxyXG4gICAgfTtcclxuICAgIHJldHVybiB0aGlzLmFjdGl2ZVN1bW1hcnlTZXJ2aWNlLmdldEFjdGl2aXR5QnlJZChyZXFCb2R5KVxyXG4gIH1cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMudW5zdWJzY3JpYmUudW5zdWJzY3JpYmUoKVxyXG4gIH1cclxufVxyXG4iXX0=