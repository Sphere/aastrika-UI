import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfAssessmentCardComponent } from './components/self-assessment-card/self-assessment-card.component';
import { SelfAssessmentComponent } from './components/self-assessment/self-assessment.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '@aastrika_npmjs/competency-web/core';


@NgModule({
  declarations: [SelfAssessmentCardComponent, SelfAssessmentComponent],
  imports: [
    CommonModule,
    MatIconModule,
    HttpClientModule,
    CoreModule
  ],
  exports: [SelfAssessmentCardComponent, SelfAssessmentComponent],
  schema: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SelfAssessmentModule { }
