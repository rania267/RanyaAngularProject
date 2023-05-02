import { Component, OnInit } from '@angular/core';
import { parseISO, format } from 'date-fns';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalDate } from '@js-joda/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-delivery-date',
  templateUrl: './delivery-date.component.html',
  styleUrls: ['./delivery-date.component.css']
})
export class DeliveryDateComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  deliveryDate: string;
  calculateDeliveryDate(productName: string, quantity: number): any{
    return this.http.get<LocalDate>(`/deliveries/deliveryDate?product=${productName}&quantity=${quantity}`).pipe(
      map((deliveryDate: LocalDate) => {
        // Formate la date de livraison en string
        const formattedDate = deliveryDate.dayOfMonth() + '/' + deliveryDate.monthValue() + '/' + deliveryDate.year();
        return formattedDate;
      })
    );
    
    }
  }
