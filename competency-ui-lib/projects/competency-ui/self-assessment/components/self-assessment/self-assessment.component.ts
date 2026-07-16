import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { SelfAssessmentService } from '../../service/self-assessment.service';
import { RequestUtil } from '../../service/request-util.service';
import { map, switchMap } from 'rxjs/operators';
import * as _ from 'lodash';
import { ConfigService } from '@aastrika_npmjs/comptency/entry-module';
import { forkJoin, of } from 'rxjs';


@Component({
    selector: 'lib-self-assessment',
    templateUrl: './self-assessment.component.html',
    styleUrls: ['./self-assessment.component.scss'],
    standalone: false
})
export class SelfAssessmentComponent implements OnInit {
  @Input() language: string = '';
  @Input() position: string = '';
  selfAssessmentData: any[] = []
  requestUtil: any
  loading = false
  btnType: any[] = [];
  roleBasedCompetency: any;
  roleCompetencyData: any[] = [];
  noResultData:any = 'NO_RESULT_FOUND';
  // {
  //   'message': 'No result found',
  //   'messageHi': 'कोई परिणाम नहीं मिला'
  // }
  constructor(
    private location: Location,
    private selfAssessmentService: SelfAssessmentService,
    public configService: ConfigService,
    private cdr: ChangeDetectorRef
  ) {
    this.requestUtil = new RequestUtil()
  }

  ngOnInit() {
    this.loading = true;
    this.roleCompetencyData = [];

    this.selfAssessmentService.getRolesWiseCompetency(this.position, this.language).pipe(

      // 👉 Step 1: Extract role competency IDs (NO mutation)
      map((result) => {
        const role = _.find(result.response, { position: this.position });
        this.roleBasedCompetency = role;

        if (!role) return [];

        return _.flatMap(role.competency, (item: any) =>
          _.map(item, (competency: any) => competency.id)
        );
      }),

      // 👉 Step 2: Get user + language
      switchMap((competencyIds) => {
        this.roleCompetencyData = competencyIds;

        return this.getUserDetails().pipe(
          map((res: any) => {
            this.language =
              this.language ||
              res.profileDetails?.preferences?.language ||
              'en';
          })
        );
      }),

      // 👉 Step 3: Get competency courses
      switchMap(() => this.getCompetencyCourse()),

      // 👉 Step 4: Process assessment data
      switchMap((res: any) => {
        const assessData =
          this.requestUtil.formatedCompetencyCourseData(res);

        const filteredData = this.getCompetencyFilter(assessData);
        this.selfAssessmentData = filteredData;

        if (!filteredData.length) {
          return of({ btnType: [] });
        }

        // 👉 Step 5: Get progress for all items
        return forkJoin(
          filteredData.map((value: any) =>
            this.getProgress(value).pipe(
              map((res) => {
                let type = 'START';

                if (res?.result?.contentList?.length > 0) {
                  if (
                    value.childContent === res.result.contentList.length
                  ) {
                    type = res.result.contentList.every(
                      (item: any) => item.completionPercentage === 100
                    )
                      ? 'DONE'
                      : 'RESUME';
                  } else {
                    type = 'RESUME';
                  }
                }

                return {
                  courseId: value.contentId,
                  type
                };
              })
            )
          )
        ).pipe(
          map((btnTypeArray) => ({
            btnType: btnTypeArray
          }))
        );
      })

    ).subscribe({
      next: (result: any) => {
        this.btnType = result.btnType; // ✅ assign once
        this.loading = false;

        this.cdr.detectChanges(); // ✅ critical for Angular 21
      },
      error: () => {
        this.loading = false;
      }
    });
  }



  getCompetencyFilter(data: any[]) {
    let result: any[] = []
    _.forEach(this.roleCompetencyData, (value: any) => {
      // console.log("data", value)
      _.forEach(data, (item: any) => {
        if (item.competencyID == value) {
          result.push(item);
        }
      })
    })
    return _.uniqBy(result, 'contentId');
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

  getProgress(data: any) {
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
