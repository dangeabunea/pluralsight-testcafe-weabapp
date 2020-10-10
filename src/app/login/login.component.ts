import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../shared/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private _authFailed = false;
  private readonly _loginForm: FormGroup;

  constructor(private _fb: FormBuilder, private _loginService: LoginService, private _router: Router) {
    this._loginForm = _fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  public signIn(): void {
    this._loginService.signIn(this.loginForm.value.username, this.loginForm.value.password);
    if (this._loginService.isAuthenticated) {
      console.log('OK');
      this._authFailed = false;
      this._router.navigate(['notes']);
    } else {
      console.log('FAIL');
      this._authFailed = true;
    }
  }

  public get authFailed(): boolean {
    return this._authFailed;
  }

  public get loginForm(): FormGroup {
    return this._loginForm;
  }
}
