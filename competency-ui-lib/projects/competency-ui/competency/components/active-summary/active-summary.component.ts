import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { RequestUtil } from '../../services/request-util';
import { ActiveSummaryService } from '../../services/active-summary.service';
import { mergeMap } from 'rxjs/operators';
import { forkJoin, of, Subscription } from 'rxjs';
import * as _ from 'lodash-es';
import { ConfigService } from '@aastrika_npmjs/comptency/entry-module';
import { GainedService } from '../../services/gained.service';
import { SelfAssessmentService } from '@aastrika_npmjs/comptency/self-assessment';
@Component({
  selector: 'lib-active-summary',
  templateUrl: './active-summary.component.html',
  styleUrls: ['./active-summary.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ActiveSummaryComponent implements OnInit {
  /**
 * Core Module
 *
 * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
 */
  @Input()language;
  @Input()isMobileApp;
  @Input()desigination;
  panelOpenState: Boolean = true
  requestUtil: any
  private unsubscribe: Subscription;
  roleactivitySummaries: any
  activitySummaries: any
  competencyProgress
  loading = false
  acordianLoading = false
  profileData: any
  assessmentData: any
  btnType = [];
  roleId;
  constructor(
    public activeSummaryService: ActiveSummaryService,
    public configService: ConfigService,
    public gainedService: GainedService,
    public selfAssessmentService: SelfAssessmentService,
  ) {
    this.requestUtil = new RequestUtil()
  }

  ngOnInit() {
    this.designationMap(this.desigination)
    this.getProgress()
    this.loading = true
    this.getUserDetails().pipe(mergeMap((res: any) => {
      this.profileData = res.profileDetails.profileReq
      if(!this.language){
        this.language = res.profileDetails!.preferences ? res.profileDetails!.preferences!.language : 'en';
      }
      if(!this.desigination){
        this.desigination = res.profileDetails!.profileReq!.professionalDetails[0]!.designation;
        this.designationMap(this.desigination)
      }

      if (this.profileData) {
        const getActivity = this.getActivityByRole(this.roleId)
        const getCourses = this.getCompetencyCourse()        
        return forkJoin([getActivity , getCourses ]);
      }
    })).subscribe((res: any) => {
      this.assessmentData = this.requestUtil.formatedCompetencyCourseData(res[1]);
      this.getAssessmentBtnType(this.assessmentData);
      const formatedResponse = this.requestUtil.formatedActivitityByPostion(res[0], this.language)
      this.roleactivitySummaries = formatedResponse
      _.forEach(this.roleactivitySummaries, (value: any) => {
        if (value.id) {
          this.getActivityByRoleId(value.id)
        }
      })      
    })
  }

  getProgress() {
    this.gainedService.competencyData$.subscribe(
      res => {
        this.competencyProgress = res
      }
    )
  }

  getAssessmentBtnType(data){
    _.forEach( data, (value: any) => {
            this.getAssessmentProgress(value).subscribe((res) => {
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
                      competencyId: value.competencyID,
                      courseId: value.contentId,
                      type
                    })
                  } else {
                    this.btnType.push({
                      competencyId: value.competencyID,
                      courseId: value.contentId,
                      type: 'RESUME'
                    })
                  }
                }
              }
  
              if(res.result.contentList.length == 0 ) {
                this.btnType.push({
                  competencyId: value.competencyID,
                  courseId: value.contentId,
                  type: 'START'
                })
              }
            })
          })
  }
  getAssessmentProgress(data) {
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

  getUserDetails() {
    const reqBody = {
      id: this.configService.getConfig().id
    }
    return this.activeSummaryService.getUserdetailsFromRegistry(reqBody)
  }

  private getActivityByRole(id) {
    let designation: any
    if (this.profileData.professionalDetails) {
      designation = this.profileData.professionalDetails[0].designation
    }
    const reqBody = {
      filter: {
        "isDetail": true
      },
      id: id
    };
    return this.activeSummaryService.getActivityById(reqBody)
  }

  private designationMap(designation: string) {
    let positionMap :any
    this.activeSummaryService.getRolesMapping().pipe().subscribe((res:any)=>{
      console.log(res)
      positionMap = res.response
      if (positionMap.hasOwnProperty(designation)) {
        this.roleId = positionMap[designation]
        return this.roleId
      }else
      this.roleId = 1
        return 1
    },
    (err)=>{
      console.log("error", err)
      positionMap = err
      if (positionMap.hasOwnProperty(designation)) {
        this.roleId = positionMap[designation]
        return this.roleId
      }else
      this.roleId = 1
        return 1
    },
    

    )
  }

  public getActivityByRoleId(id: any) { 
    this.acordianLoading = true
    const index = _.findIndex(this.roleactivitySummaries, { 'id': id })
    this.roleactivitySummaries[index]['activities'] = []
    this.getEntityById(id).pipe(mergeMap((res) => {
      const respone = this.requestUtil.formatedActivitityByRoleId(res, this.language)
      this.roleactivitySummaries[index]['activities'] = respone
      const cidArr = _.map(this.roleactivitySummaries[index]['activities'], 'cid')
      let calls = [];
      _.forEach(cidArr, (value: any) => {
        calls.push(this.getEntityById(value))
      })
      this.acordianLoading = false

      return forkJoin([...calls ])
    })).subscribe((res: any) => {
      const response = this.requestUtil.formatedCompetency(res, this.competencyProgress, this.language, this.assessmentData)
      this.roleactivitySummaries[index]['activities'] = _.values(_.merge(_.keyBy(response, 'id'),
        _.keyBy(this.roleactivitySummaries[index]['activities'], 'cid')))

      this.roleactivitySummaries[index]['averagePercentage'] = []
      let competencyLength = this.getAveragepercentage(response)
      this.roleactivitySummaries[index]['averagePercentage'] = competencyLength    
      this.loading = false
    })
  }
  getEntityById(id: any) {
    const reqBody = {
      filter: {
        "isDetail": true
      },
      id: id
    };
    return this.activeSummaryService.getActivityById(reqBody)
  }
  getAveragepercentage(data) {
    let totalLength = data.length
    let percentage = []
    let totalPercent = 0
    _.forEach(data, (value: any) => {
      percentage.push(value.completionPercentage)
    })
    totalPercent = _.round(_.sum(percentage) / totalLength)
    return totalPercent
  }

  getCompetencyCourse() {
    let assessData;
    assessData = this.activeSummaryService.getCompetencyCourseIdentifier(this.language)
    return assessData;
  }
  
  ngOnDestroy() {
    if (this.unsubscribe) {
      this.unsubscribe.unsubscribe()
    }

  }
}
