import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfAssessmentCardComponent } from './components/self-assessment-card/self-assessment-card.component';



@NgModule({
  declarations: [SelfAssessmentCardComponent],
  imports: [
    CommonModule
  ],
  exports:[SelfAssessmentCardComponent]
})
export class SelfAssessmentModule { }
