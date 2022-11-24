import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'lib-competency-dashboard',
  templateUrl: './competency-dashboard.component.html',
  styleUrls: ['./competency-dashboard.component.scss']
})
export class CompetencyDashboardComponent implements OnInit {

  selectedTab = ''

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }

  navigateBack() {
    this.location.back()
  }

  startSelfAssessment() {
  }

  selectedTabChange(event) {
    this.selectedTab = event;
  }

}
