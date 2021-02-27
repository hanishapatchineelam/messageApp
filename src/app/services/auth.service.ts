import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import APIConfig from '../constants/config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private token: string;
  private authErrorStatus$ = new BehaviorSubject(null);

  constructor(private http: HttpClient, private router: Router) {}

  getToken() {
    return localStorage.getItem('Token') || false;
  }

  IsUserAuthenticated() {
    this.isAuthenticated = this.getToken() ? true : false;
    return this.isAuthenticated;
  }

  getAuthErrorStatus() {
    return this.authErrorStatus$;
  }

  login(username: string, password: string) {
    const authData = { username, password };
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers };
    return this.http
      .post(APIConfig.AUTH_URL, authData, options)
      .subscribe((response: any) => {
        this.token = response.token;
        if (this.token) {
          this.authErrorStatus$.next(null);
          this.isAuthenticated = true;
          this.saveAuthToken(this.token);
          this.router.navigateByUrl('/dashboard');
        }
      },(error) => {
        this.authErrorStatus$.next(error.error.non_field_errors[0]);
      })
  }

  private saveAuthToken(token: string) {
    localStorage.setItem('Token', token);
  }
}
