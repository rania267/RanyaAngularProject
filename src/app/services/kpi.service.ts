import { Injectable } from '@angular/core';
import { Requete } from '../class/requete';
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
  getArchivedKpis(): Observable<Kpi[]> {
    return this.http.get<Kpi[]>(`${this.apiUrl}/kpis/archived`);
  }
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  moveToTrash(ids: number[]): Observable<void> {
    const url = `${this.apiUrl}/move-to-trash`;
    return this.http.post<void>(url, ids);
  }
  updateKpi(id: number, updatedKpi: Kpi): Observable<Kpi> {
    const url = `${this.apiUrl}/update/${id}`;
    return this.http.put<Kpi>(url, updatedKpi, this.httpOptions);
  }
  deleteKpi(id: number): Observable<void> {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.http.delete<void>(url);
  }
  addFirstQuery(queryForm: Requete): Observable<any> {
    const endpoint = `${this.apiUrl}/addFirstQuery`; 
    return this.http.post(endpoint, queryForm);
  }


}