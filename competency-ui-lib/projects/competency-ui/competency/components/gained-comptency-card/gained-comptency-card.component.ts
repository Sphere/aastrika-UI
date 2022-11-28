import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { forkJoin } from 'rxjs';
import { GainedService } from '../../services/gained.service';
import { RequestUtil } from '../../services/request-util';
import * as _ from 'lodash-es';
@Component({
  selector: 'lib-gained-comptency-card',
  templateUrl: './gained-comptency-card.component.html',
  styleUrls: ['./gained-comptency-card.component.scss']
})
export class GainedComptencyCardComponent implements OnInit {

  requestUtil: any
  loading = false
  date = '05/11/2022'
  panelOpenState: Boolean = false;
  gainedproficencyData:any
  constructor(
    public gainedService: GainedService

  ) {
    this.requestUtil = new RequestUtil()
  }

  ngOnInit() {
    this.loading = true
    const allEntity = this.getAllEntity()
    const userPassbook = this.getAllUserPassbook()
    forkJoin([allEntity,userPassbook]).subscribe((res)=>{
      const response = this.formatedGainedCompetency(res[0].result.response, res[1].result.content)
      this.gainedproficencyData = response
      console.log(this.gainedproficencyData)
      this.loading = false
    })
  }
  formatedGainedCompetency(entity:any, passbook:any){
    let response = []
    console.log(entity)
    console.log(passbook)
    _.forEach(entity,(value:any)=>{
        const cid =   _.get(value, 'id')
        _.forEach(passbook,(passbookValue:any)=>{
           if(passbookValue.competencies.hasOwnProperty(cid)){
              console.log('inside if')
              const competency =  passbookValue.competencies[cid]
              response.push({
                'title': _.get(competency,'additionalParams.competencyName'),
                'logs': this.acquiredPassbookLogs(_.get(competency, 'acquiredDetails')),
                'proficiencyLevels': this.acauiredChannelColourCode(_.get(competency, 'acquiredDetails'))
              })
              
            }
        })
    })
    
    console.log(response)
    return response
  }
  acquiredPassbookLogs(acquiredDetails:any){
    let response  = []
    if(acquiredDetails.length>0){
      _.forEach(acquiredDetails,(value:any)=>{
          response.push({
            'header': _.get(value, 'courseName') ? _.get(value, 'courseName') : '',
            'date':  _.get(value,'createdDate'),
            'description': _.get(value, 'additionalParams.description'),
            'keyboardArrowUp':true
          })
      })
    }
   return response
  }
  
  acauiredChannelColourCode(acquiredDetails:any){
     let response  = []
    _.forEach(acquiredDetails,(value:any)=>{
        const channel = _.get(value,'acquiredChannel')
        switch(channel) {
          case 'Course':{
            response.push({
              'color': '#DFEDF9',
              'displayLevel': _.get(value,'competencyLevelId'),
              'selected': true,
            })
            break; 
          }
          case 'self Assessment':{
            response.push({
              'color': '#FFF4DF',
              'displayLevel': _.get(value,'competencyLevelId'),
              'selected': true,
            })
            break; 
          }
          case 'Admin':{
            response.push({
              'color': '#A4DFCA',
              'displayLevel': _.get(value,'competencyLevelId'),
              'selected': true,
            })
            break; 
          }
          default: { 
            response.push({
              'color': '#FFFBB0',
              'displayLevel': _.get(value,'competencyLevelId'),
              'selected': false,
            })
            break; 
          }
        }
    })
    return response
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
}
