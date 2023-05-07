import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeliveryClaimService } from '../services/delivery-claim.service';
import { DeliveryClaim } from '../model/deliveryClaim';
import { FormArray } from '@angular/forms';
@Component({
  selector: 'app-delivery-claim',
  templateUrl: './delivery-claim.component.html',
  styleUrls: ['./delivery-claim.component.css']
})
export class DeliveryClaimComponent implements OnInit {
  deliveryClaimForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private deliveryClaimService: DeliveryClaimService) { }
  ngOnInit() {
    this.deliveryClaimForm = this.formBuilder.group({
      deliveryAddress: ['', Validators.required],
      lateDelivery: [false],
      urgentDelivery: [false],
      deliveryItems: this.formBuilder.array([
        this.createDeliveryItemFormGroup(),
        this.createDeliveryItemFormGroup()
      ])
    });
  }

  createDeliveryItemFormGroup() {
    return this.formBuilder.group({
      name: ['', Validators.required],
      missing: [false],
      damaged: [false]
    });
  }

  get deliveryItems() {
    return this.deliveryClaimForm.get('deliveryItems') as FormArray;
  }

  onSubmit() {
    const deliveryDetails = {
      orderId: 1,
      deliveryAddress: this.deliveryClaimForm.get('deliveryAddress').value,
      deliveryItems: this.deliveryClaimForm.get('deliveryItems').value,
      late: this.deliveryClaimForm.get('lateDelivery').value
    };
    this.deliveryClaimService.createDeliveryClaim(deliveryDetails, this.deliveryClaimForm.get('urgentDelivery').value)
      .subscribe(claim => {
        console.log(claim);
      });
  }
}
  


