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


  updateRequete(requestBody: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/updatee`, requestBody);
  }
}