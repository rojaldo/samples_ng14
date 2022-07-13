import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  _loggedIn: boolean = false;
  isLoggedIn(): boolean {
    this._loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    return this._loggedIn;
  }

  constructor() { }

  login(login: string, password: string): boolean {
    if(login === 'admin' && password === 'admin') {
      localStorage.setItem('isLoggedIn', 'true');
      this._loggedIn = true;
      return true;
    }else {
      localStorage.setItem('isLoggedIn', 'false');
      this._loggedIn = false;
      return false;
    }
  }

  get loggedIn(): boolean {
    return this._loggedIn;
  }
}
