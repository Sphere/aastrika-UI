import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { RequestUtil } from '../../services/request-util';
import { ActiveSummaryService } from '../../services/active-summary.service';
import { map, mergeMap, catchError } from 'rxjs/operators';
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
    this.getProgress()
    this.getUserDetails().pipe(mergeMap((res: any) => {
      this.profileData = res.profileDetails.profileReq
      if(!this.language){
        this.language = res.profileDetails!.preferences ? res.profileDetails!.preferences!.language : 'en';
      }
      if(!this.desigination){
        this.desigination = res.profileDetails!.profileReq!.professionalDetails[0]!.designation;
      }

      if (this.profileData) {
        const getActivity = this.getRolesWiseCompetencyData()
        const getCourses = this.getCompetencyCourse()
        const getProgressData = this.getPassbookProgress()
        return forkJoin([getActivity , getCourses , getProgressData ]);
      }
    })).subscribe((res: any) => {
      // console.log(res)
      let rolesCompetencyData =  _.find(res[0].response, {'position': this.desigination })
      // console.log(rolesCompetencyData)
      this.assessmentData = this.requestUtil.formatedCompetencyCourseData(res[1]);
      // Progress fetched here so the Job Description tab does not depend on the
      // Passbook tab having been opened first to populate competencyData$.
      if (res[2] && res[2].length) {
        this.competencyProgress = res[2]
        this.gainedService.competencyData.next(res[2])
      }
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
      if (res && res.length) {
        this.competencyProgress = res;
      }
    })
  }

  /**
   * Load the user's competency progress directly from the passbook, built into the
   * same competencyStoreData shape the Passbook tab produces. This lets the Job
   * Description tab render progress (level ticks, %, COMPLETED/In Progress) without
   * depending on the Passbook tab having been opened first.
   */
  getPassbookProgress() {
    const id = this.configService.getConfig().id
    const reqBody = { request: { typeName: 'competency' } }
    return this.gainedService.fetchUserPassbook(reqBody, id).pipe(
      map((res: any) => {
        const content = (res && res.result && res.result.content) || []
        const progress: any[] = []
        _.forEach(content, (record: any) => {
          const competencies = _.get(record, 'competencies') || {}
          _.forEach(_.keys(competencies), (cid: any) => {
            progress.push(this.requestUtil.competencyStoreDataFomat(competencies[cid]))
          })
        })
        return progress
      }),
      catchError(() => of([]))
    )
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
    return this.activeSummaryService.getRolesWiseCompetency(this.desigination, this.language)
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
