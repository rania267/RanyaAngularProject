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
 

  message:any;
  deliveries:any;
  constructor(
    private _fb: FormBuilder,
    private deliveryService: DeliveryService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  

  onSubmit() {
    this.submitted = true;
    this.deliveryService.addDelivery(this.delivery)
    .subscribe(data => console.log(data), error => console.log(error));
    this.delivery = new Delivery();
    this.router.navigate(['/delivery']);
  
  }
  public addDeliveryNow(d:any){
    let resp=this.deliveryService.addDelivery(this.delivery);
    resp.subscribe((data)=>this.message=data);
      }
  
}
