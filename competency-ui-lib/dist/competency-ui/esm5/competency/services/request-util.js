import * as _ from 'lodash-es';
var RequestUtil = /** @class */ (function () {
    function RequestUtil() {
        this.formatedActivities = function (data) {
            if (!_.isEmpty(data)) {
                return data;
            }
        };
        this.formatedActivitityByPostion = function (data) {
            if (_.get(data, 'result')) {
                var children = _.get(data, 'result.response').children;
                if (children.length > 0) {
                    var result = _.reduce(children, function (result, value) {
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
        this.formatedActivitityByRoleId = function (data) {
            if (_.get(data, 'result')) {
                var children = _.get(data, 'result.response').children;
                if (children.length > 0) {
                    var result = _.reduce(children, function (result, value) {
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
        this.formatedCompetency = function (data) {
            var result = [];
            _.forEach(data, function (data) {
                if (_.get(data, 'result')) {
                    var children = _.get(data, 'result.response').children;
                    if (children.length > 0) {
                        _.forEach(children, function (value) {
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
    RequestUtil.prototype.formatedGainedCompetency = function (entity, passbook) {
        var _this = this;
        var response = [];
        _.forEach(entity, function (value) {
            var cid = _.get(value, 'id');
            _.forEach(passbook, function (passbookValue) {
                if (passbookValue.competencies.hasOwnProperty(cid)) {
                    var competency = passbookValue.competencies[cid];
                    response.push({
                        'title': _.get(competency, 'additionalParams.competencyName'),
                        'logs': _this.acquiredPassbookLogs(_.get(competency, 'acquiredDetails')),
                        'proficiencyLevels': _this.acauiredChannelColourCode(_.get(competency, 'acquiredDetails'))
                    });
                }
            });
        });
        return response;
    };
    RequestUtil.prototype.acquiredPassbookLogs = function (acquiredDetails) {
        var response = [];
        if (acquiredDetails.length > 0) {
            _.forEach(acquiredDetails, function (value) {
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
    };
    RequestUtil.prototype.acauiredChannelColourCode = function (acquiredDetails) {
        var response = [
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
        _.forEach(acquiredDetails, function (value) {
            var channel = _.get(value, 'acquiredChannel');
            switch (channel) {
                case 'course': {
                    _.forEach(response, function (level) {
                        if (level.displayLevel == _.get(value, 'competencyLevelId')) {
                            level.color = '#FFFBB0';
                            level.selected = true;
                        }
                    });
                    break;
                }
                case 'selfAssessment': {
                    _.forEach(response, function (level) {
                        if (level.displayLevel == _.get(value, 'competencyLevelId')) {
                            level.color = '#7CB5E6';
                            level.selected = true;
                        }
                    });
                    break;
                }
                case 'admin': {
                    _.forEach(response, function (level) {
                        if (level.displayLevel == _.get(value, 'competencyLevelId')) {
                            level.color = '#A4DFCA';
                            level.selected = true;
                        }
                    });
                    break;
                }
                default: {
                    _.forEach(response, function (level) {
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
    };
    return RequestUtil;
}());
export { RequestUtil };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC11dGlsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFhc3RyaWthX25wbWpzL2NvbXB0ZW5jeS9jb21wZXRlbmN5LyIsInNvdXJjZXMiOlsic2VydmljZXMvcmVxdWVzdC11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sV0FBVyxDQUFDO0FBQy9CO0lBQUE7UUFDRSx1QkFBa0IsR0FBRyxVQUFDLElBQVM7WUFDN0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3BCLE9BQU8sSUFBSSxDQUFBO2FBQ1o7UUFFSCxDQUFDLENBQUE7UUFDRCxnQ0FBMkIsR0FBRyxVQUFDLElBQVM7WUFDdEMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsRUFBRTtnQkFDekIsSUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxRQUFRLENBQUE7Z0JBQ3hELElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3ZCLElBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFVBQUMsTUFBTSxFQUFFLEtBQUs7d0JBQzlDLE1BQU0sQ0FBQyxJQUFJLENBQUM7NEJBQ1YsT0FBTyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQzs0QkFDN0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQzs0QkFDeEIsYUFBYSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQzt5QkFDM0MsQ0FBQyxDQUFBO3dCQUNGLE9BQU8sTUFBTSxDQUFBO29CQUNmLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtvQkFDTixPQUFPLE1BQU0sQ0FBQTtpQkFDZDthQUVGO1FB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LElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsbUJBQW1CLENBQUMsRUFBQzs0QkFDeEQsS0FBSyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7NEJBQ3hCLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO3lCQUV0QjtvQkFDSCxDQUFDLENBQUUsQ0FBQTtvQkFFSCxNQUFNO2lCQUNQO2dCQUNELEtBQUssT0FBTyxDQUFDLENBQUE7b0JBQ1gsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsVUFBQyxLQUFTO3dCQUM1QixJQUFHLEtBQUssQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsbUJBQW1CLENBQUMsRUFBQzs0QkFDeEQsS0FBSyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7NEJBQ3hCLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO3lCQUN0QjtvQkFDSCxDQUFDLENBQUUsQ0FBQTtvQkFFSCxNQUFNO2lCQUNQO2dCQUNELE9BQU8sQ0FBQyxDQUFDO29CQUNQLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLFVBQUMsS0FBUzt3QkFDNUIsSUFBRyxLQUFLLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLG1CQUFtQixDQUFDLEVBQUM7NEJBQ3hELEtBQUssQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDOzRCQUN4QixLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzt5QkFDeEI7b0JBQ0gsQ0FBQyxDQUFFLENBQUE7b0JBRUgsTUFBTTtpQkFDUDthQUNGO1FBQ0wsQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLFFBQVEsQ0FBQTtJQUNqQixDQUFDO0lBQ0Ysa0JBQUM7QUFBRCxDQUFDLEFBbkxELElBbUxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gtZXMnO1xuZXhwb3J0IGNsYXNzIFJlcXVlc3RVdGlsIHtcbiAgZm9ybWF0ZWRBY3Rpdml0aWVzID0gKGRhdGE6IGFueSkgPT4ge1xuICAgIGlmICghXy5pc0VtcHR5KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YVxuICAgIH1cblxuICB9XG4gIGZvcm1hdGVkQWN0aXZpdGl0eUJ5UG9zdGlvbiA9IChkYXRhOiBhbnkpID0+IHtcbiAgICBpZiAoXy5nZXQoZGF0YSwgJ3Jlc3VsdCcpKSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IF8uZ2V0KGRhdGEsICdyZXN1bHQucmVzcG9uc2UnKS5jaGlsZHJlblxuICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gXy5yZWR1Y2UoY2hpbGRyZW4sIChyZXN1bHQsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgJ3JvbGVzJzogXy5nZXQodmFsdWUsICduYW1lJyksXG4gICAgICAgICAgICAnaWQnOiBfLmdldCh2YWx1ZSwgJ2lkJyksXG4gICAgICAgICAgICAnZGVzY3JpcHRpb24nOiBfLmdldCh2YWx1ZSwgJ2Rlc2NyaXB0aW9uJyksXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgIH0sIFtdKVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9XG5cbiAgICB9XG5cbiAgfVxuICBmb3JtYXRlZEFjdGl2aXRpdHlCeVJvbGVJZCA9IChkYXRhOiBhbnkpID0+IHtcbiAgICBpZiAoXy5nZXQoZGF0YSwgJ3Jlc3VsdCcpKSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IF8uZ2V0KGRhdGEsICdyZXN1bHQucmVzcG9uc2UnKS5jaGlsZHJlblxuICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gXy5yZWR1Y2UoY2hpbGRyZW4sIChyZXN1bHQsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgJ3RpdGxlJzogXy5nZXQodmFsdWUsICduYW1lJyksXG4gICAgICAgICAgICAnY2lkJzogXy5nZXQodmFsdWUsICdpZCcpLFxuICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogXy5nZXQodmFsdWUsICdkZXNjcmlwdGlvbicpXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgIH0sW10pXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgIH1cblxuICAgIH1cblxuICB9XG4gIGZvcm1hdGVkQ29tcGV0ZW5jeSA9IChkYXRhOiBhbnkpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gW11cbiAgICBfLmZvckVhY2goZGF0YSwoZGF0YTphbnkpPT57XG4gICAgICBpZiAoXy5nZXQoZGF0YSwgJ3Jlc3VsdCcpKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gXy5nZXQoZGF0YSwgJ3Jlc3VsdC5yZXNwb25zZScpLmNoaWxkcmVuXG4gICAgICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgXy5mb3JFYWNoKGNoaWxkcmVuLCAodmFsdWU6YW55KT0+e1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAnY29tcGV0ZW5jeSc6IF8uZ2V0KHZhbHVlLCAnbmFtZScpLFxuICAgICAgICAgICAgICAnaWQnOiBfLmdldCh2YWx1ZSwgJ2lkJyksXG4gICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6IF8uZ2V0KHZhbHVlLCAnZGVzY3JpcHRpb24nKSxcbiAgICAgICAgICAgICAgJ2xldmVscyc6IFsnTGV2ZWwgNCcsICdMZXZlbCA1J10sXG4gICAgICAgICAgICAgICdjaWQnOiBfLmdldChkYXRhLCAncmVzdWx0LnJlc3BvbnNlJykuaWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgLyoqXG4gKiB1dGlsIG1ldGhvZCB0byBmb3JtYXRlIHRoZSBnYWluZWQgY29tcGV0ZW5jeSAgXG4gKiBmb3IgdXNlciBcbiAqL1xuXG4gIGZvcm1hdGVkR2FpbmVkQ29tcGV0ZW5jeShlbnRpdHk6YW55LCBwYXNzYm9vazphbnkpe1xuICAgIGxldCByZXNwb25zZSA9IFtdXG4gICAgXy5mb3JFYWNoKGVudGl0eSwodmFsdWU6YW55KT0+e1xuICAgICAgICBjb25zdCBjaWQgPSAgIF8uZ2V0KHZhbHVlLCAnaWQnKVxuICAgICAgICBfLmZvckVhY2gocGFzc2Jvb2ssKHBhc3Nib29rVmFsdWU6YW55KT0+e1xuICAgICAgICAgICBpZihwYXNzYm9va1ZhbHVlLmNvbXBldGVuY2llcy5oYXNPd25Qcm9wZXJ0eShjaWQpKXtcbiAgICAgICAgICAgICAgY29uc3QgY29tcGV0ZW5jeSA9ICBwYXNzYm9va1ZhbHVlLmNvbXBldGVuY2llc1tjaWRdXG4gICAgICAgICAgICAgIHJlc3BvbnNlLnB1c2goe1xuICAgICAgICAgICAgICAgICd0aXRsZSc6IF8uZ2V0KGNvbXBldGVuY3ksJ2FkZGl0aW9uYWxQYXJhbXMuY29tcGV0ZW5jeU5hbWUnKSxcbiAgICAgICAgICAgICAgICAnbG9ncyc6IHRoaXMuYWNxdWlyZWRQYXNzYm9va0xvZ3MoXy5nZXQoY29tcGV0ZW5jeSwgJ2FjcXVpcmVkRGV0YWlscycpKSxcbiAgICAgICAgICAgICAgICAncHJvZmljaWVuY3lMZXZlbHMnOiB0aGlzLmFjYXVpcmVkQ2hhbm5lbENvbG91ckNvZGUoXy5nZXQoY29tcGV0ZW5jeSwgJ2FjcXVpcmVkRGV0YWlscycpKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxuICAgIHJldHVybiByZXNwb25zZVxuICB9XG4gIGFjcXVpcmVkUGFzc2Jvb2tMb2dzKGFjcXVpcmVkRGV0YWlsczphbnkpe1xuICAgIGxldCByZXNwb25zZSAgPSBbXVxuICAgIGlmKGFjcXVpcmVkRGV0YWlscy5sZW5ndGg+MCl7XG4gICAgICBfLmZvckVhY2goYWNxdWlyZWREZXRhaWxzLCh2YWx1ZTphbnkpPT57XG4gICAgICAgICAgcmVzcG9uc2UucHVzaCh7XG4gICAgICAgICAgICAnaGVhZGVyJzogXy5nZXQodmFsdWUsICdjb3Vyc2VOYW1lJykgPyBfLmdldCh2YWx1ZSwgJ2NvdXJzZU5hbWUnKSA6ICcnLFxuICAgICAgICAgICAgJ2RhdGUnOiAgXy5nZXQodmFsdWUsJ2NyZWF0ZWREYXRlJyksXG4gICAgICAgICAgICAnZGVzY3JpcHRpb24nOiBfLmdldCh2YWx1ZSwgJ2FkZGl0aW9uYWxQYXJhbXMuZGVzY3JpcHRpb24nKSxcbiAgICAgICAgICAgICdrZXlib2FyZEFycm93VXAnOnRydWUsXG4gICAgICAgICAgICAnbGV2ZWwnOiBfLmdldCh2YWx1ZSwnY29tcGV0ZW5jeUxldmVsSWQnKVxuICAgICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cbiAgIHJldHVybiByZXNwb25zZVxuICB9XG4gIGFjYXVpcmVkQ2hhbm5lbENvbG91ckNvZGUoYWNxdWlyZWREZXRhaWxzOmFueSl7XG4gICAgbGV0IHJlc3BvbnNlICA9IFtcbiAgICAge1xuICAgICAgICdjb2xvcic6ICcjRkZGQkIwJyxcbiAgICAgICAnZGlzcGxheUxldmVsJzogMSxcbiAgICAgICAnc2VsZWN0ZWQnOiBmYWxzZSxcbiAgICAgfSxcbiAgICAge1xuICAgICAgICdjb2xvcic6ICcjRkZGQkIwJyxcbiAgICAgICAnZGlzcGxheUxldmVsJzogMixcbiAgICAgICAnc2VsZWN0ZWQnOiBmYWxzZSxcbiAgICAgfSxcbiAgICAge1xuICAgICAgICdjb2xvcic6ICcjRkZGQkIwJyxcbiAgICAgICAnZGlzcGxheUxldmVsJzogMyxcbiAgICAgICAnc2VsZWN0ZWQnOiBmYWxzZSxcbiAgICAgfSxcbiAgICAge1xuICAgICAgICdjb2xvcic6ICcjRkZGQkIwJyxcbiAgICAgICAnZGlzcGxheUxldmVsJzogNCxcbiAgICAgICAnc2VsZWN0ZWQnOiBmYWxzZSxcbiAgICAgfSxcbiAgICAge1xuICAgICAgICdjb2xvcic6ICcjRkZGQkIwJyxcbiAgICAgICAnZGlzcGxheUxldmVsJzogNSxcbiAgICAgICAnc2VsZWN0ZWQnOiBmYWxzZSxcbiAgICAgfVxuICAgIF1cbiAgIFxuICAgXy5mb3JFYWNoKGFjcXVpcmVkRGV0YWlscywodmFsdWU6YW55KT0+e1xuICAgICAgIGNvbnN0IGNoYW5uZWwgPSBfLmdldCh2YWx1ZSwnYWNxdWlyZWRDaGFubmVsJylcbiAgICAgICBzd2l0Y2goY2hhbm5lbCkge1xuICAgICAgICAgY2FzZSAnY291cnNlJzp7XG4gICAgICAgICAgIF8uZm9yRWFjaChyZXNwb25zZSwgKGxldmVsOmFueSk9PntcbiAgICAgICAgICAgICBpZihsZXZlbC5kaXNwbGF5TGV2ZWwgPT0gXy5nZXQodmFsdWUsJ2NvbXBldGVuY3lMZXZlbElkJykpe1xuICAgICAgICAgICAgICAgbGV2ZWwuY29sb3IgPSAnI0ZGRkJCMCc7XG4gICAgICAgICAgICAgICBsZXZlbC5zZWxlY3RlZCA9IHRydWVcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgIH0gKVxuICAgICAgICAgICBcbiAgICAgICAgICAgYnJlYWs7IFxuICAgICAgICAgfVxuICAgICAgICAgY2FzZSAnc2VsZkFzc2Vzc21lbnQnOntcbiAgICAgICAgICAgXy5mb3JFYWNoKHJlc3BvbnNlLCAobGV2ZWw6YW55KT0+e1xuICAgICAgICAgICAgIGlmKGxldmVsLmRpc3BsYXlMZXZlbCA9PSBfLmdldCh2YWx1ZSwnY29tcGV0ZW5jeUxldmVsSWQnKSl7XG4gICAgICAgICAgICAgICBsZXZlbC5jb2xvciA9ICcjN0NCNUU2JztcbiAgICAgICAgICAgICAgIGxldmVsLnNlbGVjdGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgfVxuICAgICAgICAgICB9IClcbiAgICAgICAgIFxuICAgICAgICAgICBicmVhazsgXG4gICAgICAgICB9XG4gICAgICAgICBjYXNlICdhZG1pbic6e1xuICAgICAgICAgICBfLmZvckVhY2gocmVzcG9uc2UsIChsZXZlbDphbnkpPT57XG4gICAgICAgICAgICAgaWYobGV2ZWwuZGlzcGxheUxldmVsID09IF8uZ2V0KHZhbHVlLCdjb21wZXRlbmN5TGV2ZWxJZCcpKXtcbiAgICAgICAgICAgICAgIGxldmVsLmNvbG9yID0gJyNBNERGQ0EnO1xuICAgICAgICAgICAgICAgbGV2ZWwuc2VsZWN0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgfVxuICAgICAgICAgICB9IClcbiAgICAgICAgICAgXG4gICAgICAgICAgIGJyZWFrOyBcbiAgICAgICAgIH1cbiAgICAgICAgIGRlZmF1bHQ6IHsgXG4gICAgICAgICAgIF8uZm9yRWFjaChyZXNwb25zZSwgKGxldmVsOmFueSk9PntcbiAgICAgICAgICAgICBpZihsZXZlbC5kaXNwbGF5TGV2ZWwgPT0gXy5nZXQodmFsdWUsJ2NvbXBldGVuY3lMZXZlbElkJykpe1xuICAgICAgICAgICAgICAgbGV2ZWwuY29sb3IgPSAnI0ZGRkJCMCc7XG4gICAgICAgICAgICAgICBsZXZlbC5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfSApXG4gICAgICAgICAgIFxuICAgICAgICAgICBicmVhazsgXG4gICAgICAgICB9XG4gICAgICAgfVxuICAgfSlcbiAgIHJldHVybiByZXNwb25zZVxuIH1cbn1cblxuXG5cbiJdfQ==