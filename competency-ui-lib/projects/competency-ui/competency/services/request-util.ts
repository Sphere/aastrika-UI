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
            'averagePercentage': 0
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
            'description': _.get(value, 'description'),
          })
          return result
        },[])
        return result
      }

    }

  }
  formatedCompetency = (data: any, progrssData) => {
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
              'levels': this.getLevels(_.get(value, 'id'), progrssData),
              'cid': _.get(data, 'result.response').id,
              'lastLevel': this.getheighestLevel(_.get(value, 'id'), progrssData),
              'completionPercentage': this.getCompeletionPercentage(_.get(value, 'id'), progrssData),
            })
          })
        }
      }
    })
   
    return  _.uniqBy(result, 'id');
  }
// ['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5'],
  // getLevelsAcchived(competencyId, progrssData){
  //  let response = null;
  //  _.forEach(progrssData, (value:any)=>{
  //   if(_.toNumber( value.competencyId ) === competencyId){

  //     response = _.uniq(value.levelsAchieve);
  //   }
  //  })

  //   return response
  // }

  getLevels(competencyId, progrssData){
    let respone = [
      {name: 'Level 1', achived: false, level: '1'}, 
    {name: 'Level 2', achived: false, level: '2'},
    {name: 'Level 3', achived: false, level: '3'},
    {name: 'Level 4', achived: false, level: '4'},
    {name: 'Level 5', achived: false, level: '5'}]
    let achievedLevels = null
    _.forEach(progrssData, (value:any)=>{
      if(_.toNumber( value.competencyId ) === competencyId){
  
        achievedLevels = _.uniq(value.levelsAchieve);
      }
  })

  _.forEach(respone, (value:any) => {
    _.forEach(achievedLevels, (levels:any)=>{
      if(levels == value.level){
        value.achived = true
      }
    })
  })
  
  return respone

}

  getheighestLevel(competencyId, progrssData){
   let respone = '' 
   _.forEach(progrssData, (value:any)=>{
    if(_.toNumber( value.competencyId )=== competencyId){
      respone = value.levelId.competencyLevelId
    }
   })
   return respone
  }

  getCompeletionPercentage(competencyId, progrssData){
    let respone = 0 
    
    _.forEach(progrssData, (value:any)=>{
     if(_.toNumber( value.competencyId ) === competencyId){
       respone = _.toNumber(value.levelId.competencyLevelId)
     }
    })
    respone = (respone *100)/5
 
    return respone
  }
  /**
 * util method to formate the gained competency  
 * for user 
 */

  formatedGainedCompetency(entity:any, passbook:any){
    let response = []
    _.forEach(entity,(value:any)=>{
        const cid =   _.get(value, 'id')
        _.forEach(passbook,(passbookValue:any)=>{
           if(passbookValue.competencies.hasOwnProperty(cid)){
              const competency =  passbookValue.competencies[cid]
              response.push({
                'title': _.get(competency,'additionalParams.competencyName'),
                'logs': this.acquiredPassbookLogs(_.get(competency, 'acquiredDetails')),
                'proficiencyLevels': this.acauiredChannelColourCode(_.get(competency, 'acquiredDetails')),
                'competencyStoreData': this.competencyStoreDataFomat(competency)
              })             
            }
        })
    })
    return response
  }
  acquiredPassbookLogs(acquiredDetails:any){
    let response  = []
    if(acquiredDetails.length>0){
      _.forEach(acquiredDetails,(value:any)=>{
          response.push({
            'header': _.get(value, 'courseName') ? _.get(value, 'courseName') : _.get(value,'acquiredChannel'),
            'date':  _.get(value,'createdDate'),
            'description': _.get(value, 'additionalParams.description'),
            'keyboardArrowUp':true,
            'level': _.toNumber(_.get(value,'competencyLevelId'))
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
         case 'course':{
           _.forEach(response, (level:any)=>{
             if(level.displayLevel == _.get(value,'competencyLevelId')){
               level.color = '#FFFBB0';
               level.selected = true
             }
           } )
           
           break; 
         }
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
               level.color = '#A4DFCA';
               level.selected = true
               
             }
           } )
         
           break; 
         }
         case 'admin':{
           _.forEach(response, (level:any)=>{
             if(level.displayLevel == _.get(value,'competencyLevelId')){
               level.color = '#7cb5e6';
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
 competencyStoreDataFomat(data){
  let response  = {}
  let levels = []
  if(data.acquiredDetails){
    _.forEach(data.acquiredDetails, (value:any)=>{
      if(value.competencyLevelId){
        levels.push(value.competencyLevelId)
      }
    })
  }
  response = {
    'competencyId': data.competencyId,
    'competencyName': data.additionalParams.competencyName,
    'levelId': _.maxBy(data.acquiredDetails, 'competencyLevelId' ),
    'levelsAchieve' : levels
  }
  return response
 }
}



