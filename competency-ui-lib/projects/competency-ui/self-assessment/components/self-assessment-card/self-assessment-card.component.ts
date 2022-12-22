import { Component, Input, OnInit } from '@angular/core';
import { SelfAssessmentService } from '../../service/self-assessment.service';
@Component({
  selector: 'lib-self-assessment-card',
  templateUrl: './self-assessment-card.component.html',
  styleUrls: ['./self-assessment-card.component.scss']
})
export class SelfAssessmentCardComponent implements OnInit {

  @Input() cardData: any


  constructor(  private selfAssessmentService : SelfAssessmentService,) { }

  ngOnInit() {
  }
  startSelfAssesment(data:any){
    this.selfAssessmentService.startAssessment.next(data)
  }
}
