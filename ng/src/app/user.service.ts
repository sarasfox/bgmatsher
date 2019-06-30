import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import {User} from './user';
import {URL} from './url'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url:string = URL.baseURL+"/api/user";
  private user;
  private userIn;
  constructor(
    private http: HttpClient,
  ) { }
  loginUser(user):Observable<User>{
    return this.http.post<User>(this.url+"/login", user);
  }
}
