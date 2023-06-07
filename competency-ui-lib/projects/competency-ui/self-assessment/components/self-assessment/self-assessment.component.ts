import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { SelfAssessmentService } from '../../service/self-assessment.service';
import { RequestUtil } from '../../service/request-util.service';
import { map, mergeMap } from 'rxjs/operators';
import * as _ from 'lodash-es';
import { ConfigService } from '@aastrika_npmjs/comptency/entry-module';
import * as competencyRoleData from '../../rolesWiseCompetencyData.json';


@Component({
  selector: 'lib-self-assessment',
  templateUrl: './self-assessment.component.html',
  styleUrls: ['./self-assessment.component.scss']
})
export class SelfAssessmentComponent implements OnInit {
  @Input() language;
  @Input() position;
  selfAssessmentData = []
  requestUtil: any
  loading = false
  btnType = [];
  roleBasedCompetency: any = competencyRoleData;
  roleCompetencyData = [];
  constructor(
    private location: Location,
    private selfAssessmentService: SelfAssessmentService,
    public configService: ConfigService,
  ) {

    this.requestUtil = new RequestUtil()
  }
  /**
   *getting the details of course by pasing the identifier and hierarchyType
   *
   */
  ngOnInit() {
    this.loading = true
    if (this.roleBasedCompetency) {
      _.forEach(this.roleBasedCompetency, (item) => {
        // console.log("rolese data json", item)

        _.forEach(item, (data) => {
          if (data.position == this.position) {
            // console.log("competency", data)
            _.forEach(data.competency, (competency) => {
              _.forEach(competency, (data) => {
                // console.log("competency", data.id)
                this.roleCompetencyData.push(data.id)
              })

            })
          }
        })


      })
    }
    //  this.selfAssessmentService.getRoleBasedCompetency().subscribe(
    //   res =>{
    //   }
    //  )

    this.getUserDetails().pipe(mergeMap((res: any) => {
      if (!this.language) {
        this.language = res.profileDetails!.preferences ? res.profileDetails!.preferences!.language : 'en';
      }
      if (this.language) {
        return this.getCompetencyCourse()
      }
    })).subscribe((res: any) => {
      let assessData = this.requestUtil.formatedCompetencyCourseData(res)
      // console.log(this.roleCompetencyData, assessData)
      this.selfAssessmentData = this.getCompetencyFilter(assessData);
      
      _.forEach(this.selfAssessmentData, (value: any) => {
        this.getProgress(value).subscribe((res) => {
          if (res.result) {
            if (res.result.contentList.length > 0) {
              if (res.result.contentList.length > 0 && value.childContent === res.result.contentList.length) {
                let type = ''
                _.forEach(res.result.contentList, (item: any) => {
                  if (item.completionPercentage === 100 && item.completionPercentage !== 0) {
                    type = 'DONE'
                  } else {
                    type = 'RESUME'
                  }
                })
                this.btnType.push({
                  courseId: value.contentId,
                  type
                })
              } else {
                this.btnType.push({
                  courseId: value.contentId,
                  type: 'RESUME'
                })
              }
            }
          }

          if (res.result.contentList.length == 0) {
            this.btnType.push({
              courseId: value.contentId,
              type: 'START'
            })
          }
        })
      })
      this.loading = false
    })
  }

  getCompetencyData() {
    this.getCompetencyCourse().pipe(map((res: any) => {
      const formatedResponse = this.requestUtil.formatedCompetencyCourseData(res)
      return formatedResponse
    })).subscribe((res) => {
      this.selfAssessmentData = res
      _.forEach(res, (value: any) => {
        this.getProgress(value).subscribe((res) => {
          if (res.result) {
            if (res.result.contentList.length > 0) {
              if (res.result.contentList.length > 0 && value.childContent === res.result.contentList.length) {
                let type = ''
                _.forEach(res.result.contentList, (item: any) => {
                  if (item.completionPercentage === 100 && item.completionPercentage !== 0) {
                    type = 'DONE'
                  } else {
                    type = 'RESUME'
                  }
                })
                this.btnType.push({
                  courseId: value.contentId,
                  type
                })
              } else {
                this.btnType.push({
                  courseId: value.contentId,
                  type: 'RESUME'
                })
              }
            }
          }

          if (res.result.contentList.length == 0) {
            this.btnType.push({
              courseId: value.contentId,
              type: 'START'
            })
          }
        })
      })

      this.loading = false
    })
  }

  getCompetencyFilter(data){
    let result = []
    _.forEach(this.roleCompetencyData, (value)=>{
      // console.log("data", value)
      _.forEach(data, (item)=>{
        if(item.competencyID == value ){
          result.push(item);
        }
      })
    })
    return result;
  }

  getUserDetails() {
    const reqBody = {
      id: this.configService.getConfig().id
    }
    return this.selfAssessmentService.getUserdetailsFromRegistry(reqBody)
  }

  getCompetencyCourse() {
    return this.selfAssessmentService.getCompetencyCourseIdentifier(this.language)
  }

  getProgress(data) {
    const reqbody = {
      request: {
        userId: this.configService.getConfig().id,
        batchId: data.batchId,
        courseId: data.contentId,
        contentIds: [],
        fields: ['progressdetails'],
      }
    }

    return this.selfAssessmentService.fetchPrgressDetails(reqbody)
  }


  navigateBack() {
    this.location.back()
  }

}
