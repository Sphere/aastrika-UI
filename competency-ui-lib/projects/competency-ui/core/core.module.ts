import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './services/data.service';
import {  HttpClientModule } from '@angular/common/http'

/**
 * Core Module  
 *
 * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[DataService]
})
export class CoreModule { }
