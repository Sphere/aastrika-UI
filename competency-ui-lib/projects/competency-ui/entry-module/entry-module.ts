import { NgModule ,ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlefAssessmentEntryComponent } from './components/slef-assessment-entry/slef-assessment-entry.component';
import { CompetencyEntryComponent } from './components/competency-entry/competency-entry.component';
import { ConfigService } from './services/config.service';
import { MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
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
  providers:[ConfigService]
})
export class EntryModule { 
  static forRoot(configService): ModuleWithProviders {
    console.log(configService)
    return {
      ngModule: EntryModule,
      providers: [
        {provide: 'configService', useClass: configService}
      ]
    }
  }
}
