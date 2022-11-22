import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-required-comptency-card',
  templateUrl: './required-comptency-card.component.html',
  styleUrls: ['./required-comptency-card.component.scss']
})
export class RequiredComptencyCardComponent implements OnInit {

  @Input() cardData: any

  panelOpenState: Boolean = true
  customCollapsedHeight = '100px'
  customExpandedHeight = '100px'

  constructor() { }

  ngOnInit() {
  }

  logs = [
    {
      index: 1,
      header: 'Understands HCM guidelines',
    },
    {
      index: 2,
      header: 'Lists raw material required',
    },
    {
      index: 3,
      header: 'Plans for storage',
    },
    {
      index: 4,
      header: 'Motivates the AWH and children on optimal hygiene and handwashing practices',
    },
    {
      index: 5,
      header: 'Course-Name Completion',
    },
    
  ]

}
