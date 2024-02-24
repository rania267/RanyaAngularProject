import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { User } from '../../class/user';
const AUTH_API = 'http://localhost:6060/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:6060'; 
  private apiUrl = 'http://localhost:6060/api/auth'; 
  private apiUrl2 = 'http://localhost:6060/api/test'; 

  constructor(private http: HttpClient) { }

  login(credentials:any): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }
  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/registration`, user);
  }

  loginUser(credentials: { username: string; password: string }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(`${this.baseUrl}/login`, credentials, { headers });
  }
  requestPasswordReset(email: string): Observable<any> {
    const user: User = { email: email, username: '', password: '' };

    return this.http.post(`${this.apiUrl}/forgotPassword`, user);
  }
  forgotPassword(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl2}/forgot-password`, { email: email });
  }
  
  resetPassword(token: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/reset-password?token=${token}`, { password });
  }
  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): any {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user:any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  register(user:any): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
  
  public getUser(): any {
    const userString = sessionStorage.getItem(USER_KEY) ?? ''; 
    return JSON.parse(userString);
  }
  logout(): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/auth/logout`, {});
  }

  clearToken(): void {
    
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
  }

 

 
}
