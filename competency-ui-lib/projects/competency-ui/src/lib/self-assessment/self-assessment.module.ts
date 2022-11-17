import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfAssessmentComponent } from './self-assessment.component';
import { MatTabsModule, MatIconModule } from '@angular/material';
// import { AssessmentCardComponent } from '../components/assessment-card/assessment-card.component';


@NgModule({
  declarations: [SelfAssessmentComponent,
    // AssessmentCardComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule
  ],
  exports:[SelfAssessmentComponent]
})
export class SelfAssessmentModule { }
