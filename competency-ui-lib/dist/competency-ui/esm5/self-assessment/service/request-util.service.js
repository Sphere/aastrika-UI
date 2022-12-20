import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as _ from 'lodash-es';
import * as i0 from "@angular/core";
var RequestUtil = /** @class */ (function () {
    function RequestUtil() {
    }
    RequestUtil.prototype.formatedcompetencyData = function (data) {
        var result = [];
        if (_.get(data, 'result')) {
            if (_.get(data, 'result.content').competency === true) {
                var children = _.get(data, 'result.content').children;
                if (children.length > 0) {
                    _.forEach(children, function (value) {
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
    };
    RequestUtil.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function RequestUtil_Factory() { return new RequestUtil(); }, token: RequestUtil, providedIn: "root" });
    RequestUtil = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        })
    ], RequestUtil);
    return RequestUtil;
}());
export { RequestUtil };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC11dGlsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWFzdHJpa2FfbnBtanMvY29tcHRlbmN5L3NlbGYtYXNzZXNzbWVudC8iLCJzb3VyY2VzIjpbInNlcnZpY2UvcmVxdWVzdC11dGlsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLENBQUMsTUFBTSxXQUFXLENBQUM7O0FBSy9CO0lBRUU7SUFBZ0IsQ0FBQztJQUVqQiw0Q0FBc0IsR0FBdEIsVUFBdUIsSUFBUTtRQUM3QixJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUE7UUFDakIsSUFBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBQyxRQUFRLENBQUMsRUFBQztZQUN0QixJQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFDLGdCQUFnQixDQUFDLENBQUMsVUFBVSxLQUFLLElBQUksRUFBQztnQkFDbEQsSUFBTSxRQUFRLEdBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxRQUFRLENBQUE7Z0JBRXhELElBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUM7b0JBQ3RCLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLFVBQUMsS0FBUzt3QkFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQzs0QkFDVixPQUFPLEVBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDOzRCQUM5QixVQUFVLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDOzRCQUNsQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsWUFBWSxDQUFDOzRCQUN0QyxhQUFhLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsYUFBYSxDQUFDOzRCQUN4QyxhQUFhLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsYUFBYSxDQUFDO3lCQUN6QyxDQUFDLENBQUE7b0JBQ0gsQ0FBQyxDQUFDLENBQUE7b0JBQ0YsT0FBTyxNQUFNLENBQUE7aUJBQ2Y7YUFDRjtTQUVGO0lBQ0gsQ0FBQzs7SUF6QlUsV0FBVztRQUh2QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csV0FBVyxDQTBCdkI7c0JBaENEO0NBZ0NDLEFBMUJELElBMEJDO1NBMUJZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaC1lcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFJlcXVlc3RVdGlsIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGZvcm1hdGVkY29tcGV0ZW5jeURhdGEoZGF0YTphbnkpe1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdXG4gICAgaWYoXy5nZXQoZGF0YSwncmVzdWx0Jykpe1xuICAgICAgaWYoXy5nZXQoZGF0YSwncmVzdWx0LmNvbnRlbnQnKS5jb21wZXRlbmN5ID09PSB0cnVlKXtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSAgXy5nZXQoZGF0YSwgJ3Jlc3VsdC5jb250ZW50JykuY2hpbGRyZW5cblxuICAgICAgICBpZihjaGlsZHJlbi5sZW5ndGggPiAwKXtcbiAgICAgICAgIF8uZm9yRWFjaChjaGlsZHJlbiwgKHZhbHVlOmFueSk9PntcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgJ3RpdGxlJzogIF8uZ2V0KHZhbHVlLCAnbmFtZScpLFxuICAgICAgICAgICAgICAnY291cnNlSWQnOiBfLmdldCh2YWx1ZSwgJ3BhcmVudCcpLFxuICAgICAgICAgICAgICAnY29udGVudElkJzogXy5nZXQodmFsdWUsJ2lkZW50aWZpZXInKSxcbiAgICAgICAgICAgICAgJ2NvbnRlbnRUeXBlJzpfLmdldCh2YWx1ZSwnY29udGVudFR5cGUnKSxcbiAgICAgICAgICAgICAgJ2FydGlmYWN0VXJsJzpfLmdldCh2YWx1ZSwnYXJ0aWZhY3RVcmwnKSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgIH0pXG4gICAgICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuICB9XG59XG4iXX0=