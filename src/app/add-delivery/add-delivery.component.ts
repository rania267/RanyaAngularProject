import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../services/core.service';

import { DeliveryService } from '../services/delivery.service';
import { Delivery,State } from '../model/delivery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-delivery',
  templateUrl: './add-delivery.component.html',
  styleUrls: ['./add-delivery.component.css']
})
export class AddDeliveryComponent implements OnInit {
  delivery: Delivery = new Delivery();
  submitted = false;
  message: any;
  deliveries: any;
  deliveryStates: State
  constructor(
    private _fb: FormBuilder,
    private deliveryService: DeliveryService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  saveDelivery(){
    this.deliveryService.addDelivery(this.delivery).subscribe( data =>{
      console.log(data);
      this.goToDeliveryList();
    },
    error => console.log(error));
  }
  
  goToDeliveryList(){
    this.router.navigate(['/delivery']);
  }
  
  onSubmit(){
    console.log(this.delivery);
    this.saveDelivery();
    this.router.navigate(['/delivery']);
  }
  
}
