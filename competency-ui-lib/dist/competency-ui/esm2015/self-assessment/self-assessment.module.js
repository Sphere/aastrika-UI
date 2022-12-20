import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfAssessmentCardComponent } from './components/self-assessment-card/self-assessment-card.component';
import { SelfAssessmentComponent } from './components/self-assessment/self-assessment.component';
import { MatIconModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '@aastrika_npmjs/comptency/core';
let SelfAssessmentModule = class SelfAssessmentModule {
};
SelfAssessmentModule = tslib_1.__decorate([
    NgModule({
        declarations: [SelfAssessmentCardComponent, SelfAssessmentComponent],
        imports: [
            CommonModule,
            MatIconModule,
            HttpClientModule,
            CoreModule
        ],
        exports: [SelfAssessmentCardComponent, SelfAssessmentComponent]
    })
], SelfAssessmentModule);
export { SelfAssessmentModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZi1hc3Nlc3NtZW50Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYXN0cmlrYV9ucG1qcy9jb21wdGVuY3kvc2VsZi1hc3Nlc3NtZW50LyIsInNvdXJjZXMiOlsic2VsZi1hc3Nlc3NtZW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRyxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDL0csT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDakcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQWM1RCxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtDQUFJLENBQUE7QUFBeEIsb0JBQW9CO0lBVmhDLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRSxDQUFDLDJCQUEyQixFQUFFLHVCQUF1QixDQUFDO1FBQ3BFLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixhQUFhO1lBQ2IsZ0JBQWdCO1lBQ2hCLFVBQVU7U0FDWDtRQUNELE9BQU8sRUFBQyxDQUFDLDJCQUEyQixFQUFFLHVCQUF1QixDQUFDO0tBQy9ELENBQUM7R0FDVyxvQkFBb0IsQ0FBSTtTQUF4QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTZWxmQXNzZXNzbWVudENhcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2VsZi1hc3Nlc3NtZW50LWNhcmQvc2VsZi1hc3Nlc3NtZW50LWNhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGZBc3Nlc3NtZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NlbGYtYXNzZXNzbWVudC9zZWxmLWFzc2Vzc21lbnQuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJ0BhYXN0cmlrYV9ucG1qcy9jb21wdGVuY3kvY29yZSc7XG5cblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtTZWxmQXNzZXNzbWVudENhcmRDb21wb25lbnQsIFNlbGZBc3Nlc3NtZW50Q29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgQ29yZU1vZHVsZVxuICBdLFxuICBleHBvcnRzOltTZWxmQXNzZXNzbWVudENhcmRDb21wb25lbnQsIFNlbGZBc3Nlc3NtZW50Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTZWxmQXNzZXNzbWVudE1vZHVsZSB7IH1cbiJdfQ==