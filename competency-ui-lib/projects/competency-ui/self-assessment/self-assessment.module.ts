import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfAssessmentCardComponent } from './components/self-assessment-card/self-assessment-card.component';
import { SelfAssessmentComponent } from './components/self-assessment/self-assessment.component';


@NgModule({
  declarations: [SelfAssessmentCardComponent, SelfAssessmentComponent],
  imports: [
    CommonModule
  ],
  exports:[SelfAssessmentCardComponent, SelfAssessmentComponent]
})
export class SelfAssessmentModule { }
