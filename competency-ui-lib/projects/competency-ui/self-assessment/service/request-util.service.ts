import { Injectable } from '@angular/core';
import * as _ from 'lodash';

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
}
