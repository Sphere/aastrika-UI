import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'lib-competency-dashboard',
  templateUrl: './competency-dashboard.component.html',
  styleUrls: ['./competency-dashboard.component.scss']
})
export class CompetencyDashboardComponent implements OnInit {

  competencyData = [
    {
      title: 'Procurement and Distribution of HCM',
      description: 'Manages procurement and store raw materials for HCMs as per the pre-decided menu Supervises the preparation and distribution of HCM by Anganwadi Helper (AWH)',
      requiredLevel: 'level 4'
    },
    {
      title: 'Store management and planning and coordination of THR and Dry ration',
      description: 'Mobilizes children and conducts ECCE activities as per the yearly activity calendar and the ECCE manual ',
      requiredLevel: 'level 4'
    },
    {
      title: 'Procurement and Distribution of HCM',
      description: 'Manages procurement and store raw materials for HCMs as per the pre-decided menu Supervises the preparation and distribution of HCM by Anganwadi Helper (AWH)',
      requiredLevel: 'level 4'
    },
    {
      title: 'Early Childhood Care Education',
      description: 'Mobilizes children and conducts ECCE activities as per the yearly activity calendar and the ECCE manual ',
      requiredLevel: 'level 4'
    },
    {
      title: 'Procurement and Distribution of HCM',
      description: 'Manages procurement and store raw materials for HCMs as per the pre-decided menu Supervises the preparation and distribution of HCM by Anganwadi Helper (AWH)',
      requiredLevel: 'level 4'
    },
    {
      title: 'Early Childhood Care Education',
      description: 'Mobilizes children and conducts ECCE activities as per the yearly activity calendar and the ECCE manual ',
      requiredLevel: 'level 4'
    },
  ]

  gainedproficencyData = [
    {
      title: 'Sector Meetings',
      description: 'Documents and discuss HCM, THR, growth monitoring and referral related issues in sector meetings',
    },
    {
      title: 'Counselling ',
      description: 'Lorem ipsum dolor sit amet, consectetur',
    }
  ]

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }

  navigateBack() {
    this.location.back()
  }

  startSelfAssessment() {}

}
