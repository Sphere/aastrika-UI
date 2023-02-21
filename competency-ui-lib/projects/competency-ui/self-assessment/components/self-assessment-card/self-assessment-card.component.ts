import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelfAssessmentService } from '../../service/self-assessment.service';
@Component({
  selector: 'lib-self-assessment-card',
  templateUrl: './self-assessment-card.component.html',
  styleUrls: ['./self-assessment-card.component.scss']
})
export class SelfAssessmentCardComponent implements OnInit {

  @Input() cardData: any
  @Input() btnType: any


  constructor(
    private router: Router,
    private selfAssessmentService: SelfAssessmentService,
  ) { }

  ngOnInit() {
    console.log(this.cardData)
  }
  startSelfAssesment(data: any) {

    this.router.navigate([`app/user/self-assessment`], { queryParams: data })
  }

  viewCourses(data) {

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
      // reqBody = {
      //   "request": {
      //     "filters": {
      //       "competencySearch": [
      //         `${data.competencyID}-1`,
      //         `${data.competencyID}-2`,
      //         `${data.competencyID}-3`,
      //         `${data.competencyID}-4`,
      //         `${data.competencyID}-5`
      //       ],
      //         "primaryCategory": [
      //           "Course"
      //         ],
      //           "contentType": [
      //             "Course"
      //           ],
      //             "status": [
      //               "Live"
      //             ]
      //     },
      //     "sort_by": {
      //       "lastUpdatedOn": "desc"
      //     }
      //   },
      //   "sort": [
      //     {
      //       "lastUpdatedOn": "desc"
      //     }
      //   ]
      // }

      // this.selfAssessmentService.getCompetencyCourseIdentifier(reqBody).subscribe(
      //   res => {

          
      //   }
      // )
    }
  }
}
