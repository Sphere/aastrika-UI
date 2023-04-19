import { ConfigService } from '@aastrika_npmjs/comptency/entry-module';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-competency-dashboard',
  templateUrl: './competency-dashboard.component.html',
  styleUrls: ['./competency-dashboard.component.scss']
})
export class CompetencyDashboardComponent implements OnInit {
  @Output() stateChange: EventEmitter<any> = new EventEmitter();
  tabIndex = 1;
  isMobileApp

  constructor(  public router: Router, public configService: ConfigService) {
   }

  ngOnInit() {
    this.tabIndex = 1
    this.isMobileApp = this.configService.getConfig().isMobileApp
  }

  navigateBack() {
    this.router.navigate([`/app/profile-view`])
  }
  changeTab(event:any){
    this.tabIndex = event.index;
  }
  startSelfAssessment() {
    this.stateChange.emit({'navigation':true})
  }

}
