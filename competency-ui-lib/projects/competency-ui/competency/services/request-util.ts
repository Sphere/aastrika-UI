import * as _ from 'lodash-es';
export class RequestUtil {
  formatedActivities = (data: any) => {
    if (!_.isEmpty(data)) {
      return data
    }

  }
  formatedActivitityByPostion = (data: any, lang: any, assessmentData, progrssData) => {
    let result = [];
    let activityMasterData = _.get(data, 'activity');
    console.log(activityMasterData);
  
    if (_.get(data, 'roles')) {
      _.forEach(data.roles, (role) => {
        const roleObject = _.values(role)[0];
        const children = roleObject.children;
        let activities = _.reduce(children, (activitiesResult, value) => {
          const cid = _.get(value, 'id');
          const filteredData = _.filter(activityMasterData, (obj) => _.has(obj, cid));
          console.log(filteredData);
  
          const childrenActivities = _.flatMap(filteredData, obj => {
            const filterDatachildren = _.get(obj, cid + '.children');
            if (filterDatachildren) {
              return _.map(filterDatachildren, child => ({
                'title': lang == 'hi' ? this.getHiName(child) : _.get(child, 'name'),
                'cid': _.get(child, 'id'),
                'description': _.get(child, 'description'),
                'code': _.get(child.additionalProperties, 'Code'),
                'levels': this.getLevels(_.get(child, 'id'), progrssData, lang),
                'competency': lang == 'hi' ? this.getHiName(value) : _.get(value, 'name'),
                'id': _.get(value, 'id'),
                'lastLevel': this.getheighestLevel(_.get(value, 'id'), progrssData),
                'completionPercentage': this.getCompeletionPercentage(_.get(value, 'id'), progrssData),
                'levelDescription': _.get(value.additionalProperties, 'competencyLevelDescription') ? this.getLevelDescription(_.get(value.additionalProperties, 'competencyLevelDescription'), progrssData, _.get(value, 'id'), lang) : '',
                'assessmentData': this.setAssessmentData(_.get(value, 'id'), assessmentData)
              }));
            }
            return [];
          });
  
          return activitiesResult.concat(childrenActivities);
        }, []);
  
        console.log(activities);
  
        result.push({
          'roles': lang == 'hi' ? this.getHiName(roleObject) : _.get(roleObject, 'name'),
          'id': _.get(roleObject, 'id'),
          'description': _.get(roleObject, 'description'),
          'averagePercentage': 0,
          'code': _.get(roleObject.additionalProperties, 'Code'),
          'activities': activities
        });
      });
      console.log(result);
      return result;
    }
  }
  

  getHiName(data) {
    let res: any
    if (_.get(data.additionalProperties, 'lang-hi-name')) {
      res = _.get(data.additionalProperties, 'lang-hi-name')
    } else {
      res = _.get(data, 'name')
    }
    return res
  }
  formatedActivitityByRoleId = (data: any, lang: any, activityMasterData, prgressData, assessData) => {
    // if (_.get(data, 'result')) {
    // const children = _.get(data, 'result.response').children
    let competencydata;
    if (data.length > 0) {
      const result = _.reduce(data, (result, value) => {
        const filteredData = _.filter(activityMasterData, (obj) =>
          _.has(obj, _.get(value, 'id'))
        );
        console.log('filteredData', filteredData);
        if(filteredData.length>0){
          _.forEach(filteredData, obj => {
            const childrenFilterData = _.get(obj, _.get(value, 'id') + '.children');
            competencydata = this.formatedCompetency(childrenFilterData, prgressData, lang, assessData, _.get(value, 'id'))
          })
        }
        result.push({
          'title': lang == 'hi' ? this.getHiName(value) : _.get(value, 'name'),
          'cid': _.get(value, 'id'),
          'description': _.get(value, 'description'),
          'code': _.get(value.additionalProperties, 'Code')
        })
        console.log(competencydata)
        return [...result, ...competencydata]
      }, [])
      console.log(result)
      return _.sortBy(result, [function (o) { return o.code; }]);
    }
  }


  formatedCompetency = (data: any, progrssData, lang, assessmentData, cid) => {
    let result = []
    // _.forEach(data, (data: any) => {
    // if (_.get(data, 'result')) {
    // const children = _.get(data, 'result.response').children
    if (data.length > 0) {
      _.forEach(data, (value: any) => {
        result.push({
          'levels': this.getLevels(_.get(value, 'id'), progrssData, lang),
          'competency': lang == 'hi' ? this.getHiName(value) : _.get(value, 'name'),
          'id': _.get(value, 'id'),
          'description': _.get(value, 'description'),
          'cid': cid,
          'lastLevel': this.getheighestLevel(_.get(value, 'id'), progrssData),
          'completionPercentage': this.getCompeletionPercentage(_.get(value, 'id'), progrssData),
          'code': _.get(value.additionalProperties, 'Code'),
          'levelDescription': _.get(value.additionalProperties, 'competencyLevelDescription') ? this.getLevelDescription(_.get(value.additionalProperties, 'competencyLevelDescription'), progrssData, _.get(value, 'id'), lang) : '',
          'assessmentData': this.setAssessmentData(_.get(value, 'id'), assessmentData)
        })

      })
    }
    // }
    // })
    result = _.sortBy(result, [function (o) { return o.code; }]);
    console.log("competency", result)
    return _.uniqBy(result, 'id');
  }

  getLevelDescription(data, progrssData, competencyId, lang) {
    let result = []
    _.forEach(JSON.parse(data), (value) => {
      if (value) {
        result.push({
          'levelId': _.get(value, 'level'),
          'name': lang == 'hi' ? _.get(value, 'lang-hi-name') : _.get(value, 'name'),
          'description': lang == 'hi' ? _.get(value, 'lang-hi-description') : _.get(value, 'description'),
          'description-hi': _.get(value, 'lang-hi-description'),
          'achived': false
        })
      }
    })
    let achievedLevels = null
    _.forEach(progrssData, (value: any) => {
      if (_.toNumber(value.competencyId) === competencyId) {

        achievedLevels = _.uniq(value.levelsAchieve);
      }
    })

    _.forEach(result, (value: any) => {
      _.forEach(achievedLevels, (levels: any) => {
        if (levels == value.levelId) {
          value.achived = true
        }
      })
    })

    return result;
  }

  getLevels(competencyId, progrssData, lang) {
    let respone = [
      { name: lang == 'hi' ? 'स्तर 1' : 'Level 1', achived: false, level: '1' },
      { name: lang == 'hi' ? 'स्तर 2' : 'Level 2', achived: false, level: '2' },
      { name: lang == 'hi' ? 'स्तर 3' : 'Level 3', achived: false, level: '3' },
      { name: lang == 'hi' ? 'स्तर 4' : 'Level 4', achived: false, level: '4' },
      { name: lang == 'hi' ? 'स्तर 5' : 'Level 5', achived: false, level: '5' }]
    let achievedLevels = null
    _.forEach(progrssData, (value: any) => {
      if (_.toNumber(value.competencyId) === competencyId) {

        achievedLevels = _.uniq(value.levelsAchieve);
      }
    })

    _.forEach(respone, (value: any) => {
      _.forEach(achievedLevels, (levels: any) => {
        if (levels == value.level) {
          value.achived = true
        }
      })
    })

    return respone

  }

  getheighestLevel(competencyId, progrssData) {
    let respone = ''
    _.forEach(progrssData, (value: any) => {
      if (_.toNumber(value.competencyId) === competencyId) {
        respone = value.levelId.competencyLevelId
      }
    })
    return respone
  }

  getCompeletionPercentage(competencyId, progrssData) {
    let respone = 0

    _.forEach(progrssData, (value: any) => {
      if (_.toNumber(value.competencyId) === competencyId) {
        respone = _.toNumber(value.levelId.competencyLevelId)
      }
    })
    respone = (respone * 100) / 5

    return respone
  }

  setAssessmentData(competencyId, assessData) {
    let result;
    _.forEach(assessData, (value) => {
      if (competencyId == value.competencyID) {
        result = value
      }
    })

    return result;
  }
  /**
 * util method to formate the gained competency  
 * for user 
 */

  formatedGainedCompetency(entity: any, passbook: any, lang: any) {
    let response = []
    _.forEach(entity, (value: any) => {
      const cid = _.get(value, 'id')
      _.forEach(passbook, (passbookValue: any) => {
        if (passbookValue.competencies.hasOwnProperty(cid)) {
          const competency = passbookValue.competencies[cid]
          console.log(competency)
          response.push({
            'title': lang == 'hi' ? this.getHiTitle(cid, entity, competency) : _.get(competency, 'additionalParams.competencyName'),
            'logs': this.acquiredPassbookLogs(_.get(competency, 'acquiredDetails'), lang),
            'proficiencyLevels': this.acauiredChannelColourCode(_.get(competency, 'acquiredDetails')),
            'competencyStoreData': this.competencyStoreDataFomat(competency),
            'titleHi': this.getHiTitle(cid, entity, competency)
          })
        }
      })
    })
    return response
  }

  getHiTitle(id, entity, competency) {
    let res: any
    _.forEach(entity, (item: any) => {
      if (item.id == id) {
        if (_.get(item.additionalProperties, 'lang-hi-name')) {

          res = _.get(item.additionalProperties, 'lang-hi-name')
        } else {
          res = _.get(competency, 'additionalParams.competencyName')
        }


      }
    })
    return res
  }

  acquiredPassbookLogs(acquiredDetails: any, lang) {
    let response = []
    if (acquiredDetails.length > 0) {
      _.forEach(acquiredDetails, (value: any) => {
        response.push({
          'header': _.get(value, 'courseName') ? _.get(value, 'courseName') : lang == 'hi' ? this.getHindiName(_.get(value, 'acquiredChannel')) : _.get(value, 'acquiredChannel'),
          'date': _.get(value, 'createdDate'),
          'description': _.get(value, 'additionalParams.description'),
          'keyboardArrowUp': true,
          'level': _.toNumber(_.get(value, 'competencyLevelId'))
        })
      })
    }
    return response
  }

  getHindiName(channelName) {
    let name;
    switch (channelName) {
      case 'selfAssessment': name = 'आत्म मूल्यांकन'
      case 'admin': name = 'व्यवस्थापक'
    }

    return name;
  }


  acauiredChannelColourCode(acquiredDetails: any) {
    let response = [
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

    _.forEach(acquiredDetails, (value: any) => {
      const channel = _.get(value, 'acquiredChannel')
      switch (channel) {
        case 'course': {
          _.forEach(response, (level: any) => {
            if (level.displayLevel == _.get(value, 'competencyLevelId')) {
              level.color = '#FFFBB0';
              level.selected = true
            }
          })

          break;
        }
        case 'Course': {
          _.forEach(response, (level: any) => {
            if (level.displayLevel == _.get(value, 'competencyLevelId')) {
              level.color = '#FFFBB0';
              level.selected = true
            }
          })

          break;
        }
        case 'selfAssessment': {
          _.forEach(response, (level: any) => {
            if (level.displayLevel == _.get(value, 'competencyLevelId')) {
              level.color = '#A4DFCA';
              level.selected = true

            }
          })

          break;
        }
        case 'admin': {
          _.forEach(response, (level: any) => {
            if (level.displayLevel == _.get(value, 'competencyLevelId')) {
              level.color = '#7cb5e6';
              level.selected = true
            }
          })

          break;
        }
        default: {
          _.forEach(response, (level: any) => {
            if (level.displayLevel == _.get(value, 'competencyLevelId')) {
              level.color = '#FFFBB0';
              level.selected = false;
            }
          })

          break;
        }
      }
    })
    return response
  }
  competencyStoreDataFomat(data) {
    let response = {}
    let levels = []
    if (data.acquiredDetails) {
      _.forEach(data.acquiredDetails, (value: any) => {
        if (value.competencyLevelId) {
          levels.push(value.competencyLevelId)
        }
      })
    }
    response = {
      'competencyId': data.competencyId,
      'competencyName': data.additionalParams.competencyName,
      'levelId': _.maxBy(data.acquiredDetails, 'competencyLevelId'),
      'levelsAchieve': levels
    }
    return response
  }


  formatedCompetencyCourseData(data: any) {
    const result = []
    if (_.get(data, 'result')) {
      const content = _.get(data, 'result.content')
      if (content) {
        _.forEach(content, (value: any) => {
          result.push({
            'title': _.get(value, 'name'),
            'contentId': _.get(value, 'identifier'),
            'contentType': _.get(value, 'contentType'),
            'subTitle': _.get(value, 'subTitle'),
            'description': _.get(value, 'description'),
            'creator': _.get(value, 'creator'),
            'duration': _.get(value, 'duration'),
            'batchId': this.getBatchData(value),
            'childContent': _.get(value, 'childNodes').length,
            'competencyID': this.getCompetencyData(value.competencies_v1)

          })
        })

      }


    }

    return result;
  }

  getCompetencyData(competency: any) {
    if (competency) {
      let data = JSON.parse(competency)
      return data[0].competencyId
    }
  }

  getBatchData(data) {
    let batchId = ''
    if (data.batches) {
      _.forEach(data.batches, (value: any) => {
        batchId = _.get(value, 'batchId')
      })
    }

    return batchId;
  }
}



