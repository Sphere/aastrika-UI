import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { GainedService } from '../../services/gained.service';
import { RequestUtil } from '../../services/request-util';
import * as _ from 'lodash-es';
@Component({
  selector: 'lib-gained-comptency-card',
  templateUrl: './gained-comptency-card.component.html',
  styleUrls: ['./gained-comptency-card.component.scss']
})
export class GainedComptencyCardComponent implements OnInit {

  requestUtil: any
  loading = false
  panelOpenState: Boolean = false;
  gainedproficencyData: any
  selectedProficiencyIndex = -1;
  selectedDisplayLevel = -1;
  constructor(
    public gainedService: GainedService

  ) {
    this.requestUtil = new RequestUtil()
  }

  ngOnInit() {
    this.loading = true
    const allEntity = this.getAllEntity()
    const userPassbook = this.getAllUserPassbook()
    forkJoin([allEntity, userPassbook]).subscribe((res) => {
      const response = this.requestUtil.formatedGainedCompetency(res[0].result.response, res[1].result.content)
      this.gainedproficencyData = response
      if (this.gainedproficencyData) {
        let res = []
        _.forEach(this.gainedproficencyData, (competency: any) => {
          if (competency.competencyStoreData) {
            res.push(competency.competencyStoreData)
          }
        })
        this.gainedService.competencyData.next(res)
      }
      this.loading = false
    })
    // if (this.gainedproficencyData) {
    //   this.gainedService.competencyData.next(this.gainedproficencyData.competencyStoreData)
    // }
  }

  private getAllUserPassbook() {
    const reqBody = {
      "request": {
        "typeName": "competency"
      }
    };
    return this.gainedService.fetchUserPassbook(reqBody)
  }

  private getAllEntity() {
    const reqBody = {
      "search": {
        "type": "Competency"
      }
    };
    return this.gainedService.fetchAllEntity(reqBody)
  }

  selectLevel(selectedProficiencyIndex, selectedDisplayLevel) {
    if ((selectedProficiencyIndex === this.selectedProficiencyIndex) && (selectedDisplayLevel === -1 ||
      selectedDisplayLevel === this.selectedDisplayLevel)) {
      this.selectedProficiencyIndex = -1
    } else {
      this.selectedProficiencyIndex = selectedProficiencyIndex
    }
    this.selectedDisplayLevel = selectedDisplayLevel
  }
}
