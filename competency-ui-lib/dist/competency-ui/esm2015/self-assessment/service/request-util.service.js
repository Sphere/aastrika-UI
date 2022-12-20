import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as _ from 'lodash-es';
import * as i0 from "@angular/core";
let RequestUtil = class RequestUtil {
    constructor() { }
    formatedcompetencyData(data) {
        const result = [];
        if (_.get(data, 'result')) {
            if (_.get(data, 'result.content').competency === true) {
                const children = _.get(data, 'result.content').children;
                if (children.length > 0) {
                    _.forEach(children, (value) => {
                        result.push({
                            'title': _.get(value, 'name'),
                            'courseId': _.get(value, 'parent'),
                            'contentId': _.get(value, 'identifier'),
                            'contentType': _.get(value, 'contentType'),
                            'artifactUrl': _.get(value, 'artifactUrl'),
                        });
                    });
                    return result;
                }
            }
        }
    }
    formatedCompetencyCourseData(data) {
        const result = [];
        if (_.get(data, 'result')) {
            const content = _.get(data, 'result.content');
            if (content.length > 0) {
                _.forEach(content, (value) => {
                    result.push({
                        'title': _.get(value, 'name'),
                        'contentId': _.get(value, 'identifier'),
                        'contentType': _.get(value, 'contentType'),
                        'subTitle': _.get(value, 'subTitle'),
                        'description': _.get(value, 'description'),
                        'creator': _.get(value, 'creator'),
                        'duration': _.get(value, 'duration')
                    });
                });
                return result;
            }
        }
    }
};
RequestUtil.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function RequestUtil_Factory() { return new RequestUtil(); }, token: RequestUtil, providedIn: "root" });
RequestUtil = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], RequestUtil);
export { RequestUtil };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC11dGlsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWFzdHJpa2FfbnBtanMvY29tcHRlbmN5L3NlbGYtYXNzZXNzbWVudC8iLCJzb3VyY2VzIjpbInNlcnZpY2UvcmVxdWVzdC11dGlsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLENBQUMsTUFBTSxXQUFXLENBQUM7O0FBSy9CLElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVc7SUFFdEIsZ0JBQWdCLENBQUM7SUFFakIsc0JBQXNCLENBQUMsSUFBUTtRQUM3QixNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUE7UUFDakIsSUFBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBQyxRQUFRLENBQUMsRUFBQztZQUN0QixJQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFDLGdCQUFnQixDQUFDLENBQUMsVUFBVSxLQUFLLElBQUksRUFBQztnQkFDbEQsTUFBTSxRQUFRLEdBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxRQUFRLENBQUE7Z0JBRXhELElBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUM7b0JBQ3RCLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBUyxFQUFDLEVBQUU7d0JBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUM7NEJBQ1YsT0FBTyxFQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQzs0QkFDOUIsVUFBVSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQzs0QkFDbEMsV0FBVyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLFlBQVksQ0FBQzs0QkFDdEMsYUFBYSxFQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLGFBQWEsQ0FBQzs0QkFDeEMsYUFBYSxFQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLGFBQWEsQ0FBQzt5QkFDekMsQ0FBQyxDQUFBO29CQUNILENBQUMsQ0FBQyxDQUFBO29CQUNGLE9BQU8sTUFBTSxDQUFBO2lCQUNmO2FBQ0Y7U0FFRjtJQUNILENBQUM7SUFFRCw0QkFBNEIsQ0FBQyxJQUFRO1FBQ25DLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQTtRQUNqQixJQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFDLFFBQVEsQ0FBQyxFQUFDO1lBQ3RCLE1BQU0sT0FBTyxHQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUE7WUFDOUMsSUFBRyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBQztnQkFDbkIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFTLEVBQUMsRUFBRTtvQkFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQzt3QkFDVixPQUFPLEVBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO3dCQUM5QixXQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsWUFBWSxDQUFDO3dCQUN0QyxhQUFhLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsYUFBYSxDQUFDO3dCQUN4QyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsVUFBVSxDQUFDO3dCQUNuQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsYUFBYSxDQUFDO3dCQUN6QyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsU0FBUyxDQUFDO3dCQUNqQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsVUFBVSxDQUFDO3FCQUVwQyxDQUFDLENBQUE7Z0JBQ0gsQ0FBQyxDQUFDLENBQUE7Z0JBQ0YsT0FBTyxNQUFNLENBQUE7YUFDZjtTQUdKO0lBQ0gsQ0FBQztDQUNGLENBQUE7O0FBbERZLFdBQVc7SUFIdkIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLFdBQVcsQ0FrRHZCO1NBbERZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaC1lcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFJlcXVlc3RVdGlsIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGZvcm1hdGVkY29tcGV0ZW5jeURhdGEoZGF0YTphbnkpe1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdXG4gICAgaWYoXy5nZXQoZGF0YSwncmVzdWx0Jykpe1xuICAgICAgaWYoXy5nZXQoZGF0YSwncmVzdWx0LmNvbnRlbnQnKS5jb21wZXRlbmN5ID09PSB0cnVlKXtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSAgXy5nZXQoZGF0YSwgJ3Jlc3VsdC5jb250ZW50JykuY2hpbGRyZW5cblxuICAgICAgICBpZihjaGlsZHJlbi5sZW5ndGggPiAwKXtcbiAgICAgICAgIF8uZm9yRWFjaChjaGlsZHJlbiwgKHZhbHVlOmFueSk9PntcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgJ3RpdGxlJzogIF8uZ2V0KHZhbHVlLCAnbmFtZScpLFxuICAgICAgICAgICAgICAnY291cnNlSWQnOiBfLmdldCh2YWx1ZSwgJ3BhcmVudCcpLFxuICAgICAgICAgICAgICAnY29udGVudElkJzogXy5nZXQodmFsdWUsJ2lkZW50aWZpZXInKSxcbiAgICAgICAgICAgICAgJ2NvbnRlbnRUeXBlJzpfLmdldCh2YWx1ZSwnY29udGVudFR5cGUnKSxcbiAgICAgICAgICAgICAgJ2FydGlmYWN0VXJsJzpfLmdldCh2YWx1ZSwnYXJ0aWZhY3RVcmwnKSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgIH0pXG4gICAgICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgZm9ybWF0ZWRDb21wZXRlbmN5Q291cnNlRGF0YShkYXRhOmFueSl7XG4gICAgY29uc3QgcmVzdWx0ID0gW11cbiAgICBpZihfLmdldChkYXRhLCdyZXN1bHQnKSl7XG4gICAgICBjb25zdCBjb250ZW50ID0gIF8uZ2V0KGRhdGEsICdyZXN1bHQuY29udGVudCcpXG4gICAgICBpZihjb250ZW50Lmxlbmd0aCA+IDApe1xuICAgICAgICAgXy5mb3JFYWNoKGNvbnRlbnQsICh2YWx1ZTphbnkpPT57XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICd0aXRsZSc6ICBfLmdldCh2YWx1ZSwgJ25hbWUnKSxcbiAgICAgICAgICAgICAgJ2NvbnRlbnRJZCc6IF8uZ2V0KHZhbHVlLCdpZGVudGlmaWVyJyksXG4gICAgICAgICAgICAgICdjb250ZW50VHlwZSc6Xy5nZXQodmFsdWUsJ2NvbnRlbnRUeXBlJyksXG4gICAgICAgICAgICAgICdzdWJUaXRsZSc6IF8uZ2V0KHZhbHVlLCdzdWJUaXRsZScpLFxuICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiBfLmdldCh2YWx1ZSwnZGVzY3JpcHRpb24nKSxcbiAgICAgICAgICAgICAgJ2NyZWF0b3InOiBfLmdldCh2YWx1ZSwnY3JlYXRvcicpLFxuICAgICAgICAgICAgICAnZHVyYXRpb24nOiBfLmdldCh2YWx1ZSwnZHVyYXRpb24nKVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICB9KVxuICAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgIH1cbiAgICAgIFxuXG4gICAgfVxuICB9XG59XG4iXX0=