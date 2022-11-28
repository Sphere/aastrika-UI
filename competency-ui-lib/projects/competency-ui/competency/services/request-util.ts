import * as _ from 'lodash';
export class RequestUtil {
    formatedActivities = (data:any)=>{
        if(!_.isEmpty(data)){
            return data
        }
       
    }
    formatedActivitityById = (data:any)=>{
        if(data){
            return data
        }
       
    }
}
