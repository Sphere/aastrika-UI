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
        return this.http.get(this.baseUrl + requestParam.url, httpOptions).pipe(mergeMap(function (_a) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFhc3RyaWthX25wbWpzL2NvbXB0ZW5jeS9jb3JlLyIsInNvdXJjZXMiOlsic2VydmljZXMvZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZ0JBQWdCLENBQUE7QUFDdkMsT0FBTyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQUUsVUFBVSxJQUFJLG9CQUFvQixFQUFjLE1BQU0sTUFBTSxDQUFDOzs7QUFDMUY7Ozs7R0FJRztBQUlIO0lBU0UscUJBQVksSUFBZTtRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtJQUNqQixDQUFDO0lBQ0Y7Ozs7T0FJRztJQUNILHlCQUFHLEdBQUgsVUFBSSxZQUFnQjtRQUNsQixJQUFNLFdBQVcsR0FBUTtZQUN2QixPQUFPLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNyRSxNQUFNLEVBQUUsWUFBWSxDQUFDLEtBQUs7WUFDMUIsT0FBTyxFQUFFLFVBQVU7U0FDcEIsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDckUsUUFBUSxDQUFDLFVBQUMsRUFBc0I7Z0JBQXBCLGNBQUksRUFBRSxvQkFBTztZQUN2QixJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO2dCQUM5QixPQUFPLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ25DO1lBQ0QsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7SUFDQTs7OztNQUlFO0lBQ0gsMEJBQUksR0FBSixVQUFLLFlBQWdCO1FBQ25CLElBQU0sV0FBVyxHQUFPO1lBQ3RCLE9BQU8sRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNyRixNQUFNLEVBQUUsWUFBWSxDQUFDLEtBQUs7U0FDM0IsQ0FBQTtRQUNELGtEQUFrRDtRQUNsRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUMsWUFBWSxDQUFDLElBQUksRUFBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQ3hFLFFBQVEsQ0FBQyxVQUFDLElBQVE7WUFDaEIsSUFBRyxJQUFJLENBQUMsWUFBWSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksRUFBQztnQkFDekQsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDM0I7aUJBQUs7Z0JBQ0osT0FBTyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuQztRQUVILENBQUMsQ0FBQyxDQUNILENBQUE7SUFDSCxDQUFDO0lBQ0Q7O09BRUc7SUFDTSwrQkFBUyxHQUFqQixVQUFrQixPQUFhO1FBRTlCLElBQU0sZUFBZSxHQUFHO1lBQ3RCLFFBQVEsRUFBRSxrQkFBa0I7U0FFN0IsQ0FBQztRQUVGLElBQUksT0FBTyxFQUFFO1lBQ1gsNEJBQVksZUFBZSxFQUFLLE9BQU8sRUFBRztTQUMzQzthQUFNO1lBQ0wsNEJBQVksZUFBZSxFQUFHO1NBQy9CO0lBQ0gsQ0FBQzs7Z0JBM0RnQixVQUFVOzs7SUFUaEIsV0FBVztRQUh2QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csV0FBVyxDQXFFdkI7c0JBakZEO0NBaUZDLEFBckVELElBcUVDO1NBckVZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHttZXJnZU1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5pbXBvcnQgeyBvZiBhcyBvYnNlcnZhYmxlT2YsIHRocm93RXJyb3IgYXMgb2JzZXJ2YWJsZVRocm93RXJyb3IsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbi8qKlxuICogRGF0YVNlcnZpY2UgdG8gbWFrZSBodHRwIGNhbGxcbiAqXG4gKiBAYXV0aG9yIEFtYW4gS3VtYXIgU2hhcm1hIDxhbWFua3VtYXIuc2hhcm1hQHRhcmVudG8uY29tPlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYXRhU2VydmljZSB7XG4gICAgLyoqXG4gICAqIENvbnRhaW5zIGJhc2UgVXJsIGZvciBhcGkgZW5kIHBvaW50c1xuICAgKi9cbiAgICAgYmFzZVVybDogc3RyaW5nO1xuICAgIC8qKlxuICAgKiBhbmd1bGFyIEh0dHBDbGllbnRcbiAgICovXG4gIGh0dHA6IEh0dHBDbGllbnQ7XG4gIGNvbnN0cnVjdG9yKGh0dHA6SHR0cENsaWVudCkge1xuICAgIHRoaXMuaHR0cCA9IGh0dHBcbiAgIH1cbiAgLyoqXG4gICAqIGZvciBtYWtpbmcgZ2V0IGFwaSBjYWxsc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdFBhcmFtIGludGVyZmFjZVxuICAgKi9cbiAgZ2V0KHJlcXVlc3RQYXJhbTphbnkpOk9ic2VydmFibGU8YW55PntcbiAgICBjb25zdCBodHRwT3B0aW9uczogYW55ID0ge1xuICAgICAgaGVhZGVyczogcmVxdWVzdFBhcmFtLmhlYWRlciA/IHJlcXVlc3RQYXJhbS5oZWFkZXIgOiB0aGlzLmdldEhlYWRlcigpLFxuICAgICAgcGFyYW1zOiByZXF1ZXN0UGFyYW0ucGFyYW0sXG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmJhc2VVcmwgKyByZXF1ZXN0UGFyYW0udXJsLCBodHRwT3B0aW9ucykucGlwZShcbiAgICAgIG1lcmdlTWFwKCh7IGJvZHksIGhlYWRlcnMgfTogYW55KSA9PiB7XG4gICAgICAgIGlmIChib2R5LnJlc3BvbnNlQ29kZSAhPT0gJ09LJykge1xuICAgICAgICAgIHJldHVybiBvYnNlcnZhYmxlVGhyb3dFcnJvcihib2R5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKGJvZHkpO1xuICAgICAgfSkpO1xuICB9XG4gICAvKipcbiAgICogZm9yIG1ha2luZyBnZXQgYXBpIGNhbGxzXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0UGFyYW0gaW50ZXJmYWNlXG4gICAqL1xuICBwb3N0KHJlcXVlc3RQYXJhbTphbnkpe1xuICAgIGNvbnN0IGh0dHBPcHRpb25zOmFueSA9IHtcbiAgICAgIGhlYWRlcnM6IHJlcXVlc3RQYXJhbS5oZWFkZXIgPyB0aGlzLmdldEhlYWRlcihyZXF1ZXN0UGFyYW0uaGVhZGVyKSA6IHRoaXMuZ2V0SGVhZGVyKCksXG4gICAgICBwYXJhbXM6IHJlcXVlc3RQYXJhbS5wYXJhbVxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygnbG9nIGluIGRhdGEgc2VydmljZScscmVxdWVzdFBhcmFtKVxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChyZXF1ZXN0UGFyYW0udXJsLHJlcXVlc3RQYXJhbS5kYXRhLGh0dHBPcHRpb25zKS5waXBlKFxuICAgICAgbWVyZ2VNYXAoKGRhdGE6YW55KT0+e1xuICAgICAgICBpZihkYXRhLnJlc3BvbnNlQ29kZSA9PT0gMjAwIHx8IGRhdGEucmVzcG9uc2VDb2RlID09PSAnT0snKXtcbiAgICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKGRhdGEpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG9ic2VydmFibGVUaHJvd0Vycm9yKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfSlcbiAgICApXG4gIH1cbiAgLyoqXG4gICAqIGZvciBwcmVwYXJpbmcgaGVhZGVyc1xuICAgKi9cbiAgIHByaXZhdGUgZ2V0SGVhZGVyKGhlYWRlcnM/OiBhbnkpOiBhbnkge1xuICAgIFxuICAgIGNvbnN0IGRlZmF1bHRfaGVhZGVycyA9IHtcbiAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgIFxuICAgIH07XG4gICAgXG4gICAgaWYgKGhlYWRlcnMpIHtcbiAgICAgIHJldHVybiB7IC4uLmRlZmF1bHRfaGVhZGVycywgLi4uaGVhZGVycyB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4geyAuLi5kZWZhdWx0X2hlYWRlcnMgfTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==