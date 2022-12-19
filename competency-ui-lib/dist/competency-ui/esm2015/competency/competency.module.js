import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RequiredComptencyCardComponent } from './components/required-comptency-card/required-comptency-card.component';
import { GainedComptencyCardComponent } from './components/gained-comptency-card/gained-comptency-card.component';
import { CompetencyDashboardComponent } from './components/competency-dashboard/competency-dashboard.component';
import { ActiveSummaryComponent } from './components/active-summary/active-summary.component';
import { MatTabsModule, MatIconModule, MatExpansionModule } from '@angular/material';
import { CoreModule } from '@aastrika_npmjs/comptency/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGV0ZW5jeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWFzdHJpa2FfbnBtanMvY29tcHRlbmN5L2NvbXBldGVuY3kvIiwic291cmNlcyI6WyJjb21wZXRlbmN5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFHLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUE7QUFDeEQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDeEgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDbEgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDaEgsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDOUYsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFxQjVELElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0NBQUksQ0FBQTtBQUFwQixnQkFBZ0I7SUFwQjVCLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLDhCQUE4QjtZQUM5Qiw0QkFBNEI7WUFDNUIsNEJBQTRCO1lBQzVCLHNCQUFzQjtTQUFDO1FBQ3pCLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixhQUFhO1lBQ2IsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixnQkFBZ0I7WUFDaEIsVUFBVTtTQUNYO1FBQ0QsT0FBTyxFQUFFLENBQUMsOEJBQThCO1lBQ3RDLDRCQUE0QjtZQUM1Qiw0QkFBNEI7WUFDNUIsc0JBQXNCO1NBQ3ZCO0tBQ0YsQ0FBQztHQUNXLGdCQUFnQixDQUFJO1NBQXBCLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgIEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCdcbmltcG9ydCB7IFJlcXVpcmVkQ29tcHRlbmN5Q2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yZXF1aXJlZC1jb21wdGVuY3ktY2FyZC9yZXF1aXJlZC1jb21wdGVuY3ktY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2FpbmVkQ29tcHRlbmN5Q2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9nYWluZWQtY29tcHRlbmN5LWNhcmQvZ2FpbmVkLWNvbXB0ZW5jeS1jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wZXRlbmN5RGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbXBldGVuY3ktZGFzaGJvYXJkL2NvbXBldGVuY3ktZGFzaGJvYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY3RpdmVTdW1tYXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FjdGl2ZS1zdW1tYXJ5L2FjdGl2ZS1zdW1tYXJ5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRUYWJzTW9kdWxlLCBNYXRJY29uTW9kdWxlLCBNYXRFeHBhbnNpb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGFhc3RyaWthX25wbWpzL2NvbXB0ZW5jeS9jb3JlJztcbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFJlcXVpcmVkQ29tcHRlbmN5Q2FyZENvbXBvbmVudCwgXG4gICAgR2FpbmVkQ29tcHRlbmN5Q2FyZENvbXBvbmVudCwgXG4gICAgQ29tcGV0ZW5jeURhc2hib2FyZENvbXBvbmVudCwgXG4gICAgQWN0aXZlU3VtbWFyeUNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0VGFic01vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIENvcmVNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1JlcXVpcmVkQ29tcHRlbmN5Q2FyZENvbXBvbmVudCxcbiAgICBHYWluZWRDb21wdGVuY3lDYXJkQ29tcG9uZW50LFxuICAgIENvbXBldGVuY3lEYXNoYm9hcmRDb21wb25lbnQsXG4gICAgQWN0aXZlU3VtbWFyeUNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBldGVuY3lNb2R1bGUgeyB9XG4iXX0=