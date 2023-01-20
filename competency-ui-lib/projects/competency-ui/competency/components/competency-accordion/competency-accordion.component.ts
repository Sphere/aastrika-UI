import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-competency-accordion',
  templateUrl: './competency-accordion.component.html',
  styleUrls: ['./competency-accordion.component.scss']
})
export class CompetencyAccordionComponent implements OnInit {
  @Input() competencyList: any
  constructor() { }

  ngOnInit() {
    console.log("list",this.competencyList)
  }

}
