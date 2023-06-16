import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './services/data.service';
import {  HttpClientModule } from '@angular/common/http'
import { AppLoaderComponent } from './components/app-loader/app-loader.component';
import { NoResultComponent } from './components/no-result/no-result.component';
/**
 * Core Module  
 *
 * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
 */
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [
    AppLoaderComponent,
    NoResultComponent
  ],
  exports:[
    AppLoaderComponent,
    NoResultComponent
  ],
  providers:[DataService]
})
export class CoreModule { }
