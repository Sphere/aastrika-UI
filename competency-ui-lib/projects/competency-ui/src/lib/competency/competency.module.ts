import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequiredComptencyCardComponent } from './components/required-comptency-card/required-comptency-card.component';
import { GainedComptencyCardComponent } from './components/gained-comptency-card/gained-comptency-card.component';



@NgModule({
  declarations: [RequiredComptencyCardComponent, GainedComptencyCardComponent],
  imports: [
    CommonModule
  ],
  exports:[RequiredComptencyCardComponent,GainedComptencyCardComponent]
})
export class CompetencyModule { }
