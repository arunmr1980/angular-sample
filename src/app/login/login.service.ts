import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { LoginRequest } from './login-request'
import { LogoutRequest } from './logout-request'
import { LoginResponse } from './login-response'
import { LogoutResponse } from './logout-response'

import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginURL = environment.api_url + '/auth/login'
  logoutURL = environment.api_url + '/auth/logout'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) {
  }


  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    console.log("[Login Service] Posting login request")
    console.log(this.loginURL)
    console.log(loginRequest)
    console.log(this.httpOptions)
    return this.http.post<LoginResponse>(this.loginURL, loginRequest, this.httpOptions)
                    .pipe(
                     catchError(this.handleError<any>('login'))
                    )
  }

  logout(logoutRequest: LogoutRequest): Observable<LogoutResponse> {
    console.log("[Login Service] Logging out")
    console.log(this.logoutURL)

    return this.http.post<any>(this.logoutURL, logoutRequest, this.httpOptions)
                    .pipe(
                     catchError(this.handleError<any>('logout'))
                    )
  }

   private handleError<T>(operation = 'operation', result?: T) {

     return (error: any): Observable<T> => {
       console.error(error); // log to console instead
       return of(result as T);
     };
   }

}
