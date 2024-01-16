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
  role;
  isPassbok: string = 'false';

  constructor(  public router: Router, 
    public configService: ConfigService,
    public activeSummaryService: ActiveSummaryService,
    ) {
   }

  ngOnInit() {
    this.tabIndex = 2     
    this.isMobileApp = this.configService.getConfig().isMobileApp
    this.role = this.configService.getConfig().profileData[0].designation;
    this.language = this.configService.getConfig().language;
    this.isPassbok = localStorage.getItem('isOnlyPassbook')
    console.log(this.isPassbok)
    this.getUserDetails().subscribe(
      (res)=>{
        this.language = this.configService.getConfig().language ==  res.profileDetails!.preferences!.language ? this.configService.getConfig().language :  res.profileDetails!.preferences!.language;
        this.role = this.configService.getConfig().profileData[0].designation ==  res.profileDetails.profileReq.professionalDetails[0].designation
         ? this.configService.getConfig().profileData[0].designation 
         : res.profileDetails.profileReq.professionalDetails[0].designation;
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
    if(this.isPassbok !== 'false'){
      this.router.navigate([`/profile-dashboard`])
    }else{
      this.router.navigate([`/page/home`])
    }
  }
  changeTab(event:any){
    this.tabIndex = event.index;
  }
  startSelfAssessment() {
    this.stateChange.emit({'navigation':true})
  }

}
