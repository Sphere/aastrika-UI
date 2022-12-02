import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { GainedService } from '../../services/gained.service';
import { RequestUtil } from '../../services/request-util';
let GainedComptencyCardComponent = class GainedComptencyCardComponent {
    constructor(gainedService) {
        this.gainedService = gainedService;
        this.loading = false;
        this.panelOpenState = false;
        this.requestUtil = new RequestUtil();
    }
    ngOnInit() {
        this.loading = true;
        const allEntity = this.getAllEntity();
        const userPassbook = this.getAllUserPassbook();
        forkJoin([allEntity, userPassbook]).subscribe((res) => {
            const response = this.requestUtil.formatedGainedCompetency(res[0].result.response, res[1].result.content);
            this.gainedproficencyData = response;
            this.loading = false;
        });
    }
    getAllUserPassbook() {
        const reqBody = {
            "request": {
                "typeName": "competency"
            }
        };
        return this.gainedService.fetchUserPassbook(reqBody);
    }
    getAllEntity() {
        const reqBody = {
            "search": {
                "type": "Competency"
            }
        };
        return this.gainedService.fetchAllEntity(reqBody);
    }
};
GainedComptencyCardComponent.ctorParameters = () => [
    { type: GainedService }
];
GainedComptencyCardComponent = tslib_1.__decorate([
    Component({
        selector: 'lib-gained-comptency-card',
        template: "<lib-app-loader *ngIf=\"loading === true\"></lib-app-loader>\r\n<ng-container *ngFor=\"let proficency of gainedproficencyData\">\r\n<div class=\"card-container example-container container-balanced\">\r\n    <!-- <div class=\"date justify-end mr-2\">\r\n        {{date}}\r\n    </div> -->\r\n    <ng-container *ngIf=\"proficency?.title\">\r\n        <div class=\"title\">{{proficency?.title}}</div>\r\n    </ng-container>\r\n\r\n    <div class=\"levelsTitle\">\r\n        Levels:\r\n    </div>\r\n    <mat-accordion>\r\n        <mat-expansion-panel class=\"w-full panel\" hideToggle (opened)=\"panelOpenState = true\"\r\n            (closed)=\"panelOpenState = false\">\r\n            <mat-expansion-panel-header class=\"flex-between items-center panel-header w-full\">\r\n                <mat-panel-description class=\"panel-header-description\">\r\n                    <ng-container *ngFor=\"let proficiency of proficency?.proficiencyLevels\">\r\n                        <ng-container *ngIf=\"proficiency.selected; else addLevel\">\r\n                            <div class=\"level mb-1\" [ngStyle]=\"{'background-color': proficiency.color}\">\r\n                                {{proficiency?.displayLevel}}\r\n                            </div>\r\n                        </ng-container>\r\n                        <ng-template #addLevel>\r\n                            <div (click)=\"$event.stopPropagation();\" class=\"level mb-1 pointer-events\">\r\n                                {{proficiency?.displayLevel}}\r\n                            </div>\r\n                        </ng-template>\r\n                    </ng-container>\r\n                    <div class=\"level mb-1 pointer-events\">\r\n                        <mat-icon [ngClass]=\"{'arrowReverse': panelOpenState }\">keyboard_arrow_down</mat-icon>\r\n                    </div>\r\n                </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            <div>\r\n                <span class=\"log-header\">Log:</span>\r\n                <ng-container *ngFor=\"let log of proficency?.logs; let logIndex = index\">\r\n                    <div class=\"log\">\r\n                        <div class=\"flex\">\r\n                            <ng-container *ngIf=\"log.header\">\r\n                                <span class=\"flex-1\">Level {{log.level}}: {{log.header}}</span>\r\n                                <span class=\"log-date mr-2\">{{log?.date| date:'dd/MM/yyyy'}}</span>\r\n                            </ng-container>\r\n                        </div>\r\n                        <ng-container *ngIf=\"log.description\">\r\n                            <div class=\"mt-2\" [ngClass]=\"{'hideContent': !log.keyboardArrowUp}\">{{log.description}}</div>\r\n                            <div class=\"justify-end\">\r\n                                <mat-icon (click)=\"log.keyboardArrowUp = !log.keyboardArrowUp\" class=\"mr-3 pointer-events\" [ngClass]=\"{'arrowReverse': log.keyboardArrowUp }\">keyboard_arrow_down</mat-icon>\r\n                            </div>\r\n                        </ng-container>\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n        </mat-expansion-panel>\r\n    </mat-accordion>\r\n</div>\r\n</ng-container>",
        styles: [":root{font-size:16px;--blue:#1C5D95;--yellow:#FFF4DF;--teal:#A4DFCA;--black:#000000;--white:#ffffff;--light-gray:#eff6fc;--grey-100:#DFEDF9;--gray-200:#8E8E8E;--gray-300:#989898;--gray-400:#808080;--grey-500:#919191;--yellow-500:#FFFBB0;--blue-500:#7CB5E6}.button-primary{background-color:var(--blue)!important;border-radius:50px;gap:8px;color:var(--white)!important;border:none}.mat-primary-background{padding:9px 40px;width:310px;cursor:pointer}.date{font-size:12px;line-height:14px;letter-spacing:-.02em;color:var(--gray-300)}.justify-end{display:flex;justify-content:flex-end}.card-container{margin:15px 2px;padding:14px 10px 20px 14px;box-shadow:0 0 4px rgba(0,0,0,.15);border-radius:10px;background:var(--white)}.title{font-size:24px;line-height:29px;letter-spacing:-.02em;margin-bottom:18px}.levelsTitle{font-size:14px;line-height:24px;letter-spacing:-.02em;color:var(--black)}.panel{box-shadow:0 0!important;padding:1px 3px 1px 0;pointer-events:none}.panel-header{padding:0!important;background:0 0!important}.panel-header-description{margin:0!important;padding:1px}.pointer-events{pointer-events:all;cursor:pointer}.arrowReverse{transform:rotateX(180deg)}.level{width:47px;max-width:16.6%;height:36px;display:flex;justify-content:center;align-items:center;box-shadow:0 0 2.17333px rgba(0,0,0,.2509803922)}.log-header{font-size:14px;line-height:24px;letter-spacing:-.02em;color:var(--black)}.log{font-style:italic;font-size:14px;line-height:16px;letter-spacing:-.02em;color:var(--gray-400);border-bottom:1px solid #ddd;padding-bottom:9px;margin-top:10px}.log-date{font-style:normal;font-size:12px;line-height:14px;letter-spacing:-.02em;color:var(--gray-400)}::ng-deep .mat-expansion-panel-body{padding:0!important}:host ::ng-deep .mat-content{display:unset!important}.hideContent{display:none}"]
    })
], GainedComptencyCardComponent);
export { GainedComptencyCardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FpbmVkLWNvbXB0ZW5jeS1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYXN0cmlrYS9jb21wdGVuY3kvY29tcGV0ZW5jeS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FpbmVkLWNvbXB0ZW5jeS1jYXJkL2dhaW5lZC1jb21wdGVuY3ktY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBTzFELElBQWEsNEJBQTRCLEdBQXpDLE1BQWEsNEJBQTRCO0lBTXZDLFlBQ1MsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFKckMsWUFBTyxHQUFHLEtBQUssQ0FBQTtRQUNmLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBTTlCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQTtJQUN0QyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1FBQ25CLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUNyQyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtRQUM5QyxRQUFRLENBQUMsQ0FBQyxTQUFTLEVBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUMsRUFBRTtZQUNsRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDekcsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFFBQVEsQ0FBQTtZQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtRQUN0QixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFTyxrQkFBa0I7UUFDeEIsTUFBTSxPQUFPLEdBQUc7WUFDZCxTQUFTLEVBQUU7Z0JBQ1QsVUFBVSxFQUFFLFlBQVk7YUFDekI7U0FDRixDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3RELENBQUM7SUFHTyxZQUFZO1FBQ2xCLE1BQU0sT0FBTyxHQUFHO1lBQ2QsUUFBUSxFQUFFO2dCQUNSLE1BQU0sRUFBRSxZQUFZO2FBQ3JCO1NBQ0YsQ0FBQztRQUNGLE9BQVEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDcEQsQ0FBQztDQUNGLENBQUE7O1lBbkN5QixhQUFhOztBQVAxQiw0QkFBNEI7SUFMeEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDJCQUEyQjtRQUNyQyw0dEdBQXFEOztLQUV0RCxDQUFDO0dBQ1csNEJBQTRCLENBMEN4QztTQTFDWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBwaXBlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZvcmtKb2luIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEdhaW5lZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nYWluZWQuc2VydmljZSc7XHJcbmltcG9ydCB7IFJlcXVlc3RVdGlsIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcmVxdWVzdC11dGlsJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gtZXMnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1nYWluZWQtY29tcHRlbmN5LWNhcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nYWluZWQtY29tcHRlbmN5LWNhcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dhaW5lZC1jb21wdGVuY3ktY2FyZC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHYWluZWRDb21wdGVuY3lDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgcmVxdWVzdFV0aWw6IGFueVxyXG4gIGxvYWRpbmcgPSBmYWxzZVxyXG4gIHBhbmVsT3BlblN0YXRlOiBCb29sZWFuID0gZmFsc2U7XHJcbiAgZ2FpbmVkcHJvZmljZW5jeURhdGE6YW55XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZ2FpbmVkU2VydmljZTogR2FpbmVkU2VydmljZVxyXG5cclxuICApIHtcclxuICAgIHRoaXMucmVxdWVzdFV0aWwgPSBuZXcgUmVxdWVzdFV0aWwoKVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXHJcbiAgICBjb25zdCBhbGxFbnRpdHkgPSB0aGlzLmdldEFsbEVudGl0eSgpXHJcbiAgICBjb25zdCB1c2VyUGFzc2Jvb2sgPSB0aGlzLmdldEFsbFVzZXJQYXNzYm9vaygpXHJcbiAgICBmb3JrSm9pbihbYWxsRW50aXR5LHVzZXJQYXNzYm9va10pLnN1YnNjcmliZSgocmVzKT0+e1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IHRoaXMucmVxdWVzdFV0aWwuZm9ybWF0ZWRHYWluZWRDb21wZXRlbmN5KHJlc1swXS5yZXN1bHQucmVzcG9uc2UsIHJlc1sxXS5yZXN1bHQuY29udGVudClcclxuICAgICAgdGhpcy5nYWluZWRwcm9maWNlbmN5RGF0YSA9IHJlc3BvbnNlXHJcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXHJcbiAgICB9KVxyXG4gIH1cclxuIFxyXG4gIHByaXZhdGUgZ2V0QWxsVXNlclBhc3Nib29rKCkge1xyXG4gICAgY29uc3QgcmVxQm9keSA9IHtcclxuICAgICAgXCJyZXF1ZXN0XCI6IHtcclxuICAgICAgICBcInR5cGVOYW1lXCI6IFwiY29tcGV0ZW5jeVwiXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcy5nYWluZWRTZXJ2aWNlLmZldGNoVXNlclBhc3Nib29rKHJlcUJvZHkpXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBnZXRBbGxFbnRpdHkoKSB7XHJcbiAgICBjb25zdCByZXFCb2R5ID0ge1xyXG4gICAgICBcInNlYXJjaFwiOiB7XHJcbiAgICAgICAgXCJ0eXBlXCI6IFwiQ29tcGV0ZW5jeVwiXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gIHRoaXMuZ2FpbmVkU2VydmljZS5mZXRjaEFsbEVudGl0eShyZXFCb2R5KVxyXG4gIH1cclxufVxyXG4iXX0=