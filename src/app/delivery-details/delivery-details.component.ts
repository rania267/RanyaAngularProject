import { Component } from '@angular/core';
import { DeliveryService } from '../services/delivery.service';
import { ActivatedRoute } from '@angular/router';
import { Delivery } from '../model/delivery';
import { DeliveryDetails } from '../model/deliveryDetails';
import { DeliveryClaim } from '../model/deliveryClaim';
@Component({
  selector: 'app-delivery-details',
  templateUrl: './delivery-details.component.html',
  styleUrls: ['./delivery-details.component.css']
})
export class DeliveryDetailsComponent {
  id!: number
  delivery!: Delivery
  constructor(private route: ActivatedRoute, private deliveryService: DeliveryService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.delivery = new Delivery();
    this.deliveryService.getDeliveryById(this.id).subscribe( data => {
      this.delivery = data;
    });
  }


  
}
