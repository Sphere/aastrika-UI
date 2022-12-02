import { Subject } from 'rxjs';
import { ConfigurationContext } from './configuration-context';
export declare class ConfigService {
    config$: Subject<any>;
    private _config;
    constructor(context: ConfigurationContext);
    setConfig(context: any): void;
    getConfig(): any;
}
