import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _isAuthenticated: boolean;
  private _hasPremiumSubscription: boolean;
  private _userName: string;
  private _nbFailedAuthentications: number;
  private readonly _loginSessionStorageKey = 'rc-testcafe-sample-app-user';

  constructor() {
    this.readFromSessionStorage();
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
    } else if (username === 'jane.doe' && password === 'password456') {
      this._isAuthenticated = true;
      this._userName = username;
      this._hasPremiumSubscription = true;
    } else {
      this._isAuthenticated = false;
    }

    // save user context to session storage
    if (this._isAuthenticated) {
      this.writeToSessionStorage();
    }
  }

  public signOut(): void {
    this._isAuthenticated = false;
    this._hasPremiumSubscription = false;
    this._userName = '';
    this._nbFailedAuthentications = 0;
    sessionStorage.removeItem(this._loginSessionStorageKey);
  }

  private readFromSessionStorage(): void {
    const loginInformationString = sessionStorage.getItem(this._loginSessionStorageKey);
    const loginInformationJson = JSON.parse(loginInformationString);
    if (loginInformationString && loginInformationJson) {
      this._userName = loginInformationJson.userName;
      this._isAuthenticated = loginInformationJson.isAuthenticated;
      this._hasPremiumSubscription = loginInformationJson.hasPremiumSubscription;
    }
  }

  private writeToSessionStorage(): void {
    const userContextInfo = {
      isAuthenticated: this._isAuthenticated,
      userName: this._userName,
      hasPremiumSubscription: this._hasPremiumSubscription
    };
    sessionStorage.setItem(this._loginSessionStorageKey, JSON.stringify(userContextInfo));
  }
}
