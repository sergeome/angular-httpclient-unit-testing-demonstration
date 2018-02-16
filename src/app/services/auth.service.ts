import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {
  private apiUrl = 'https://fzl0pnn3xi.execute-api.us-east-1.amazonaws.com/dev/login';
  constructor(private http: HttpClient) {}

  public onLogin(email, password) {
    return this.http.post(this.apiUrl, { email: email, password: password });
  }
}
