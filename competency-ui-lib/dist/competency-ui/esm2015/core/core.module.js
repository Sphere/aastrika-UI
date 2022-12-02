import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { AppLoaderComponent } from './components/app-loader/app-loader.component';
/**
 * Core Module
 *
 * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
 */
let CoreModule = class CoreModule {
};
CoreModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            HttpClientModule,
        ],
        declarations: [AppLoaderComponent],
        exports: [AppLoaderComponent],
        providers: [DataService]
    })
], CoreModule);
export { CoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWFzdHJpa2EvY29tcHRlbmN5L2NvcmUvIiwic291cmNlcyI6WyJjb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRyxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFBO0FBQ3hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2xGOzs7O0dBSUc7QUFVSCxJQUFhLFVBQVUsR0FBdkIsTUFBYSxVQUFVO0NBQUksQ0FBQTtBQUFkLFVBQVU7SUFUdEIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLGdCQUFnQjtTQUNqQjtRQUNELFlBQVksRUFBRSxDQUFDLGtCQUFrQixDQUFDO1FBQ2xDLE9BQU8sRUFBQyxDQUFDLGtCQUFrQixDQUFDO1FBQzVCLFNBQVMsRUFBQyxDQUFDLFdBQVcsQ0FBQztLQUN4QixDQUFDO0dBQ1csVUFBVSxDQUFJO1NBQWQsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyAgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJ1xyXG5pbXBvcnQgeyBBcHBMb2FkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYXBwLWxvYWRlci9hcHAtbG9hZGVyLmNvbXBvbmVudCc7XHJcbi8qKlxyXG4gKiBDb3JlIE1vZHVsZSAgXHJcbiAqXHJcbiAqIEBhdXRob3IgQW1hbiBLdW1hciBTaGFybWEgPGFtYW5rdW1hci5zaGFybWFAdGFyZW50by5jb20+XHJcbiAqL1xyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtBcHBMb2FkZXJDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6W0FwcExvYWRlckNvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOltEYXRhU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGUgeyB9XHJcbiJdfQ==