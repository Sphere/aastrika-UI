import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { RequiredComptencyCardComponent } from './components/required-comptency-card/required-comptency-card.component';
import { GainedComptencyCardComponent } from './components/gained-comptency-card/gained-comptency-card.component';
import { CompetencyDashboardComponent } from './components/competency-dashboard/competency-dashboard.component';
import { ActiveSummaryComponent } from './components/active-summary/active-summary.component';
import {
  MatTabsModule,
  MatIconModule,
  MatExpansionModule,
  MatProgressBarModule,
  MatProgressSpinnerModule } from '@angular/material';
import { CoreModule } from '@aastrika_npmjs/comptency/core';
import { CompetencyAccordionComponent } from './components/competency-accordion/competency-accordion.component';
import { SelfAssessmentModule } from '@aastrika_npmjs/comptency/self-assessment';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    RequiredComptencyCardComponent,
    GainedComptencyCardComponent,
    CompetencyDashboardComponent,
    ActiveSummaryComponent, CompetencyAccordionComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    CoreModule,
    SelfAssessmentModule,
    TranslateModule
  ],
  exports: [RequiredComptencyCardComponent,
    GainedComptencyCardComponent,
    CompetencyDashboardComponent,
    ActiveSummaryComponent
  ]
})
export class CompetencyModule { }
