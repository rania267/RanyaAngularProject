import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerReview } from '../model/customerReview';
@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private reviewsUrl = 'http://localhost:8081/reviews/reviews';

  constructor(private http: HttpClient) { }

  getReviews(): Observable<CustomerReview[]> {
    return this.http.get<CustomerReview[]>(this.reviewsUrl);
  }
}