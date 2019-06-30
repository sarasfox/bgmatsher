import { Component, OnInit, Input,} from '@angular/core';
import {User} from '../user';
import{UserService} from '../user.service';

enum LoginState {loggedIn,loggedOut,loginFail}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {
  @Input()
  private loginState:LoginState;
  private user: User;
  constructor(
    private userService: UserService
  ) { }
  ngOnInit() {
    this.user = new User();
  }
  login(){
    this.userService.loginUser(this.user).subscribe(function(user){
      if(user.badLogin===false){
        localStorage.setItem("username", user.username);
        this.loginState = LoginState.loggedIn;
        localStorage.removeItem("LoginFail");
      }else{
      }
    }).add(function(){if(localStorage.getItem("username")==null){
      localStorage.setItem("LoginFail", "true");
      this.loginState=LoginState.loginFail;
    }})
  }
  logOut(){
    localStorage.removeItem("username");
    this.loginState = LoginState.loggedOut;
  }
  checkLogin():void{
    this.user.username = localStorage.getItem("username");
    if(this.user.username){
      this.loginState=LoginState.loggedIn;
    }else{
      if (this.loginState==LoginState.loginFail){
      }else{
        this.loginState=LoginState.loggedOut;
      }
    }
    if(localStorage.getItem("LoginFail")!=null){
      this.loginState=LoginState.loginFail;
    }
  }
}
