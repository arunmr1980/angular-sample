import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { LoginRequest } from './login-request'


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginURL = 'https://0ljxnqmfoc.execute-api.eu-north-1.amazonaws.com/Uat/auth/login'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) {
  }


  login(loginRequest: LoginRequest): Observable<any> {
    console.log("[Login Service] Posting login request")
    console.log(this.loginURL)
    console.log(loginRequest)
    console.log(this.httpOptions)
    return this.http.post<LoginRequest>(this.loginURL, loginRequest, this.httpOptions)
                    .pipe(
                     catchError(this.handleError<any>('login'))
                    )
  }

  /**
    * Handle Http operation that failed.
    * Let the app continue.
    *
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */

   private handleError<T>(operation = 'operation', result?: T) {

     return (error: any): Observable<T> => {
       console.error(error); // log to console instead
       return of(result as T);
     };
   }

}
