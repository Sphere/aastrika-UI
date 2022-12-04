import { NgModule ,ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlefAssessmentEntryComponent } from './components/slef-assessment-entry/slef-assessment-entry.component';
import { CompetencyEntryComponent } from './components/competency-entry/competency-entry.component';
import { MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ConfigurationContext } from './services/configuration-context';
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
  providers:[]
})
export class EntryModule {
  /**
 * Take the config from consuming apps
 *
 * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
 */
  static forRoot(configContext: ConfigurationContext): ModuleWithProviders {
    return {
      ngModule: EntryModule,
      providers: [
        {provide: ConfigurationContext, useValue: configContext.config}
      ]
    }
  }
}
