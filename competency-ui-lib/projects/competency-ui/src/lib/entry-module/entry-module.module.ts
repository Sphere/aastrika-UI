import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlefAssessmentEntryComponent } from './components/slef-assessment-entry/slef-assessment-entry.component';
import { CompetencyEntryComponent } from './components/competency-entry/competency-entry.component';
import { MatIconModule } from '@angular/material'


@NgModule({
  declarations: [SlefAssessmentEntryComponent, CompetencyEntryComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[
    SlefAssessmentEntryComponent, 
    CompetencyEntryComponent]
})
export class EntryModuleModule { }
