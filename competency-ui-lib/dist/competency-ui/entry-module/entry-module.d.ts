import { ModuleWithProviders } from '@angular/core';
import { ConfigurationContext } from './services/configuration-context';
export declare class EntryModule {
    /**
   * Take the config from consuming apps
   *
   * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
   */
    static forRoot(configContext: ConfigurationContext): ModuleWithProviders;
}
