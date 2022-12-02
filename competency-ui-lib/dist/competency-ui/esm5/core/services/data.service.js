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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFhc3RyaWthL2NvbXB0ZW5jeS9jb3JlLyIsInNvdXJjZXMiOlsic2VydmljZXMvZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZ0JBQWdCLENBQUE7QUFDdkMsT0FBTyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQUUsVUFBVSxJQUFJLG9CQUFvQixFQUFjLE1BQU0sTUFBTSxDQUFDOzs7QUFDMUY7Ozs7R0FJRztBQUlIO0lBU0UscUJBQVksSUFBZTtRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtJQUNqQixDQUFDO0lBQ0Y7Ozs7T0FJRztJQUNILHlCQUFHLEdBQUgsVUFBSSxZQUFnQjtRQUNsQixJQUFNLFdBQVcsR0FBUTtZQUN2QixPQUFPLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNyRSxNQUFNLEVBQUUsWUFBWSxDQUFDLEtBQUs7WUFDMUIsT0FBTyxFQUFFLFVBQVU7U0FDcEIsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDckUsUUFBUSxDQUFDLFVBQUMsRUFBc0I7Z0JBQXBCLGNBQUksRUFBRSxvQkFBTztZQUN2QixJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO2dCQUM5QixPQUFPLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ25DO1lBQ0QsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7SUFDQTs7OztNQUlFO0lBQ0gsMEJBQUksR0FBSixVQUFLLFlBQWdCO1FBQ25CLElBQU0sV0FBVyxHQUFPO1lBQ3RCLE9BQU8sRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNyRixNQUFNLEVBQUUsWUFBWSxDQUFDLEtBQUs7U0FDM0IsQ0FBQTtRQUNELGtEQUFrRDtRQUNsRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUMsWUFBWSxDQUFDLElBQUksRUFBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQ3hFLFFBQVEsQ0FBQyxVQUFDLElBQVE7WUFDaEIsSUFBRyxJQUFJLENBQUMsWUFBWSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksRUFBQztnQkFDekQsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDM0I7aUJBQUs7Z0JBQ0osT0FBTyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuQztRQUVILENBQUMsQ0FBQyxDQUNILENBQUE7SUFDSCxDQUFDO0lBQ0Q7O09BRUc7SUFDTSwrQkFBUyxHQUFqQixVQUFrQixPQUFhO1FBRTlCLElBQU0sZUFBZSxHQUFHO1lBQ3RCLFFBQVEsRUFBRSxrQkFBa0I7U0FFN0IsQ0FBQztRQUVGLElBQUksT0FBTyxFQUFFO1lBQ1gsNEJBQVksZUFBZSxFQUFLLE9BQU8sRUFBRztTQUMzQzthQUFNO1lBQ0wsNEJBQVksZUFBZSxFQUFHO1NBQy9CO0lBQ0gsQ0FBQzs7Z0JBM0RnQixVQUFVOzs7SUFUaEIsV0FBVztRQUh2QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csV0FBVyxDQXFFdkI7c0JBakZEO0NBaUZDLEFBckVELElBcUVDO1NBckVZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7bWVyZ2VNYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xyXG5pbXBvcnQgeyBvZiBhcyBvYnNlcnZhYmxlT2YsIHRocm93RXJyb3IgYXMgb2JzZXJ2YWJsZVRocm93RXJyb3IsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuLyoqXHJcbiAqIERhdGFTZXJ2aWNlIHRvIG1ha2UgaHR0cCBjYWxsXHJcbiAqXHJcbiAqIEBhdXRob3IgQW1hbiBLdW1hciBTaGFybWEgPGFtYW5rdW1hci5zaGFybWFAdGFyZW50by5jb20+XHJcbiAqL1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRhU2VydmljZSB7XHJcbiAgICAvKipcclxuICAgKiBDb250YWlucyBiYXNlIFVybCBmb3IgYXBpIGVuZCBwb2ludHNcclxuICAgKi9cclxuICAgICBiYXNlVXJsOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgKiBhbmd1bGFyIEh0dHBDbGllbnRcclxuICAgKi9cclxuICBodHRwOiBIdHRwQ2xpZW50O1xyXG4gIGNvbnN0cnVjdG9yKGh0dHA6SHR0cENsaWVudCkge1xyXG4gICAgdGhpcy5odHRwID0gaHR0cFxyXG4gICB9XHJcbiAgLyoqXHJcbiAgICogZm9yIG1ha2luZyBnZXQgYXBpIGNhbGxzXHJcbiAgICpcclxuICAgKiBAcGFyYW0gcmVxdWVzdFBhcmFtIGludGVyZmFjZVxyXG4gICAqL1xyXG4gIGdldChyZXF1ZXN0UGFyYW06YW55KTpPYnNlcnZhYmxlPGFueT57XHJcbiAgICBjb25zdCBodHRwT3B0aW9uczogYW55ID0ge1xyXG4gICAgICBoZWFkZXJzOiByZXF1ZXN0UGFyYW0uaGVhZGVyID8gcmVxdWVzdFBhcmFtLmhlYWRlciA6IHRoaXMuZ2V0SGVhZGVyKCksXHJcbiAgICAgIHBhcmFtczogcmVxdWVzdFBhcmFtLnBhcmFtLFxyXG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5iYXNlVXJsICsgcmVxdWVzdFBhcmFtLnVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIG1lcmdlTWFwKCh7IGJvZHksIGhlYWRlcnMgfTogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKGJvZHkucmVzcG9uc2VDb2RlICE9PSAnT0snKSB7XHJcbiAgICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZVRocm93RXJyb3IoYm9keSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlT2YoYm9keSk7XHJcbiAgICAgIH0pKTtcclxuICB9XHJcbiAgIC8qKlxyXG4gICAqIGZvciBtYWtpbmcgZ2V0IGFwaSBjYWxsc1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHJlcXVlc3RQYXJhbSBpbnRlcmZhY2VcclxuICAgKi9cclxuICBwb3N0KHJlcXVlc3RQYXJhbTphbnkpe1xyXG4gICAgY29uc3QgaHR0cE9wdGlvbnM6YW55ID0ge1xyXG4gICAgICBoZWFkZXJzOiByZXF1ZXN0UGFyYW0uaGVhZGVyID8gdGhpcy5nZXRIZWFkZXIocmVxdWVzdFBhcmFtLmhlYWRlcikgOiB0aGlzLmdldEhlYWRlcigpLFxyXG4gICAgICBwYXJhbXM6IHJlcXVlc3RQYXJhbS5wYXJhbVxyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coJ2xvZyBpbiBkYXRhIHNlcnZpY2UnLHJlcXVlc3RQYXJhbSlcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChyZXF1ZXN0UGFyYW0udXJsLHJlcXVlc3RQYXJhbS5kYXRhLGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICBtZXJnZU1hcCgoZGF0YTphbnkpPT57XHJcbiAgICAgICAgaWYoZGF0YS5yZXNwb25zZUNvZGUgPT09IDIwMCB8fCBkYXRhLnJlc3BvbnNlQ29kZSA9PT0gJ09LJyl7XHJcbiAgICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKGRhdGEpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgIHJldHVybiBvYnNlcnZhYmxlVGhyb3dFcnJvcihkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIH0pXHJcbiAgICApXHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIGZvciBwcmVwYXJpbmcgaGVhZGVyc1xyXG4gICAqL1xyXG4gICBwcml2YXRlIGdldEhlYWRlcihoZWFkZXJzPzogYW55KTogYW55IHtcclxuICAgIFxyXG4gICAgY29uc3QgZGVmYXVsdF9oZWFkZXJzID0ge1xyXG4gICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgIFxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgaWYgKGhlYWRlcnMpIHtcclxuICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdF9oZWFkZXJzLCAuLi5oZWFkZXJzIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4geyAuLi5kZWZhdWx0X2hlYWRlcnMgfTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19