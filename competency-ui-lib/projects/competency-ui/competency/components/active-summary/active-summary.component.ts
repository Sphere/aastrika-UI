import { Component, OnInit, OnDestroy } from '@angular/core';
import { RequestUtil } from '../../services/request-util';
import { ActiveSummaryService } from '../../services/active-summary.service';
import { mergeMap } from 'rxjs/operators';
import { forkJoin, of, Subscription } from 'rxjs';
import * as _ from 'lodash-es';
import { ConfigService } from '@aastrika_npmjs/comptency/entry-module';
import { GainedService } from '../../services/gained.service';
@Component({
  selector: 'lib-active-summary',
  templateUrl: './active-summary.component.html',
  styleUrls: ['./active-summary.component.scss']
})
export class ActiveSummaryComponent implements OnInit {
  /**
 * Core Module
 *
 * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
 */
  panelOpenState: Boolean = true
  requestUtil: any
  private unsubscribe: Subscription;
  roleactivitySummaries: any
  activitySummaries: any
  competencyProgress
  loading = false
  acordianLoading = false
  profileData: any
  language: any
  constructor(
    public activeSummaryService: ActiveSummaryService,
    public configService: ConfigService,
    public gainedService: GainedService
  ) {
    this.requestUtil = new RequestUtil()
  }

  ngOnInit() {
    this.getProgress()
    this.loading = true
    this.getUserDetails().pipe(mergeMap((res: any) => {
      this.profileData = res.profileDetails.profileReq
      this.language = res.profileDetails.preferences.language;
      if (this.profileData) {
        return this.getActivityByRole()
      }
    })).subscribe((res: any) => {
      const formatedResponse = this.requestUtil.formatedActivitityByPostion(res, this.language)
      this.roleactivitySummaries = formatedResponse
      _.forEach(this.roleactivitySummaries, (value:any)=>{
        if(value.id){
          this.getActivityByRoleId(value.id)
        }
      } )
      console.log(this.roleactivitySummaries);
      this.loading = false
    })
  }

  getProgress() {
    this.gainedService.competencyData$.subscribe(
      res => {
        this.competencyProgress = res
      }
    )
  }

  getUserDetails() {
    const reqBody = {
      id: this.configService.getConfig().id
    }
    return this.activeSummaryService.getUserdetailsFromRegistry(reqBody)
  }

  private getActivityByRole() {
    let designation: any
    if (this.profileData.professionalDetails) {
      designation = this.profileData.professionalDetails[0].designation
    }


    const reqBody = {
      filter: {
        "isDetail": true
      },
      id: this.designationMap(designation)
    };
    return this.activeSummaryService.getActivityById(reqBody)
  }

  private designationMap(designation: string){
    const positionMap = {
      "AWW" : 95,
      "ANM" : 210
    }

    if(positionMap.hasOwnProperty(designation)){
      return positionMap[designation]
    }
    else
    return 1
  }
  public getActivityByRoleId(id: any) {
    // this.panelOpenState = true
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
      return forkJoin(...calls)
    })).subscribe((res: any) => {
      const response = this.requestUtil.formatedCompetency(res, this.competencyProgress, this.language)
      this.roleactivitySummaries[index]['activities'] = _.values(_.merge(_.keyBy(response, 'cid'),
        _.keyBy(this.roleactivitySummaries[index]['activities'], 'cid')))

      this.roleactivitySummaries[index]['averagePercentage'] = []
      let competencyLength = this.getAveragepercentage(response)
      this.roleactivitySummaries[index]['averagePercentage'] = competencyLength
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
  ngOnDestroy() {
    if (this.unsubscribe) {
      this.unsubscribe.unsubscribe()
    }

  }
}
