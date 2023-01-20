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
  constructor(  public router: Router,) {
   }

  ngOnInit() {
    this.tabIndex = 1
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
