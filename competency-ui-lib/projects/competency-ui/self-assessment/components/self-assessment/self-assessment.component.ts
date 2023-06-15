import { Component ,OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { SelfAssessmentService } from '../../service/self-assessment.service';
import { RequestUtil } from '../../service/request-util.service';
import { map, mergeMap } from 'rxjs/operators';
import * as _ from 'lodash-es';
import { ConfigService } from '@aastrika_npmjs/competency-web/entry-module';


@Component({
  selector: 'lib-self-assessment',
  templateUrl: './self-assessment.component.html',
  styleUrls: ['./self-assessment.component.scss']
})
export class SelfAssessmentComponent implements OnInit {

  selfAssessmentData = []
  requestUtil: any
  loading = false
  btnType = [];
  profileData : any
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

    this.getUserDetails().pipe(mergeMap((res: any) => {
        this.profileData = res.profileDetails!.preferences ? res.profileDetails!.preferences!.language : 'en';
        if(!this.profileData){
          this.profileData = 'en'
        }
        if(this.profileData){
          return this.getCompetencyCourse()
        }
      })).subscribe((res: any) =>{
        this.selfAssessmentData = this.requestUtil.formatedCompetencyCourseData(res)
        _.forEach( this.selfAssessmentData, (value: any) => {
          this.getProgress(value).subscribe((res) => {
            if (res.result) {
              if (res.result.contentList.length > 0) {
                if (res.result.contentList.length > 0 && value.childContent === res.result.contentList.length) {
                  let type = ''
                  _.forEach(res.result.contentList, (item:any)=>{
                    if(item.completionPercentage === 100 && item.completionPercentage !== 0 ){
                      type = 'DONE'
                    }else{
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

            if(res.result.contentList.length == 0 ) {
              this.btnType.push({
                courseId: value.contentId,
                type: 'START'
              })
            }
          })
        })
        this.loading = false
      })


    // if(this.profileData !== undefined ){

    //   this.getCompetencyData()
    // }




  }

  getCompetencyData(){
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
                _.forEach(res.result.contentList, (item:any)=>{
                  if(item.completionPercentage === 100 && item.completionPercentage !== 0 ){
                    type = 'DONE'
                  }else{
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

          if(res.result.contentList.length == 0 ) {
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

  getUserDetails() {
    const reqBody = {
      id: this.configService.getConfig().id
    }
    return this.selfAssessmentService.getUserdetailsFromRegistry(reqBody)
  }

  getCompetencyCourse() {
    return this.selfAssessmentService.getCompetencyCourseIdentifier(this.profileData)
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
