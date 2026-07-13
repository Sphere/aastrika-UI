import { Injectable } from '@angular/core';
import { DataService, urlConfig } from '@aastrika_npmjs/comptency/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ConfigService } from '@aastrika_npmjs/comptency/entry-module';

/**
 * GainedService to extend Data Service
 *
 * @author Vishali Sakar <vishali.sakar@tarento.com>
 */

@Injectable({
  providedIn: 'root'
})
export class GainedService extends DataService {

  public competencyData = new BehaviorSubject<any>(undefined)
  competencyData$ = this.competencyData.asObservable();


  constructor(http:HttpClient, public configService: ConfigService) {
    super(http, configService)
  }

  /**
   * for making getall Gained api calls
   *
   */

   public fetchUserPassbook(reqBody:any, id?:any){
    let config = this.configService.getConfig()
    const httpOptions: any = {
      url: config!.isMobileApp ? urlConfig.getUserPassbookMobile() :  urlConfig.getUserPassbook(),
      data: reqBody,
      header: config!.isMobileApp ? {'x-authenticated-userid': id } : ''
    };
    return this.post(httpOptions)
  }


  /**
   * Competency entities from the FRAC entity search (replaces getAllEntity).
   * `id` is the numeric entityId the passbook records reference, and the name comes
   * back already in the active language, so no separate hi call is needed.
   */
  public fetchCompetencyEntities(language?: string){
    const config = this.configService.getConfig()
    const lang = language || (config && config.language) || 'en'
    return this.post({
      url: urlConfig.getEntitySearch(),
      data: { entityType: 'Competency', language: lang, query: '', strict: 'false', field: ['code', 'name', 'levels'] }
    }).pipe(
      map((res: any) => {
        const entities = (res && res.result && res.result.entity) || []
        return entities.map((entity: any) => ({
          id: entity.entityId,
          name: entity.name,
          additionalProperties: {
            'Code': entity.code,
            'lang-hi-name': entity.name
          }
        }))
      }),
      catchError(() => of([]))
    )
  }
}
