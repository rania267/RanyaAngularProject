import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Delivery } from '../model/delivery';
import { DeliveryDetails } from '../model/deliveryDetails';
import { DeliveryClaim } from '../model/deliveryClaim';
import { ApiResponse } from '../model/api.response';
import { DeliveryPerson } from '../model/deliveryPerson';
@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  private baseURL = "http://localhost:8081/api/deliveries";
  private baseUrl = '/api/deleteDelivery';

  constructor(private httpClient: HttpClient) { }
  
  getDeliveriesList() : Observable<Delivery[]> {
    return this.httpClient.get<Delivery[]>(this.baseURL);
  }

 // addDelivery(delivery: Delivery): Observable<Object>{
    //return this.httpClient.post(`${this.baseURL}`, delivery);
  //}

  
  //addDelivery(delivery : any) {
   // return this.httpClient.post(`${this.baseURL}`, delivery)
  //}
 // addDelivery(delivery: Delivery): Observable<any> {
   // return this.httpClient.post(`${this.baseURL}/add`, formData);
  //}

  getDeliveryById(id: number): Observable<Delivery>{
    return this.httpClient.get<Delivery>(`${this.baseURL}/${id}`);
  }

  updateDelivery( delivery: Delivery): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`, delivery);
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(this.baseUrl);
  }
  addDelivery(delivery: Delivery): Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>('http://localhost:8081/api/deliveries/addDelivery', delivery);
  }

  deleteDelivery(id: number): Observable<ApiResponse> {
    return this.httpClient.delete<ApiResponse>(this.baseUrl + id);
  }

  //deleteDelivery(id: number): Observable<any> {
  //  return this.httpClient.delete('http://localhost:8081/api/deleteDelivery/' + id, {responseType: 'text'});
  //}
  private apiUrl = 'http://localhost:8081/deliveries'; 


  calculateDeliveryCost(id: number): Observable<number> {
    return this.httpClient.get<number>(`${this.apiUrl}/${id}/cost`);
  }
  getComplexRatingAverage(): Observable<number> {
    return this.httpClient.get<number>(`${this.apiUrl}/rating/average/complex`);
  }
  createDeliveryClaim(deliveryDetails: DeliveryDetails, isUrgent: boolean) {
    const url = 'http://localhost:8081/deliveryClaim/claim?isUrgent=' + isUrgent;
    return this.httpClient.post<DeliveryClaim>(url, deliveryDetails);
  }





  getTop2RankedDeliveryPersons(): Observable<DeliveryPerson[]> {
    return this.httpClient.get<DeliveryPerson[]>(`${this.apiUrl}/deliverypersons/top2ranked`);
  }

}

