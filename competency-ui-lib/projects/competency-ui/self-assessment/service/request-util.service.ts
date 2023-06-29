import { Injectable } from '@angular/core';
import * as _ from 'lodash-es';

@Injectable({
  providedIn: 'root'
})
export class RequestUtil {

  constructor() { }

  formatedcompetencyData(data:any){
    const result = []
    if(_.get(data,'result')){
      if(_.get(data,'result.content').competency === true){
        const children =  _.get(data, 'result.content').children

        if(children.length > 0){
         _.forEach(children, (value:any)=>{
            result.push({
              'title':  _.get(value, 'name'),
              'courseId': _.get(value, 'parent'),
              'contentId': _.get(value,'identifier'),
              'contentType':_.get(value,'contentType'),
              'artifactUrl':_.get(value,'artifactUrl'),
            })
           })
           return result
        }
      }

    }
  }

  formatedCompetencyCourseData(data:any){
    const result = []
    if(_.get(data,'result')){
      const content =  _.get(data, 'result.content')
      if(content){
         _.forEach(content, (value:any)=>{
            result.push({
              'title':  _.get(value, 'name'),
              'contentId': _.get(value,'identifier'),
              'contentType':_.get(value,'contentType'),
              'subTitle': _.get(value,'subTitle'),
              'description': _.get(value,'description'),
              'creator': _.get(value,'creator'),
              'duration': _.get(value,'duration'),
              'batchId': this.getBatchData(value),
              'childContent': _.get(value, 'childNodes').length,
              'competencyID': this.getCompetencyData(value.competencies_v1)

            })
           })
           return result
        }
      

    }
  }

  getCompetencyData(competency:any){
    if(competency){
      let data = JSON.parse(competency)
      return data[0].competencyId
    }
  }

  getBatchData(data){
    let batchId = ''
    if(data.batches){
        batchId = data.batches[0].batchId
      //   _.forEach(data.batches, (value:any)=>{
          
      //     batchId = _.get(value, 'batchId')
      //   })
      // }
    }

    return batchId;
  }
}
