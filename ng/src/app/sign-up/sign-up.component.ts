import { Component, OnInit } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.styl']
})
export class SignUpComponent implements OnInit {
  private user: User;
  constructor() { }

  ngOnInit() {
    this.user = new User();
  }

}
