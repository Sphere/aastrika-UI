import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './services/data.service';

/**
 * Core Module  
 *
 * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[DataService]
})
export class CoreModule { }
