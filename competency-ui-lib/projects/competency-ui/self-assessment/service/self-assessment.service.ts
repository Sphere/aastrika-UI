import { Injectable } from '@angular/core';
import { DataService } from '@aastrika_npmjs/comptency/core';
import { HttpClient } from '@angular/common/http';
import { urlConfig, resolveFracPositionCode, transformFracHierarchyToLegacy } from '@aastrika_npmjs/comptency/core';
import { map, catchError, switchMap } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';
import { ConfigService } from '@aastrika_npmjs/comptency/entry-module';

@Injectable({
  providedIn: 'root'
})
export class SelfAssessmentService extends DataService {
  constructor(http:HttpClient,  public configService: ConfigService) {
    super(http, configService)
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
    let config = this.configService.getConfig()
    const httpOptions: any = {
      url:   config!.isMobileApp?   urlConfig.getSearchMobile() : urlConfig.getSearch(),
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
    let config = this.configService.getConfig()
    const httpOptions: any = {
      url: config!.isMobileApp ? urlConfig.getContentProgressMobile() : urlConfig.getContentProgress(req.request.courseId),
      data: req
    };
    
    return this.post(httpOptions)
    
  }
  /**
   * FRAC entity search for one entityType, returning the raw entity array.
   */
  private searchEntities(entityType: string){
    const config = this.configService.getConfig()
    return this.post({
      url: config!.isMobileApp ? urlConfig.getEntitySearchMobile() : urlConfig.getEntitySearch(),
      data: { entityType: entityType, language: 'en', query: '', strict: 'false', field: ['code', 'name', 'levels'] }
    }).pipe(
      map((res: any) => (res && res.result && res.result.entity) || []),
      catchError(() => of([]))
    )
  }

  /** Position designation (name) → FRAC Position entityCode, from the search API. */
  public getPositionEntityCodeMap(){
    return this.searchEntities('Position').pipe(
      map((entities: any[]) => {
        const posMap: { [name: string]: string } = {}
        entities.forEach((entity: any) => {
          if (entity && entity.name) {
            posMap[entity.name] = entity.code
          }
        })
        return posMap
      })
    )
  }

  /**
   * Competency code → numeric entityId map from the FRAC entity search.
   * This is the id courses / passbook / progress match on, so it is applied to
   * the transformed competencies. Failures resolve to an empty map (ids then
   * fall back to the code).
   */
  public getCompetencyEntityIdMap(){
    return this.searchEntities('Competency').pipe(
      map((entities: any[]) => {
        const idMap: { [code: string]: string } = {}
        entities.forEach((entity: any) => {
          if (entity && entity.code) {
            idMap[entity.code] = entity.entityId
          }
        })
        return idMap
      })
    )
  }

  /**
   * Role wise competency data from the FRAC service. The position designation is
   * resolved to an entityCode via the search API, then the Position hierarchy is
   * fetched once in the active language (from the eagle-fusion root config) — no
   * separate en + hi calls, since the language is known up front — and merged
   * with the competency id map into the { position, roles, activity, competency }
   * shape the consumers expect. Returns an empty response (no legacy fallback)
   * when the position has no FRAC mapping or FRAC returns no hierarchy.
   */
  public getRolesWiseCompetency(position?: string, language?: string){
    const config = this.configService.getConfig()
    const lang = language || (config && config.language) || 'en'
    return this.getPositionEntityCodeMap().pipe(
      switchMap((posMap) => {
        const entityCode = resolveFracPositionCode(position as string, config, posMap)
        if (!entityCode) {
          return of({ response: [], status: 200 })
        }
        const hierarchy$ = this.post({
          url: config!.isMobileApp ? urlConfig.getEntityHierarchyMobile() : urlConfig.getEntityHierarchy(),
          data: { entityType: 'Position', entityCode: entityCode, entityLanguage: lang }
        }).pipe(catchError(() => of(null)))
        return forkJoin([hierarchy$, this.getCompetencyEntityIdMap()]).pipe(
          map(([res, idMap]: any[]) => {
            const result = res && res.result
            if (!result || !(result.children && result.children.length)) {
              return { response: [], status: 200 }
            }
            // single-language fetch: the one result populates both the name and
            // lang-hi-* slots the consumers read, so the active language shows
            // regardless of the lang=='hi' checks downstream.
            return {
              response: [transformFracHierarchyToLegacy(result, result, position as string, idMap)],
              status: 200
            }
          })
        )
      }),
      catchError(() => of({ response: [], status: 200 }))
    )
   }

  public getUserdetailsFromRegistry(reqBody:any){
    let config = this.configService.getConfig()
    const httpOptions: any = {
      url: config!.isMobileApp ? urlConfig.getUserdetailsMobile(reqBody.id) : urlConfig.getUserdetailsFromRegistry(reqBody.id),
    };
    return this.get(httpOptions).pipe(map((res: any) => res.result.response))
  }



}
