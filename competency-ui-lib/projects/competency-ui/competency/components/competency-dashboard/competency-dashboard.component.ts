import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common'
import { Router } from '@angular/router';

@Component({
  selector: 'lib-competency-dashboard',
  templateUrl: './competency-dashboard.component.html',
  styleUrls: ['./competency-dashboard.component.scss']
})
export class CompetencyDashboardComponent implements OnInit {
  @Output() stateChange: EventEmitter<any> = new EventEmitter();
  tabIndex = 0;
  constructor(private location: Location,public router:Router) {
   }

  ngOnInit() {
  }

  navigateBack() {
    this.router.navigate(['/app/profile-view'])
  }
  changeTab(event:any){
    this.tabIndex = event.index;
  }
  startSelfAssessment() {
    this.stateChange.emit({'navigation':true})
  }

}
