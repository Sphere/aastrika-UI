import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import * as _ from 'lodash-es';
var AppLoaderComponent = /** @class */ (function () {
    function AppLoaderComponent() {
    }
    AppLoaderComponent.prototype.ngOnInit = function () {
        this.headerMessage = 'Please wait';
        this.loaderMessage = 'We are fetching details';
        if (this.data) {
            this.headerMessage = _.get(this.data, 'headerMessage') || this.headerMessage;
            this.loaderMessage = _.get(this.data, 'loaderMessage') || this.loaderMessage;
        }
    };
    tslib_1.__decorate([
        Input()
    ], AppLoaderComponent.prototype, "data", void 0);
    AppLoaderComponent = tslib_1.__decorate([
        Component({
            selector: 'lib-app-loader',
            template: "<ng-container>\n    <div class=\"loader-content\">\n         <p class=\"loader\"></p>\n    </div>\n</ng-container>\n  ",
            styles: [".sbt-app-loader-container{background:var(--sbt-compt-bg);width:94%!important;margin:0 auto;border-radius:1.5rem;border:0}.loader-content{display:flex;justify-content:center;align-items:center;margin-top:38px}.message{margin:0;font-size:16px;color:#919191}.loader{width:30px;height:30px;margin:-76px 0 0 -76px;border:4px solid #f3f3f3;border-radius:50%;border-top:4px solid #555;-webkit-animation:2s linear infinite spin;animation:2s linear infinite spin}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}"]
        })
    ], AppLoaderComponent);
    return AppLoaderComponent;
}());
export { AppLoaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWxvYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWFzdHJpa2FfbnBtanMvY29tcHRlbmN5L2NvcmUvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2FwcC1sb2FkZXIvYXBwLWxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sS0FBSyxDQUFDLE1BQU0sV0FBVyxDQUFBO0FBTTlCO0lBTUU7SUFBZ0IsQ0FBQztJQUVqQixxQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyx5QkFBeUIsQ0FBQztRQUMvQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQzdFLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDOUU7SUFFSCxDQUFDO0lBZFE7UUFBUixLQUFLLEVBQUU7b0RBQU07SUFGSCxrQkFBa0I7UUFMOUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixrSUFBMEM7O1NBRTNDLENBQUM7T0FDVyxrQkFBa0IsQ0FrQjlCO0lBQUQseUJBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWxCWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoLWVzJ1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWFwcC1sb2FkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLWxvYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FwcC1sb2FkZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBMb2FkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGRhdGE7XG4gIGhlYWRlck1lc3NhZ2U6IHN0cmluZztcbiAgbG9hZGVyTWVzc2FnZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5oZWFkZXJNZXNzYWdlID0gJ1BsZWFzZSB3YWl0JztcbiAgICB0aGlzLmxvYWRlck1lc3NhZ2UgPSAnV2UgYXJlIGZldGNoaW5nIGRldGFpbHMnO1xuICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgIHRoaXMuaGVhZGVyTWVzc2FnZSA9IF8uZ2V0KHRoaXMuZGF0YSwgJ2hlYWRlck1lc3NhZ2UnKSB8fCB0aGlzLmhlYWRlck1lc3NhZ2U7XG4gICAgICB0aGlzLmxvYWRlck1lc3NhZ2UgPSBfLmdldCh0aGlzLmRhdGEsICdsb2FkZXJNZXNzYWdlJykgfHwgdGhpcy5sb2FkZXJNZXNzYWdlO1xuICAgIH1cblxuICB9XG5cbn1cbiJdfQ==