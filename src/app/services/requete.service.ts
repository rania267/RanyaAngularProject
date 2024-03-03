import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Requete } from '../class/requete';

@Injectable({
  providedIn: 'root'
})
export class RequeteService {
  private baseUrl = 'http://localhost:6060'; 

  constructor(private http: HttpClient) { }
  getListRequetes(): Observable<Requete[]> {
    return this.http.get<Requete[]>(`${this.baseUrl}/listRequete`);
  }
  launchScriptTestResultStep2(requestBody: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/LaunchScriptTestResultStep2`, requestBody);
  }


  private apiUrl = 'http://localhost:6062/api/requetes';


  getAllRequetes(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  getRequeteById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createRequete(requete: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, requete);
  }

  updateRequete(id: number, requete: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, requete);
  }

  deleteRequete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
