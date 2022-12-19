import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { RequestUtil } from '../../services/request-util';
import { RequiredCompetencyService } from '../../services/required-competency.service';
let RequiredComptencyCardComponent = class RequiredComptencyCardComponent {
    constructor(requiredCompetencyService) {
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
    ngOnInit() {
        // this.loading = true
        this.unsubscribe = this.getRequiredByPostion().pipe(mergeMap((res) => {
            const formatedResponse = this.requestUtil.formatedActivitityById(res);
            return of(formatedResponse);
        })).subscribe((res) => {
            console.log(res);
        });
    }
    getRequiredByPostion() {
        const reqBody = {
            filter: {
                "isDetail": true
            }
        };
        return this.requiredCompetencyService.getRequiredCompetencyById(reqBody);
    }
    ngOnDestroy() {
        this.unsubscribe.unsubscribe();
    }
};
RequiredComptencyCardComponent.ctorParameters = () => [
    { type: RequiredCompetencyService }
];
RequiredComptencyCardComponent = tslib_1.__decorate([
    Component({
        selector: 'lib-required-comptency-card',
        template: "<ng-container *ngFor=\"let competency of competencyData\"\n  ><div class=\"card-container\">\n    <mat-accordion>\n      <mat-expansion-panel\n        class=\"w-full panel\"\n        (opened)=\"panelOpenState = true\"\n        (closed)=\"panelOpenState = false\"\n      >\n        <mat-expansion-panel-header\n          class=\"flex-between items-center panel-header w-full\"\n          collapsedHeight=\"auto\"\n          expandedHeight=\"auto\"\n        >\n          <mat-panel-description class=\"panel-header-description\">\n            <ng-container *ngIf=\"competency?.title\">\n              <div class=\"title\">{{ competency?.title }}</div>\n            </ng-container>\n          </mat-panel-description>\n          <!-- <div class=\"level mb-0 pointer-events\">\n            <mat-icon [ngClass]=\"{ arrowReverse: panelOpenState }\"\n              >keyboard_arrow_down</mat-icon\n            >\n          </div> -->\n        </mat-expansion-panel-header>\n\n        <lib-app-loader *ngIf=\"loading === true\"></lib-app-loader>\n        <div class=\"logs\">\n          <span class=\"log-title\">Levels:</span>\n          <ng-container *ngFor=\"let log of logs\">\n            <div class=\"log\">\n              <ng-container *ngIf=\"log.header\">\n                <span class=\"flex-1 log-items\"\n                  >{{ log.index }} : {{ log.header }}</span\n                >\n              </ng-container>\n            </div>\n          </ng-container>\n        </div>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </div>\n</ng-container>\n",
        styles: [":root{font-size:16px;--blue:#1C5D95;--yellow:#FFF4DF;--teal:#A4DFCA;--black:#000000;--white:#ffffff;--light-gray:#eff6fc;--grey-100:#DFEDF9;--gray-200:#8E8E8E;--gray-300:#989898;--gray-400:#808080;--grey-500:#919191;--yellow-500:#FFFBB0;--blue-500:#7CB5E6}.button-primary{background-color:var(--blue)!important;border-radius:50px;gap:8px;color:var(--white)!important;border:none}.mat-primary-background{padding:9px 40px;width:310px;cursor:pointer}.card-container{margin:15px 2px;padding:16px 10px 20px 14px;box-shadow:0 0 4px rgba(0,0,0,.15);border-radius:10px;background:#fff}.title{font-size:16px;line-height:19px;letter-spacing:-.02em;color:#000}.description{font-size:14px;line-height:17px;letter-spacing:-.02em}.start-btn{background-color:#1c5d95!important;border-radius:50px;padding:8px 32px;gap:8px;font-size:16px;line-height:19px;color:#fff!important;margin-top:10px;border:none}.proficiency{color:#1c5d96;font-size:20px;cursor:pointer;margin-top:15px}.log-title{font-size:14px;line-height:24px;letter-spacing:-.02em;color:#1c5d95}.log{border-bottom:1px solid #ddd;padding-bottom:9px;margin-top:10px}.logs{padding:5px}.log-items{font-size:16px;line-height:19px;letter-spacing:-.02em;color:#000}::ng-deep .mat-expansion-panel-header{padding:0 5px!important}:host ::ng-deep .mat-expansion-panel-header:hover{background:rgba(255,255,255,.98)!important}:host ::ng-deep .mat-content{display:flex!important}.level{-ms-grid-row-align:flex-end;-ms-grid-column-align:flex-end;place-self:flex-end}"]
    })
], RequiredComptencyCardComponent);
export { RequiredComptencyCardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWlyZWQtY29tcHRlbmN5LWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFhc3RyaWthX25wbWpzL2NvbXB0ZW5jeS9jb21wZXRlbmN5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9yZXF1aXJlZC1jb21wdGVuY3ktY2FyZC9yZXF1aXJlZC1jb21wdGVuY3ktY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxFQUFFLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFPdkYsSUFBYSw4QkFBOEIsR0FBM0MsTUFBYSw4QkFBOEI7SUEwQ3pDLFlBQ1UseUJBQW9EO1FBQXBELDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUF6QzlELG1CQUFjLEdBQUc7WUFDZjtnQkFDRSxLQUFLLEVBQUUscUNBQXFDO2dCQUM1QyxXQUFXLEVBQUUsK0pBQStKO2dCQUM1SyxhQUFhLEVBQUUsU0FBUzthQUN6QjtZQUNEO2dCQUNFLEtBQUssRUFBRSxzRUFBc0U7Z0JBQzdFLFdBQVcsRUFBRSwwR0FBMEc7Z0JBQ3ZILGFBQWEsRUFBRSxTQUFTO2FBQ3pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLHFDQUFxQztnQkFDNUMsV0FBVyxFQUFFLCtKQUErSjtnQkFDNUssYUFBYSxFQUFFLFNBQVM7YUFDekI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsZ0NBQWdDO2dCQUN2QyxXQUFXLEVBQUUsMEdBQTBHO2dCQUN2SCxhQUFhLEVBQUUsU0FBUzthQUN6QjtZQUNEO2dCQUNFLEtBQUssRUFBRSxxQ0FBcUM7Z0JBQzVDLFdBQVcsRUFBRSwrSkFBK0o7Z0JBQzVLLGFBQWEsRUFBRSxTQUFTO2FBQ3pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLGdDQUFnQztnQkFDdkMsV0FBVyxFQUFFLDBHQUEwRztnQkFDdkgsYUFBYSxFQUFFLFNBQVM7YUFDekI7U0FDRixDQUFBO1FBRUQsbUJBQWMsR0FBWSxJQUFJLENBQUE7UUFDOUIsMEJBQXFCLEdBQUcsT0FBTyxDQUFBO1FBQy9CLHlCQUFvQixHQUFHLE9BQU8sQ0FBQTtRQUc5QixZQUFPLEdBQUcsS0FBSyxDQUFBO1FBMkJmLFNBQUksR0FBRztZQUNMO2dCQUNFLEtBQUssRUFBRSxDQUFDO2dCQUNSLE1BQU0sRUFBRSw0QkFBNEI7YUFDckM7WUFDRDtnQkFDRSxLQUFLLEVBQUUsQ0FBQztnQkFDUixNQUFNLEVBQUUsNkJBQTZCO2FBQ3RDO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsTUFBTSxFQUFFLG1CQUFtQjthQUM1QjtZQUNEO2dCQUNFLEtBQUssRUFBRSxDQUFDO2dCQUNSLE1BQU0sRUFBRSw2RUFBNkU7YUFDdEY7WUFDRDtnQkFDRSxLQUFLLEVBQUUsQ0FBQztnQkFDUixNQUFNLEVBQUUsd0JBQXdCO2FBQ2pDO1NBRUYsQ0FBQTtRQTVDQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUE7SUFDdEMsQ0FBQztJQUVELFFBQVE7UUFDTixzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBTyxFQUFDLEVBQUU7WUFDdEUsTUFBTSxnQkFBZ0IsR0FBSSxJQUFJLENBQUMsV0FBVyxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3RFLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUE7UUFDN0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2xCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVPLG9CQUFvQjtRQUMxQixNQUFNLE9BQU8sR0FBRztZQUNkLE1BQU0sRUFBRTtnQkFDTixVQUFVLEVBQUUsSUFBSTthQUNqQjtTQUNGLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMxRSxDQUFDO0lBMEJELFdBQVc7UUFDVCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ2hDLENBQUM7Q0FDRixDQUFBOztZQW5Ec0MseUJBQXlCOztBQTNDbkQsOEJBQThCO0lBTDFDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSw2QkFBNkI7UUFDdkMsb2lEQUF1RDs7S0FFeEQsQ0FBQztHQUNXLDhCQUE4QixDQThGMUM7U0E5RlksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgb2YsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBSZXF1ZXN0VXRpbCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3JlcXVlc3QtdXRpbCc7XG5pbXBvcnQgeyBSZXF1aXJlZENvbXBldGVuY3lTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcmVxdWlyZWQtY29tcGV0ZW5jeS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXJlcXVpcmVkLWNvbXB0ZW5jeS1jYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlcXVpcmVkLWNvbXB0ZW5jeS1jYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVxdWlyZWQtY29tcHRlbmN5LWNhcmQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZXF1aXJlZENvbXB0ZW5jeUNhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgY29tcGV0ZW5jeURhdGEgPSBbXG4gICAge1xuICAgICAgdGl0bGU6ICdQcm9jdXJlbWVudCBhbmQgRGlzdHJpYnV0aW9uIG9mIEhDTScsXG4gICAgICBkZXNjcmlwdGlvbjogJ01hbmFnZXMgcHJvY3VyZW1lbnQgYW5kIHN0b3JlIHJhdyBtYXRlcmlhbHMgZm9yIEhDTXMgYXMgcGVyIHRoZSBwcmUtZGVjaWRlZCBtZW51IFN1cGVydmlzZXMgdGhlIHByZXBhcmF0aW9uIGFuZCBkaXN0cmlidXRpb24gb2YgSENNIGJ5IEFuZ2Fud2FkaSBIZWxwZXIgKEFXSCknLFxuICAgICAgcmVxdWlyZWRMZXZlbDogJ2xldmVsIDQnXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1N0b3JlIG1hbmFnZW1lbnQgYW5kIHBsYW5uaW5nIGFuZCBjb29yZGluYXRpb24gb2YgVEhSIGFuZCBEcnkgcmF0aW9uJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnTW9iaWxpemVzIGNoaWxkcmVuIGFuZCBjb25kdWN0cyBFQ0NFIGFjdGl2aXRpZXMgYXMgcGVyIHRoZSB5ZWFybHkgYWN0aXZpdHkgY2FsZW5kYXIgYW5kIHRoZSBFQ0NFIG1hbnVhbCAnLFxuICAgICAgcmVxdWlyZWRMZXZlbDogJ2xldmVsIDQnXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1Byb2N1cmVtZW50IGFuZCBEaXN0cmlidXRpb24gb2YgSENNJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnTWFuYWdlcyBwcm9jdXJlbWVudCBhbmQgc3RvcmUgcmF3IG1hdGVyaWFscyBmb3IgSENNcyBhcyBwZXIgdGhlIHByZS1kZWNpZGVkIG1lbnUgU3VwZXJ2aXNlcyB0aGUgcHJlcGFyYXRpb24gYW5kIGRpc3RyaWJ1dGlvbiBvZiBIQ00gYnkgQW5nYW53YWRpIEhlbHBlciAoQVdIKScsXG4gICAgICByZXF1aXJlZExldmVsOiAnbGV2ZWwgNCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnRWFybHkgQ2hpbGRob29kIENhcmUgRWR1Y2F0aW9uJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnTW9iaWxpemVzIGNoaWxkcmVuIGFuZCBjb25kdWN0cyBFQ0NFIGFjdGl2aXRpZXMgYXMgcGVyIHRoZSB5ZWFybHkgYWN0aXZpdHkgY2FsZW5kYXIgYW5kIHRoZSBFQ0NFIG1hbnVhbCAnLFxuICAgICAgcmVxdWlyZWRMZXZlbDogJ2xldmVsIDQnXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1Byb2N1cmVtZW50IGFuZCBEaXN0cmlidXRpb24gb2YgSENNJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnTWFuYWdlcyBwcm9jdXJlbWVudCBhbmQgc3RvcmUgcmF3IG1hdGVyaWFscyBmb3IgSENNcyBhcyBwZXIgdGhlIHByZS1kZWNpZGVkIG1lbnUgU3VwZXJ2aXNlcyB0aGUgcHJlcGFyYXRpb24gYW5kIGRpc3RyaWJ1dGlvbiBvZiBIQ00gYnkgQW5nYW53YWRpIEhlbHBlciAoQVdIKScsXG4gICAgICByZXF1aXJlZExldmVsOiAnbGV2ZWwgNCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnRWFybHkgQ2hpbGRob29kIENhcmUgRWR1Y2F0aW9uJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnTW9iaWxpemVzIGNoaWxkcmVuIGFuZCBjb25kdWN0cyBFQ0NFIGFjdGl2aXRpZXMgYXMgcGVyIHRoZSB5ZWFybHkgYWN0aXZpdHkgY2FsZW5kYXIgYW5kIHRoZSBFQ0NFIG1hbnVhbCAnLFxuICAgICAgcmVxdWlyZWRMZXZlbDogJ2xldmVsIDQnXG4gICAgfSxcbiAgXVxuXG4gIHBhbmVsT3BlblN0YXRlOiBCb29sZWFuID0gdHJ1ZVxuICBjdXN0b21Db2xsYXBzZWRIZWlnaHQgPSAnMTAwcHgnXG4gIGN1c3RvbUV4cGFuZGVkSGVpZ2h0ID0gJzEwMHB4J1xuICBwcml2YXRlIHVuc3Vic2NyaWJlOiBTdWJzY3JpcHRpb247XG4gIHJlcXVlc3RVdGlsOiBhbnlcbiAgbG9hZGluZyA9IGZhbHNlXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZXF1aXJlZENvbXBldGVuY3lTZXJ2aWNlOiBSZXF1aXJlZENvbXBldGVuY3lTZXJ2aWNlXG4gICkgeyBcbiAgICB0aGlzLnJlcXVlc3RVdGlsID0gbmV3IFJlcXVlc3RVdGlsKClcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gdGhpcy5nZXRSZXF1aXJlZEJ5UG9zdGlvbigpLnBpcGUobWVyZ2VNYXAoKHJlczphbnkpPT57XG4gICAgICBjb25zdCBmb3JtYXRlZFJlc3BvbnNlID0gIHRoaXMucmVxdWVzdFV0aWwuZm9ybWF0ZWRBY3Rpdml0aXR5QnlJZChyZXMpXG4gICAgICByZXR1cm4gb2YoZm9ybWF0ZWRSZXNwb25zZSlcbiAgICB9KSkuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIGdldFJlcXVpcmVkQnlQb3N0aW9uKCkge1xuICAgIGNvbnN0IHJlcUJvZHkgPSB7XG4gICAgICBmaWx0ZXI6IHtcbiAgICAgICAgXCJpc0RldGFpbFwiOiB0cnVlXG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5yZXF1aXJlZENvbXBldGVuY3lTZXJ2aWNlLmdldFJlcXVpcmVkQ29tcGV0ZW5jeUJ5SWQocmVxQm9keSlcbiAgfVxuXG4gIGxvZ3MgPSBbXG4gICAge1xuICAgICAgaW5kZXg6IDEsXG4gICAgICBoZWFkZXI6ICdVbmRlcnN0YW5kcyBIQ00gZ3VpZGVsaW5lcycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpbmRleDogMixcbiAgICAgIGhlYWRlcjogJ0xpc3RzIHJhdyBtYXRlcmlhbCByZXF1aXJlZCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBpbmRleDogMyxcbiAgICAgIGhlYWRlcjogJ1BsYW5zIGZvciBzdG9yYWdlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGluZGV4OiA0LFxuICAgICAgaGVhZGVyOiAnTW90aXZhdGVzIHRoZSBBV0ggYW5kIGNoaWxkcmVuIG9uIG9wdGltYWwgaHlnaWVuZSBhbmQgaGFuZHdhc2hpbmcgcHJhY3RpY2VzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGluZGV4OiA1LFxuICAgICAgaGVhZGVyOiAnQ291cnNlLU5hbWUgQ29tcGxldGlvbicsXG4gICAgfSxcbiAgICBcbiAgXVxuICBcbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZS51bnN1YnNjcmliZSgpXG4gIH1cbn1cbiJdfQ==