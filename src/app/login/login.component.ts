import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service'
import { LoginRequest } from './login-request'
import { TokenDataService } from '../auth/token-data.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService,
              private tokenDataService: TokenDataService) { }

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
      this.tokenDataService.setAccessToken(loginResponse.access_token)
      this.tokenDataService.setRefreshToken(loginResponse.refresh_token)
    });
  }

}
