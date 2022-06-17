import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service'
import { LoginRequest } from './login-request'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  login(){
    console.log("[LoginComponent] Posting login")
    let loginRequest:LoginRequest = {
      "username": "postman-106",
      "password" : "abc123"
    }
    this.loginService.login(loginRequest).subscribe(any => {
      console.log("Login done");
    });
  }

}
