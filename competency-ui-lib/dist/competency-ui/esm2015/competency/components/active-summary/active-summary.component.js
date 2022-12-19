import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { RequestUtil } from '../../services/request-util';
import { ActiveSummaryService } from '../../services/active-summary.service';
import { mergeMap } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';
import * as _ from 'lodash-es';
import { ConfigService } from '@aastrika_npmjs/comptency/entry-module';
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
        this.profileData = this.configService.getConfig().profileData[0].designation;
    }
    ngOnInit() {
        setTimeout(() => {
            this.loading = true;
            this.unsubscribe = this.getActivityByRole().pipe(mergeMap((res) => {
                const formatedResponse = this.requestUtil.formatedActivitityByPostion(res);
                return of(formatedResponse);
            })).subscribe((res) => {
                this.loading = false;
                this.roleactivitySummaries = res;
            });
        }, 500);
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
        template: "<lib-app-loader *ngIf=\"loading === true\"></lib-app-loader>\n<ng-container *ngFor=\"let role of roleactivitySummaries\">\n  <div class=\"\">\n    <mat-accordion>\n      <mat-expansion-panel\n        class=\"w-full panel r\"\n        (opened)=\"getActivityByRoleId(role.id)\"\n        (closed)=\"panelOpenState = false\"\n      >\n        <mat-expansion-panel-header\n          class=\"card-containe flex-between items-center panel-header w-full\"\n          collapsedHeight=\"auto\"\n          expandedHeight=\"auto\"\n        >\n          <mat-panel-description class=\"panel-header-description\">\n            <ng-container *ngIf=\"role?.roles\">\n              <div class=\"title\">{{ role?.roles }}</div>\n            </ng-container>\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <lib-app-loader *ngIf=\"acordianLoading === true\"></lib-app-loader>\n        <div class=\"expand-container\" *ngIf=\"roleactivitySummaries.length>0\">\n          <ng-container\n            *ngFor=\"let activity of role?.activities; let i = index\"\n          >\n            <div class=\"activity-title\">\n              {{ i + 1 }}.{{ activity.title }}\n            </div>\n            <div class=\"competency-container\">\n              <div class=\"competency-title\">{{ activity.competency }}</div>\n              <div class=\"level\">\n                <ng-container *ngFor=\"let level of activity.levels\">\n                  {{ level }}\n                </ng-container>\n              </div>\n            </div>\n          </ng-container>\n        </div>\n      </mat-expansion-panel>\n    </mat-accordion>\n   \n  </div>\n</ng-container>\n",
        styles: [":root{font-size:16px;--blue:#1C5D95;--yellow:#FFF4DF;--teal:#A4DFCA;--black:#000000;--white:#ffffff;--light-gray:#eff6fc;--grey-100:#DFEDF9;--gray-200:#8E8E8E;--gray-300:#989898;--gray-400:#808080;--grey-500:#919191;--yellow-500:#FFFBB0;--blue-500:#7CB5E6}.button-primary{background-color:var(--blue)!important;border-radius:50px;gap:8px;color:var(--white)!important;border:none}.mat-primary-background{padding:9px 40px;width:310px;cursor:pointer}.card-container{margin:15px 2px;padding:16px 10px 20px 14px;box-shadow:0 0 4px rgba(0,0,0,.15);border-radius:10px;background:var(--light-gray)!important}.spinner-loading{display:flex;justify-content:center}.title{font-size:16px;line-height:19px;letter-spacing:-.02em;color:var(--blue)}.icon-down{-ms-grid-row-align:flex-end;-ms-grid-column-align:flex-end;place-self:flex-end;color:var(--blue)!important}:host ::ng-deep .mat-expansion-panel{margin:10px 0;height:auto}:host ::ng-deep .mat-expansion-panel-header:hover{background:#eff6fc!important}:host ::ng-deep .mat-expansion-panel-header{padding:15px!important;background-color:var(--light-gray)!important;border-radius:10px!important}:host ::ng-deep .mat-expansion-indicator:after{color:var(--blue)!important}.activity-title{font-size:24px;line-height:28px;letter-spacing:-.02em;color:var(--black)}.competency-container{background:var(--white);box-shadow:0 0 4px rgba(0,0,0,.15);border-radius:10px;padding:10px;margin:18px 0 15px}.competency-container .competency-title{font-size:20px;line-height:25px;letter-spacing:-.02em;color:var(--black);margin-bottom:20px}.competency-container .level{font-size:24px;line-height:24px;letter-spacing:-.02em;color:var(--blue)}.expand-container{padding:15px 15px 0}"]
    })
], ActiveSummaryComponent);
export { ActiveSummaryComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLXN1bW1hcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFhc3RyaWthX25wbWpzL2NvbXB0ZW5jeS9jb21wZXRlbmN5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9hY3RpdmUtc3VtbWFyeS9hY3RpdmUtc3VtbWFyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sS0FBSyxDQUFDLE1BQU0sV0FBVyxDQUFDO0FBQy9CLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQU12RSxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQWNqQyxZQUFtQixvQkFBMEMsRUFBUyxhQUE0QjtRQUEvRSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQVMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFibEc7Ozs7U0FJQztRQUNELG1CQUFjLEdBQVksSUFBSSxDQUFBO1FBSzlCLFlBQU8sR0FBRyxLQUFLLENBQUE7UUFDZixvQkFBZSxHQUFHLEtBQUssQ0FBQTtRQUdyQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUE7UUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUE7SUFDL0UsQ0FBQztJQUVELFFBQVE7UUFDTixVQUFVLENBQUMsR0FB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Q0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDeEUsQ0FBQyxDQUFDLENBQUE7SUFFSixDQUFDO0lBQ0QsYUFBYSxDQUFDLEVBQU07UUFDbEIsTUFBTSxPQUFPLEdBQUc7WUFDZCxNQUFNLEVBQUU7Z0JBQ04sVUFBVSxFQUFFLElBQUk7YUFDakI7WUFDRCxFQUFFLEVBQUUsRUFBRTtTQUNQLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDM0QsQ0FBQztJQUNELFdBQVc7UUFDVCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ2hDLENBQUM7Q0FDRixDQUFBOztZQS9EMEMsb0JBQW9CO1lBQXdCLGFBQWE7O0FBZHZGLHNCQUFzQjtJQUxsQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLGlwREFBOEM7O0tBRS9DLENBQUM7R0FDVyxzQkFBc0IsQ0E2RWxDO1NBN0VZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVxdWVzdFV0aWwgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9yZXF1ZXN0LXV0aWwnO1xuaW1wb3J0IHsgQWN0aXZlU3VtbWFyeVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hY3RpdmUtc3VtbWFyeS5zZXJ2aWNlJztcbmltcG9ydCB7IG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgZm9ya0pvaW4sIG9mLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICdAYWFzdHJpa2FfbnBtanMvY29tcHRlbmN5L2VudHJ5LW1vZHVsZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYWN0aXZlLXN1bW1hcnknLFxuICB0ZW1wbGF0ZVVybDogJy4vYWN0aXZlLXN1bW1hcnkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hY3RpdmUtc3VtbWFyeS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZVN1bW1hcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAqIENvcmUgTW9kdWxlICBcbiAqXG4gKiBAYXV0aG9yIEFtYW4gS3VtYXIgU2hhcm1hIDxhbWFua3VtYXIuc2hhcm1hQHRhcmVudG8uY29tPlxuICovXG4gIHBhbmVsT3BlblN0YXRlOiBCb29sZWFuID0gdHJ1ZVxuICByZXF1ZXN0VXRpbDogYW55XG4gIHByaXZhdGUgdW5zdWJzY3JpYmU6IFN1YnNjcmlwdGlvbjtcbiAgcm9sZWFjdGl2aXR5U3VtbWFyaWVzOmFueVxuICBhY3Rpdml0eVN1bW1hcmllczphbnlcbiAgbG9hZGluZyA9IGZhbHNlXG4gIGFjb3JkaWFuTG9hZGluZyA9IGZhbHNlXG4gIHByb2ZpbGVEYXRhOmFueVxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYWN0aXZlU3VtbWFyeVNlcnZpY2U6IEFjdGl2ZVN1bW1hcnlTZXJ2aWNlLCBwdWJsaWMgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSkge1xuICAgIHRoaXMucmVxdWVzdFV0aWwgPSBuZXcgUmVxdWVzdFV0aWwoKVxuICAgIHRoaXMucHJvZmlsZURhdGEgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnKCkhLnByb2ZpbGVEYXRhWzBdLmRlc2lnbmF0aW9uXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXG4gICB0aGlzLnVuc3Vic2NyaWJlID0gdGhpcy5nZXRBY3Rpdml0eUJ5Um9sZSgpLnBpcGUobWVyZ2VNYXAoKHJlczphbnkpPT57XG4gICAgICBjb25zdCBmb3JtYXRlZFJlc3BvbnNlID0gIHRoaXMucmVxdWVzdFV0aWwuZm9ybWF0ZWRBY3Rpdml0aXR5QnlQb3N0aW9uKHJlcylcbiAgICAgIHJldHVybiBvZihmb3JtYXRlZFJlc3BvbnNlKVxuICAgIH0pKS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgdGhpcy5yb2xlYWN0aXZpdHlTdW1tYXJpZXMgPSByZXNcbiAgICB9KVxuICAgIH0sNTAwKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRBY3Rpdml0eUJ5Um9sZSgpIHtcbiAgICBjb25zdCByZXFCb2R5ID0ge1xuICAgICAgZmlsdGVyOiB7XG4gICAgICAgIFwiaXNEZXRhaWxcIjogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGlkOiB0aGlzLnByb2ZpbGVEYXRhID09PSAnQVdXJyA/IDk1IDogMVxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlU3VtbWFyeVNlcnZpY2UuZ2V0QWN0aXZpdHlCeUlkKHJlcUJvZHkpXG4gIH1cblxuICBwdWJsaWMgZ2V0QWN0aXZpdHlCeVJvbGVJZChpZDphbnkpe1xuICAgIHRoaXMucGFuZWxPcGVuU3RhdGUgPSB0cnVlXG4gICAgdGhpcy5hY29yZGlhbkxvYWRpbmcgPSB0cnVlXG4gICAgY29uc3QgaW5kZXggPSBfLmZpbmRJbmRleCh0aGlzLnJvbGVhY3Rpdml0eVN1bW1hcmllcywgeydpZCc6IGlkfSlcbiAgICB0aGlzLnJvbGVhY3Rpdml0eVN1bW1hcmllc1tpbmRleF1bJ2FjdGl2aXRpZXMnXSA9IFtdXG4gICAgdGhpcy5nZXRFbnRpdHlCeUlkKGlkKS5waXBlKG1lcmdlTWFwKChyZXMpPT57XG4gICAgICBjb25zdCByZXNwb25lID0gdGhpcy5yZXF1ZXN0VXRpbC5mb3JtYXRlZEFjdGl2aXRpdHlCeVJvbGVJZChyZXMpXG4gICAgICB0aGlzLnJvbGVhY3Rpdml0eVN1bW1hcmllc1tpbmRleF1bJ2FjdGl2aXRpZXMnXSA9IHJlc3BvbmVcbiAgICAgIGNvbnN0IGNpZEFyciA9IF8ubWFwKHRoaXMucm9sZWFjdGl2aXR5U3VtbWFyaWVzW2luZGV4XVsnYWN0aXZpdGllcyddLCAnY2lkJylcbiAgICAgIGxldCBjYWxscyA9IFtdO1xuICAgICAgXy5mb3JFYWNoKGNpZEFyciwodmFsdWU6YW55KT0+e1xuICAgICAgICBjYWxscy5wdXNoKHRoaXMuZ2V0RW50aXR5QnlJZCh2YWx1ZSkpXG4gICAgICB9KVxuICAgICAgdGhpcy5hY29yZGlhbkxvYWRpbmcgPSBmYWxzZVxuICAgICAgcmV0dXJuIGZvcmtKb2luKC4uLmNhbGxzKVxuICAgIH0pKS5zdWJzY3JpYmUoKHJlczphbnkpPT57XG4gICAgICBcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gdGhpcy5yZXF1ZXN0VXRpbC5mb3JtYXRlZENvbXBldGVuY3kocmVzKVxuICAgICAgdGhpcy5yb2xlYWN0aXZpdHlTdW1tYXJpZXNbaW5kZXhdWydhY3Rpdml0aWVzJ10gPSBfLnZhbHVlcyggXy5tZXJnZShfLmtleUJ5KHJlc3BvbnNlLCAnY2lkJyksIFxuICAgICAgICAgICBfLmtleUJ5KHRoaXMucm9sZWFjdGl2aXR5U3VtbWFyaWVzW2luZGV4XVsnYWN0aXZpdGllcyddLCAnY2lkJykpKVxuICAgIH0pXG4gICAgXG4gIH1cbiAgZ2V0RW50aXR5QnlJZChpZDphbnkpe1xuICAgIGNvbnN0IHJlcUJvZHkgPSB7XG4gICAgICBmaWx0ZXI6IHtcbiAgICAgICAgXCJpc0RldGFpbFwiOiB0cnVlXG4gICAgICB9LFxuICAgICAgaWQ6IGlkXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVTdW1tYXJ5U2VydmljZS5nZXRBY3Rpdml0eUJ5SWQocmVxQm9keSlcbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlLnVuc3Vic2NyaWJlKClcbiAgfVxufVxuIl19