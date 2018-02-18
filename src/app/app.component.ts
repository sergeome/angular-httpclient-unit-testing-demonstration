import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public loginForm: FormGroup;
  public response = null;
  constructor(private authService: AuthService) {}

  public onLogin() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    const user = new User(email, password);
    this.authService.onLogin(user).subscribe(
      (response: HttpResponse<any>) => {
      this.response = response;
      console.log(response);
    }, (errorResponse: HttpErrorResponse) => {
      console.log('There was an Error');
      this.response = errorResponse.error;
    });
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    });
  }
}
