import {Component, OnInit} from '@angular/core';
import {LoginService} from '../shared/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private _loginService: LoginService, private _router: Router) {
  }

  public ngOnInit(): void {
  }

  public get isAuthenticated(): boolean {
    return this._loginService.isAuthenticated;
  }

  public get userName(): string {
    return this._loginService.userName;
  }

  public get userIsPremiumMember(): boolean {
    return this._loginService.hasPremiumSubscription;
  }

  public signOut(): void {
    this._loginService.signOut();
    this._router.navigate(['login']);
  }
}
