import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-active-summary',
  templateUrl: './active-summary.component.html',
  styleUrls: ['./active-summary.component.scss']
})
export class ActiveSummaryComponent implements OnInit {
  @Input() cardData: any
  panelOpenState: Boolean = true

  constructor() { }

  ngOnInit() {
  }

}
