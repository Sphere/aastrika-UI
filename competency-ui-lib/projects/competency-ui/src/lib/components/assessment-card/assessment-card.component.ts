import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-assessment-card',
  templateUrl: './assessment-card.component.html',
  styleUrls: ['./assessment-card.component.scss']
})
export class AssessmentCardComponent implements OnInit {

  @Input() cardData: any

  actionBtn = true;
  proficiency = 'Self assessment';
  
  constructor() { }

  ngOnInit() {
  }

}
