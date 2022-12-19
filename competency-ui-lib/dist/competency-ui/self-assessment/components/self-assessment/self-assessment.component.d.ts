import { OnInit } from '@angular/core';
import { Location } from '@angular/common';
export declare class SelfAssessmentComponent implements OnInit {
    private location;
    gainedproficencyData: {
        title: string;
        description: string;
    }[];
    constructor(location: Location);
    ngOnInit(): void;
    navigateBack(): void;
}
