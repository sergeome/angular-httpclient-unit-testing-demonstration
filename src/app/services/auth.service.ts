import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  private apiUrl = 'https://fzl0pnn3xi.execute-api.us-east-1.amazonaws.com/dev/login';
  constructor(private http: HttpClient) {}

  public onLogin(user: User): Observable<Object> {
    return this.http.post(this.apiUrl, user);
  }
}
