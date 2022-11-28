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
}
