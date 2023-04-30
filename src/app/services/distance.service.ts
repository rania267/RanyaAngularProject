import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DistanceService {




  private apiUrl = 'http://localhost:8081/distance/getdistance';

  constructor(private http: HttpClient) { }

  calculateDistance(deliveryAddressLat: number, deliveryAddressLong: number,
                    driverLocationLat: number, driverLocationLong: number) {
    const params = new HttpParams()
      .set('deliveryAddressLat', deliveryAddressLat.toString())
      .set('deliveryAddressLong', deliveryAddressLong.toString())
      .set('driverLocationLat', driverLocationLat.toString())
      .set('driverLocationLong', driverLocationLong.toString());

    return this.http.get<number>(this.apiUrl, { params });
  }
}
