import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenDataService {

  accessToken: string = "NA";
  refreshToken: string = "NA"

  constructor() { }

  public setAccessToken(accessToken: string){
    this.accessToken = accessToken
  }

  public getAccessToken(){
    return this.accessToken;
  }

  public resetTokens(){
    this.accessToken = "NA"
    this.refreshToken = "NA"
  }

  public setRefreshToken(refreshToken:string){
    this.refreshToken = refreshToken
  }

  public getRefreshToken(){
    return this.refreshToken;
  }

}
