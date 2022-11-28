import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { forkJoin, of, Subscription } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { GainedService } from '../../services/gained.service';
import { RequestUtil } from '../../services/request-util';
@Component({
  selector: 'lib-gained-comptency-card',
  templateUrl: './gained-comptency-card.component.html',
  styleUrls: ['./gained-comptency-card.component.scss']
})
export class GainedComptencyCardComponent implements OnInit {

  private unsubscribe: Subscription;
  requestUtil: any

  gainedproficencyData = [
    {
      title: 'Sector Meetings',
      description: 'Documents and discuss HCM, THR, growth monitoring and referral related issues in sector meetings',
    },
    {
      title: 'Counselling ',
      description: 'Lorem ipsum dolor sit amet, consectetur',
    }
  ]

  date = '05/11/2022'
  panelOpenState: Boolean = false;
  competencies = {
    proficiencyLevels: [
      {
        selected: true,
        displayLevel: 1,
        color: '#FFFBB0',
        level: ''
      },
      {
        selected: true,
        displayLevel: 2,
        color: '#7CB5E6',
        level: ''
      },
      {
        selected: true,
        displayLevel: 3,
        color: '#A4DFCA',
        level: ''
      },
      {
        selected: true,
        displayLevel: 4,
        color: '#A4DFCA',
        level: ''
      },
      {
        selected: false,
        displayLevel: 5,
        color: '',
        level: ''
      }
    ]
  }

  logs = [
    {
      index: 1,
      header: 'Self Assessment',
      date: '05/11/2022',
      description: '',
      keyboardArrowUp: true
    },
    {
      index: 2,
      header: 'Admin Added',
      date: '05/11/2022',
      description: 'Lorem ipsum sit amet, consectetur adip iscing.',
      keyboardArrowUp: true
    },
    {
      index: 2,
      header: 'Couse-Name Completion',
      date: '02/12/2022',
      description: '',
      keyboardArrowUp: true
    },
  ]
  entityData = []

  constructor(
    public gainedService: GainedService

  ) {
    this.requestUtil = new RequestUtil()
  }

  ngOnInit() {

    
    // this.getAllPassbook()
    // .subscribe((res:any)=>{
    //   console.log(res[0], res[1]);
    // })
  
    
    this.getAllUserPassbook().subscribe((res: any) => {
        console.log(res)
      })
    this.getAllEntity().subscribe((res: any) => {
        console.log(res)
      })
  }

  private getAllUserPassbook() {
    const reqBody = {
      "request": {
        "typeName": "competency"
      }
    };
    return this.gainedService.fetchUserPassbook(reqBody)
  }


  private getAllEntity() {
    const reqBody = {
      "search": {
        "type": "Competency"
      }
    };
    return  this.gainedService.fetchAllEntity(reqBody)
  }

  // getAllPassbook() {
  //   const entityreqBody = {
  //     "search": {
  //       "type": "Competency"
  //     }

  //   }

  //   const passbookReqBody = {
  //     "request": {
  //       "typeName": "competency"
  //     }
  //   };
  //   return this.gainedService.requestDataFromMultipleSources(entityreqBody, passbookReqBody)
    
  // }
  ngOnDestroy() {
    // this.unsubscribe.unsubscribe()
  }

}
