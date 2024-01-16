import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'lib-no-result',
  templateUrl: './no-result.component.html',
  styleUrls: ['./no-result.component.scss']
})
export class NoResultComponent implements OnInit {


  @Input() data?: any
  @Input() languagePreferred?: any
  /**

   * no result message

  */
  message: string;

  constructor() { }

  ngOnInit() {
    // console.log("no data ",this.data)
    this.setMessage();
  }

  setMessage() {
    this.message = _.get(this.data, 'message') ? _.get(this.data, 'message') : ' No result found'
    this.message = this.languagePreferred == "en" ?  _.get(this.data, 'message') ? _.get(this.data, 'message') : ' No result found'  : _.get(this.data, 'messageHi') ? _.get(this.data, 'messageHi') : 'कोई परिणाम नहीं मिला'
  }

}
