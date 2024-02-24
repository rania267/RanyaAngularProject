import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Database } from '../class/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private apiUrl = 'http://localhost:6060/createdb'; 

  constructor(private http: HttpClient) {}

  createOrUpdateDb(database: Database): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<string>(`${this.apiUrl}/manage_connexion`, database, { headers });
  }

  getAllDb(): Observable<Database[]> {
    return this.http.get<Database[]>(`${this.apiUrl}/list`);
  }

  deleteDatabase(id: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/delete/${id}`);
  }

  verifyExistenceDatabase(id: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/verifyConnexion/${id}`);
  }}