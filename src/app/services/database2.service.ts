import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Database2Service {

  private baseUrl = 'http://localhost:6060'; 

  constructor(private http: HttpClient) {}

  getSomeData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/api/someEndpoint`);
  }}
