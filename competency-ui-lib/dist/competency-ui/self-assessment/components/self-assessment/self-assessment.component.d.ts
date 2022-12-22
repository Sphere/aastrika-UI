import { EventEmitter, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { SelfAssessmentService } from '../../service/self-assessment.service';
export declare class SelfAssessmentComponent implements OnInit {
    private location;
    private selfAssessmentService;
    selfAssessmentData: any[];
    requestUtil: any;
    loading: boolean;
    selfAsesment: EventEmitter<any>;
    constructor(location: Location, selfAssessmentService: SelfAssessmentService);
    /**
     *getting the details of course by pasing the identifier and hierarchyType
     *
     */
    ngOnInit(): void;
    getCompetencyCourse(): import("rxjs").Observable<any>;
    navigateBack(): void;
}
