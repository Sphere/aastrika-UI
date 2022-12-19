import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlefAssessmentEntryComponent } from './components/slef-assessment-entry/slef-assessment-entry.component';
import { CompetencyEntryComponent } from './components/competency-entry/competency-entry.component';
import { MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ConfigService } from './services/config.service';
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
        return {
            ngModule: EntryModule_1,
            providers: [ConfigService,
                { provide: 'config', useValue: configContext.config }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnktbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFhc3RyaWthX25wbWpzL2NvbXB0ZW5jeS8iLCJzb3VyY2VzIjpbImVudHJ5LW1vZHVsZS9lbnRyeS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXNCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUNsSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQWMxRDtJQUFBO0lBY0EsQ0FBQztvQkFkWSxXQUFXO0lBQ3RCOzs7O0tBSUM7SUFDTSxtQkFBTyxHQUFkLFVBQWUsYUFBbUM7UUFDaEQsT0FBTztZQUNMLFFBQVEsRUFBRSxhQUFXO1lBQ3JCLFNBQVMsRUFBRSxDQUFDLGFBQWE7Z0JBQ3ZCLEVBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsYUFBYSxDQUFDLE1BQU0sRUFBQzthQUNwRDtTQUNGLENBQUE7SUFDSCxDQUFDOztJQWJVLFdBQVc7UUFidkIsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLENBQUMsNEJBQTRCLEVBQUUsd0JBQXdCLEVBQUU7WUFDdkUsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osWUFBWTtnQkFDWixhQUFhO2FBQ2Q7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsNEJBQTRCO2dCQUM1Qix3QkFBd0I7YUFDekI7WUFDRCxTQUFTLEVBQUMsRUFBRTtTQUNiLENBQUM7T0FDVyxXQUFXLENBY3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQWRELElBY0M7U0FkWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgLE1vZHVsZVdpdGhQcm92aWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFNsZWZBc3Nlc3NtZW50RW50cnlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2xlZi1hc3Nlc3NtZW50LWVudHJ5L3NsZWYtYXNzZXNzbWVudC1lbnRyeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcGV0ZW5jeUVudHJ5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbXBldGVuY3ktZW50cnkvY29tcGV0ZW5jeS1lbnRyeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uQ29udGV4dCB9IGZyb20gJy4vc2VydmljZXMvY29uZmlndXJhdGlvbi1jb250ZXh0JztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlJztcbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1NsZWZBc3Nlc3NtZW50RW50cnlDb21wb25lbnQsIENvbXBldGVuY3lFbnRyeUNvbXBvbmVudCxdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgU2xlZkFzc2Vzc21lbnRFbnRyeUNvbXBvbmVudCxcbiAgICBDb21wZXRlbmN5RW50cnlDb21wb25lbnQsXG4gIF0sXG4gIHByb3ZpZGVyczpbXVxufSlcbmV4cG9ydCBjbGFzcyBFbnRyeU1vZHVsZSB7IFxuICAvKipcbiAqIFRha2UgdGhlIGNvbmZpZyBmcm9tIGNvbnN1bWluZyBhcHBzXG4gKlxuICogQGF1dGhvciBBbWFuIEt1bWFyIFNoYXJtYSA8YW1hbmt1bWFyLnNoYXJtYUB0YXJlbnRvLmNvbT5cbiAqL1xuICBzdGF0aWMgZm9yUm9vdChjb25maWdDb250ZXh0OiBDb25maWd1cmF0aW9uQ29udGV4dCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRW50cnlNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtDb25maWdTZXJ2aWNlLFxuICAgICAgICB7cHJvdmlkZTogJ2NvbmZpZycsIHVzZVZhbHVlOiBjb25maWdDb250ZXh0LmNvbmZpZ31cbiAgICAgIF1cbiAgICB9XG4gIH1cbn1cbiJdfQ==