import { Component, OnInit,OnDestroy } from '@angular/core';
import { RequestUtil } from '../../services/request-util';
import { ActiveSummaryService } from '../../services/active-summary.service';
import { mergeMap } from 'rxjs/operators';
import { forkJoin, of, Subscription } from 'rxjs';
import * as _ from 'lodash-es';
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
  constructor(public activeSummaryService: ActiveSummaryService) {
    this.requestUtil = new RequestUtil()

  }

  ngOnInit() {
   
   this.unsubscribe = this.getActivityByRole().pipe(mergeMap((res:any)=>{
      const formatedResponse =  this.requestUtil.formatedActivitityByPostion(res)
      return of(formatedResponse)
    })).subscribe((res: any) => {
      this.roleactivitySummaries = res
    })
  }

  private getActivityByRole() {
    const reqBody = {
      filter: {
        "isDetail": true
      },
      id: 95
    };
    return this.activeSummaryService.getActivityById(reqBody)
  }

  public getActivityByRoleId(id:any){
    console.log(id)
    this.panelOpenState = true
    const index = _.findIndex(this.roleactivitySummaries, {'id': id})
    this.roleactivitySummaries[index]['activities'] = []
    this.getEntityById(id).pipe(mergeMap((res)=>{
      const respone = this.requestUtil.formatedActivitityByRoleId(res)
      this.roleactivitySummaries[index]['activities'] = respone
      const cidArr = _.map(this.roleactivitySummaries[index]['activities'], 'cid')
      console.log(cidArr)
      let calls = [];
      _.forEach(cidArr,(value:any)=>{
        calls.push(this.getEntityById(value))
      })
      return forkJoin(...calls)
    })).subscribe((res:any)=>{
      
      const response = this.requestUtil.formatedCompetency(res)
      this.roleactivitySummaries[index]['activities'] = _.values( _.merge(_.keyBy(response, 'cid'), 
           _.keyBy(this.roleactivitySummaries[index]['activities'], 'cid')))
      console.log(this.roleactivitySummaries)
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
    this.unsubscribe.unsubscribe()
  }
}
