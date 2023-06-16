import { Injectable } from '@angular/core';
import { DataService } from '@aastrika_npmjs/comptency/core';
import { HttpClient } from '@angular/common/http';
import { urlConfig  } from '@aastrika_npmjs/comptency/core';
import { map } from 'rxjs/operators';
import { ConfigService } from '@aastrika_npmjs/comptency/entry-module';
/**
 * ActiveSummaryService to extend Data Service 
 *
 * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
 */
@Injectable({
  providedIn: 'root'
})
export class ActiveSummaryService extends DataService {

  constructor(http:HttpClient, public configService: ConfigService) {
    super(http, configService)
  }

   /**
   * for making getall activity api calls
   * 
   */
    public getActivityById(reqBody:any){
      // console.log('calling getActivityById>>')
      let config = this.configService.getConfig()
      const httpOptions: any = {
        url: config!.isMobileApp ? urlConfig.getEntityByIdMobile(reqBody.id) : urlConfig.getEntityById(reqBody.id),
        data: reqBody
      };
      // console.log('reqBody',httpOptions)
      return this.post(httpOptions)
    }
     /**
   * for making  api calls to get userDetails
   * 
   */
    public getUserdetailsFromRegistry(reqBody:any ){
      let config = this.configService.getConfig()
      const httpOptions: any = {
        url: config!.isMobileApp? urlConfig.getUserdetailsMobile(reqBody.id) : urlConfig.getUserdetailsFromRegistry(reqBody.id),
      };
      return this.get(httpOptions).pipe(map((res: any) => res.result.response))
    }

    public getRolesMapping(){
     const httpOtions: any = {
      url: urlConfig.getRoleMapping()
     };

     return this.getwithouTAuthorization(httpOtions)
    }

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
      let config = this.configService.getConfig()
      const httpOptions: any = {
        url:   config!.isMobileApp?   urlConfig.getSearchMobile() : urlConfig.getSearch(),
        data: reqBody
      };
      
      return this.post(httpOptions)
    }
  
}
