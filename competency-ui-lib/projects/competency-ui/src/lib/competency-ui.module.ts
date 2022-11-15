import { NgModule } from '@angular/core';
import { CompetencyUiComponent } from './competency-ui.component';
import { CompetencyRoutingModule } from './competency-routing/competency-routing.module';
import { CompetencyCardComponent } from './components';
import { EntryModuleModule } from './entry-module/entry-module.module';


@NgModule({
  declarations: [
    CompetencyUiComponent,
     CompetencyCardComponent
    ],
  imports: [
    CompetencyRoutingModule,
    EntryModuleModule
  ],
  exports: [CompetencyUiComponent]
})
export class CompetencyUiModule { }
