import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import * as _ from 'lodash-es';
let AppLoaderComponent = class AppLoaderComponent {
    constructor() { }
    ngOnInit() {
        this.headerMessage = 'Please wait';
        this.loaderMessage = 'We are fetching details';
        if (this.data) {
            this.headerMessage = _.get(this.data, 'headerMessage') || this.headerMessage;
            this.loaderMessage = _.get(this.data, 'loaderMessage') || this.loaderMessage;
        }
    }
};
tslib_1.__decorate([
    Input()
], AppLoaderComponent.prototype, "data", void 0);
AppLoaderComponent = tslib_1.__decorate([
    Component({
        selector: 'lib-app-loader',
        template: "<ng-container>\r\n    <div class=\"loader-content\">\r\n         <p class=\"loader\"></p>\r\n    </div>\r\n</ng-container>\r\n  ",
        styles: [".sbt-app-loader-container{background:var(--sbt-compt-bg);width:94%!important;margin:0 auto;border-radius:1.5rem;border:0}.loader-content{display:flex;justify-content:center;align-items:center;margin-top:38px}.message{margin:0;font-size:16px;color:#919191}.loader{width:30px;height:30px;margin:-76px 0 0 -76px;border:4px solid #f3f3f3;border-radius:50%;border-top:4px solid #555;animation:2s linear infinite spin}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}"]
    })
], AppLoaderComponent);
export { AppLoaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWxvYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWFzdHJpa2EvY29tcHRlbmN5L2NvcmUvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2FwcC1sb2FkZXIvYXBwLWxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sS0FBSyxDQUFDLE1BQU0sV0FBVyxDQUFBO0FBTTlCLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBTTdCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLHlCQUF5QixDQUFDO1FBQy9DLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDN0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUM5RTtJQUVILENBQUM7Q0FFRixDQUFBO0FBaEJVO0lBQVIsS0FBSyxFQUFFO2dEQUFNO0FBRkgsa0JBQWtCO0lBTDlCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsNElBQTBDOztLQUUzQyxDQUFDO0dBQ1csa0JBQWtCLENBa0I5QjtTQWxCWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gtZXMnXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWFwcC1sb2FkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAtbG9hZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hcHAtbG9hZGVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcExvYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGRhdGE7XHJcbiAgaGVhZGVyTWVzc2FnZTogc3RyaW5nO1xyXG4gIGxvYWRlck1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmhlYWRlck1lc3NhZ2UgPSAnUGxlYXNlIHdhaXQnO1xyXG4gICAgdGhpcy5sb2FkZXJNZXNzYWdlID0gJ1dlIGFyZSBmZXRjaGluZyBkZXRhaWxzJztcclxuICAgIGlmICh0aGlzLmRhdGEpIHtcclxuICAgICAgdGhpcy5oZWFkZXJNZXNzYWdlID0gXy5nZXQodGhpcy5kYXRhLCAnaGVhZGVyTWVzc2FnZScpIHx8IHRoaXMuaGVhZGVyTWVzc2FnZTtcclxuICAgICAgdGhpcy5sb2FkZXJNZXNzYWdlID0gXy5nZXQodGhpcy5kYXRhLCAnbG9hZGVyTWVzc2FnZScpIHx8IHRoaXMubG9hZGVyTWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=