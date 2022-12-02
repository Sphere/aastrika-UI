import { EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export declare class SlefAssessmentEntryComponent implements OnInit {
    router: Router;
    stateChange: EventEmitter<any>;
    constructor(router: Router);
    ngOnInit(): void;
    navigateTo(): void;
}
