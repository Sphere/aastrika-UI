import { Component, EventEmitter, OnInit ,Output} from '@angular/core';
import { Location } from '@angular/common'
import { SelfAssessmentService } from '../../service/self-assessment.service';
import { RequestUtil } from '../../service/request-util.service';
import { map, mergeMap } from 'rxjs/operators';
import * as _ from 'lodash-es';
import { of } from 'rxjs';

@Component({
  selector: 'lib-self-assessment',
  templateUrl: './self-assessment.component.html',
  styleUrls: ['./self-assessment.component.scss']
})
export class SelfAssessmentComponent implements OnInit {

  selfAssessmentData = []
  requestUtil: any
  loading = false
  @Output() selfAsesment = new EventEmitter();
  constructor(
    private location: Location,
    private selfAssessmentService : SelfAssessmentService,
  ) { 

    this.requestUtil = new RequestUtil()
  }
  /**
   *getting the details of course by pasing the identifier and hierarchyType
   * 
   */
  ngOnInit() {
    this.loading = true
    this.getCompetencyCourse().pipe(map((res:any)=>{
      const formatedResponse =  this.requestUtil.formatedCompetencyCourseData(res)
      return formatedResponse
    })).subscribe((res)=>{
      this.selfAssessmentData = res
      this.loading = false
    })
    this.selfAssessmentService.startAssessment$.pipe().subscribe((res:any)=>{
      console.log(res)
      this.selfAsesment.emit(res)
    })
  }

  getCompetencyCourse(){
    const reqBody = {
      "request": {
          "filters": {
              "primaryCategory": [
                  "Course"
              ],
              "contentType": [
                  "Course"
              ],
              "status": [
                  "Live"
              ],
              "competency":true
          }
      },
      "query": "",
      "sort": [
          {
              "lastUpdatedOn": "desc"
          }
      ]
  }
    return  this.selfAssessmentService.getCompetencyCourseIdentifier(reqBody)
  }
  

  navigateBack() {
    this.location.back()
  }

}
