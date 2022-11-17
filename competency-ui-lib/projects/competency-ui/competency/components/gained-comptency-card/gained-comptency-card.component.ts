import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-gained-comptency-card',
  templateUrl: './gained-comptency-card.component.html',
  styleUrls: ['./gained-comptency-card.component.scss']
})
export class GainedComptencyCardComponent implements OnInit {

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

  logs = [
    {
      index: 1,
      header: 'Self Assessment',
      date: '05/11/2022',
      description: ''
    },
    {
      index: 2,
      header: 'Admin Added',
      date: '05/11/2022',
      description: 'Lorem ipsum sit amet, consectetur adip iscing.'
    },
    {
      index: 2,
      header: 'Couse-Name Completion',
      date: '02/12/2022',
      description: ''
    },
  ]


  constructor() { }

  ngOnInit() {
  }

}
