import { NgModule } from '@angular/core';
import { CompetencyUiComponent } from './competency-ui.component';
import { CompetencyRoutingModule } from './competency-routing/competency-routing.module';

@NgModule({
  declarations: [CompetencyUiComponent],
  imports: [
    CompetencyRoutingModule
  ],
  exports: [CompetencyUiComponent]
})
export class CompetencyUiModule { }
