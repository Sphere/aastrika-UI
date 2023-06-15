import { Injectable } from '@angular/core';
import { DataService } from '@aastrika_npmjs/competency-web/core';
import { HttpClient } from '@angular/common/http';
import { urlConfig  } from '@aastrika_npmjs/competency-web/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SelfAssessmentService extends DataService {
  constructor(http:HttpClient) {
    super(http)
  }

  /**
   *searching for the content Identifier
   *
   */
  public getCompetencyCourseIdentifier(data:any){
    const reqBody = {
      "request": {
        "filters": {
          "primaryCategory": [
            "Course"
          ],
          "contentType": [
            "Course"
          ],
          "status": [
            "Live"
          ],
          "competency": [true],
          "lang": data == 'hi' ? 'hi' : 'en'
        }
      },
      "sort": [
        {
          "lastUpdatedOn": "desc"
        }
      ]
    }
    const httpOptions: any = {
      url: urlConfig.getSearch(),
      data: reqBody
    };

    return this.post(httpOptions)
  }

   /**
   *getting the details of course by pasing the identifier and hierarchyType
   *
   */

  public fetchHiearchyDetails(identifier, hierarchyType){

    const httpOptions: any = {
      url: urlConfig.getHierachyDetails(identifier, hierarchyType),
    };
    return this.get(httpOptions)
  }

  /**
   * fetchPrgressDetails
id
const */
  public fetchPrgressDetails(req) {
    const httpOptions: any = {
      url: urlConfig.getContentProgress(req.request.courseId),
      data: req
    };

    return this.post(httpOptions)

  }


  public getUserdetailsFromRegistry(reqBody:any){
    const httpOptions: any = {
      url: urlConfig.getUserdetailsFromRegistry(reqBody.id),
    };
    return this.get(httpOptions).pipe(map((res: any) => res.result.response))
  }



}
