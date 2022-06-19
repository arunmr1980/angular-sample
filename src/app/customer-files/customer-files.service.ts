import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { environment } from '../../environments/environment'
import { TokenDataService } from '../auth/token-data.service'

@Injectable({
  providedIn: 'root'
})
export class CustomerFilesService {

  customerServiceURL = environment.api_url
  // getCustomerFilesPath = `/customer/${userID}/login`

  constructor(private http:HttpClient,
              private tokenDataService: TokenDataService) { }

  getCustomerFiles(userID: string): Observable<any[]> {
    console.log("[CustomerFilesService] Get customer files for " + userID)
    let fullURLpath = this.customerServiceURL + `/customer/${userID}/files`
    console.log("Full URL path - " + fullURLpath)

    let accessToken = 'Bearer ' + this.tokenDataService.getAccessToken();
    console.log('Access token : ' + accessToken)
    let httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': accessToken
        }
      )
    };

    return this.http.get<any[]>(fullURLpath, httpOptions)
    .pipe(
      catchError(this.handleError<any>('get customer files'))
    )

  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

}
