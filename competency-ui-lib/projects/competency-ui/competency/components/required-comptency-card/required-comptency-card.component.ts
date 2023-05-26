import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { RequestUtil } from '../../services/request-util';
import { RequiredCompetencyService } from '../../services/required-competency.service';

@Component({
  selector: 'lib-required-comptency-card',
  templateUrl: './required-comptency-card.component.html',
  styleUrls: ['./required-comptency-card.component.scss']
})
export class RequiredComptencyCardComponent implements OnInit, OnDestroy {
  @Input() language;
  @Input() isMobileApp;
  seletectedLang: any;


  constructor() {}

  ngOnInit() {
    this.seletectedLang = this.language
  }




  ngOnDestroy() {
  }
}
