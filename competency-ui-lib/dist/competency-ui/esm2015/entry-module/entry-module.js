var EntryModule_1;
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlefAssessmentEntryComponent } from './components/slef-assessment-entry/slef-assessment-entry.component';
import { CompetencyEntryComponent } from './components/competency-entry/competency-entry.component';
import { MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ConfigService } from './services/config.service';
let EntryModule = EntryModule_1 = class EntryModule {
    /**
   * Take the config from consuming apps
   *
   * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
   */
    static forRoot(configContext) {
        return {
            ngModule: EntryModule_1,
            providers: [ConfigService,
                { provide: 'config', useValue: configContext.config }
            ]
        };
    }
};
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
export { EntryModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnktbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFhc3RyaWthX25wbWpzL2NvbXB0ZW5jeS8iLCJzb3VyY2VzIjpbImVudHJ5LW1vZHVsZS9lbnRyeS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFzQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDbEgsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDcEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFjMUQsSUFBYSxXQUFXLG1CQUF4QixNQUFhLFdBQVc7SUFDdEI7Ozs7S0FJQztJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBbUM7UUFDaEQsT0FBTztZQUNMLFFBQVEsRUFBRSxhQUFXO1lBQ3JCLFNBQVMsRUFBRSxDQUFDLGFBQWE7Z0JBQ3ZCLEVBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsYUFBYSxDQUFDLE1BQU0sRUFBQzthQUNwRDtTQUNGLENBQUE7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQWRZLFdBQVc7SUFidkIsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFLENBQUMsNEJBQTRCLEVBQUUsd0JBQXdCLEVBQUU7UUFDdkUsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLFlBQVk7WUFDWixhQUFhO1NBQ2Q7UUFDRCxPQUFPLEVBQUU7WUFDUCw0QkFBNEI7WUFDNUIsd0JBQXdCO1NBQ3pCO1FBQ0QsU0FBUyxFQUFDLEVBQUU7S0FDYixDQUFDO0dBQ1csV0FBVyxDQWN2QjtTQWRZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSAsTW9kdWxlV2l0aFByb3ZpZGVyc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU2xlZkFzc2Vzc21lbnRFbnRyeUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zbGVmLWFzc2Vzc21lbnQtZW50cnkvc2xlZi1hc3Nlc3NtZW50LWVudHJ5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wZXRlbmN5RW50cnlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29tcGV0ZW5jeS1lbnRyeS9jb21wZXRlbmN5LWVudHJ5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25Db250ZXh0IH0gZnJvbSAnLi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLWNvbnRleHQnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29uZmlnLnNlcnZpY2UnO1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU2xlZkFzc2Vzc21lbnRFbnRyeUNvbXBvbmVudCwgQ29tcGV0ZW5jeUVudHJ5Q29tcG9uZW50LF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTbGVmQXNzZXNzbWVudEVudHJ5Q29tcG9uZW50LFxuICAgIENvbXBldGVuY3lFbnRyeUNvbXBvbmVudCxcbiAgXSxcbiAgcHJvdmlkZXJzOltdXG59KVxuZXhwb3J0IGNsYXNzIEVudHJ5TW9kdWxlIHsgXG4gIC8qKlxuICogVGFrZSB0aGUgY29uZmlnIGZyb20gY29uc3VtaW5nIGFwcHNcbiAqXG4gKiBAYXV0aG9yIEFtYW4gS3VtYXIgU2hhcm1hIDxhbWFua3VtYXIuc2hhcm1hQHRhcmVudG8uY29tPlxuICovXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZ0NvbnRleHQ6IENvbmZpZ3VyYXRpb25Db250ZXh0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBFbnRyeU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW0NvbmZpZ1NlcnZpY2UsXG4gICAgICAgIHtwcm92aWRlOiAnY29uZmlnJywgdXNlVmFsdWU6IGNvbmZpZ0NvbnRleHQuY29uZmlnfVxuICAgICAgXVxuICAgIH1cbiAgfVxufVxuIl19