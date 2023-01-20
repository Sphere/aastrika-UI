import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'lib-self-assessment-card',
  templateUrl: './self-assessment-card.component.html',
  styleUrls: ['./self-assessment-card.component.scss']
})
export class SelfAssessmentCardComponent implements OnInit {

  @Input() cardData: any
  @Input() btnType:any


  constructor(  
    private router: Router
    ) { }

  ngOnInit() {
    console.log(this.cardData)
  }
  startSelfAssesment(data:any){

    this.router.navigate([`app/user/self-assessment`], { queryParams: data})
  }
}
