import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-competency-card',
  templateUrl: './competency-card.component.html',
  styleUrls: ['./competency-card.component.scss']
})
export class CompetencyCardComponent implements OnInit {

  @Input() cardData: any

  date = '05/11/2022'
  color = '#FFF4DF'
  panelOpenState: Boolean = true
  competencies = {
    proficiencyLevels: [
      {
        selected: true,
        displayLevel: 1
      },
      {
        selected: true,
        displayLevel: 2
      },
      {
        selected: true,
        displayLevel: 3
      },
      {
        selected: false,
        displayLevel: 4
      },
      {
        selected: true,
        displayLevel: 5
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
