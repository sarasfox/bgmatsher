import { Component, OnInit, Input } from '@angular/core';
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
  user: User;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.user = new User();
    this.user.Username = localStorage.getItem("username");
    if(this.user.Username){
      this.loginState=LoginState.loggedIn;
    }else{
      this.loginState=LoginState.loggedOut;
    }
  }
  login(){
    let r:[User,boolean] = this.userService.loginUser(this.user)
    if(r[1]){
      this.user = r[0];
      localStorage.setItem("username", this.user.Username);
      this.loginState = LoginState.loggedIn;
    }else{
      this.loginState = LoginState.loginFail;
    }
  }
  logOut(){
    localStorage.removeItem("username");
    this.loginState = LoginState.loggedOut;
  }
}
