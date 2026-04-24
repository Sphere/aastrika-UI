import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './services/data.service';
import { AppLoaderComponent } from './components/app-loader/app-loader.component';
import { NoResultComponent } from './components/no-result/no-result.component';
import { RemoveDuplicatesPipe } from './pipe/remove-duplicates.pipe';
import { TranslateModule } from '@ngx-translate/core';
/**
 * Core Module  
 *
 * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
 */
@NgModule({ declarations: [
        AppLoaderComponent,
        NoResultComponent,
        RemoveDuplicatesPipe
    ],
    exports: [
        AppLoaderComponent,
        NoResultComponent,
        RemoveDuplicatesPipe
    ], imports: [CommonModule, 
        TranslateModule
    ], providers: [DataService] })
export class CoreModule { }
