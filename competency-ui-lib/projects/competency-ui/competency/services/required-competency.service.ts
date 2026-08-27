import { Injectable } from '@angular/core';
import { DataService } from '@aastrika_npmjs/comptency/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '@aastrika_npmjs/comptency/entry-module';
/**
 * RequiredCompetencyService to extend Data Service
 *
 * @author Mansur Shaik <mansur.shaik@tarento.com>
 */
@Injectable({
  providedIn: 'root'
})
export class RequiredCompetencyService extends DataService {

  constructor(http:HttpClient, public configService: ConfigService) {
    super(http, configService)
   }

}
