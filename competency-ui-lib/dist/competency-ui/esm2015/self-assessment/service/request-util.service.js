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
};
RequestUtil.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function RequestUtil_Factory() { return new RequestUtil(); }, token: RequestUtil, providedIn: "root" });
RequestUtil = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], RequestUtil);
export { RequestUtil };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC11dGlsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWFzdHJpa2FfbnBtanMvY29tcHRlbmN5L3NlbGYtYXNzZXNzbWVudC8iLCJzb3VyY2VzIjpbInNlcnZpY2UvcmVxdWVzdC11dGlsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLENBQUMsTUFBTSxXQUFXLENBQUM7O0FBSy9CLElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVc7SUFFdEIsZ0JBQWdCLENBQUM7SUFFakIsc0JBQXNCLENBQUMsSUFBUTtRQUM3QixNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUE7UUFDakIsSUFBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBQyxRQUFRLENBQUMsRUFBQztZQUN0QixJQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFDLGdCQUFnQixDQUFDLENBQUMsVUFBVSxLQUFLLElBQUksRUFBQztnQkFDbEQsTUFBTSxRQUFRLEdBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxRQUFRLENBQUE7Z0JBRXhELElBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUM7b0JBQ3RCLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBUyxFQUFDLEVBQUU7d0JBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUM7NEJBQ1YsT0FBTyxFQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQzs0QkFDOUIsVUFBVSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQzs0QkFDbEMsV0FBVyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLFlBQVksQ0FBQzs0QkFDdEMsYUFBYSxFQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLGFBQWEsQ0FBQzs0QkFDeEMsYUFBYSxFQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLGFBQWEsQ0FBQzt5QkFDekMsQ0FBQyxDQUFBO29CQUNILENBQUMsQ0FBQyxDQUFBO29CQUNGLE9BQU8sTUFBTSxDQUFBO2lCQUNmO2FBQ0Y7U0FFRjtJQUNILENBQUM7Q0FDRixDQUFBOztBQTFCWSxXQUFXO0lBSHZCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxXQUFXLENBMEJ2QjtTQTFCWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gtZXMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBSZXF1ZXN0VXRpbCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBmb3JtYXRlZGNvbXBldGVuY3lEYXRhKGRhdGE6YW55KXtcbiAgICBjb25zdCByZXN1bHQgPSBbXVxuICAgIGlmKF8uZ2V0KGRhdGEsJ3Jlc3VsdCcpKXtcbiAgICAgIGlmKF8uZ2V0KGRhdGEsJ3Jlc3VsdC5jb250ZW50JykuY29tcGV0ZW5jeSA9PT0gdHJ1ZSl7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gIF8uZ2V0KGRhdGEsICdyZXN1bHQuY29udGVudCcpLmNoaWxkcmVuXG5cbiAgICAgICAgaWYoY2hpbGRyZW4ubGVuZ3RoID4gMCl7XG4gICAgICAgICBfLmZvckVhY2goY2hpbGRyZW4sICh2YWx1ZTphbnkpPT57XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICd0aXRsZSc6ICBfLmdldCh2YWx1ZSwgJ25hbWUnKSxcbiAgICAgICAgICAgICAgJ2NvdXJzZUlkJzogXy5nZXQodmFsdWUsICdwYXJlbnQnKSxcbiAgICAgICAgICAgICAgJ2NvbnRlbnRJZCc6IF8uZ2V0KHZhbHVlLCdpZGVudGlmaWVyJyksXG4gICAgICAgICAgICAgICdjb250ZW50VHlwZSc6Xy5nZXQodmFsdWUsJ2NvbnRlbnRUeXBlJyksXG4gICAgICAgICAgICAgICdhcnRpZmFjdFVybCc6Xy5nZXQodmFsdWUsJ2FydGlmYWN0VXJsJyksXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICB9KVxuICAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgfVxufVxuIl19