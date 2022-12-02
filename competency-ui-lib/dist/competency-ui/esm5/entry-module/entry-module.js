import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlefAssessmentEntryComponent } from './components/slef-assessment-entry/slef-assessment-entry.component';
import { CompetencyEntryComponent } from './components/competency-entry/competency-entry.component';
import { MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ConfigurationContext } from './services/configuration-context';
var EntryModule = /** @class */ (function () {
    function EntryModule() {
    }
    EntryModule_1 = EntryModule;
    /**
   * Take the config from consuming apps
   *
   * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
   */
    EntryModule.forRoot = function (configContext) {
        console.log("Preparing to handle configuration context.");
        console.log('config data ------', configContext.config);
        return {
            ngModule: EntryModule_1,
            providers: [
                { provide: ConfigurationContext, useValue: configContext.config }
            ]
        };
    };
    var EntryModule_1;
    EntryModule = EntryModule_1 = tslib_1.__decorate([
        NgModule({
            declarations: [SlefAssessmentEntryComponent, CompetencyEntryComponent,],
            imports: [
                CommonModule,
                RouterModule,
                MatIconModule,
            ],
            exports: [
                SlefAssessmentEntryComponent,
                CompetencyEntryComponent,
            ],
            providers: []
        })
    ], EntryModule);
    return EntryModule;
}());
export { EntryModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnktbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFhc3RyaWthL2NvbXB0ZW5jeS8iLCJzb3VyY2VzIjpbImVudHJ5LW1vZHVsZS9lbnRyeS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXNCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUNsSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBY3hFO0lBQUE7SUFnQkEsQ0FBQztvQkFoQlksV0FBVztJQUN0Qjs7OztLQUlDO0lBQ00sbUJBQU8sR0FBZCxVQUFlLGFBQW1DO1FBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQztRQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN0RCxPQUFPO1lBQ0wsUUFBUSxFQUFFLGFBQVc7WUFDckIsU0FBUyxFQUFFO2dCQUNULEVBQUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxhQUFhLENBQUMsTUFBTSxFQUFDO2FBQ2hFO1NBQ0YsQ0FBQTtJQUNILENBQUM7O0lBZlUsV0FBVztRQWJ2QixRQUFRLENBQUM7WUFDUixZQUFZLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSx3QkFBd0IsRUFBRTtZQUN2RSxPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixZQUFZO2dCQUNaLGFBQWE7YUFDZDtZQUNELE9BQU8sRUFBRTtnQkFDUCw0QkFBNEI7Z0JBQzVCLHdCQUF3QjthQUN6QjtZQUNELFNBQVMsRUFBQyxFQUFFO1NBQ2IsQ0FBQztPQUNXLFdBQVcsQ0FnQnZCO0lBQUQsa0JBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQWhCWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgLE1vZHVsZVdpdGhQcm92aWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBTbGVmQXNzZXNzbWVudEVudHJ5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NsZWYtYXNzZXNzbWVudC1lbnRyeS9zbGVmLWFzc2Vzc21lbnQtZW50cnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcGV0ZW5jeUVudHJ5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbXBldGVuY3ktZW50cnkvY29tcGV0ZW5jeS1lbnRyeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uQ29udGV4dCB9IGZyb20gJy4vc2VydmljZXMvY29uZmlndXJhdGlvbi1jb250ZXh0JztcclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtTbGVmQXNzZXNzbWVudEVudHJ5Q29tcG9uZW50LCBDb21wZXRlbmN5RW50cnlDb21wb25lbnQsXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGUsXHJcbiAgICBNYXRJY29uTW9kdWxlLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgU2xlZkFzc2Vzc21lbnRFbnRyeUNvbXBvbmVudCxcclxuICAgIENvbXBldGVuY3lFbnRyeUNvbXBvbmVudCxcclxuICBdLFxyXG4gIHByb3ZpZGVyczpbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRW50cnlNb2R1bGUgeyBcclxuICAvKipcclxuICogVGFrZSB0aGUgY29uZmlnIGZyb20gY29uc3VtaW5nIGFwcHNcclxuICpcclxuICogQGF1dGhvciBBbWFuIEt1bWFyIFNoYXJtYSA8YW1hbmt1bWFyLnNoYXJtYUB0YXJlbnRvLmNvbT5cclxuICovXHJcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnQ29udGV4dDogQ29uZmlndXJhdGlvbkNvbnRleHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIGNvbnNvbGUubG9nKGBQcmVwYXJpbmcgdG8gaGFuZGxlIGNvbmZpZ3VyYXRpb24gY29udGV4dC5gKTtcclxuICAgIGNvbnNvbGUubG9nKCdjb25maWcgZGF0YSAtLS0tLS0nLGNvbmZpZ0NvbnRleHQuY29uZmlnKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEVudHJ5TW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7cHJvdmlkZTogQ29uZmlndXJhdGlvbkNvbnRleHQsIHVzZVZhbHVlOiBjb25maWdDb250ZXh0LmNvbmZpZ31cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=