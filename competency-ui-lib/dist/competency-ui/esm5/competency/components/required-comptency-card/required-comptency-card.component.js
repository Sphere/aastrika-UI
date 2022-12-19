import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { RequestUtil } from '../../services/request-util';
import { RequiredCompetencyService } from '../../services/required-competency.service';
var RequiredComptencyCardComponent = /** @class */ (function () {
    function RequiredComptencyCardComponent(requiredCompetencyService) {
        this.requiredCompetencyService = requiredCompetencyService;
        this.competencyData = [
            {
                title: 'Procurement and Distribution of HCM',
                description: 'Manages procurement and store raw materials for HCMs as per the pre-decided menu Supervises the preparation and distribution of HCM by Anganwadi Helper (AWH)',
                requiredLevel: 'level 4'
            },
            {
                title: 'Store management and planning and coordination of THR and Dry ration',
                description: 'Mobilizes children and conducts ECCE activities as per the yearly activity calendar and the ECCE manual ',
                requiredLevel: 'level 4'
            },
            {
                title: 'Procurement and Distribution of HCM',
                description: 'Manages procurement and store raw materials for HCMs as per the pre-decided menu Supervises the preparation and distribution of HCM by Anganwadi Helper (AWH)',
                requiredLevel: 'level 4'
            },
            {
                title: 'Early Childhood Care Education',
                description: 'Mobilizes children and conducts ECCE activities as per the yearly activity calendar and the ECCE manual ',
                requiredLevel: 'level 4'
            },
            {
                title: 'Procurement and Distribution of HCM',
                description: 'Manages procurement and store raw materials for HCMs as per the pre-decided menu Supervises the preparation and distribution of HCM by Anganwadi Helper (AWH)',
                requiredLevel: 'level 4'
            },
            {
                title: 'Early Childhood Care Education',
                description: 'Mobilizes children and conducts ECCE activities as per the yearly activity calendar and the ECCE manual ',
                requiredLevel: 'level 4'
            },
        ];
        this.panelOpenState = true;
        this.customCollapsedHeight = '100px';
        this.customExpandedHeight = '100px';
        this.loading = false;
        this.logs = [
            {
                index: 1,
                header: 'Understands HCM guidelines',
            },
            {
                index: 2,
                header: 'Lists raw material required',
            },
            {
                index: 3,
                header: 'Plans for storage',
            },
            {
                index: 4,
                header: 'Motivates the AWH and children on optimal hygiene and handwashing practices',
            },
            {
                index: 5,
                header: 'Course-Name Completion',
            },
        ];
        this.requestUtil = new RequestUtil();
    }
    RequiredComptencyCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.loading = true
        this.unsubscribe = this.getRequiredByPostion().pipe(mergeMap(function (res) {
            var formatedResponse = _this.requestUtil.formatedActivitityById(res);
            return of(formatedResponse);
        })).subscribe(function (res) {
            console.log(res);
        });
    };
    RequiredComptencyCardComponent.prototype.getRequiredByPostion = function () {
        var reqBody = {
            filter: {
                "isDetail": true
            }
        };
        return this.requiredCompetencyService.getRequiredCompetencyById(reqBody);
    };
    RequiredComptencyCardComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.unsubscribe();
    };
    RequiredComptencyCardComponent.ctorParameters = function () { return [
        { type: RequiredCompetencyService }
    ]; };
    RequiredComptencyCardComponent = tslib_1.__decorate([
        Component({
            selector: 'lib-required-comptency-card',
            template: "<ng-container *ngFor=\"let competency of competencyData\"\r\n  ><div class=\"card-container\">\r\n    <mat-accordion>\r\n      <mat-expansion-panel\r\n        class=\"w-full panel\"\r\n        (opened)=\"panelOpenState = true\"\r\n        (closed)=\"panelOpenState = false\"\r\n      >\r\n        <mat-expansion-panel-header\r\n          class=\"flex-between items-center panel-header w-full\"\r\n          collapsedHeight=\"auto\"\r\n          expandedHeight=\"auto\"\r\n        >\r\n          <mat-panel-description class=\"panel-header-description\">\r\n            <ng-container *ngIf=\"competency?.title\">\r\n              <div class=\"title\">{{ competency?.title }}</div>\r\n            </ng-container>\r\n          </mat-panel-description>\r\n          <!-- <div class=\"level mb-0 pointer-events\">\r\n            <mat-icon [ngClass]=\"{ arrowReverse: panelOpenState }\"\r\n              >keyboard_arrow_down</mat-icon\r\n            >\r\n          </div> -->\r\n        </mat-expansion-panel-header>\r\n\r\n        <lib-app-loader *ngIf=\"loading === true\"></lib-app-loader>\r\n        <div class=\"logs\">\r\n          <span class=\"log-title\">Levels:</span>\r\n          <ng-container *ngFor=\"let log of logs\">\r\n            <div class=\"log\">\r\n              <ng-container *ngIf=\"log.header\">\r\n                <span class=\"flex-1 log-items\"\r\n                  >{{ log.index }} : {{ log.header }}</span\r\n                >\r\n              </ng-container>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n  </div>\r\n</ng-container>\r\n",
            styles: [":root{font-size:16px;--blue:#1C5D95;--yellow:#FFF4DF;--teal:#A4DFCA;--black:#000000;--white:#ffffff;--light-gray:#eff6fc;--grey-100:#DFEDF9;--gray-200:#8E8E8E;--gray-300:#989898;--gray-400:#808080;--grey-500:#919191;--yellow-500:#FFFBB0;--blue-500:#7CB5E6}.button-primary{background-color:var(--blue)!important;border-radius:50px;gap:8px;color:var(--white)!important;border:none}.mat-primary-background{padding:9px 40px;width:310px;cursor:pointer}.card-container{margin:15px 2px;padding:16px 10px 20px 14px;box-shadow:0 0 4px rgba(0,0,0,.15);border-radius:10px;background:#fff}.title{font-size:16px;line-height:19px;letter-spacing:-.02em;color:#000}.description{font-size:14px;line-height:17px;letter-spacing:-.02em}.start-btn{background-color:#1c5d95!important;border-radius:50px;padding:8px 32px;gap:8px;font-size:16px;line-height:19px;color:#fff!important;margin-top:10px;border:none}.proficiency{color:#1c5d96;font-size:20px;cursor:pointer;margin-top:15px}.log-title{font-size:14px;line-height:24px;letter-spacing:-.02em;color:#1c5d95}.log{border-bottom:1px solid #ddd;padding-bottom:9px;margin-top:10px}.logs{padding:5px}.log-items{font-size:16px;line-height:19px;letter-spacing:-.02em;color:#000}::ng-deep .mat-expansion-panel-header{padding:0 5px!important}:host ::ng-deep .mat-expansion-panel-header:hover{background:rgba(255,255,255,.98)!important}:host ::ng-deep .mat-content{display:flex!important}.level{place-self:flex-end}"]
        })
    ], RequiredComptencyCardComponent);
    return RequiredComptencyCardComponent;
}());
export { RequiredComptencyCardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWlyZWQtY29tcHRlbmN5LWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFhc3RyaWthL2NvbXB0ZW5jeS9jb21wZXRlbmN5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9yZXF1aXJlZC1jb21wdGVuY3ktY2FyZC9yZXF1aXJlZC1jb21wdGVuY3ktY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxFQUFFLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFPdkY7SUEwQ0Usd0NBQ1UseUJBQW9EO1FBQXBELDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUF6QzlELG1CQUFjLEdBQUc7WUFDZjtnQkFDRSxLQUFLLEVBQUUscUNBQXFDO2dCQUM1QyxXQUFXLEVBQUUsK0pBQStKO2dCQUM1SyxhQUFhLEVBQUUsU0FBUzthQUN6QjtZQUNEO2dCQUNFLEtBQUssRUFBRSxzRUFBc0U7Z0JBQzdFLFdBQVcsRUFBRSwwR0FBMEc7Z0JBQ3ZILGFBQWEsRUFBRSxTQUFTO2FBQ3pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLHFDQUFxQztnQkFDNUMsV0FBVyxFQUFFLCtKQUErSjtnQkFDNUssYUFBYSxFQUFFLFNBQVM7YUFDekI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsZ0NBQWdDO2dCQUN2QyxXQUFXLEVBQUUsMEdBQTBHO2dCQUN2SCxhQUFhLEVBQUUsU0FBUzthQUN6QjtZQUNEO2dCQUNFLEtBQUssRUFBRSxxQ0FBcUM7Z0JBQzVDLFdBQVcsRUFBRSwrSkFBK0o7Z0JBQzVLLGFBQWEsRUFBRSxTQUFTO2FBQ3pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLGdDQUFnQztnQkFDdkMsV0FBVyxFQUFFLDBHQUEwRztnQkFDdkgsYUFBYSxFQUFFLFNBQVM7YUFDekI7U0FDRixDQUFBO1FBRUQsbUJBQWMsR0FBWSxJQUFJLENBQUE7UUFDOUIsMEJBQXFCLEdBQUcsT0FBTyxDQUFBO1FBQy9CLHlCQUFvQixHQUFHLE9BQU8sQ0FBQTtRQUc5QixZQUFPLEdBQUcsS0FBSyxDQUFBO1FBMkJmLFNBQUksR0FBRztZQUNMO2dCQUNFLEtBQUssRUFBRSxDQUFDO2dCQUNSLE1BQU0sRUFBRSw0QkFBNEI7YUFDckM7WUFDRDtnQkFDRSxLQUFLLEVBQUUsQ0FBQztnQkFDUixNQUFNLEVBQUUsNkJBQTZCO2FBQ3RDO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsTUFBTSxFQUFFLG1CQUFtQjthQUM1QjtZQUNEO2dCQUNFLEtBQUssRUFBRSxDQUFDO2dCQUNSLE1BQU0sRUFBRSw2RUFBNkU7YUFDdEY7WUFDRDtnQkFDRSxLQUFLLEVBQUUsQ0FBQztnQkFDUixNQUFNLEVBQUUsd0JBQXdCO2FBQ2pDO1NBRUYsQ0FBQTtRQTVDQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUE7SUFDdEMsQ0FBQztJQUVELGlEQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBDLHNCQUFzQjtRQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBQyxHQUFPO1lBQ25FLElBQU0sZ0JBQWdCLEdBQUksS0FBSSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUN0RSxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQzdCLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsR0FBUTtZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2xCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVPLDZEQUFvQixHQUE1QjtRQUNFLElBQU0sT0FBTyxHQUFHO1lBQ2QsTUFBTSxFQUFFO2dCQUNOLFVBQVUsRUFBRSxJQUFJO2FBQ2pCO1NBQ0YsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLHlCQUF5QixDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQzFFLENBQUM7SUEwQkQsb0RBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDaEMsQ0FBQzs7Z0JBbERvQyx5QkFBeUI7O0lBM0NuRCw4QkFBOEI7UUFMMUMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDZCQUE2QjtZQUN2Qyx3bkRBQXVEOztTQUV4RCxDQUFDO09BQ1csOEJBQThCLENBOEYxQztJQUFELHFDQUFDO0NBQUEsQUE5RkQsSUE4RkM7U0E5RlksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBvZiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBSZXF1ZXN0VXRpbCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3JlcXVlc3QtdXRpbCc7XHJcbmltcG9ydCB7IFJlcXVpcmVkQ29tcGV0ZW5jeVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9yZXF1aXJlZC1jb21wZXRlbmN5LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItcmVxdWlyZWQtY29tcHRlbmN5LWNhcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXF1aXJlZC1jb21wdGVuY3ktY2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcmVxdWlyZWQtY29tcHRlbmN5LWNhcmQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVxdWlyZWRDb21wdGVuY3lDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBjb21wZXRlbmN5RGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdQcm9jdXJlbWVudCBhbmQgRGlzdHJpYnV0aW9uIG9mIEhDTScsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnTWFuYWdlcyBwcm9jdXJlbWVudCBhbmQgc3RvcmUgcmF3IG1hdGVyaWFscyBmb3IgSENNcyBhcyBwZXIgdGhlIHByZS1kZWNpZGVkIG1lbnUgU3VwZXJ2aXNlcyB0aGUgcHJlcGFyYXRpb24gYW5kIGRpc3RyaWJ1dGlvbiBvZiBIQ00gYnkgQW5nYW53YWRpIEhlbHBlciAoQVdIKScsXHJcbiAgICAgIHJlcXVpcmVkTGV2ZWw6ICdsZXZlbCA0J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdTdG9yZSBtYW5hZ2VtZW50IGFuZCBwbGFubmluZyBhbmQgY29vcmRpbmF0aW9uIG9mIFRIUiBhbmQgRHJ5IHJhdGlvbicsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnTW9iaWxpemVzIGNoaWxkcmVuIGFuZCBjb25kdWN0cyBFQ0NFIGFjdGl2aXRpZXMgYXMgcGVyIHRoZSB5ZWFybHkgYWN0aXZpdHkgY2FsZW5kYXIgYW5kIHRoZSBFQ0NFIG1hbnVhbCAnLFxyXG4gICAgICByZXF1aXJlZExldmVsOiAnbGV2ZWwgNCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnUHJvY3VyZW1lbnQgYW5kIERpc3RyaWJ1dGlvbiBvZiBIQ00nLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ01hbmFnZXMgcHJvY3VyZW1lbnQgYW5kIHN0b3JlIHJhdyBtYXRlcmlhbHMgZm9yIEhDTXMgYXMgcGVyIHRoZSBwcmUtZGVjaWRlZCBtZW51IFN1cGVydmlzZXMgdGhlIHByZXBhcmF0aW9uIGFuZCBkaXN0cmlidXRpb24gb2YgSENNIGJ5IEFuZ2Fud2FkaSBIZWxwZXIgKEFXSCknLFxyXG4gICAgICByZXF1aXJlZExldmVsOiAnbGV2ZWwgNCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnRWFybHkgQ2hpbGRob29kIENhcmUgRWR1Y2F0aW9uJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdNb2JpbGl6ZXMgY2hpbGRyZW4gYW5kIGNvbmR1Y3RzIEVDQ0UgYWN0aXZpdGllcyBhcyBwZXIgdGhlIHllYXJseSBhY3Rpdml0eSBjYWxlbmRhciBhbmQgdGhlIEVDQ0UgbWFudWFsICcsXHJcbiAgICAgIHJlcXVpcmVkTGV2ZWw6ICdsZXZlbCA0J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdQcm9jdXJlbWVudCBhbmQgRGlzdHJpYnV0aW9uIG9mIEhDTScsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnTWFuYWdlcyBwcm9jdXJlbWVudCBhbmQgc3RvcmUgcmF3IG1hdGVyaWFscyBmb3IgSENNcyBhcyBwZXIgdGhlIHByZS1kZWNpZGVkIG1lbnUgU3VwZXJ2aXNlcyB0aGUgcHJlcGFyYXRpb24gYW5kIGRpc3RyaWJ1dGlvbiBvZiBIQ00gYnkgQW5nYW53YWRpIEhlbHBlciAoQVdIKScsXHJcbiAgICAgIHJlcXVpcmVkTGV2ZWw6ICdsZXZlbCA0J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdFYXJseSBDaGlsZGhvb2QgQ2FyZSBFZHVjYXRpb24nLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ01vYmlsaXplcyBjaGlsZHJlbiBhbmQgY29uZHVjdHMgRUNDRSBhY3Rpdml0aWVzIGFzIHBlciB0aGUgeWVhcmx5IGFjdGl2aXR5IGNhbGVuZGFyIGFuZCB0aGUgRUNDRSBtYW51YWwgJyxcclxuICAgICAgcmVxdWlyZWRMZXZlbDogJ2xldmVsIDQnXHJcbiAgICB9LFxyXG4gIF1cclxuXHJcbiAgcGFuZWxPcGVuU3RhdGU6IEJvb2xlYW4gPSB0cnVlXHJcbiAgY3VzdG9tQ29sbGFwc2VkSGVpZ2h0ID0gJzEwMHB4J1xyXG4gIGN1c3RvbUV4cGFuZGVkSGVpZ2h0ID0gJzEwMHB4J1xyXG4gIHByaXZhdGUgdW5zdWJzY3JpYmU6IFN1YnNjcmlwdGlvbjtcclxuICByZXF1ZXN0VXRpbDogYW55XHJcbiAgbG9hZGluZyA9IGZhbHNlXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZXF1aXJlZENvbXBldGVuY3lTZXJ2aWNlOiBSZXF1aXJlZENvbXBldGVuY3lTZXJ2aWNlXHJcbiAgKSB7IFxyXG4gICAgdGhpcy5yZXF1ZXN0VXRpbCA9IG5ldyBSZXF1ZXN0VXRpbCgpXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIHRoaXMubG9hZGluZyA9IHRydWVcclxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSB0aGlzLmdldFJlcXVpcmVkQnlQb3N0aW9uKCkucGlwZShtZXJnZU1hcCgocmVzOmFueSk9PntcclxuICAgICAgY29uc3QgZm9ybWF0ZWRSZXNwb25zZSA9ICB0aGlzLnJlcXVlc3RVdGlsLmZvcm1hdGVkQWN0aXZpdGl0eUJ5SWQocmVzKVxyXG4gICAgICByZXR1cm4gb2YoZm9ybWF0ZWRSZXNwb25zZSlcclxuICAgIH0pKS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFJlcXVpcmVkQnlQb3N0aW9uKCkge1xyXG4gICAgY29uc3QgcmVxQm9keSA9IHtcclxuICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgXCJpc0RldGFpbFwiOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1aXJlZENvbXBldGVuY3lTZXJ2aWNlLmdldFJlcXVpcmVkQ29tcGV0ZW5jeUJ5SWQocmVxQm9keSlcclxuICB9XHJcblxyXG4gIGxvZ3MgPSBbXHJcbiAgICB7XHJcbiAgICAgIGluZGV4OiAxLFxyXG4gICAgICBoZWFkZXI6ICdVbmRlcnN0YW5kcyBIQ00gZ3VpZGVsaW5lcycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbmRleDogMixcclxuICAgICAgaGVhZGVyOiAnTGlzdHMgcmF3IG1hdGVyaWFsIHJlcXVpcmVkJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGluZGV4OiAzLFxyXG4gICAgICBoZWFkZXI6ICdQbGFucyBmb3Igc3RvcmFnZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbmRleDogNCxcclxuICAgICAgaGVhZGVyOiAnTW90aXZhdGVzIHRoZSBBV0ggYW5kIGNoaWxkcmVuIG9uIG9wdGltYWwgaHlnaWVuZSBhbmQgaGFuZHdhc2hpbmcgcHJhY3RpY2VzJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGluZGV4OiA1LFxyXG4gICAgICBoZWFkZXI6ICdDb3Vyc2UtTmFtZSBDb21wbGV0aW9uJyxcclxuICAgIH0sXHJcbiAgICBcclxuICBdXHJcbiAgXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlLnVuc3Vic2NyaWJlKClcclxuICB9XHJcbn1cclxuIl19