import { ConfigService } from '@aastrika_npmjs/comptency/entry-module';
import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ActiveSummaryService } from '../../services/active-summary.service';

@Component({
  selector: 'lib-competency-dashboard',
  templateUrl: './competency-dashboard.component.html',
  styleUrls: ['./competency-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CompetencyDashboardComponent implements OnInit {
  @Output() stateChange: EventEmitter<any> = new EventEmitter();
  tabIndex = 1;
  isMobileApp;
  language;

  constructor(  public router: Router, 
    public configService: ConfigService,
    public activeSummaryService: ActiveSummaryService,
    ) {
   }

  ngOnInit() {
    this.tabIndex = 1     
    this.isMobileApp = this.configService.getConfig().isMobileApp

    this.getUserDetails().subscribe(
      (res)=>{
        this.language = res.profileDetails!.preferences ? res.profileDetails!.preferences!.language : 'en';
      }
    )
  }

  getUserDetails() {
    const reqBody = {
      id: this.configService.getConfig().id
    }
    return this.activeSummaryService.getUserdetailsFromRegistry(reqBody)
  }
  navigateBack() {
    this.router.navigate([`/page/home`])
  }
  changeTab(event:any){
    this.tabIndex = event.index;
  }
  startSelfAssessment() {
    this.stateChange.emit({'navigation':true})
  }

}
