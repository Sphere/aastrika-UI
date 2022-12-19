import { OnDestroy, OnInit } from '@angular/core';
import { RequiredCompetencyService } from '../../services/required-competency.service';
export declare class RequiredComptencyCardComponent implements OnInit, OnDestroy {
    private requiredCompetencyService;
    competencyData: {
        title: string;
        description: string;
        requiredLevel: string;
    }[];
    panelOpenState: Boolean;
    customCollapsedHeight: string;
    customExpandedHeight: string;
    private unsubscribe;
    requestUtil: any;
    loading: boolean;
    constructor(requiredCompetencyService: RequiredCompetencyService);
    ngOnInit(): void;
    private getRequiredByPostion;
    logs: {
        index: number;
        header: string;
    }[];
    ngOnDestroy(): void;
}
