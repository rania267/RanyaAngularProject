import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Kpi } from '../class/kpi';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class KpiService {
  private apiUrl = 'http://localhost:6062/api/kpis';

  constructor(private http: HttpClient) {}
  getAllKpis(): Observable<Kpi[]> {
    return this.http.get<Kpi[]>(`${this.apiUrl}/getAll`);
  }
  getKpiById(id: number): Observable<Kpi> {
    const url = `${this.apiUrl}/get/${id}`;
    return this.http.get<Kpi>(url);
  }
  getKpiData(): Observable<Kpi[]> {
    return this.http.get<Kpi[]>(`${this.apiUrl}/listKpis`);
  }
  addKpi(kpi: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, kpi);
  }
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  updateKpi(id: number, updatedKpi: Kpi): Observable<Kpi> {
    const url = `${this.apiUrl}/update/${id}`;
    return this.http.put<Kpi>(url, updatedKpi, this.httpOptions);
  }
  deleteKpi(id: number): Observable<void> {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.http.delete<void>(url);
  }
}