import { Component, OnInit,OnDestroy } from '@angular/core';
import { RequestUtil } from '../../services/request-util';
import { ActiveSummaryService } from '../../services/active-summary.service';
import { mergeMap } from 'rxjs/operators';
import { of, Subscription } from 'rxjs';
@Component({
  selector: 'lib-active-summary',
  templateUrl: './active-summary.component.html',
  styleUrls: ['./active-summary.component.scss']
})
export class ActiveSummaryComponent implements OnInit {

  panelOpenState: Boolean = true
  requestUtil: any
  private unsubscribe: Subscription;
  activitySummaries = [
    {
      roles: "Organize Supplementary Nutrition for children, pregnant and lactating Mothers",
      activities: [
        {
          activityTitle: "Update list of  3-6 years children every quarter",
          competency: "Procurement and Distribution of HCM",
          levels: ['Level 4', 'Level 5']
        },
        {
          activityTitle: "Procure raw materials ,approprately storeage  and supervision the HCMs distributed by AWH as per the pre-decided menu",
          competency: "Procurement and Distribution of HCM",
          levels: ['Level 2', 'Level 4']
        }
      ]
    },
    {
      roles: "Take Home Ration (THR)",
      activities: [
        {
          activityTitle: "Weigh/count THR packets/dry ration (received against requisition placed)",
          competency: "Store management and planning and coordination of THR and Dry ration",
          levels: ['Level 1', 'Level 2']
        }
      ]
    },

  ]

  constructor(public activeSummaryService: ActiveSummaryService) {
    this.requestUtil = new RequestUtil()

  }

  ngOnInit() {
   this.unsubscribe = this.getActivityByPostion().pipe(mergeMap((res:any)=>{
      const formatedResponse =  this.requestUtil.formatedActivitityById(res)
      return of(formatedResponse)
    })).subscribe((res: any) => {
      console.log(res)
    })
  }

  private getActivityByPostion() {
    const reqBody = {
      filter: {
        "isDetail": true
      }
    };
    return this.activeSummaryService.getActivityById(reqBody)
  }
  ngOnDestroy() {
    this.unsubscribe.unsubscribe()
  }
}
