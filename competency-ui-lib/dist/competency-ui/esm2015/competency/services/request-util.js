import * as _ from 'lodash';
export class RequestUtil {
    constructor() {
        this.formatedActivities = (data) => {
            if (!_.isEmpty(data)) {
                return data;
            }
        };
        this.formatedActivitityByPostion = (data) => {
            if (_.get(data, 'result')) {
                const children = _.get(data, 'result.response').children;
                if (children.length > 0) {
                    const result = _.reduce(children, (result, value) => {
                        result.push({
                            'roles': _.get(value, 'name'),
                            'id': _.get(value, 'id'),
                            'description': _.get(value, 'description'),
                        });
                        return result;
                    }, []);
                    return result;
                }
            }
        };
        this.formatedActivitityByRoleId = (data) => {
            if (_.get(data, 'result')) {
                const children = _.get(data, 'result.response').children;
                if (children.length > 0) {
                    const result = _.reduce(children, (result, value) => {
                        result.push({
                            'title': _.get(value, 'name'),
                            'cid': _.get(value, 'id'),
                            'description': _.get(value, 'description')
                        });
                        return result;
                    }, []);
                    return result;
                }
            }
        };
        this.formatedCompetency = (data) => {
            let result = [];
            _.forEach(data, (data) => {
                if (_.get(data, 'result')) {
                    const children = _.get(data, 'result.response').children;
                    if (children.length > 0) {
                        _.forEach(children, (value) => {
                            result.push({
                                'competency': _.get(value, 'name'),
                                'id': _.get(value, 'id'),
                                'description': _.get(value, 'description'),
                                'levels': ['Level 4', 'Level 5'],
                                'cid': _.get(data, 'result.response').id
                            });
                        });
                    }
                }
            });
            return result;
        };
    }
    /**
   * util method to formate the gained competency
   * for user
   */
    formatedGainedCompetency(entity, passbook) {
        let response = [];
        _.forEach(entity, (value) => {
            const cid = _.get(value, 'id');
            _.forEach(passbook, (passbookValue) => {
                if (passbookValue.competencies.hasOwnProperty(cid)) {
                    const competency = passbookValue.competencies[cid];
                    response.push({
                        'title': _.get(competency, 'additionalParams.competencyName'),
                        'logs': this.acquiredPassbookLogs(_.get(competency, 'acquiredDetails')),
                        'proficiencyLevels': this.acauiredChannelColourCode(_.get(competency, 'acquiredDetails'))
                    });
                }
            });
        });
        return response;
    }
    acquiredPassbookLogs(acquiredDetails) {
        let response = [];
        if (acquiredDetails.length > 0) {
            _.forEach(acquiredDetails, (value) => {
                response.push({
                    'header': _.get(value, 'courseName') ? _.get(value, 'courseName') : '',
                    'date': _.get(value, 'createdDate'),
                    'description': _.get(value, 'additionalParams.description'),
                    'keyboardArrowUp': true,
                    'level': _.get(value, 'competencyLevelId')
                });
            });
        }
        return response;
    }
    acauiredChannelColourCode(acquiredDetails) {
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
        ];
        _.forEach(acquiredDetails, (value) => {
            const channel = _.get(value, 'acquiredChannel');
            switch (channel) {
                case 'course': {
                    _.forEach(response, (level) => {
                        if (level.displayLevel == _.get(value, 'competencyLevelId')) {
                            level.color = '#FFFBB0';
                            level.selected = true;
                        }
                    });
                    break;
                }
                case 'selfAssessment': {
                    _.forEach(response, (level) => {
                        if (level.displayLevel == _.get(value, 'competencyLevelId')) {
                            level.color = '#7CB5E6';
                            level.selected = true;
                        }
                    });
                    break;
                }
                case 'admin': {
                    _.forEach(response, (level) => {
                        if (level.displayLevel == _.get(value, 'competencyLevelId')) {
                            level.color = '#A4DFCA';
                            level.selected = true;
                        }
                    });
                    break;
                }
                default: {
                    _.forEach(response, (level) => {
                        if (level.displayLevel == _.get(value, 'competencyLevelId')) {
                            level.color = '#FFFBB0';
                            level.selected = false;
                        }
                    });
                    break;
                }
            }
        });
        return response;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC11dGlsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFhc3RyaWthL2NvbXB0ZW5jeS9jb21wZXRlbmN5LyIsInNvdXJjZXMiOlsic2VydmljZXMvcmVxdWVzdC11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE1BQU0sT0FBTyxXQUFXO0lBQXhCO1FBQ0UsdUJBQWtCLEdBQUcsQ0FBQyxJQUFTLEVBQUUsRUFBRTtZQUNqQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDcEIsT0FBTyxJQUFJLENBQUE7YUFDWjtRQUVILENBQUMsQ0FBQTtRQUNELGdDQUEyQixHQUFHLENBQUMsSUFBUyxFQUFFLEVBQUU7WUFDMUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsRUFBRTtnQkFDekIsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxRQUFRLENBQUE7Z0JBQ3hELElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3ZCLE1BQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO3dCQUNsRCxNQUFNLENBQUMsSUFBSSxDQUFDOzRCQUNWLE9BQU8sRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7NEJBQzdCLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUM7NEJBQ3hCLGFBQWEsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUM7eUJBQzNDLENBQUMsQ0FBQTt3QkFDRixPQUFPLE1BQU0sQ0FBQTtvQkFDZixDQUFDLEVBQUUsRUFBRSxDQUFD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QUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5leHBvcnQgY2xhc3MgUmVxdWVzdFV0aWwge1xyXG4gIGZvcm1hdGVkQWN0aXZpdGllcyA9IChkYXRhOiBhbnkpID0+IHtcclxuICAgIGlmICghXy5pc0VtcHR5KGRhdGEpKSB7XHJcbiAgICAgIHJldHVybiBkYXRhXHJcbiAgICB9XHJcblxyXG4gIH1cclxuICBmb3JtYXRlZEFjdGl2aXRpdHlCeVBvc3Rpb24gPSAoZGF0YTogYW55KSA9PiB7XHJcbiAgICBpZiAoXy5nZXQoZGF0YSwgJ3Jlc3VsdCcpKSB7XHJcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gXy5nZXQoZGF0YSwgJ3Jlc3VsdC5yZXNwb25zZScpLmNoaWxkcmVuXHJcbiAgICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gXy5yZWR1Y2UoY2hpbGRyZW4sIChyZXN1bHQsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICByZXN1bHQucHVzaCh7XHJcbiAgICAgICAgICAgICdyb2xlcyc6IF8uZ2V0KHZhbHVlLCAnbmFtZScpLFxyXG4gICAgICAgICAgICAnaWQnOiBfLmdldCh2YWx1ZSwgJ2lkJyksXHJcbiAgICAgICAgICAgICdkZXNjcmlwdGlvbic6IF8uZ2V0KHZhbHVlLCAnZGVzY3JpcHRpb24nKSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICAgICAgfSwgW10pXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgZm9ybWF0ZWRBY3Rpdml0aXR5QnlSb2xlSWQgPSAoZGF0YTogYW55KSA9PiB7XHJcbiAgICBpZiAoXy5nZXQoZGF0YSwgJ3Jlc3VsdCcpKSB7XHJcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gXy5nZXQoZGF0YSwgJ3Jlc3VsdC5yZXNwb25zZScpLmNoaWxkcmVuXHJcbiAgICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gXy5yZWR1Y2UoY2hpbGRyZW4sIChyZXN1bHQsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICByZXN1bHQucHVzaCh7XHJcbiAgICAgICAgICAgICd0aXRsZSc6IF8uZ2V0KHZhbHVlLCAnbmFtZScpLFxyXG4gICAgICAgICAgICAnY2lkJzogXy5nZXQodmFsdWUsICdpZCcpLFxyXG4gICAgICAgICAgICAnZGVzY3JpcHRpb24nOiBfLmdldCh2YWx1ZSwgJ2Rlc2NyaXB0aW9uJylcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICAgICAgfSxbXSlcclxuICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuICBmb3JtYXRlZENvbXBldGVuY3kgPSAoZGF0YTogYW55KSA9PiB7XHJcbiAgICBsZXQgcmVzdWx0ID0gW11cclxuICAgIF8uZm9yRWFjaChkYXRhLChkYXRhOmFueSk9PntcclxuICAgICAgaWYgKF8uZ2V0KGRhdGEsICdyZXN1bHQnKSkge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gXy5nZXQoZGF0YSwgJ3Jlc3VsdC5yZXNwb25zZScpLmNoaWxkcmVuXHJcbiAgICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIF8uZm9yRWFjaChjaGlsZHJlbiwgKHZhbHVlOmFueSk9PntcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xyXG4gICAgICAgICAgICAgICdjb21wZXRlbmN5JzogXy5nZXQodmFsdWUsICduYW1lJyksXHJcbiAgICAgICAgICAgICAgJ2lkJzogXy5nZXQodmFsdWUsICdpZCcpLFxyXG4gICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6IF8uZ2V0KHZhbHVlLCAnZGVzY3JpcHRpb24nKSxcclxuICAgICAgICAgICAgICAnbGV2ZWxzJzogWydMZXZlbCA0JywgJ0xldmVsIDUnXSxcclxuICAgICAgICAgICAgICAnY2lkJzogXy5nZXQoZGF0YSwgJ3Jlc3VsdC5yZXNwb25zZScpLmlkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiByZXN1bHRcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiB1dGlsIG1ldGhvZCB0byBmb3JtYXRlIHRoZSBnYWluZWQgY29tcGV0ZW5jeSAgXHJcbiAqIGZvciB1c2VyIFxyXG4gKi9cclxuXHJcbiAgZm9ybWF0ZWRHYWluZWRDb21wZXRlbmN5KGVudGl0eTphbnksIHBhc3Nib29rOmFueSl7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBbXVxyXG4gICAgXy5mb3JFYWNoKGVudGl0eSwodmFsdWU6YW55KT0+e1xyXG4gICAgICAgIGNvbnN0IGNpZCA9ICAgXy5nZXQodmFsdWUsICdpZCcpXHJcbiAgICAgICAgXy5mb3JFYWNoKHBhc3Nib29rLChwYXNzYm9va1ZhbHVlOmFueSk9PntcclxuICAgICAgICAgICBpZihwYXNzYm9va1ZhbHVlLmNvbXBldGVuY2llcy5oYXNPd25Qcm9wZXJ0eShjaWQpKXtcclxuICAgICAgICAgICAgICBjb25zdCBjb21wZXRlbmN5ID0gIHBhc3Nib29rVmFsdWUuY29tcGV0ZW5jaWVzW2NpZF1cclxuICAgICAgICAgICAgICByZXNwb25zZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICd0aXRsZSc6IF8uZ2V0KGNvbXBldGVuY3ksJ2FkZGl0aW9uYWxQYXJhbXMuY29tcGV0ZW5jeU5hbWUnKSxcclxuICAgICAgICAgICAgICAgICdsb2dzJzogdGhpcy5hY3F1aXJlZFBhc3Nib29rTG9ncyhfLmdldChjb21wZXRlbmN5LCAnYWNxdWlyZWREZXRhaWxzJykpLFxyXG4gICAgICAgICAgICAgICAgJ3Byb2ZpY2llbmN5TGV2ZWxzJzogdGhpcy5hY2F1aXJlZENoYW5uZWxDb2xvdXJDb2RlKF8uZ2V0KGNvbXBldGVuY3ksICdhY3F1aXJlZERldGFpbHMnKSlcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gcmVzcG9uc2VcclxuICB9XHJcbiAgYWNxdWlyZWRQYXNzYm9va0xvZ3MoYWNxdWlyZWREZXRhaWxzOmFueSl7XHJcbiAgICBsZXQgcmVzcG9uc2UgID0gW11cclxuICAgIGlmKGFjcXVpcmVkRGV0YWlscy5sZW5ndGg+MCl7XHJcbiAgICAgIF8uZm9yRWFjaChhY3F1aXJlZERldGFpbHMsKHZhbHVlOmFueSk9PntcclxuICAgICAgICAgIHJlc3BvbnNlLnB1c2goe1xyXG4gICAgICAgICAgICAnaGVhZGVyJzogXy5nZXQodmFsdWUsICdjb3Vyc2VOYW1lJykgPyBfLmdldCh2YWx1ZSwgJ2NvdXJzZU5hbWUnKSA6ICcnLFxyXG4gICAgICAgICAgICAnZGF0ZSc6ICBfLmdldCh2YWx1ZSwnY3JlYXRlZERhdGUnKSxcclxuICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogXy5nZXQodmFsdWUsICdhZGRpdGlvbmFsUGFyYW1zLmRlc2NyaXB0aW9uJyksXHJcbiAgICAgICAgICAgICdrZXlib2FyZEFycm93VXAnOnRydWUsXHJcbiAgICAgICAgICAgICdsZXZlbCc6IF8uZ2V0KHZhbHVlLCdjb21wZXRlbmN5TGV2ZWxJZCcpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICByZXR1cm4gcmVzcG9uc2VcclxuICB9XHJcbiAgYWNhdWlyZWRDaGFubmVsQ29sb3VyQ29kZShhY3F1aXJlZERldGFpbHM6YW55KXtcclxuICAgIGxldCByZXNwb25zZSAgPSBbXHJcbiAgICAge1xyXG4gICAgICAgJ2NvbG9yJzogJyNGRkZCQjAnLFxyXG4gICAgICAgJ2Rpc3BsYXlMZXZlbCc6IDEsXHJcbiAgICAgICAnc2VsZWN0ZWQnOiBmYWxzZSxcclxuICAgICB9LFxyXG4gICAgIHtcclxuICAgICAgICdjb2xvcic6ICcjRkZGQkIwJyxcclxuICAgICAgICdkaXNwbGF5TGV2ZWwnOiAyLFxyXG4gICAgICAgJ3NlbGVjdGVkJzogZmFsc2UsXHJcbiAgICAgfSxcclxuICAgICB7XHJcbiAgICAgICAnY29sb3InOiAnI0ZGRkJCMCcsXHJcbiAgICAgICAnZGlzcGxheUxldmVsJzogMyxcclxuICAgICAgICdzZWxlY3RlZCc6IGZhbHNlLFxyXG4gICAgIH0sXHJcbiAgICAge1xyXG4gICAgICAgJ2NvbG9yJzogJyNGRkZCQjAnLFxyXG4gICAgICAgJ2Rpc3BsYXlMZXZlbCc6IDQsXHJcbiAgICAgICAnc2VsZWN0ZWQnOiBmYWxzZSxcclxuICAgICB9LFxyXG4gICAgIHtcclxuICAgICAgICdjb2xvcic6ICcjRkZGQkIwJyxcclxuICAgICAgICdkaXNwbGF5TGV2ZWwnOiA1LFxyXG4gICAgICAgJ3NlbGVjdGVkJzogZmFsc2UsXHJcbiAgICAgfVxyXG4gICAgXVxyXG4gICBcclxuICAgXy5mb3JFYWNoKGFjcXVpcmVkRGV0YWlscywodmFsdWU6YW55KT0+e1xyXG4gICAgICAgY29uc3QgY2hhbm5lbCA9IF8uZ2V0KHZhbHVlLCdhY3F1aXJlZENoYW5uZWwnKVxyXG4gICAgICAgc3dpdGNoKGNoYW5uZWwpIHtcclxuICAgICAgICAgY2FzZSAnY291cnNlJzp7XHJcbiAgICAgICAgICAgXy5mb3JFYWNoKHJlc3BvbnNlLCAobGV2ZWw6YW55KT0+e1xyXG4gICAgICAgICAgICAgaWYobGV2ZWwuZGlzcGxheUxldmVsID09IF8uZ2V0KHZhbHVlLCdjb21wZXRlbmN5TGV2ZWxJZCcpKXtcclxuICAgICAgICAgICAgICAgbGV2ZWwuY29sb3IgPSAnI0ZGRkJCMCc7XHJcbiAgICAgICAgICAgICAgIGxldmVsLnNlbGVjdGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgfVxyXG4gICAgICAgICBjYXNlICdzZWxmQXNzZXNzbWVudCc6e1xyXG4gICAgICAgICAgIF8uZm9yRWFjaChyZXNwb25zZSwgKGxldmVsOmFueSk9PntcclxuICAgICAgICAgICAgIGlmKGxldmVsLmRpc3BsYXlMZXZlbCA9PSBfLmdldCh2YWx1ZSwnY29tcGV0ZW5jeUxldmVsSWQnKSl7XHJcbiAgICAgICAgICAgICAgIGxldmVsLmNvbG9yID0gJyM3Q0I1RTYnO1xyXG4gICAgICAgICAgICAgICBsZXZlbC5zZWxlY3RlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfSApXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgfVxyXG4gICAgICAgICBjYXNlICdhZG1pbic6e1xyXG4gICAgICAgICAgIF8uZm9yRWFjaChyZXNwb25zZSwgKGxldmVsOmFueSk9PntcclxuICAgICAgICAgICAgIGlmKGxldmVsLmRpc3BsYXlMZXZlbCA9PSBfLmdldCh2YWx1ZSwnY29tcGV0ZW5jeUxldmVsSWQnKSl7XHJcbiAgICAgICAgICAgICAgIGxldmVsLmNvbG9yID0gJyNBNERGQ0EnO1xyXG4gICAgICAgICAgICAgICBsZXZlbC5zZWxlY3RlZCA9IHRydWVcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9IClcclxuICAgICAgICAgICBcclxuICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZGVmYXVsdDogeyBcclxuICAgICAgICAgICBfLmZvckVhY2gocmVzcG9uc2UsIChsZXZlbDphbnkpPT57XHJcbiAgICAgICAgICAgICBpZihsZXZlbC5kaXNwbGF5TGV2ZWwgPT0gXy5nZXQodmFsdWUsJ2NvbXBldGVuY3lMZXZlbElkJykpe1xyXG4gICAgICAgICAgICAgICBsZXZlbC5jb2xvciA9ICcjRkZGQkIwJztcclxuICAgICAgICAgICAgICAgbGV2ZWwuc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9IClcclxuICAgICAgICAgICBcclxuICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgIH1cclxuICAgICAgIH1cclxuICAgfSlcclxuICAgcmV0dXJuIHJlc3BvbnNlXHJcbiB9XHJcbn1cclxuXHJcblxyXG5cclxuIl19