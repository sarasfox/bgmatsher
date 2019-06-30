import { Injectable } from '@angular/core';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  loginUser(user):[User,boolean]{
    console.log(user.Password)
    if(user.Password == "test"){
      return [user, true];
    }
    return [user,false];
  }
}
