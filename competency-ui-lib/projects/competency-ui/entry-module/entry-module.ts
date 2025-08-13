import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ConfigurationContext } from './services/configuration-context';
import { ConfigService } from './services/config.service';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  exports: [
  ],
  providers: []
})
export class EntryModule {
  /**
 * Take the config from consuming apps
 *
 * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
 */
  static forRoot(configContext: ConfigurationContext): ModuleWithProviders<any> {
    return {
      ngModule: EntryModule,
      providers: [ConfigService,
        { provide: 'config', useValue: configContext.config }
      ]
    }
  }
}
