import { Component, OnDestroy, OnInit } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { RequestUtil } from '../../services/request-util';
import { RequiredCompetencyService } from '../../services/required-competency.service';

@Component({
  selector: 'lib-required-comptency-card',
  templateUrl: './required-comptency-card.component.html',
  styleUrls: ['./required-comptency-card.component.scss']
})
export class RequiredComptencyCardComponent implements OnInit, OnDestroy {

  panelOpenState: Boolean = true
  customCollapsedHeight = '100px'
  customExpandedHeight = '100px'
  private unsubscribe: Subscription;
  requestUtil: any
  loading = false

  constructor(
    private requiredCompetencyService: RequiredCompetencyService
  ) { 
    this.requestUtil = new RequestUtil()
  }

  ngOnInit() {
  
  }

  private getRequiredByPostion() {
    const reqBody = {
      filter: {
        "isDetail": true
      }
    };
    return this.requiredCompetencyService.getRequiredCompetencyById(reqBody)
  }

  logs = [
    {
      index: 1,
      header: 'Understands HCM guidelines',
    },
    {
      index: 2,
      header: 'Lists raw material required',
    },
    {
      index: 3,
      header: 'Plans for storage',
    },
    {
      index: 4,
      header: 'Motivates the AWH and children on optimal hygiene and handwashing practices',
    },
    {
      index: 5,
      header: 'Course-Name Completion',
    },
    
  ]
  
  ngOnDestroy() {
    //this.unsubscribe.unsubscribe()
  }
}
