import { Component, OnInit } from '@angular/core';
import { DeliveryPerson } from '../model/deliveryPerson';
import { DeliveryService } from '../services/delivery.service';

@Component({
  selector: 'app-delivery-person',
  templateUrl: './delivery-person.component.html',
  styleUrls: ['./delivery-person.component.css']
})
export class DeliveryPersonComponent implements OnInit {
  topDeliveryPersons: DeliveryPerson[] = [];

  constructor(private deliveryService: DeliveryService) { }

  ngOnInit() {
    this.getTop2RankedDeliveryPersons();
  }

  getTop2RankedDeliveryPersons() {
    this.deliveryService.getTop2RankedDeliveryPersons()
      .subscribe((data: DeliveryPerson[]) => {
        this.topDeliveryPersons = data;
      });
  }
}

