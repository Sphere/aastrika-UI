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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWFzdHJpa2FfbnBtanMvY29tcHRlbmN5L2NvcmUvIiwic291cmNlcyI6WyJjb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRyxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFBO0FBQ3hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2xGOzs7O0dBSUc7QUFVSCxJQUFhLFVBQVUsR0FBdkIsTUFBYSxVQUFVO0NBQUksQ0FBQTtBQUFkLFVBQVU7SUFUdEIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLGdCQUFnQjtTQUNqQjtRQUNELFlBQVksRUFBRSxDQUFDLGtCQUFrQixDQUFDO1FBQ2xDLE9BQU8sRUFBQyxDQUFDLGtCQUFrQixDQUFDO1FBQzVCLFNBQVMsRUFBQyxDQUFDLFdBQVcsQ0FBQztLQUN4QixDQUFDO0dBQ1csVUFBVSxDQUFJO1NBQWQsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XG5pbXBvcnQgeyAgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJ1xuaW1wb3J0IHsgQXBwTG9hZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FwcC1sb2FkZXIvYXBwLWxvYWRlci5jb21wb25lbnQnO1xuLyoqXG4gKiBDb3JlIE1vZHVsZSAgXG4gKlxuICogQGF1dGhvciBBbWFuIEt1bWFyIFNoYXJtYSA8YW1hbmt1bWFyLnNoYXJtYUB0YXJlbnRvLmNvbT5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtBcHBMb2FkZXJDb21wb25lbnRdLFxuICBleHBvcnRzOltBcHBMb2FkZXJDb21wb25lbnRdLFxuICBwcm92aWRlcnM6W0RhdGFTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHsgfVxuIl19