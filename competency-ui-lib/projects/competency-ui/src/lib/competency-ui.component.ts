import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-competency-ui',
  template: `
    <p>
      <lib-slef-assessment-entry></lib-slef-assessment-entry>
      <lib-competency-entry></lib-competency-entry>
    </p>
  `,
  styles: []
})
export class CompetencyUiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
