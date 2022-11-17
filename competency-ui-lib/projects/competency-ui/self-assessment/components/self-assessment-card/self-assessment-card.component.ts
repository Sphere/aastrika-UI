import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-self-assessment-card',
  templateUrl: './self-assessment-card.component.html',
  styleUrls: ['./self-assessment-card.component.scss']
})
export class SelfAssessmentCardComponent implements OnInit {

  @Input() cardData: any


  constructor() { }

  ngOnInit() {
  }

}
