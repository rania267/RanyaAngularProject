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

  

  deliveryPerson: any = {};
  imageFile: File;

 

  onSubmit(form: any) {
    const formData = new FormData();
    formData.append('name', this.deliveryPerson.name);
    formData.append('email', this.deliveryPerson.email);
    formData.append('phone', this.deliveryPerson.phone);
    formData.append('averageDeliveryTime', this.deliveryPerson.averageDeliveryTime);
    formData.append('averageDistance', this.deliveryPerson.averageDistance);
    formData.append('averageCustomerSatisfaction', this.deliveryPerson.averageCustomerSatisfaction);
    formData.append('file', this.imageFile);

    this.deliveryService.createDeliveryPerson(formData)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }

  onFileSelected(event: any) {
    this.imageFile = event.target.files[0];
  }
}