import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'lib-competency-dashboard',
  templateUrl: './competency-dashboard.component.html',
  styleUrls: ['./competency-dashboard.component.scss']
})
export class CompetencyDashboardComponent implements OnInit {
  @Output() stateChange: EventEmitter<any> = new EventEmitter();
  tabIndex = 0;
  constructor(private location: Location) {
   }

  ngOnInit() {
  }

  navigateBack() {
    this.location.back()
  }
  changeTab(event:any){
    this.tabIndex = event.index;
  }
  startSelfAssessment() {
    this.stateChange.emit({'navigation':true})
  }

}
