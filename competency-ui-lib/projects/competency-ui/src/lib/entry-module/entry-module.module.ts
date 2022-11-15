import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlefAssessmentEntryComponent } from './components/slef-assessment-entry/slef-assessment-entry.component';
import { CompetencyEntryComponent } from './components/competency-entry/competency-entry.component';



@NgModule({
  declarations: [SlefAssessmentEntryComponent, CompetencyEntryComponent],
  imports: [
    CommonModule
  ],
  exports:[
    SlefAssessmentEntryComponent, 
    CompetencyEntryComponent]
})
export class EntryModuleModule { }
