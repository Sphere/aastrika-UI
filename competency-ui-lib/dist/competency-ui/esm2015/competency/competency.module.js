import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RequiredComptencyCardComponent } from './components/required-comptency-card/required-comptency-card.component';
import { GainedComptencyCardComponent } from './components/gained-comptency-card/gained-comptency-card.component';
import { CompetencyDashboardComponent } from './components/competency-dashboard/competency-dashboard.component';
import { ActiveSummaryComponent } from './components/active-summary/active-summary.component';
import { MatTabsModule, MatIconModule, MatExpansionModule } from '@angular/material';
import { CoreModule } from '@aastrika/comptency/core';
let CompetencyModule = class CompetencyModule {
};
CompetencyModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            RequiredComptencyCardComponent,
            GainedComptencyCardComponent,
            CompetencyDashboardComponent,
            ActiveSummaryComponent
        ],
        imports: [
            CommonModule,
            MatTabsModule,
            MatIconModule,
            MatExpansionModule,
            HttpClientModule,
            CoreModule
        ],
        exports: [RequiredComptencyCardComponent,
            GainedComptencyCardComponent,
            CompetencyDashboardComponent,
            ActiveSummaryComponent
        ]
    })
], CompetencyModule);
export { CompetencyModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGV0ZW5jeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWFzdHJpa2EvY29tcHRlbmN5L2NvbXBldGVuY3kvIiwic291cmNlcyI6WyJjb21wZXRlbmN5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFHLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUE7QUFDeEQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDeEgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDbEgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDaEgsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDOUYsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFxQnRELElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0NBQUksQ0FBQTtBQUFwQixnQkFBZ0I7SUFwQjVCLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLDhCQUE4QjtZQUM5Qiw0QkFBNEI7WUFDNUIsNEJBQTRCO1lBQzVCLHNCQUFzQjtTQUFDO1FBQ3pCLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixhQUFhO1lBQ2IsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixnQkFBZ0I7WUFDaEIsVUFBVTtTQUNYO1FBQ0QsT0FBTyxFQUFFLENBQUMsOEJBQThCO1lBQ3RDLDRCQUE0QjtZQUM1Qiw0QkFBNEI7WUFDNUIsc0JBQXNCO1NBQ3ZCO0tBQ0YsQ0FBQztHQUNXLGdCQUFnQixDQUFJO1NBQXBCLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7ICBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnXHJcbmltcG9ydCB7IFJlcXVpcmVkQ29tcHRlbmN5Q2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yZXF1aXJlZC1jb21wdGVuY3ktY2FyZC9yZXF1aXJlZC1jb21wdGVuY3ktY2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHYWluZWRDb21wdGVuY3lDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dhaW5lZC1jb21wdGVuY3ktY2FyZC9nYWluZWQtY29tcHRlbmN5LWNhcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcGV0ZW5jeURhc2hib2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb21wZXRlbmN5LWRhc2hib2FyZC9jb21wZXRlbmN5LWRhc2hib2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBY3RpdmVTdW1tYXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FjdGl2ZS1zdW1tYXJ5L2FjdGl2ZS1zdW1tYXJ5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdFRhYnNNb2R1bGUsIE1hdEljb25Nb2R1bGUsIE1hdEV4cGFuc2lvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJ0BhYXN0cmlrYS9jb21wdGVuY3kvY29yZSc7XHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBSZXF1aXJlZENvbXB0ZW5jeUNhcmRDb21wb25lbnQsIFxyXG4gICAgR2FpbmVkQ29tcHRlbmN5Q2FyZENvbXBvbmVudCwgXHJcbiAgICBDb21wZXRlbmN5RGFzaGJvYXJkQ29tcG9uZW50LCBcclxuICAgIEFjdGl2ZVN1bW1hcnlDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE1hdFRhYnNNb2R1bGUsXHJcbiAgICBNYXRJY29uTW9kdWxlLFxyXG4gICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxyXG4gICAgSHR0cENsaWVudE1vZHVsZSxcclxuICAgIENvcmVNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtSZXF1aXJlZENvbXB0ZW5jeUNhcmRDb21wb25lbnQsXHJcbiAgICBHYWluZWRDb21wdGVuY3lDYXJkQ29tcG9uZW50LFxyXG4gICAgQ29tcGV0ZW5jeURhc2hib2FyZENvbXBvbmVudCxcclxuICAgIEFjdGl2ZVN1bW1hcnlDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21wZXRlbmN5TW9kdWxlIHsgfVxyXG4iXX0=