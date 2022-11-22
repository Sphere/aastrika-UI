import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-gained-comptency-card',
  templateUrl: './gained-comptency-card.component.html',
  styleUrls: ['./gained-comptency-card.component.scss']
})
export class GainedComptencyCardComponent implements OnInit {

  @Input() cardData: any

  date = '05/11/2022'
  panelOpenState: Boolean = false;
  competencies = {
    proficiencyLevels: [
      {
        selected: true,
        displayLevel: 1,
        color: '#FFFBB0',
        level: ''
      },
      {
        selected: true,
        displayLevel: 2,
        color: '#7CB5E6',
        level: ''
      },
      {
        selected: true,
        displayLevel: 3,
        color: '#A4DFCA',
        level: ''
      },
      {
        selected: true,
        displayLevel: 4,
        color: '#A4DFCA',
        level: ''
      },
      {
        selected: false,
        displayLevel: 5,
        color: '',
        level: ''
      }
    ]
  }

  logs = [
    {
      index: 1,
      header: 'Self Assessment',
      date: '05/11/2022',
      description: '',
      keyboardArrowUp: true
    },
    {
      index: 2,
      header: 'Admin Added',
      date: '05/11/2022',
      description: 'Lorem ipsum sit amet, consectetur adip iscing.',
      keyboardArrowUp: true
    },
    {
      index: 2,
      header: 'Couse-Name Completion',
      date: '02/12/2022',
      description: '',
      keyboardArrowUp: true
    },
  ]


  constructor() { }

  ngOnInit() {
  }

}
