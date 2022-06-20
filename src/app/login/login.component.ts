import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service'
import { LoginRequest } from './login-request'
import { LogoutRequest } from './logout-request'
import { TokenDataService } from '../auth/token-data.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,
              private loginService:LoginService,
              public tokenDataService:TokenDataService) { }

  ngOnInit(): void {
  }

  login(username: string, password: string){
    console.log("[LoginComponent] Posting login")
    let loginRequest:LoginRequest = {
      "username": username,
      "password" : password
    }

    this.loginService.login(loginRequest).subscribe(loginResponse => {
      console.log("Login done")
      console.log(loginResponse)
      if(loginResponse.response_code == "login_success"){
        this.tokenDataService.setAccessToken(loginResponse.access_token)
        this.tokenDataService.setRefreshToken(loginResponse.refresh_token)
        this.router.navigate(['customer-files'])
      }
    });
  }


  logout(){
    console.log("[LoginComponent] Logging out")
    let logoutRequest:LogoutRequest = {
      "access_token": this.tokenDataService.getAccessToken()
    }
    this.loginService.logout(logoutRequest).subscribe(logoutResponse => {
      console.log("Logout complete")
      console.log(logoutResponse)
      if(logoutResponse.response_code == "logout_success"){
        this.tokenDataService.resetTokens()
      }
    });
  }

}
