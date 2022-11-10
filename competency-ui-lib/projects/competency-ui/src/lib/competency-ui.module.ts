import { NgModule } from '@angular/core';
import { CompetencyUiComponent } from './competency-ui.component';
import { CompetencyRoutingModule } from './competency-routing/competency-routing.module';
import { CompetencyCardComponent } from './components';

@NgModule({
  declarations: [
    CompetencyUiComponent,
     CompetencyCardComponent
    ],
  imports: [
    CompetencyRoutingModule
  ],
  exports: [CompetencyUiComponent]
})
export class CompetencyUiModule { }
