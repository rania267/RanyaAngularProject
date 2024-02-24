import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {  HttpHeaders } from '@angular/common/http';
const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private baseUrl = 'http://localhost:8080'; 

  resetPassword(email: string) {
    const formData = new FormData();
    formData.append('email', email);

    return this.httpClient.post('/your-server-endpoint/forget-password', formData);
  }
  getPublicContent(): Observable<any> {
    return this.httpClient.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.httpClient.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.httpClient.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.httpClient.get(API_URL + 'admin', { responseType: 'text' });
  }


  constructor(private httpClient: HttpClient) {}

  registerUser(user: any): Observable<any> {
    const url = `${this.baseUrl}/register`;
    return this.httpClient.post(url, user);
  }
}
