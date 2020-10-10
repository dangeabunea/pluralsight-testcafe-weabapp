import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _isAuthenticated: boolean;
  private _hasPremiumSubscription: boolean;
  private _userName: string;
  private _nbFailedAuthentications: number;

  constructor() {
  }

  public get nbFailedAuthentications(): number {
    return this._nbFailedAuthentications;
  }

  public get userName(): string {
    return this._userName;
  }

  public get hasPremiumSubscription(): boolean {
    return this._hasPremiumSubscription;
  }

  public get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  public signIn(username: string, password: string): void {
    if (username === 'john.doe' && password === 'password123') {
      this._isAuthenticated = true;
      this._userName = username;
      this._hasPremiumSubscription = false;
      return;
    }
    if (username === 'jane.doe' && password === 'password456') {
      this._isAuthenticated = true;
      this._userName = username;
      this._hasPremiumSubscription = true;
      return;
    }
    this._isAuthenticated = false;
    this._nbFailedAuthentications++;
  }

  public signOut(): void {
    this._isAuthenticated = false;
    this._hasPremiumSubscription = false;
    this._userName = '';
    this._nbFailedAuthentications = 0;
  }
}
