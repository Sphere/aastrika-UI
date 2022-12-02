import { OnInit } from '@angular/core';
import { GainedService } from '../../services/gained.service';
export declare class GainedComptencyCardComponent implements OnInit {
    gainedService: GainedService;
    requestUtil: any;
    loading: boolean;
    panelOpenState: Boolean;
    gainedproficencyData: any;
    constructor(gainedService: GainedService);
    ngOnInit(): void;
    private getAllUserPassbook;
    private getAllEntity;
}
