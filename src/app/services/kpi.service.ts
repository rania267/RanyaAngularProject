import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Kpi } from '../class/kpi';

@Injectable({
  providedIn: 'root'
})
export class KpiService {
  private apiUrl = 'http://localhost:6060';

  constructor(private http: HttpClient) {}

 
  getKpiData(): Observable<Kpi[]> {
    return this.http.get<Kpi[]>(`${this.apiUrl}/listKpis`);
  }

 
}