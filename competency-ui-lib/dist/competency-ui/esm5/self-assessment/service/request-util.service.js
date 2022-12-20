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
    RequestUtil.prototype.formatedCompetencyCourseData = function (data) {
        var result = [];
        if (_.get(data, 'result')) {
            var content = _.get(data, 'result.content');
            if (content.length > 0) {
                _.forEach(content, function (value) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC11dGlsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWFzdHJpa2FfbnBtanMvY29tcHRlbmN5L3NlbGYtYXNzZXNzbWVudC8iLCJzb3VyY2VzIjpbInNlcnZpY2UvcmVxdWVzdC11dGlsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLENBQUMsTUFBTSxXQUFXLENBQUM7O0FBSy9CO0lBRUU7SUFBZ0IsQ0FBQztJQUVqQiw0Q0FBc0IsR0FBdEIsVUFBdUIsSUFBUTtRQUM3QixJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUE7UUFDakIsSUFBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBQyxRQUFRLENBQUMsRUFBQztZQUN0QixJQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFDLGdCQUFnQixDQUFDLENBQUMsVUFBVSxLQUFLLElBQUksRUFBQztnQkFDbEQsSUFBTSxRQUFRLEdBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxRQUFRLENBQUE7Z0JBRXhELElBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUM7b0JBQ3RCLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLFVBQUMsS0FBUzt3QkFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQzs0QkFDVixPQUFPLEVBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDOzRCQUM5QixVQUFVLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDOzRCQUNsQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsWUFBWSxDQUFDOzRCQUN0QyxhQUFhLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsYUFBYSxDQUFDOzRCQUN4QyxhQUFhLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsYUFBYSxDQUFDO3lCQUN6QyxDQUFDLENBQUE7b0JBQ0gsQ0FBQyxDQUFDLENBQUE7b0JBQ0YsT0FBTyxNQUFNLENBQUE7aUJBQ2Y7YUFDRjtTQUVGO0lBQ0gsQ0FBQztJQUVELGtEQUE0QixHQUE1QixVQUE2QixJQUFRO1FBQ25DLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQTtRQUNqQixJQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFDLFFBQVEsQ0FBQyxFQUFDO1lBQ3RCLElBQU0sT0FBTyxHQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUE7WUFDOUMsSUFBRyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBQztnQkFDbkIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsVUFBQyxLQUFTO29CQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDO3dCQUNWLE9BQU8sRUFBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7d0JBQzlCLFdBQVcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxZQUFZLENBQUM7d0JBQ3RDLGFBQWEsRUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxhQUFhLENBQUM7d0JBQ3hDLFVBQVUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxVQUFVLENBQUM7d0JBQ25DLGFBQWEsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxhQUFhLENBQUM7d0JBQ3pDLFNBQVMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxTQUFTLENBQUM7d0JBQ2pDLFVBQVUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxVQUFVLENBQUM7cUJBRXBDLENBQUMsQ0FBQTtnQkFDSCxDQUFDLENBQUMsQ0FBQTtnQkFDRixPQUFPLE1BQU0sQ0FBQTthQUNmO1NBR0o7SUFDSCxDQUFDOztJQWpEVSxXQUFXO1FBSHZCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxXQUFXLENBa0R2QjtzQkF4REQ7Q0F3REMsQUFsREQsSUFrREM7U0FsRFksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoLWVzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUmVxdWVzdFV0aWwge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgZm9ybWF0ZWRjb21wZXRlbmN5RGF0YShkYXRhOmFueSl7XG4gICAgY29uc3QgcmVzdWx0ID0gW11cbiAgICBpZihfLmdldChkYXRhLCdyZXN1bHQnKSl7XG4gICAgICBpZihfLmdldChkYXRhLCdyZXN1bHQuY29udGVudCcpLmNvbXBldGVuY3kgPT09IHRydWUpe1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9ICBfLmdldChkYXRhLCAncmVzdWx0LmNvbnRlbnQnKS5jaGlsZHJlblxuXG4gICAgICAgIGlmKGNoaWxkcmVuLmxlbmd0aCA+IDApe1xuICAgICAgICAgXy5mb3JFYWNoKGNoaWxkcmVuLCAodmFsdWU6YW55KT0+e1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAndGl0bGUnOiAgXy5nZXQodmFsdWUsICduYW1lJyksXG4gICAgICAgICAgICAgICdjb3Vyc2VJZCc6IF8uZ2V0KHZhbHVlLCAncGFyZW50JyksXG4gICAgICAgICAgICAgICdjb250ZW50SWQnOiBfLmdldCh2YWx1ZSwnaWRlbnRpZmllcicpLFxuICAgICAgICAgICAgICAnY29udGVudFR5cGUnOl8uZ2V0KHZhbHVlLCdjb250ZW50VHlwZScpLFxuICAgICAgICAgICAgICAnYXJ0aWZhY3RVcmwnOl8uZ2V0KHZhbHVlLCdhcnRpZmFjdFVybCcpLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgfSlcbiAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBmb3JtYXRlZENvbXBldGVuY3lDb3Vyc2VEYXRhKGRhdGE6YW55KXtcbiAgICBjb25zdCByZXN1bHQgPSBbXVxuICAgIGlmKF8uZ2V0KGRhdGEsJ3Jlc3VsdCcpKXtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSAgXy5nZXQoZGF0YSwgJ3Jlc3VsdC5jb250ZW50JylcbiAgICAgIGlmKGNvbnRlbnQubGVuZ3RoID4gMCl7XG4gICAgICAgICBfLmZvckVhY2goY29udGVudCwgKHZhbHVlOmFueSk9PntcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgJ3RpdGxlJzogIF8uZ2V0KHZhbHVlLCAnbmFtZScpLFxuICAgICAgICAgICAgICAnY29udGVudElkJzogXy5nZXQodmFsdWUsJ2lkZW50aWZpZXInKSxcbiAgICAgICAgICAgICAgJ2NvbnRlbnRUeXBlJzpfLmdldCh2YWx1ZSwnY29udGVudFR5cGUnKSxcbiAgICAgICAgICAgICAgJ3N1YlRpdGxlJzogXy5nZXQodmFsdWUsJ3N1YlRpdGxlJyksXG4gICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6IF8uZ2V0KHZhbHVlLCdkZXNjcmlwdGlvbicpLFxuICAgICAgICAgICAgICAnY3JlYXRvcic6IF8uZ2V0KHZhbHVlLCdjcmVhdG9yJyksXG4gICAgICAgICAgICAgICdkdXJhdGlvbic6IF8uZ2V0KHZhbHVlLCdkdXJhdGlvbicpXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgIH0pXG4gICAgICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgfVxuICAgICAgXG5cbiAgICB9XG4gIH1cbn1cbiJdfQ==