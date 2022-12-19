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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGV0ZW5jeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWFzdHJpa2EvY29tcHRlbmN5L2NvbXBldGVuY3kvIiwic291cmNlcyI6WyJjb21wZXRlbmN5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFHLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUE7QUFDeEQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDeEgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDbEgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDaEgsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDOUYsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFxQnREO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFwQjVCLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWiw4QkFBOEI7Z0JBQzlCLDRCQUE0QjtnQkFDNUIsNEJBQTRCO2dCQUM1QixzQkFBc0I7YUFBQztZQUN6QixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixhQUFhO2dCQUNiLGFBQWE7Z0JBQ2Isa0JBQWtCO2dCQUNsQixnQkFBZ0I7Z0JBQ2hCLFVBQVU7YUFDWDtZQUNELE9BQU8sRUFBRSxDQUFDLDhCQUE4QjtnQkFDdEMsNEJBQTRCO2dCQUM1Qiw0QkFBNEI7Z0JBQzVCLHNCQUFzQjthQUN2QjtTQUNGLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7U0FBcEIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgIEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCdcclxuaW1wb3J0IHsgUmVxdWlyZWRDb21wdGVuY3lDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JlcXVpcmVkLWNvbXB0ZW5jeS1jYXJkL3JlcXVpcmVkLWNvbXB0ZW5jeS1jYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdhaW5lZENvbXB0ZW5jeUNhcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZ2FpbmVkLWNvbXB0ZW5jeS1jYXJkL2dhaW5lZC1jb21wdGVuY3ktY2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wZXRlbmN5RGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbXBldGVuY3ktZGFzaGJvYXJkL2NvbXBldGVuY3ktZGFzaGJvYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFjdGl2ZVN1bW1hcnlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYWN0aXZlLXN1bW1hcnkvYWN0aXZlLXN1bW1hcnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0VGFic01vZHVsZSwgTWF0SWNvbk1vZHVsZSwgTWF0RXhwYW5zaW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGFhc3RyaWthL2NvbXB0ZW5jeS9jb3JlJztcclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFJlcXVpcmVkQ29tcHRlbmN5Q2FyZENvbXBvbmVudCwgXHJcbiAgICBHYWluZWRDb21wdGVuY3lDYXJkQ29tcG9uZW50LCBcclxuICAgIENvbXBldGVuY3lEYXNoYm9hcmRDb21wb25lbnQsIFxyXG4gICAgQWN0aXZlU3VtbWFyeUNvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTWF0VGFic01vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICBNYXRFeHBhbnNpb25Nb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgQ29yZU1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1JlcXVpcmVkQ29tcHRlbmN5Q2FyZENvbXBvbmVudCxcclxuICAgIEdhaW5lZENvbXB0ZW5jeUNhcmRDb21wb25lbnQsXHJcbiAgICBDb21wZXRlbmN5RGFzaGJvYXJkQ29tcG9uZW50LFxyXG4gICAgQWN0aXZlU3VtbWFyeUNvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBldGVuY3lNb2R1bGUgeyB9XHJcbiJdfQ==