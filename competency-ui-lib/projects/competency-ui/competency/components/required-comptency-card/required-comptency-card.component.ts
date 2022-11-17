import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-required-comptency-card',
  templateUrl: './required-comptency-card.component.html',
  styleUrls: ['./required-comptency-card.component.scss']
})
export class RequiredComptencyCardComponent implements OnInit {

  @Input() cardData: any
  constructor() { }

  ngOnInit() {
  }

}
