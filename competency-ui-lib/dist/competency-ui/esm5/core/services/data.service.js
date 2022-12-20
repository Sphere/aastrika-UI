import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap } from 'rxjs/operators';
import { of as observableOf, throwError as observableThrowError } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
/**
 * DataService to make http call
 *
 * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
 */
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    /**
     * for making get api calls
     *
     * @param requestParam interface
     */
    DataService.prototype.get = function (requestParam) {
        var httpOptions = {
            headers: requestParam.header ? requestParam.header : this.getHeader(),
            params: requestParam.param,
            observe: 'response'
        };
        return this.http.get(requestParam.url, httpOptions).pipe(mergeMap(function (_a) {
            var body = _a.body, headers = _a.headers;
            if (body.responseCode !== 'OK') {
                return observableThrowError(body);
            }
            return observableOf(body);
        }));
    };
    /**
    * for making get api calls
    *
    * @param requestParam interface
    */
    DataService.prototype.post = function (requestParam) {
        var httpOptions = {
            headers: requestParam.header ? this.getHeader(requestParam.header) : this.getHeader(),
            params: requestParam.param
        };
        // console.log('log in data service',requestParam)
        return this.http.post(requestParam.url, requestParam.data, httpOptions).pipe(mergeMap(function (data) {
            if (data.responseCode === 200 || data.responseCode === 'OK') {
                return observableOf(data);
            }
            else {
                return observableThrowError(data);
            }
        }));
    };
    /**
     * for preparing headers
     */
    DataService.prototype.getHeader = function (headers) {
        var default_headers = {
            'Accept': 'application/json',
        };
        if (headers) {
            return tslib_1.__assign({}, default_headers, headers);
        }
        else {
            return tslib_1.__assign({}, default_headers);
        }
    };
    DataService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    DataService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DataService_Factory() { return new DataService(i0.ɵɵinject(i1.HttpClient)); }, token: DataService, providedIn: "root" });
    DataService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        })
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFhc3RyaWthX25wbWpzL2NvbXB0ZW5jeS9jb3JlLyIsInNvdXJjZXMiOlsic2VydmljZXMvZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZ0JBQWdCLENBQUE7QUFDdkMsT0FBTyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQUUsVUFBVSxJQUFJLG9CQUFvQixFQUFjLE1BQU0sTUFBTSxDQUFDOzs7QUFDMUY7Ozs7R0FJRztBQUlIO0lBU0UscUJBQVksSUFBZTtRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtJQUNqQixDQUFDO0lBQ0Y7Ozs7T0FJRztJQUNILHlCQUFHLEdBQUgsVUFBSSxZQUFnQjtRQUNsQixJQUFNLFdBQVcsR0FBUTtZQUN2QixPQUFPLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNyRSxNQUFNLEVBQUUsWUFBWSxDQUFDLEtBQUs7WUFDMUIsT0FBTyxFQUFFLFVBQVU7U0FDcEIsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUUsWUFBWSxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQ3ZELFFBQVEsQ0FBQyxVQUFDLEVBQXNCO2dCQUFwQixjQUFJLEVBQUUsb0JBQU87WUFDdkIsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtnQkFDOUIsT0FBTyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuQztZQUNELE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBQ0E7Ozs7TUFJRTtJQUNILDBCQUFJLEdBQUosVUFBSyxZQUFnQjtRQUNuQixJQUFNLFdBQVcsR0FBTztZQUN0QixPQUFPLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDckYsTUFBTSxFQUFFLFlBQVksQ0FBQyxLQUFLO1NBQzNCLENBQUE7UUFDRCxrREFBa0Q7UUFDbEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUN4RSxRQUFRLENBQUMsVUFBQyxJQUFRO1lBQ2hCLElBQUcsSUFBSSxDQUFDLFlBQVksS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLEVBQUM7Z0JBQ3pELE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzNCO2lCQUFLO2dCQUNKLE9BQU8sb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbkM7UUFFSCxDQUFDLENBQUMsQ0FDSCxDQUFBO0lBQ0gsQ0FBQztJQUNEOztPQUVHO0lBQ00sK0JBQVMsR0FBakIsVUFBa0IsT0FBYTtRQUU5QixJQUFNLGVBQWUsR0FBRztZQUN0QixRQUFRLEVBQUUsa0JBQWtCO1NBRTdCLENBQUM7UUFFRixJQUFJLE9BQU8sRUFBRTtZQUNYLDRCQUFZLGVBQWUsRUFBSyxPQUFPLEVBQUc7U0FDM0M7YUFBTTtZQUNMLDRCQUFZLGVBQWUsRUFBRztTQUMvQjtJQUNILENBQUM7O2dCQTNEZ0IsVUFBVTs7O0lBVGhCLFdBQVc7UUFIdkIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLFdBQVcsQ0FxRXZCO3NCQWpGRDtDQWlGQyxBQXJFRCxJQXFFQztTQXJFWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7bWVyZ2VNYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xuaW1wb3J0IHsgb2YgYXMgb2JzZXJ2YWJsZU9mLCB0aHJvd0Vycm9yIGFzIG9ic2VydmFibGVUaHJvd0Vycm9yLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG4vKipcbiAqIERhdGFTZXJ2aWNlIHRvIG1ha2UgaHR0cCBjYWxsXG4gKlxuICogQGF1dGhvciBBbWFuIEt1bWFyIFNoYXJtYSA8YW1hbmt1bWFyLnNoYXJtYUB0YXJlbnRvLmNvbT5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2Uge1xuICAgIC8qKlxuICAgKiBDb250YWlucyBiYXNlIFVybCBmb3IgYXBpIGVuZCBwb2ludHNcbiAgICovXG4gICAgIGJhc2VVcmw6IHN0cmluZztcbiAgICAvKipcbiAgICogYW5ndWxhciBIdHRwQ2xpZW50XG4gICAqL1xuICBodHRwOiBIdHRwQ2xpZW50O1xuICBjb25zdHJ1Y3RvcihodHRwOkh0dHBDbGllbnQpIHtcbiAgICB0aGlzLmh0dHAgPSBodHRwXG4gICB9XG4gIC8qKlxuICAgKiBmb3IgbWFraW5nIGdldCBhcGkgY2FsbHNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RQYXJhbSBpbnRlcmZhY2VcbiAgICovXG4gIGdldChyZXF1ZXN0UGFyYW06YW55KTpPYnNlcnZhYmxlPGFueT57XG4gICAgY29uc3QgaHR0cE9wdGlvbnM6IGFueSA9IHtcbiAgICAgIGhlYWRlcnM6IHJlcXVlc3RQYXJhbS5oZWFkZXIgPyByZXF1ZXN0UGFyYW0uaGVhZGVyIDogdGhpcy5nZXRIZWFkZXIoKSxcbiAgICAgIHBhcmFtczogcmVxdWVzdFBhcmFtLnBhcmFtLFxuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJ1xuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoIHJlcXVlc3RQYXJhbS51cmwsIGh0dHBPcHRpb25zKS5waXBlKFxuICAgICAgbWVyZ2VNYXAoKHsgYm9keSwgaGVhZGVycyB9OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGJvZHkucmVzcG9uc2VDb2RlICE9PSAnT0snKSB7XG4gICAgICAgICAgcmV0dXJuIG9ic2VydmFibGVUaHJvd0Vycm9yKGJvZHkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlT2YoYm9keSk7XG4gICAgICB9KSk7XG4gIH1cbiAgIC8qKlxuICAgKiBmb3IgbWFraW5nIGdldCBhcGkgY2FsbHNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RQYXJhbSBpbnRlcmZhY2VcbiAgICovXG4gIHBvc3QocmVxdWVzdFBhcmFtOmFueSl7XG4gICAgY29uc3QgaHR0cE9wdGlvbnM6YW55ID0ge1xuICAgICAgaGVhZGVyczogcmVxdWVzdFBhcmFtLmhlYWRlciA/IHRoaXMuZ2V0SGVhZGVyKHJlcXVlc3RQYXJhbS5oZWFkZXIpIDogdGhpcy5nZXRIZWFkZXIoKSxcbiAgICAgIHBhcmFtczogcmVxdWVzdFBhcmFtLnBhcmFtXG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdsb2cgaW4gZGF0YSBzZXJ2aWNlJyxyZXF1ZXN0UGFyYW0pXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHJlcXVlc3RQYXJhbS51cmwscmVxdWVzdFBhcmFtLmRhdGEsaHR0cE9wdGlvbnMpLnBpcGUoXG4gICAgICBtZXJnZU1hcCgoZGF0YTphbnkpPT57XG4gICAgICAgIGlmKGRhdGEucmVzcG9uc2VDb2RlID09PSAyMDAgfHwgZGF0YS5yZXNwb25zZUNvZGUgPT09ICdPSycpe1xuICAgICAgICAgIHJldHVybiBvYnNlcnZhYmxlT2YoZGF0YSk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZVRocm93RXJyb3IoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9KVxuICAgIClcbiAgfVxuICAvKipcbiAgICogZm9yIHByZXBhcmluZyBoZWFkZXJzXG4gICAqL1xuICAgcHJpdmF0ZSBnZXRIZWFkZXIoaGVhZGVycz86IGFueSk6IGFueSB7XG4gICAgXG4gICAgY29uc3QgZGVmYXVsdF9oZWFkZXJzID0ge1xuICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgXG4gICAgfTtcbiAgICBcbiAgICBpZiAoaGVhZGVycykge1xuICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdF9oZWFkZXJzLCAuLi5oZWFkZXJzIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7IC4uLmRlZmF1bHRfaGVhZGVycyB9O1xuICAgIH1cbiAgfVxufVxuIl19