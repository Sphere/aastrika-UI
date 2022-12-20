import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfAssessmentCardComponent } from './components/self-assessment-card/self-assessment-card.component';
import { SelfAssessmentComponent } from './components/self-assessment/self-assessment.component';
import { MatIconModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '@aastrika_npmjs/comptency/core';
var SelfAssessmentModule = /** @class */ (function () {
    function SelfAssessmentModule() {
    }
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
    return SelfAssessmentModule;
}());
export { SelfAssessmentModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZi1hc3Nlc3NtZW50Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYXN0cmlrYV9ucG1qcy9jb21wdGVuY3kvc2VsZi1hc3Nlc3NtZW50LyIsInNvdXJjZXMiOlsic2VsZi1hc3Nlc3NtZW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRyxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDL0csT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDakcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQWM1RDtJQUFBO0lBQW9DLENBQUM7SUFBeEIsb0JBQW9CO1FBVmhDLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLDJCQUEyQixFQUFFLHVCQUF1QixDQUFDO1lBQ3BFLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLGFBQWE7Z0JBQ2IsZ0JBQWdCO2dCQUNoQixVQUFVO2FBQ1g7WUFDRCxPQUFPLEVBQUMsQ0FBQywyQkFBMkIsRUFBRSx1QkFBdUIsQ0FBQztTQUMvRCxDQUFDO09BQ1csb0JBQW9CLENBQUk7SUFBRCwyQkFBQztDQUFBLEFBQXJDLElBQXFDO1NBQXhCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFNlbGZBc3Nlc3NtZW50Q2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zZWxmLWFzc2Vzc21lbnQtY2FyZC9zZWxmLWFzc2Vzc21lbnQtY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZkFzc2Vzc21lbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2VsZi1hc3Nlc3NtZW50L3NlbGYtYXNzZXNzbWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGFhc3RyaWthX25wbWpzL2NvbXB0ZW5jeS9jb3JlJztcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1NlbGZBc3Nlc3NtZW50Q2FyZENvbXBvbmVudCwgU2VsZkFzc2Vzc21lbnRDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBDb3JlTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6W1NlbGZBc3Nlc3NtZW50Q2FyZENvbXBvbmVudCwgU2VsZkFzc2Vzc21lbnRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNlbGZBc3Nlc3NtZW50TW9kdWxlIHsgfVxuIl19