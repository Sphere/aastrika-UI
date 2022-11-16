import { NgModule } from '@angular/core';
import { CompetencyUiComponent } from './competency-ui.component';
import { CompetencyRoutingModule } from './competency-routing/competency-routing.module';
import { CompetencyCardComponent } from './components';
import { EntryModuleModule } from './entry-module/entry-module.module';
import { CommonModule } from '@angular/common';
import { MatExpansionModule, MatIconModule } from '@angular/material';


@NgModule({
  declarations: [
    CompetencyUiComponent,
     CompetencyCardComponent
    ],
  imports: [
    CompetencyRoutingModule,
    EntryModuleModule,
    CommonModule,
    MatExpansionModule,
    MatIconModule
  ],
  exports: [
    CompetencyUiComponent,
    MatExpansionModule
  ]
})
export class CompetencyUiModule { }
