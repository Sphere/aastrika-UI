import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'lib-slef-assessment-entry',
  templateUrl: './slef-assessment-entry.component.html',
  styleUrls: ['./slef-assessment-entry.component.scss']
})
export class SlefAssessmentEntryComponent implements OnInit {
  @Output() stateChange: EventEmitter<any> = new EventEmitter();
  constructor(public router:Router) { }

  ngOnInit() {
  }

  navigateTo(){
    this.stateChange.emit({'navigation':true})
  }

}
