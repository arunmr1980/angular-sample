import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service'
import { TokenDataService } from './token-data.service'

import { TokenRefreshRequest } from './token-refresh-request'
import { TokenRefreshResponse } from './token-refresh-response'


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService:AuthService,
              public tokenDataService:TokenDataService) { }

  ngOnInit(): void {
  }

  refreshTokens(){
    console.log("[AuthComponent] Refreshing tokens")
    if(this.tokenDataService.getAccessToken() == 'NA'){
      console.log('Tokens are not available')
      return
    }

    let tokenRefreshRequest:TokenRefreshRequest = {
      "grant_type": "refresh_token",
      "access_token": this.tokenDataService.getAccessToken(),
      "refresh_token": this.tokenDataService.getRefreshToken()
    }

    this.authService.refreshToken(tokenRefreshRequest).subscribe(tokenRefreshResponse => {
      console.log("Tokens Refreshed")
      console.log(tokenRefreshResponse)
      if(tokenRefreshResponse.response_code == "refresh_token_success"){
        this.tokenDataService.setAccessToken(tokenRefreshResponse.access_token)
        this.tokenDataService.setRefreshToken(tokenRefreshResponse.refresh_token)
      }
    });
  }

}
