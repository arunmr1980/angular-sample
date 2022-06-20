import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { TokenRefreshRequest } from './token-refresh-request'
import { TokenRefreshResponse } from './token-refresh-response'

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  refreshTokenURL = environment.api_url + '/auth/token'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }

  refreshToken(tokenRefreshRequest: TokenRefreshRequest): Observable<TokenRefreshResponse> {
    console.log("[AuthService] Refreshing Token")
    console.log(this.refreshTokenURL)
    console.log(tokenRefreshRequest)
    console.log(this.httpOptions)
    return this.http.post<TokenRefreshResponse>(this.refreshTokenURL, tokenRefreshRequest, this.httpOptions)
                    .pipe(
                     catchError(this.handleError<any>('login'))
                    )
  }

  private handleError<T>(operation = 'operation', result?: T) {

    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

}
