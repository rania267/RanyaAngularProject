import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DeliveryService } from '../services/delivery.service';
@Component({
  selector: 'app-deliverycost',
  templateUrl: './deliverycost.component.html',
  styleUrls: ['./deliverycost.component.css']
})
export class DeliverycostComponent implements OnInit {

  constructor(private deliveryService: DeliveryService,
    private router: Router,private http: HttpClient) { }

    deliveryId!: number;
    totalCost!: number;
    deliveries:any;
  ngOnInit() {
    window.addEventListener('deliveryClick', (event: CustomEvent) => {
      const deliveryId = event.detail.deliveryId;
      this.calculateCost(deliveryId);
    });
  }
  
  calculateCost(deliveryId: number) {
    this.deliveryService.calculateDeliveryCost(deliveryId)
      .subscribe(totalCost => {
        this.totalCost = totalCost;
      });
  }
  onDeliveryButtonClick(deliveryId: number) {
    const event = new CustomEvent('deliveryClick', {
      detail: { deliveryId }
    });
    window.dispatchEvent(event);
  }
  
}
