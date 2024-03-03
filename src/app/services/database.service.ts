import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Database } from '../class/database';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private apiUrl = 'http://localhost:6062/createdb'; 
  private baseUrl = 'http://localhost:6062/api/databases';

  constructor(private http: HttpClient) {}
  addDatabasee(database: any): Observable<any> {
   return this.http.post(`${this.baseUrl}/add`, database);
  }

  testDatabaseConnection(): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/test-database-connection`);
  }
testConnection(formData: any): Observable<string> {
  return this.http.post<string>(`${this.baseUrl}/test-and-add-mysql-database`, formData);
}
testAndAddMySQLDatabase(database: any): Observable<any> {
  return this.http.post(`${this.baseUrl}/test-and-add-mysql-database`, database);
}

  verifySQLConnection(formData: any): Observable<any> {
    const url = `${this.baseUrl}/test-and-add-mysql-database`;

    if (!formData) {
      console.error('formData is null or undefined');
      return null;  // Handle appropriately based on your application's logic
    }

    return this.http.post(url, formData);
  }
  testMongoDBConnection(): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/test-connection`);
  }
  createOrUpdateDb(database: Database): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<string>(`${this.baseUrl}/manage_connexion`, database, { headers });
  }

  getAllDb(): Observable<Database[]> {
    return this.http.get<Database[]>(`${this.baseUrl}`);
  }
  deleteDatabase(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  //verifyConnection(databaseInfo: any, databaseType: string): Observable<string> {
   // return this.http.post<string>(`${this.baseUrl}/verify-connection?type=${databaseType}`, databaseInfo);
  //}
  addDatabase(databaseInfo: any, databaseName: string): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/add-database?databaseName=${databaseName}`, databaseInfo);
  }
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  updateDatabase(id: number, updatedDatabase: Database): Observable<Database> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Database>(url, updatedDatabase, this.httpOptions);
  }
  verifyExistenceDatabase(id: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/verifyConnexion/${id}`);
  }}