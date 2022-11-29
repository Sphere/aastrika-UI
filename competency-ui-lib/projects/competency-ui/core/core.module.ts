import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './services/data.service';
import { ConfigService } from './public-api';
import {  HttpClientModule } from '@angular/common/http'
import { AppLoaderComponent } from './components/app-loader/app-loader.component';
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
  declarations: [AppLoaderComponent],
  exports:[AppLoaderComponent],
  providers:[DataService]
})
export class CoreModule { }
