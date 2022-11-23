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

  activitySummaries = [
  {
    roles:"Organize Supplementary Nutrition for children, pregnant and lactating Mothers",
    activities: [
      {
        activityTitle:"Update list of  3-6 years children every quarter",
        competency: "Procurement and Distribution of HCM",
        levels:['Level 4', 'Level 5']
      },
      {
        activityTitle:"Procure raw materials ,approprately storeage  and supervision the HCMs distributed by AWH as per the pre-decided menu",
        competency: "Procurement and Distribution of HCM",
        levels:['Level 2', 'Level 4']
      }
    ]
  },
  {
    roles:"Take Home Ration (THR)",
    activities: [
      {
        activityTitle:"Weigh/count THR packets/dry ration (received against requisition placed)",
        competency: "Store management and planning and coordination of THR and Dry ration",
        levels:['Level 1', 'Level 2']
      }
    ]
  },
  
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
