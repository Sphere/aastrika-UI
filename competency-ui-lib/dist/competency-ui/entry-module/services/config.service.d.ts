import { Subject } from 'rxjs';
import { ConfigurationContext } from './configuration-context';
export declare class ConfigService {
    config: ConfigurationContext;
    config$: Subject<any>;
    private _config;
    constructor(config: ConfigurationContext);
    setConfig(context: any): void;
    getConfig(): any;
}
