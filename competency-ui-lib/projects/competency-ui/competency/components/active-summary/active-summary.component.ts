import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { RequestUtil } from '../../services/request-util';
import { ActiveSummaryService } from '../../services/active-summary.service';
import { map, mergeMap } from 'rxjs/operators';
import { forkJoin, of, Subscription } from 'rxjs';
import * as _ from 'lodash';
import { ConfigService } from '@aastrika_npmjs/comptency/entry-module';
import { GainedService } from '../../services/gained.service';
import { SelfAssessmentService } from '@aastrika_npmjs/comptency/self-assessment';
@Component({
    selector: 'lib-active-summary',
    templateUrl: './active-summary.component.html',
    styleUrls: ['./active-summary.component.scss'],
    standalone: false
})
export class ActiveSummaryComponent implements OnInit {
  /**
 * Core Module
 *
 * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
 */
  @Input()language: string = '';
  @Input()isMobileApp: boolean = false;
  @Input()desigination: string = '';
  panelOpenState: Boolean = true
  requestUtil: any
  private unsubscribe: Subscription | undefined;
  roleactivitySummaries: any
  activitySummaries: any
  competencyProgress: any
  loading = false
  acordianLoading = false
  profileData: any
  assessmentData: any
  btnType = [];
  roleId: any;
  noResultData:any = 'NO_RESULT_FOUND';
  showNodata = false
  constructor(
    public activeSummaryService: ActiveSummaryService,
    public configService: ConfigService,
    public gainedService: GainedService,
    public selfAssessmentService: SelfAssessmentService,
    private cdr: ChangeDetectorRef
  ) {
    this.requestUtil = new RequestUtil()
  }

  ngOnInit() {
    this.loading = true
    if(!this.desigination){
      this.loading = false
      this.showNodata = true
      this.cdr.detectChanges();
    }
    this.designationMap(this.desigination)
    this.getProgress()
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
        const getActivity = this.getRolesWiseCompetencyData()
        const getCourses = this.getCompetencyCourse()        
        return forkJoin([getActivity , getCourses ]);
      }
    })).subscribe((res: any) => {
      // console.log(res)
      let rolesCompetencyData =  _.find(res[0].response, {'position': this.desigination })
      // console.log(rolesCompetencyData)
      this.assessmentData = this.requestUtil.formatedCompetencyCourseData(res[1]);
      this.getAssessmentBtnType(this.assessmentData);
      const formatedResponse = this.requestUtil.formatedActivitityByPostion(rolesCompetencyData, this.language, this.assessmentData, this.competencyProgress)
      // const formatedResponse = this.requestUtil.formatedActivitityByPostion(rolesCompetencyData, this.language, this.assessmentData, this.competencyProgress)
      this.roleactivitySummaries = formatedResponse
      this.loading = false
      this.cdr.detectChanges();
    })
  }

  getProgress() {
    this.gainedService.competencyData$.subscribe(res => {
      this.competencyProgress = res;
    })
  }

  getAssessmentBtnType(data: any){
    if (!data?.length) {
      this.btnType = [];
      return;
    }
    forkJoin(
      data.map((value: any) =>
        this.getAssessmentProgress(value).pipe(
          map((res: any) => {
            let type = 'START';

            if (res?.result?.contentList?.length > 0) {
              if (value.childContent === res.result.contentList.length) {
                type = res.result.contentList.every(
                  (item: any) => item.completionPercentage === 100
                )
                  ? 'DONE'
                  : 'RESUME';
              } else {
                type = 'RESUME';
              }
            }

            return {
              competencyId: value.competencyID,
              courseId: value.contentId,
              type
            };
          })
        )
      )
    ).subscribe((btnTypes: any) => {
      this.btnType = btnTypes; // ✅ single assignment

      this.cdr.detectChanges(); // ✅ Angular 21 stability
    });
  }

  getAssessmentProgress(data: any) {
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

  getRolesWiseCompetencyData() {
    let designation: any
    if (this.profileData.professionalDetails) {
      designation = this.profileData.professionalDetails[0].designation
    }
    return this.activeSummaryService.getRolesWiseCompetency()
  }

  private getActivityByRole(id: any) {
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
    this.activeSummaryService.getRolesMapping().subscribe((res: any) => {
      const map = res.response;
      this.roleId = map?.[designation] ?? 1;

      this.cdr.detectChanges();
    });
  }

  public getActivityByRoleId(id: any) { 
    this.acordianLoading = true
    const index = _.findIndex(this.roleactivitySummaries, { 'id': id })
    this.roleactivitySummaries[index]['activities'] = []
    this.getEntityById(id).pipe(mergeMap((res) => {
      const respone = this.requestUtil.formatedActivitityByRoleId(res, this.language)
      this.roleactivitySummaries[index]['activities'] = respone
      const cidArr = _.map(this.roleactivitySummaries[index]['activities'], 'cid')
      let calls: any[] = [];
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
  getAveragepercentage(data: any) {
    let totalLength = data.length
    let percentage: any[] = []
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
