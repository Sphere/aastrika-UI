import { Injectable } from '@angular/core';
import { DataService } from '@aastrika_npmjs/comptency/core';
import { HttpClient } from '@angular/common/http';
import { urlConfig  } from '@aastrika_npmjs/comptency/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelfAssessmentService extends DataService {
  public  startAssessment = new BehaviorSubject<any>(undefined);
  startAssessment$ = this.startAssessment.asObservable();
  constructor(http:HttpClient) {
    super(http)
  }

  /**
   *searching for the content Identifier
   * 
   */
  public getCompetencyCourseIdentifier(reqBody:any){ 
   
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


}
