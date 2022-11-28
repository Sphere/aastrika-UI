import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash-es'
@Component({
  selector: 'lib-app-loader',
  templateUrl: './app-loader.component.html',
  styleUrls: ['./app-loader.component.scss']
})
export class AppLoaderComponent implements OnInit {

  @Input() data;
  headerMessage: string;
  loaderMessage: string;

  constructor() { }

  ngOnInit() {
    this.headerMessage = 'Please wait';
    this.loaderMessage = 'We are fetching details';
    if (this.data) {
      this.headerMessage = _.get(this.data, 'headerMessage') || this.headerMessage;
      this.loaderMessage = _.get(this.data, 'loaderMessage') || this.loaderMessage;
    }

  }

}
