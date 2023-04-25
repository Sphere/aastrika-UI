import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-competency-entry',
  templateUrl: './competency-entry.component.html',
  styleUrls: ['./competency-entry.component.scss']
})
export class CompetencyEntryComponent implements OnInit {
  @Output() stateChange: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {
  }

  navigateTo(){
    this.stateChange.emit({'navigation':true})
  }

}
