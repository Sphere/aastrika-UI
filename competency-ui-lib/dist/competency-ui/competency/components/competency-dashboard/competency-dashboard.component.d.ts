import { EventEmitter, OnInit } from '@angular/core';
import { Location } from '@angular/common';
export declare class CompetencyDashboardComponent implements OnInit {
    private location;
    stateChange: EventEmitter<any>;
    tabIndex: number;
    constructor(location: Location);
    ngOnInit(): void;
    navigateBack(): void;
    changeTab(event: any): void;
    startSelfAssessment(): void;
}
