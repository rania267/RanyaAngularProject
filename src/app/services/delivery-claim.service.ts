import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DeliveryClaim } from '../model/deliveryClaim';
@Injectable({
  providedIn: 'root'
})
export class DeliveryClaimService {

  private baseUrl = 'http://localhost:8081/deliveryClaim';

  constructor(private http: HttpClient) { }

  createDeliveryClaim(deliveryDetails: any, isUrgent: boolean): Observable<DeliveryClaim> {
    return this.http.post<DeliveryClaim>(`${this.baseUrl}/claim?isUrgent=${isUrgent}`, deliveryDetails);
  }
}