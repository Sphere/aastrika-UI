import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'lib-self-assessment',
  templateUrl: './self-assessment.component.html',
  styleUrls: ['./self-assessment.component.scss']
})
export class SelfAssessmentComponent implements OnInit {

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

}
