import { NgModule } from '@angular/core';
import { CompetencyUiComponent } from './competency-ui.component';
import { CompetencyRoutingModule } from './competency-routing/competency-routing.module';
import { CompetencyCardComponent } from './components';
import { EntryModuleModule } from './entry-module/entry-module.module';
import { CompetencyDashboardModule } from './competency-dashboard/competency-dashboard.module';
// import { SelfAssessmentModule } from './self-assessment/self-assessment.module';


@NgModule({
  declarations: [
    CompetencyUiComponent,
     CompetencyCardComponent
    ],
  imports: [
    CompetencyRoutingModule,
    EntryModuleModule,
    CompetencyDashboardModule,
    // SelfAssessmentModule
  ],
  exports: [CompetencyUiComponent]
})
export class CompetencyUiModule { }
