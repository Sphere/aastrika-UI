import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { SelfAssessmentService } from '../../service/self-assessment.service';
import { RequestUtil } from '../../service/request-util.service';
import { mergeMap } from 'rxjs/operators';
import * as _ from 'lodash-es';

@Component({
  selector: 'lib-self-assessment',
  templateUrl: './self-assessment.component.html',
  styleUrls: ['./self-assessment.component.scss']
})
export class SelfAssessmentComponent implements OnInit {

  selfAssessmentData = []
  requestUtil: any

  constructor(
    private location: Location,
    private selfAssessmentService : SelfAssessmentService,
  ) { 

    this.requestUtil = new RequestUtil()
  }

  ngOnInit() {
    this.getSearchIdentifier().pipe(mergeMap((res:any)=>{
      const identifier = res.result.content[0].identifier;
      return this.getHeiarchDetails(identifier)
     })).subscribe((res)=>{
      // console.log(res);
      this.selfAssessmentData = this.requestUtil.formatedcompetencyData(res)
      
     })
  }

  getSearchIdentifier(){
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
    return  this.selfAssessmentService.seachIdentifier(reqBody)
  }

  getHeiarchDetails(identifier){
    return this.selfAssessmentService.fetchHeiarchDetails(identifier,'detail')
    
  }

  navigateBack() {
    this.location.back()
  }

}
