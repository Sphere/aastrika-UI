import { Component, OnInit,OnDestroy } from '@angular/core';
import { RequestUtil } from '../../services/request-util';
import { ActiveSummaryService } from '../../services/active-summary.service';
import { mergeMap } from 'rxjs/operators';
import { forkJoin, of, Subscription } from 'rxjs';
import * as _ from 'lodash-es';
import { ConfigService } from '@aastrika_npmjs/comptency/entry-module';
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
  roleactivitySummaries:any
  activitySummaries:any
  loading = false
  acordianLoading = false
  profileData:any
  constructor(public activeSummaryService: ActiveSummaryService, public configService: ConfigService) {
    this.requestUtil = new RequestUtil()
    if(this.configService.getConfig()!.profileData){
      this.profileData = this.configService.getConfig()!.profileData[0].designation
    }
    
  }

  ngOnInit() {
    if(this.profileData){
      setTimeout(()=>{
        this.loading = true
     this.unsubscribe = this.getActivityByRole().pipe(mergeMap((res:any)=>{
        const formatedResponse =  this.requestUtil.formatedActivitityByPostion(res)
        return of(formatedResponse)
      })).subscribe((res: any) => {
        this.loading = false
        this.roleactivitySummaries = res
      })
      },500)
    }
    
  }

  private getActivityByRole() {
    const reqBody = {
      filter: {
        "isDetail": true
      },
      id: this.profileData === 'AWW' ? 95 : 1
    };
    return this.activeSummaryService.getActivityById(reqBody)
  }

  public getActivityByRoleId(id:any){
    this.panelOpenState = true
    this.acordianLoading = true
    const index = _.findIndex(this.roleactivitySummaries, {'id': id})
    this.roleactivitySummaries[index]['activities'] = []
    this.getEntityById(id).pipe(mergeMap((res)=>{
      const respone = this.requestUtil.formatedActivitityByRoleId(res)
      this.roleactivitySummaries[index]['activities'] = respone
      const cidArr = _.map(this.roleactivitySummaries[index]['activities'], 'cid')
      let calls = [];
      _.forEach(cidArr,(value:any)=>{
        calls.push(this.getEntityById(value))
      })
      this.acordianLoading = false
      return forkJoin(...calls)
    })).subscribe((res:any)=>{
      
      const response = this.requestUtil.formatedCompetency(res)
      this.roleactivitySummaries[index]['activities'] = _.values( _.merge(_.keyBy(response, 'cid'), 
           _.keyBy(this.roleactivitySummaries[index]['activities'], 'cid')))
    })
    
  }
  getEntityById(id:any){
    const reqBody = {
      filter: {
        "isDetail": true
      },
      id: id
    };
    return this.activeSummaryService.getActivityById(reqBody)
  }
  ngOnDestroy() {
    if(this.unsubscribe){
      this.unsubscribe.unsubscribe()
    }
   
  }
}
