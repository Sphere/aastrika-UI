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
var CompetencyModule = /** @class */ (function () {
    function CompetencyModule() {
    }
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
    return CompetencyModule;
}());
export { CompetencyModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGV0ZW5jeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWFzdHJpa2FfbnBtanMvY29tcHRlbmN5L2NvbXBldGVuY3kvIiwic291cmNlcyI6WyJjb21wZXRlbmN5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFHLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUE7QUFDeEQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDeEgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDbEgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDaEgsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDOUYsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFxQjVEO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFwQjVCLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWiw4QkFBOEI7Z0JBQzlCLDRCQUE0QjtnQkFDNUIsNEJBQTRCO2dCQUM1QixzQkFBc0I7YUFBQztZQUN6QixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixhQUFhO2dCQUNiLGFBQWE7Z0JBQ2Isa0JBQWtCO2dCQUNsQixnQkFBZ0I7Z0JBQ2hCLFVBQVU7YUFDWDtZQUNELE9BQU8sRUFBRSxDQUFDLDhCQUE4QjtnQkFDdEMsNEJBQTRCO2dCQUM1Qiw0QkFBNEI7Z0JBQzVCLHNCQUFzQjthQUN2QjtTQUNGLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7U0FBcEIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyAgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJ1xuaW1wb3J0IHsgUmVxdWlyZWRDb21wdGVuY3lDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JlcXVpcmVkLWNvbXB0ZW5jeS1jYXJkL3JlcXVpcmVkLWNvbXB0ZW5jeS1jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHYWluZWRDb21wdGVuY3lDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dhaW5lZC1jb21wdGVuY3ktY2FyZC9nYWluZWQtY29tcHRlbmN5LWNhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBldGVuY3lEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29tcGV0ZW5jeS1kYXNoYm9hcmQvY29tcGV0ZW5jeS1kYXNoYm9hcmQuY29tcG9uZW50JztcbmltcG9ydCB7IEFjdGl2ZVN1bW1hcnlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYWN0aXZlLXN1bW1hcnkvYWN0aXZlLXN1bW1hcnkuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdFRhYnNNb2R1bGUsIE1hdEljb25Nb2R1bGUsIE1hdEV4cGFuc2lvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAYWFzdHJpa2FfbnBtanMvY29tcHRlbmN5L2NvcmUnO1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUmVxdWlyZWRDb21wdGVuY3lDYXJkQ29tcG9uZW50LCBcbiAgICBHYWluZWRDb21wdGVuY3lDYXJkQ29tcG9uZW50LCBcbiAgICBDb21wZXRlbmN5RGFzaGJvYXJkQ29tcG9uZW50LCBcbiAgICBBY3RpdmVTdW1tYXJ5Q29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRUYWJzTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgQ29yZU1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbUmVxdWlyZWRDb21wdGVuY3lDYXJkQ29tcG9uZW50LFxuICAgIEdhaW5lZENvbXB0ZW5jeUNhcmRDb21wb25lbnQsXG4gICAgQ29tcGV0ZW5jeURhc2hib2FyZENvbXBvbmVudCxcbiAgICBBY3RpdmVTdW1tYXJ5Q29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29tcGV0ZW5jeU1vZHVsZSB7IH1cbiJdfQ==