import {  NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfAssessmentCardComponent } from './components/self-assessment-card/self-assessment-card.component';
import { SelfAssessmentComponent } from './components/self-assessment/self-assessment.component';
import { MatIconModule } from '@angular/material/icon';
import { CoreModule } from '@aastrika_npmjs/comptency/core';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({ declarations: [SelfAssessmentCardComponent, SelfAssessmentComponent],
    exports: [SelfAssessmentCardComponent, SelfAssessmentComponent], imports: [CommonModule,
        MatIconModule,
        CoreModule,
        TranslateModule
    ], providers: [] })
export class SelfAssessmentModule { }
