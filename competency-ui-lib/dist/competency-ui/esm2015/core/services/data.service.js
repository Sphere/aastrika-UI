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
let DataService = class DataService {
    constructor(http) {
        this.http = http;
    }
    /**
     * for making get api calls
     *
     * @param requestParam interface
     */
    get(requestParam) {
        const httpOptions = {
            headers: requestParam.header ? requestParam.header : this.getHeader(),
            params: requestParam.param,
            observe: 'response'
        };
        return this.http.get(this.baseUrl + requestParam.url, httpOptions).pipe(mergeMap(({ body, headers }) => {
            if (body.responseCode !== 'OK') {
                return observableThrowError(body);
            }
            return observableOf(body);
        }));
    }
    /**
    * for making get api calls
    *
    * @param requestParam interface
    */
    post(requestParam) {
        const httpOptions = {
            headers: requestParam.header ? this.getHeader(requestParam.header) : this.getHeader(),
            params: requestParam.param
        };
        // console.log('log in data service',requestParam)
        return this.http.post(requestParam.url, requestParam.data, httpOptions).pipe(mergeMap((data) => {
            if (data.responseCode === 200 || data.responseCode === 'OK') {
                return observableOf(data);
            }
            else {
                return observableThrowError(data);
            }
        }));
    }
    /**
     * for preparing headers
     */
    getHeader(headers) {
        const default_headers = {
            'Accept': 'application/json',
        };
        if (headers) {
            return Object.assign({}, default_headers, headers);
        }
        else {
            return Object.assign({}, default_headers);
        }
    }
};
DataService.ctorParameters = () => [
    { type: HttpClient }
];
DataService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DataService_Factory() { return new DataService(i0.ɵɵinject(i1.HttpClient)); }, token: DataService, providedIn: "root" });
DataService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], DataService);
export { DataService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFhc3RyaWthX25wbWpzL2NvbXB0ZW5jeS9jb3JlLyIsInNvdXJjZXMiOlsic2VydmljZXMvZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZ0JBQWdCLENBQUE7QUFDdkMsT0FBTyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQUUsVUFBVSxJQUFJLG9CQUFvQixFQUFjLE1BQU0sTUFBTSxDQUFDOzs7QUFDMUY7Ozs7R0FJRztBQUlILElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVc7SUFTdEIsWUFBWSxJQUFlO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO0lBQ2pCLENBQUM7SUFDRjs7OztPQUlHO0lBQ0gsR0FBRyxDQUFDLFlBQWdCO1FBQ2xCLE1BQU0sV0FBVyxHQUFRO1lBQ3ZCLE9BQU8sRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3JFLE1BQU0sRUFBRSxZQUFZLENBQUMsS0FBSztZQUMxQixPQUFPLEVBQUUsVUFBVTtTQUNwQixDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUNyRSxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQU8sRUFBRSxFQUFFO1lBQ2xDLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLEVBQUU7Z0JBQzlCLE9BQU8sb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbkM7WUFDRCxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUNBOzs7O01BSUU7SUFDSCxJQUFJLENBQUMsWUFBZ0I7UUFDbkIsTUFBTSxXQUFXLEdBQU87WUFDdEIsT0FBTyxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3JGLE1BQU0sRUFBRSxZQUFZLENBQUMsS0FBSztTQUMzQixDQUFBO1FBQ0Qsa0RBQWtEO1FBQ2xELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBQyxZQUFZLENBQUMsSUFBSSxFQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDeEUsUUFBUSxDQUFDLENBQUMsSUFBUSxFQUFDLEVBQUU7WUFDbkIsSUFBRyxJQUFJLENBQUMsWUFBWSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksRUFBQztnQkFDekQsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDM0I7aUJBQUs7Z0JBQ0osT0FBTyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuQztRQUVILENBQUMsQ0FBQyxDQUNILENBQUE7SUFDSCxDQUFDO0lBQ0Q7O09BRUc7SUFDTSxTQUFTLENBQUMsT0FBYTtRQUU5QixNQUFNLGVBQWUsR0FBRztZQUN0QixRQUFRLEVBQUUsa0JBQWtCO1NBRTdCLENBQUM7UUFFRixJQUFJLE9BQU8sRUFBRTtZQUNYLHlCQUFZLGVBQWUsRUFBSyxPQUFPLEVBQUc7U0FDM0M7YUFBTTtZQUNMLHlCQUFZLGVBQWUsRUFBRztTQUMvQjtJQUNILENBQUM7Q0FDRixDQUFBOztZQTVEa0IsVUFBVTs7O0FBVGhCLFdBQVc7SUFIdkIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLFdBQVcsQ0FxRXZCO1NBckVZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHttZXJnZU1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5pbXBvcnQgeyBvZiBhcyBvYnNlcnZhYmxlT2YsIHRocm93RXJyb3IgYXMgb2JzZXJ2YWJsZVRocm93RXJyb3IsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbi8qKlxuICogRGF0YVNlcnZpY2UgdG8gbWFrZSBodHRwIGNhbGxcbiAqXG4gKiBAYXV0aG9yIEFtYW4gS3VtYXIgU2hhcm1hIDxhbWFua3VtYXIuc2hhcm1hQHRhcmVudG8uY29tPlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYXRhU2VydmljZSB7XG4gICAgLyoqXG4gICAqIENvbnRhaW5zIGJhc2UgVXJsIGZvciBhcGkgZW5kIHBvaW50c1xuICAgKi9cbiAgICAgYmFzZVVybDogc3RyaW5nO1xuICAgIC8qKlxuICAgKiBhbmd1bGFyIEh0dHBDbGllbnRcbiAgICovXG4gIGh0dHA6IEh0dHBDbGllbnQ7XG4gIGNvbnN0cnVjdG9yKGh0dHA6SHR0cENsaWVudCkge1xuICAgIHRoaXMuaHR0cCA9IGh0dHBcbiAgIH1cbiAgLyoqXG4gICAqIGZvciBtYWtpbmcgZ2V0IGFwaSBjYWxsc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdFBhcmFtIGludGVyZmFjZVxuICAgKi9cbiAgZ2V0KHJlcXVlc3RQYXJhbTphbnkpOk9ic2VydmFibGU8YW55PntcbiAgICBjb25zdCBodHRwT3B0aW9uczogYW55ID0ge1xuICAgICAgaGVhZGVyczogcmVxdWVzdFBhcmFtLmhlYWRlciA/IHJlcXVlc3RQYXJhbS5oZWFkZXIgOiB0aGlzLmdldEhlYWRlcigpLFxuICAgICAgcGFyYW1zOiByZXF1ZXN0UGFyYW0ucGFyYW0sXG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmJhc2VVcmwgKyByZXF1ZXN0UGFyYW0udXJsLCBodHRwT3B0aW9ucykucGlwZShcbiAgICAgIG1lcmdlTWFwKCh7IGJvZHksIGhlYWRlcnMgfTogYW55KSA9PiB7XG4gICAgICAgIGlmIChib2R5LnJlc3BvbnNlQ29kZSAhPT0gJ09LJykge1xuICAgICAgICAgIHJldHVybiBvYnNlcnZhYmxlVGhyb3dFcnJvcihib2R5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKGJvZHkpO1xuICAgICAgfSkpO1xuICB9XG4gICAvKipcbiAgICogZm9yIG1ha2luZyBnZXQgYXBpIGNhbGxzXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0UGFyYW0gaW50ZXJmYWNlXG4gICAqL1xuICBwb3N0KHJlcXVlc3RQYXJhbTphbnkpe1xuICAgIGNvbnN0IGh0dHBPcHRpb25zOmFueSA9IHtcbiAgICAgIGhlYWRlcnM6IHJlcXVlc3RQYXJhbS5oZWFkZXIgPyB0aGlzLmdldEhlYWRlcihyZXF1ZXN0UGFyYW0uaGVhZGVyKSA6IHRoaXMuZ2V0SGVhZGVyKCksXG4gICAgICBwYXJhbXM6IHJlcXVlc3RQYXJhbS5wYXJhbVxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygnbG9nIGluIGRhdGEgc2VydmljZScscmVxdWVzdFBhcmFtKVxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChyZXF1ZXN0UGFyYW0udXJsLHJlcXVlc3RQYXJhbS5kYXRhLGh0dHBPcHRpb25zKS5waXBlKFxuICAgICAgbWVyZ2VNYXAoKGRhdGE6YW55KT0+e1xuICAgICAgICBpZihkYXRhLnJlc3BvbnNlQ29kZSA9PT0gMjAwIHx8IGRhdGEucmVzcG9uc2VDb2RlID09PSAnT0snKXtcbiAgICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKGRhdGEpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG9ic2VydmFibGVUaHJvd0Vycm9yKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfSlcbiAgICApXG4gIH1cbiAgLyoqXG4gICAqIGZvciBwcmVwYXJpbmcgaGVhZGVyc1xuICAgKi9cbiAgIHByaXZhdGUgZ2V0SGVhZGVyKGhlYWRlcnM/OiBhbnkpOiBhbnkge1xuICAgIFxuICAgIGNvbnN0IGRlZmF1bHRfaGVhZGVycyA9IHtcbiAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgIFxuICAgIH07XG4gICAgXG4gICAgaWYgKGhlYWRlcnMpIHtcbiAgICAgIHJldHVybiB7IC4uLmRlZmF1bHRfaGVhZGVycywgLi4uaGVhZGVycyB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4geyAuLi5kZWZhdWx0X2hlYWRlcnMgfTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==