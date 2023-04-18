import { Injectable, OnInit } from '@angular/core';

interface User {
  username?: string;
  email?: string;
  password?: string;
  isConnected?:boolean;
}

@Injectable({
  providedIn:'root'
})
export class LoginComponentModel {


  private user!:User;

  public getUser():User {
    return this.user
  }

  public setUser(user:User):void {
    this.user = user
  }
  
  constructor() {}

}
