import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfAssessmentCardComponent } from './components/self-assessment-card/self-assessment-card.component';
import { SelfAssessmentComponent } from './components/self-assessment/self-assessment.component';
import { MatIconModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '@aastrika_npmjs/comptency/core';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [SelfAssessmentCardComponent, SelfAssessmentComponent],
  imports: [
    CommonModule,
    MatIconModule,
    HttpClientModule,
    CoreModule,
    TranslateModule
  ],
  exports:[SelfAssessmentCardComponent, SelfAssessmentComponent]
})
export class SelfAssessmentModule { }
