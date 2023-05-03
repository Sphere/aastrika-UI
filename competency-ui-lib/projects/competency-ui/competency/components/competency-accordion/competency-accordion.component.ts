import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'lib-competency-accordion',
  templateUrl: './competency-accordion.component.html',
  styleUrls: ['./competency-accordion.component.scss']
})
export class CompetencyAccordionComponent implements OnInit {
  @Input() competencyList: any
  @Input() assessmentData: any
  @Input() assessBtnType: any
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    console.log("list",this.competencyList)
  }

  viewCourses(data){
    // console.log("viewer data ", data)
    if (data.competencyID) {

      this.router.navigate(['/app/search'], {
        queryParams: { q: [
          `${data.competencyID}-1`,
          `${data.competencyID}-2`,
          `${data.competencyID}-3`,
          `${data.competencyID}-4`,
          `${data.competencyID}-5`
        ] , competency: true},
        queryParamsHandling: 'merge',
      })
      
    }
  }
  startSelfAssesment(data){
    // console.log("query data ", data)
    this.router.navigate([`app/user/self-assessment`], { queryParams: data }) 
  }
}
