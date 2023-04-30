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
  formArray: FormArray;
  deliveryClaimForm: FormGroup;
  isUrgent: boolean = false;
  claimCreated: boolean = false;
  claimAmount: number;

  constructor(private formBuilder: FormBuilder, private deliveryClaimService: DeliveryClaimService) { }

  ngOnInit() {
    this.deliveryClaimForm = this.formBuilder.group({
      orderId: ['', Validators.required],
      deliveryAddress: ['', Validators.required],
      deliveryItems: this.formBuilder.array([
        this.formBuilder.group({
          name: ['', Validators.required],
          missing: [false],
          damaged: [false],
          deliveryLocation: ['', Validators.required],
          dateRequest: ['', Validators.required],
          deliveryTime: ['', Validators.required]
        })
      ]),
      late: [false]
    });
  }

  onSubmit() {
    const deliveryDetails = this.deliveryClaimForm.value;
    this.deliveryClaimService.createDeliveryClaim(deliveryDetails, this.isUrgent)
      .subscribe((claim: DeliveryClaim) => {
        this.claimAmount = claim.claimAmount;
        this.claimCreated = true;
      }, error => {
        console.error(error);
      });
  }
}

