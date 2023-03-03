import * as _ from 'lodash-es';
export class RequestUtil {
  formatedActivities = (data: any) => {
    if (!_.isEmpty(data)) {
      return data
    }

  }
  formatedActivitityByPostion = (data: any, lang: any) => {
    if (_.get(data, 'result')) {
      const children = _.get(data, 'result.response').children
      if (children.length > 0) {
        let  result = _.reduce(children, (result, value) => {
          result.push({
            'roles': lang == 'hi'? this.getHiName(value) :   _.get(value, 'name'),
            'id': _.get(value, 'id'),
            'description': _.get(value, 'description'),
            'averagePercentage': 0,
            'code': _.get(value.additionalProperties, 'Code')
          })
         
          return result
        }, [])
        result =  _.sortBy(result, [function(o) { return o.code; }]);
        // console.log("sort result", result);
        return result
      }

    }

  } 

  getHiName(data){
    let res :any
    if(_.get(data.additionalProperties, 'lang-hi-name')){
      res = _.get(data.additionalProperties, 'lang-hi-name')
    }else {
      res =  _.get(data, 'name')
    }
    return res
  }
  formatedActivitityByRoleId = (data: any, lang:any) => {
    if (_.get(data, 'result')) {
      const children = _.get(data, 'result.response').children
      if (children.length > 0) {
        const result = _.reduce(children, (result, value) => {
          result.push({
            'title': lang == 'hi'? this.getHiName(value) :  _.get(value, 'name'),
            'cid': _.get(value, 'id'),
            'description': _.get(value, 'description'),
            'code': _.get(value.additionalProperties, 'Code')
          })
          return result
        },[])
        return _.sortBy(result, [function(o) { return o.code; }]);
      }

    }

  }
  formatedCompetency = (data: any, progrssData, lang) => {
    let result = []
    _.forEach(data,(data:any)=>{
      if (_.get(data, 'result')) {
        const children = _.get(data, 'result.response').children
        if (children.length > 0) {
          _.forEach(children, (value:any)=>{
            result.push({
              'levels': this.getLevels(_.get(value, 'id'), progrssData, lang),
              'competency': lang == 'hi'? this.getHiName(value) : _.get(value, 'name'),
              'id': _.get(value, 'id'),
              'description': _.get(value, 'description'),
              'cid': _.get(data, 'result.response').id,
              'lastLevel': this.getheighestLevel(_.get(value, 'id'), progrssData),
              'completionPercentage': this.getCompeletionPercentage(_.get(value, 'id'), progrssData),
              'code': _.get(value.additionalProperties, 'Code')
            })
           
          })
        }
      }
    })
    result = _.sortBy(result, [function(o) { return o.code; }]);
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

  getLevels(competencyId, progrssData , lang){
    let respone = [
    {name:  lang == 'hi' ? 'स्तर 1' : 'Level 1', achived: false, level: '1'}, 
    {name:  lang == 'hi' ? 'स्तर 2' :'Level 2', achived: false, level: '2'},
    {name:  lang == 'hi' ? 'स्तर 3' :'Level 3', achived: false, level: '3'},
    {name:  lang == 'hi' ? 'स्तर 4' :'Level 4', achived: false, level: '4'},
    {name:  lang == 'hi' ? 'स्तर 5' :'Level 5', achived: false, level: '5'}]
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

  formatedGainedCompetency(entity:any, passbook:any, lang:any){
    let response = []
    _.forEach(entity,(value:any)=>{
        const cid =   _.get(value, 'id')
        _.forEach(passbook,(passbookValue:any)=>{
           if(passbookValue.competencies.hasOwnProperty(cid)){
              const competency =  passbookValue.competencies[cid]
              response.push({
                'title': lang == 'hi'? this.getHiTitle(cid,  entity, competency ) :_.get(competency,'additionalParams.competencyName'),
                'logs': this.acquiredPassbookLogs(_.get(competency, 'acquiredDetails')),
                'proficiencyLevels': this.acauiredChannelColourCode(_.get(competency, 'acquiredDetails')),
                'competencyStoreData': this.competencyStoreDataFomat(competency),
                'titleHi': this.getHiTitle(cid,  entity, competency)
              })             
            }
        })
    })
    return response
  }

  getHiTitle(id, entity, competency){
    let res:any
    _.forEach(entity, (item:any)=>{
      if(item.id == id){
        if(_.get(item.additionalProperties, 'lang-hi-name')){
          
          res = _.get(item.additionalProperties, 'lang-hi-name')
        }else{
          res = _.get(competency,'additionalParams.competencyName')
        }


      }
    })
    return res
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



