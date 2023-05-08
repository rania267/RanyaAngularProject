import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeliveryClaimService } from '../services/delivery-claim.service';
import { DeliveryClaim } from '../model/deliveryClaim';
import { FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-delivery-claim',
  templateUrl: './delivery-claim.component.html',
  styleUrls: ['./delivery-claim.component.css']
})
export class DeliveryClaimComponent implements OnInit {
  

  deliveryAddress: string;
  deliveryItems: string;
  late: boolean;
  claimReason: string;
  claimAmount: number;

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    
  }

  calculateClaim() {
    const deliveryDetails = {
      deliveryAddress: this.deliveryAddress,
      deliveryItems: JSON.parse(this.deliveryItems),
      late: this.late
    };
    this.http.post<any>('/deliveryClaim/claim?isUrgent=false', deliveryDetails).subscribe(
      (response) => {
        this.claimReason = response.claimReason;
        this.claimAmount = response.claimAmount;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}





