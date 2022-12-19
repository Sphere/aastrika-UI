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
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
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
    return CoreModule;
}());
export { CoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWFzdHJpa2FfbnBtanMvY29tcHRlbmN5L2NvcmUvIiwic291cmNlcyI6WyJjb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRyxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFBO0FBQ3hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2xGOzs7O0dBSUc7QUFVSDtJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBVHRCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLGdCQUFnQjthQUNqQjtZQUNELFlBQVksRUFBRSxDQUFDLGtCQUFrQixDQUFDO1lBQ2xDLE9BQU8sRUFBQyxDQUFDLGtCQUFrQixDQUFDO1lBQzVCLFNBQVMsRUFBQyxDQUFDLFdBQVcsQ0FBQztTQUN4QixDQUFDO09BQ1csVUFBVSxDQUFJO0lBQUQsaUJBQUM7Q0FBQSxBQUEzQixJQUEyQjtTQUFkLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgIEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCdcbmltcG9ydCB7IEFwcExvYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hcHAtbG9hZGVyL2FwcC1sb2FkZXIuY29tcG9uZW50Jztcbi8qKlxuICogQ29yZSBNb2R1bGUgIFxuICpcbiAqIEBhdXRob3IgQW1hbiBLdW1hciBTaGFybWEgPGFtYW5rdW1hci5zaGFybWFAdGFyZW50by5jb20+XG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQXBwTG9hZGVyQ29tcG9uZW50XSxcbiAgZXhwb3J0czpbQXBwTG9hZGVyQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOltEYXRhU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7IH1cbiJdfQ==