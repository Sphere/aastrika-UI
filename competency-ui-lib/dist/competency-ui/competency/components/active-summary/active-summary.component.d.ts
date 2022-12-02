import { OnInit } from '@angular/core';
import { ActiveSummaryService } from '../../services/active-summary.service';
import { ConfigService } from '@aastrika/comptency/entry-module';
export declare class ActiveSummaryComponent implements OnInit {
    activeSummaryService: ActiveSummaryService;
    configService: ConfigService;
    /**
   * Core Module
   *
   * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
   */
    panelOpenState: Boolean;
    requestUtil: any;
    private unsubscribe;
    roleactivitySummaries: any;
    activitySummaries: any;
    loading: boolean;
    acordianLoading: boolean;
    profileData: any;
    constructor(activeSummaryService: ActiveSummaryService, configService: ConfigService);
    ngOnInit(): void;
    private getActivityByRole;
    getActivityByRoleId(id: any): void;
    getEntityById(id: any): import("rxjs").Observable<any>;
    ngOnDestroy(): void;
}
