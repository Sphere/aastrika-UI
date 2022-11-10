import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-competency-ui',
  template: `
    <p>
      competency-ui works here!
      <lib-competency-card></lib-competency-card>
    </p>
  `,
  styles: []
})
export class CompetencyUiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
