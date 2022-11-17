import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetencyDashboardComponent } from './competency-dashboard.component';
import { MatTabsModule, MatIconModule } from '@angular/material';
import { AssessmentCardComponent } from '../components/assessment-card/assessment-card.component';



@NgModule({
  declarations: [
    CompetencyDashboardComponent,
    AssessmentCardComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule
  ],
  exports: [
    CompetencyDashboardComponent
  ]
})
export class CompetencyDashboardModule { }
