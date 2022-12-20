import { OnInit } from '@angular/core';
import { SelfAssessmentService } from '../../service/self-assessment.service';
export declare class SelfAssessmentCardComponent implements OnInit {
    private selfAssessmentService;
    cardData: any;
    constructor(selfAssessmentService: SelfAssessmentService);
    ngOnInit(): void;
    startSelfAssesment(data: any): void;
}
