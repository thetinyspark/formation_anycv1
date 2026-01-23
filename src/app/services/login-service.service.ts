import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private _isConnected:boolean = false;

  constructor() { }

  public isConnected():boolean{
    return this._isConnected;
  }
  
  public login( email:string, password:string):void{
    this._isConnected = email === "admin@admin.com" && password === "123456789";
  }
}
