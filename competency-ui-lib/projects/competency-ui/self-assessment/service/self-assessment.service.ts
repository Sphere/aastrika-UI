import { Injectable } from '@angular/core';
import { DataService } from '@aastrika_npmjs/comptency/core';
import { HttpClient } from '@angular/common/http';
import { urlConfig  } from '@aastrika_npmjs/comptency/core';

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
  public seachIdentifier(reqBody:any){ 
   
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


  public fetchHeiarchDetails(identifier, hierarchyType){
    
    const httpOptions: any = {
      url: urlConfig.getHeiarchDetails(identifier, hierarchyType),
    };
    // console.log('reqBody',httpOptions)
    return this.get(httpOptions)
  }


}
