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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFhc3RyaWthL2NvbXB0ZW5jeS9jb3JlLyIsInNvdXJjZXMiOlsic2VydmljZXMvZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZ0JBQWdCLENBQUE7QUFDdkMsT0FBTyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQUUsVUFBVSxJQUFJLG9CQUFvQixFQUFjLE1BQU0sTUFBTSxDQUFDOzs7QUFDMUY7Ozs7R0FJRztBQUlILElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVc7SUFTdEIsWUFBWSxJQUFlO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO0lBQ2pCLENBQUM7SUFDRjs7OztPQUlHO0lBQ0gsR0FBRyxDQUFDLFlBQWdCO1FBQ2xCLE1BQU0sV0FBVyxHQUFRO1lBQ3ZCLE9BQU8sRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3JFLE1BQU0sRUFBRSxZQUFZLENBQUMsS0FBSztZQUMxQixPQUFPLEVBQUUsVUFBVTtTQUNwQixDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUNyRSxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQU8sRUFBRSxFQUFFO1lBQ2xDLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLEVBQUU7Z0JBQzlCLE9BQU8sb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbkM7WUFDRCxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUNBOzs7O01BSUU7SUFDSCxJQUFJLENBQUMsWUFBZ0I7UUFDbkIsTUFBTSxXQUFXLEdBQU87WUFDdEIsT0FBTyxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3JGLE1BQU0sRUFBRSxZQUFZLENBQUMsS0FBSztTQUMzQixDQUFBO1FBQ0Qsa0RBQWtEO1FBQ2xELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBQyxZQUFZLENBQUMsSUFBSSxFQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDeEUsUUFBUSxDQUFDLENBQUMsSUFBUSxFQUFDLEVBQUU7WUFDbkIsSUFBRyxJQUFJLENBQUMsWUFBWSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksRUFBQztnQkFDekQsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDM0I7aUJBQUs7Z0JBQ0osT0FBTyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuQztRQUVILENBQUMsQ0FBQyxDQUNILENBQUE7SUFDSCxDQUFDO0lBQ0Q7O09BRUc7SUFDTSxTQUFTLENBQUMsT0FBYTtRQUU5QixNQUFNLGVBQWUsR0FBRztZQUN0QixRQUFRLEVBQUUsa0JBQWtCO1NBRTdCLENBQUM7UUFFRixJQUFJLE9BQU8sRUFBRTtZQUNYLHlCQUFZLGVBQWUsRUFBSyxPQUFPLEVBQUc7U0FDM0M7YUFBTTtZQUNMLHlCQUFZLGVBQWUsRUFBRztTQUMvQjtJQUNILENBQUM7Q0FDRixDQUFBOztZQTVEa0IsVUFBVTs7O0FBVGhCLFdBQVc7SUFIdkIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLFdBQVcsQ0FxRXZCO1NBckVZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7bWVyZ2VNYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xyXG5pbXBvcnQgeyBvZiBhcyBvYnNlcnZhYmxlT2YsIHRocm93RXJyb3IgYXMgb2JzZXJ2YWJsZVRocm93RXJyb3IsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuLyoqXHJcbiAqIERhdGFTZXJ2aWNlIHRvIG1ha2UgaHR0cCBjYWxsXHJcbiAqXHJcbiAqIEBhdXRob3IgQW1hbiBLdW1hciBTaGFybWEgPGFtYW5rdW1hci5zaGFybWFAdGFyZW50by5jb20+XHJcbiAqL1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRhU2VydmljZSB7XHJcbiAgICAvKipcclxuICAgKiBDb250YWlucyBiYXNlIFVybCBmb3IgYXBpIGVuZCBwb2ludHNcclxuICAgKi9cclxuICAgICBiYXNlVXJsOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgKiBhbmd1bGFyIEh0dHBDbGllbnRcclxuICAgKi9cclxuICBodHRwOiBIdHRwQ2xpZW50O1xyXG4gIGNvbnN0cnVjdG9yKGh0dHA6SHR0cENsaWVudCkge1xyXG4gICAgdGhpcy5odHRwID0gaHR0cFxyXG4gICB9XHJcbiAgLyoqXHJcbiAgICogZm9yIG1ha2luZyBnZXQgYXBpIGNhbGxzXHJcbiAgICpcclxuICAgKiBAcGFyYW0gcmVxdWVzdFBhcmFtIGludGVyZmFjZVxyXG4gICAqL1xyXG4gIGdldChyZXF1ZXN0UGFyYW06YW55KTpPYnNlcnZhYmxlPGFueT57XHJcbiAgICBjb25zdCBodHRwT3B0aW9uczogYW55ID0ge1xyXG4gICAgICBoZWFkZXJzOiByZXF1ZXN0UGFyYW0uaGVhZGVyID8gcmVxdWVzdFBhcmFtLmhlYWRlciA6IHRoaXMuZ2V0SGVhZGVyKCksXHJcbiAgICAgIHBhcmFtczogcmVxdWVzdFBhcmFtLnBhcmFtLFxyXG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5iYXNlVXJsICsgcmVxdWVzdFBhcmFtLnVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIG1lcmdlTWFwKCh7IGJvZHksIGhlYWRlcnMgfTogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKGJvZHkucmVzcG9uc2VDb2RlICE9PSAnT0snKSB7XHJcbiAgICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZVRocm93RXJyb3IoYm9keSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlT2YoYm9keSk7XHJcbiAgICAgIH0pKTtcclxuICB9XHJcbiAgIC8qKlxyXG4gICAqIGZvciBtYWtpbmcgZ2V0IGFwaSBjYWxsc1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHJlcXVlc3RQYXJhbSBpbnRlcmZhY2VcclxuICAgKi9cclxuICBwb3N0KHJlcXVlc3RQYXJhbTphbnkpe1xyXG4gICAgY29uc3QgaHR0cE9wdGlvbnM6YW55ID0ge1xyXG4gICAgICBoZWFkZXJzOiByZXF1ZXN0UGFyYW0uaGVhZGVyID8gdGhpcy5nZXRIZWFkZXIocmVxdWVzdFBhcmFtLmhlYWRlcikgOiB0aGlzLmdldEhlYWRlcigpLFxyXG4gICAgICBwYXJhbXM6IHJlcXVlc3RQYXJhbS5wYXJhbVxyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coJ2xvZyBpbiBkYXRhIHNlcnZpY2UnLHJlcXVlc3RQYXJhbSlcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChyZXF1ZXN0UGFyYW0udXJsLHJlcXVlc3RQYXJhbS5kYXRhLGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICBtZXJnZU1hcCgoZGF0YTphbnkpPT57XHJcbiAgICAgICAgaWYoZGF0YS5yZXNwb25zZUNvZGUgPT09IDIwMCB8fCBkYXRhLnJlc3BvbnNlQ29kZSA9PT0gJ09LJyl7XHJcbiAgICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKGRhdGEpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgIHJldHVybiBvYnNlcnZhYmxlVGhyb3dFcnJvcihkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIH0pXHJcbiAgICApXHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIGZvciBwcmVwYXJpbmcgaGVhZGVyc1xyXG4gICAqL1xyXG4gICBwcml2YXRlIGdldEhlYWRlcihoZWFkZXJzPzogYW55KTogYW55IHtcclxuICAgIFxyXG4gICAgY29uc3QgZGVmYXVsdF9oZWFkZXJzID0ge1xyXG4gICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgIFxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgaWYgKGhlYWRlcnMpIHtcclxuICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdF9oZWFkZXJzLCAuLi5oZWFkZXJzIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4geyAuLi5kZWZhdWx0X2hlYWRlcnMgfTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19