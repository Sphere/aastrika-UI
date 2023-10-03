import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { forkJoin } from 'rxjs';
import { GainedService } from '../../services/gained.service';
import { RequestUtil } from '../../services/request-util';
import * as _ from 'lodash-es';
import { ActiveSummaryService } from '../../services/active-summary.service';
import { ConfigService } from '@aastrika_npmjs/comptency/entry-module';
@Component({
  selector: 'lib-gained-comptency-card',
  templateUrl: './gained-comptency-card.component.html',
  styleUrls: ['./gained-comptency-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GainedComptencyCardComponent implements OnInit {
  @Input()language;
  requestUtil: any
  loading = false
  panelOpenState: Boolean = false;
  gainedproficencyData: any
  selectedProficiencyIndex = -1;
  selectedDisplayLevel = -1;
  // public profileData: any
  // appLanguage: any
  noResultData:any =  {
    'message': 'No data to display, please take self-assessment or pass courses to see data in the passbook',
    'messageHi': 'प्रदर्शित करने के लिए कोई डेटा नहीं है, कृपया पासबुक में डेटा देखने के लिए स्व-मूल्यांकन करें या कोर्स पास करें।'
  }
  
  constructor(
    public gainedService: GainedService,
    public configService: ConfigService,
    public activeSummaryService: ActiveSummaryService,

  ) {
    this.requestUtil = new RequestUtil()
  }

  ngOnInit() {
    
    if(!this.language){
      this.getUserDetails().subscribe(
        (res: any) => {
          this.language = res.profileDetails!.preferences ? res.profileDetails!.preferences!.language : 'en';
        })
    }
    this.loading = true
    const allEntity = this.getAllEntity()
    const userPassbook = this.getAllUserPassbook()
    forkJoin([allEntity, userPassbook]).subscribe((res) => {
      const response = this.requestUtil.formatedGainedCompetency(res[0].result.response, res[1].result.content, this.language)
      this.gainedproficencyData = response
      // this.gainedproficencyData = this.dummyData
      if (this.gainedproficencyData) {
        let res = []
        _.forEach(this.gainedproficencyData, (competency: any) => {
          if (competency.competencyStoreData) {
            res.push(competency.competencyStoreData)
          }
        })
        this.gainedService.competencyData.next(res)
      }
      // if(this.gainedproficencyData && this.gainedproficencyData < 0){
      //   this.noResultData = {
      //     'message': 'No Data to Display, Please take self assessement or pass courses to see data in passbook'
      //   }
      // }
      this.loading = false

    })
  }

  getUserDetails() {
    const reqBody = {
      id: this.configService.getConfig().id
    }
    return this.activeSummaryService.getUserdetailsFromRegistry(reqBody)
  }

  private getAllUserPassbook() {
    let id = this.configService.getConfig().id
    const reqBody = {
      "request": {
        "typeName": "competency"
      }
    };
    return this.gainedService.fetchUserPassbook(reqBody,id)
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
