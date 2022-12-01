import * as _ from 'lodash-es';
export class RequestUtil {
  formatedActivities = (data: any) => {
    if (!_.isEmpty(data)) {
      return data
    }

  }
  formatedActivitityByPostion = (data: any) => {
    if (_.get(data, 'result')) {
      const children = _.get(data, 'result.response').children
      if (children.length > 0) {
        const result = _.reduce(children, (result, value) => {
          result.push({
            'roles': _.get(value, 'name'),
            'id': _.get(value, 'id'),
            'description': _.get(value, 'description'),
          })
          return result
        }, [])
        return result
      }

    }

  }
  formatedActivitityByRoleId = (data: any) => {
    if (_.get(data, 'result')) {
      const children = _.get(data, 'result.response').children
      if (children.length > 0) {
        const result = _.reduce(children, (result, value) => {
          result.push({
            'title': _.get(value, 'name'),
            'cid': _.get(value, 'id'),
            'description': _.get(value, 'description')
          })
          return result
        },[])
        return result
      }

    }

  }
  formatedCompetency = (data: any) => {
    let result = []
    _.forEach(data,(data:any)=>{
      if (_.get(data, 'result')) {
        const children = _.get(data, 'result.response').children
        if (children.length > 0) {
          _.forEach(children, (value:any)=>{
            result.push({
              'competency': _.get(value, 'name'),
              'id': _.get(value, 'id'),
              'description': _.get(value, 'description'),
              'levels': ['Level 4', 'Level 5'],
              'cid': _.get(data, 'result.response').id
            })
          })
        }
      }
    })
    console.log(result)
    return result
  }

  /**
 * util method to formate the gained competency  
 * for user 
 */

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
            'keyboardArrowUp':true,
            'level': _.get(value,'competencyLevelId')
          })
      })
    }
   return response
  }
  acauiredChannelColourCode(acquiredDetails:any){
    let response  = [
     {
       'color': '#FFFBB0',
       'displayLevel': 1,
       'selected': false,
     },
     {
       'color': '#FFFBB0',
       'displayLevel': 2,
       'selected': false,
     },
     {
       'color': '#FFFBB0',
       'displayLevel': 3,
       'selected': false,
     },
     {
       'color': '#FFFBB0',
       'displayLevel': 4,
       'selected': false,
     },
     {
       'color': '#FFFBB0',
       'displayLevel': 5,
       'selected': false,
     }
    ]
   
   _.forEach(acquiredDetails,(value:any)=>{
       const channel = _.get(value,'acquiredChannel')
       switch(channel) {
         case 'Course':{
           _.forEach(response, (level:any)=>{
             if(level.displayLevel == _.get(value,'competencyLevelId')){
               level.color = '#FFFBB0';
               level.selected = true
             }
           } )
           
           break; 
         }
         case 'selfAssessment':{
           _.forEach(response, (level:any)=>{
             if(level.displayLevel == _.get(value,'competencyLevelId')){
               level.color = '#7CB5E6';
               level.selected = true
               
             }
           } )
         
           break; 
         }
         case 'admin':{
           _.forEach(response, (level:any)=>{
             if(level.displayLevel == _.get(value,'competencyLevelId')){
               level.color = '#A4DFCA';
               level.selected = true
             }
           } )
           
           break; 
         }
         default: { 
           _.forEach(response, (level:any)=>{
             if(level.displayLevel == _.get(value,'competencyLevelId')){
               level.color = '#FFFBB0';
               level.selected = false;
             }
           } )
           
           break; 
         }
       }
   })
   return response
 }
}



