import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private apiUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  getSurveyResults(surveyId: number) {
    return this.http.get(`${this.apiUrl}/surveys/${surveyId}/results`);
  }
}

