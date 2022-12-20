import { DataService } from '@aastrika_npmjs/comptency/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
export declare class SelfAssessmentService extends DataService {
    startAssessment: BehaviorSubject<any>;
    startAssessment$: import("rxjs").Observable<any>;
    constructor(http: HttpClient);
    /**
     *searching for the content Identifier
     *
     */
    getCompetencyCourseIdentifier(reqBody: any): import("rxjs").Observable<any>;
    /**
    *getting the details of course by pasing the identifier and hierarchyType
    *
    */
    fetchHiearchyDetails(identifier: any, hierarchyType: any): import("rxjs").Observable<any>;
}
