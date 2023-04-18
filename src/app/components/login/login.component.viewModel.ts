import { Component, OnInit } from '@angular/core';

interface User {
  username?: string;
  email?: string;
  password?: string;
  isConnected?:boolean;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.vieW.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponentViewModel implements OnInit {

  private user!:User;
  constructor() { }

  ngOnInit(): void {
  }

  public login():void {

  }


}
