import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { SelfAssessmentService } from '../../service/self-assessment.service';
import { RequestUtil } from '../../service/request-util.service';
import { map, mergeMap } from 'rxjs/operators';
import * as _ from 'lodash-es';
import { ConfigService } from '@aastrika_npmjs/comptency/entry-module';
import * as competencyRoleData from '../../rolesWiseCompetencyData.json';
import { forkJoin, of } from 'rxjs';


@Component({
  selector: 'lib-self-assessment',
  templateUrl: './self-assessment.component.html',
  styleUrls: ['./self-assessment.component.scss']
})
export class SelfAssessmentComponent implements OnInit {
  @Input() language;
  @Input() position;
  selfAssessmentData = []
  requestUtil: any
  loading = false
  btnType = [];
  roleBasedCompetency: any = competencyRoleData;
  roleCompetencyData = [];
  noResultData: {
    'message': 'No result found'
  }
  constructor(
    private location: Location,
    private selfAssessmentService: SelfAssessmentService,
    public configService: ConfigService,
  ) {

    this.requestUtil = new RequestUtil()
  }
  /**
   *getting the details of course by pasing the identifier and hierarchyType
   *
   */


  ngOnInit() {
    this.loading = true;

    this.selfAssessmentService.getRolesWiseCompetency()
      .pipe(
        mergeMap((result) => {
          this.roleBasedCompetency = _.find(result[0].response, { 'position': this.position })
          if (this.roleBasedCompetency) {
            const competencyIds = _.flatMap(this.roleBasedCompetency, (item) =>
              _.flatMap(item, (data) =>
                _.flatMap(data.competency, (competency) =>
                  _.map(competency, 'id')
                )
              )
            );
            console.log('competencyIds', competencyIds)
            this.roleCompetencyData.push(...competencyIds);
          }
          return of(null);
        }),
        mergeMap((competencyIds) => {
          return this.getUserDetails().pipe(
            mergeMap((res: any) => {
              if (!this.language) {
                this.language = res.profileDetails!.preferences?.language || 'en';
              }
              if (this.language) {
                return this.getCompetencyCourse();
              }
              return of(null); // Return an observable using 'of' operator
            }),
            mergeMap((res: any) => {
              const assessData = this.requestUtil.formatedCompetencyCourseData(res);
              this.selfAssessmentData = this.getCompetencyFilter(assessData);

              return forkJoin( // Use 'forkJoin' to handle multiple inner observables
                _.map(this.selfAssessmentData, (value: any) =>
                  this.getProgress(value).pipe(
                    map((res) => {
                      if (res.result) {
                        if (res.result.contentList.length > 0) {
                          if (res.result.contentList.length > 0 && value.childContent === res.result.contentList.length) {
                            let type = '';
                            _.forEach(res.result.contentList, (item: any) => {
                              if (item.completionPercentage === 100 && item.completionPercentage !== 0) {
                                type = 'DONE';
                              } else {
                                type = 'RESUME';
                              }
                            });
                            this.btnType.push({
                              courseId: value.contentId,
                              type,
                            });
                          } else {
                            this.btnType.push({
                              courseId: value.contentId,
                              type: 'RESUME',
                            });
                          }
                        }
                      }

                      if (res.result.contentList.length === 0) {
                        this.btnType.push({
                          courseId: value.contentId,
                          type: 'START',
                        });
                      }
                    })
                  )
                )
              );
            })
          );
        })
      )
      .subscribe(() => {
        this.loading = false;
        console.log('self', this.selfAssessmentData);
      });
  }

  getCompetencyFilter(data) {
    let result = []
    _.forEach(this.roleCompetencyData, (value) => {
      // console.log("data", value)
      _.forEach(data, (item) => {
        if (item.competencyID == value) {
          result.push(item);
        }
      })
    })
    return result;
  }

  getUserDetails() {
    const reqBody = {
      id: this.configService.getConfig().id
    }
    return this.selfAssessmentService.getUserdetailsFromRegistry(reqBody)
  }

  getCompetencyCourse() {
    return this.selfAssessmentService.getCompetencyCourseIdentifier(this.language)
  }

  getProgress(data) {
    const reqbody = {
      request: {
        userId: this.configService.getConfig().id,
        batchId: data.batchId,
        courseId: data.contentId,
        contentIds: [],
        fields: ['progressdetails'],
      }
    }

    return this.selfAssessmentService.fetchPrgressDetails(reqbody)
  }
  navigateBack() {
    this.location.back()
  }

}
