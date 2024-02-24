import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatabaseResponse } from '../class/database-response';
import { Table } from '../class/table';

@Injectable({
  providedIn: 'root'
})
export class MainProjectService {
  private apiUrl = 'http://localhost:6060/api'; 

  constructor(private http: HttpClient) {}

  getDatabases(reqColumns: any): Observable<DatabaseResponse> {
    return this.http.post<DatabaseResponse>(`${this.apiUrl}/databases`, reqColumns);
  }

  getTables(db: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/tables`, db);
  }

  getColumns(reqColumns: any): Observable<Table[]> {
    return this.http.post<Table[]>(`${this.apiUrl}/columns`, reqColumns);
  }

  getTargetMapping(reqMapping: any): Observable<Table[]> {
    return this.http.post<Table[]>(`${this.apiUrl}/mapping`, reqMapping);
  }

  getTestProfile(reqMapping: any): Observable<Table[]> {
    return this.http.post<Table[]>(`${this.apiUrl}/testProfile`, reqMapping);
  }


}