var EntryModule_1;
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlefAssessmentEntryComponent } from './components/slef-assessment-entry/slef-assessment-entry.component';
import { CompetencyEntryComponent } from './components/competency-entry/competency-entry.component';
import { MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ConfigurationContext } from './services/configuration-context';
let EntryModule = EntryModule_1 = class EntryModule {
    /**
   * Take the config from consuming apps
   *
   * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
   */
    static forRoot(configContext) {
        console.log(`Preparing to handle configuration context.`);
        console.log('config data ------', configContext.config);
        return {
            ngModule: EntryModule_1,
            providers: [
                { provide: ConfigurationContext, useValue: configContext.config }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnktbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFhc3RyaWthL2NvbXB0ZW5jeS8iLCJzb3VyY2VzIjpbImVudHJ5LW1vZHVsZS9lbnRyeS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFzQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDbEgsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDcEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQWN4RSxJQUFhLFdBQVcsbUJBQXhCLE1BQWEsV0FBVztJQUN0Qjs7OztLQUlDO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFtQztRQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7UUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDdEQsT0FBTztZQUNMLFFBQVEsRUFBRSxhQUFXO1lBQ3JCLFNBQVMsRUFBRTtnQkFDVCxFQUFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsYUFBYSxDQUFDLE1BQU0sRUFBQzthQUNoRTtTQUNGLENBQUE7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQWhCWSxXQUFXO0lBYnZCLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRSxDQUFDLDRCQUE0QixFQUFFLHdCQUF3QixFQUFFO1FBQ3ZFLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixZQUFZO1lBQ1osYUFBYTtTQUNkO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsNEJBQTRCO1lBQzVCLHdCQUF3QjtTQUN6QjtRQUNELFNBQVMsRUFBQyxFQUFFO0tBQ2IsQ0FBQztHQUNXLFdBQVcsQ0FnQnZCO1NBaEJZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSAsTW9kdWxlV2l0aFByb3ZpZGVyc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFNsZWZBc3Nlc3NtZW50RW50cnlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2xlZi1hc3Nlc3NtZW50LWVudHJ5L3NsZWYtYXNzZXNzbWVudC1lbnRyeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wZXRlbmN5RW50cnlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29tcGV0ZW5jeS1lbnRyeS9jb21wZXRlbmN5LWVudHJ5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25Db250ZXh0IH0gZnJvbSAnLi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLWNvbnRleHQnO1xyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1NsZWZBc3Nlc3NtZW50RW50cnlDb21wb25lbnQsIENvbXBldGVuY3lFbnRyeUNvbXBvbmVudCxdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIFJvdXRlck1vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBTbGVmQXNzZXNzbWVudEVudHJ5Q29tcG9uZW50LFxyXG4gICAgQ29tcGV0ZW5jeUVudHJ5Q29tcG9uZW50LFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOltdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbnRyeU1vZHVsZSB7IFxyXG4gIC8qKlxyXG4gKiBUYWtlIHRoZSBjb25maWcgZnJvbSBjb25zdW1pbmcgYXBwc1xyXG4gKlxyXG4gKiBAYXV0aG9yIEFtYW4gS3VtYXIgU2hhcm1hIDxhbWFua3VtYXIuc2hhcm1hQHRhcmVudG8uY29tPlxyXG4gKi9cclxuICBzdGF0aWMgZm9yUm9vdChjb25maWdDb250ZXh0OiBDb25maWd1cmF0aW9uQ29udGV4dCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgY29uc29sZS5sb2coYFByZXBhcmluZyB0byBoYW5kbGUgY29uZmlndXJhdGlvbiBjb250ZXh0LmApO1xyXG4gICAgY29uc29sZS5sb2coJ2NvbmZpZyBkYXRhIC0tLS0tLScsY29uZmlnQ29udGV4dC5jb25maWcpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogRW50cnlNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtwcm92aWRlOiBDb25maWd1cmF0aW9uQ29udGV4dCwgdXNlVmFsdWU6IGNvbmZpZ0NvbnRleHQuY29uZmlnfVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==