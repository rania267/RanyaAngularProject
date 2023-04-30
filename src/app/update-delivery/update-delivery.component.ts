import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Delivery } from '../model/delivery';
import { DeliveryService } from '../services/delivery.service';
import { ApiResponse } from '../model/api.response';

@Component({
  selector: 'app-update-delivery',
  templateUrl: './update-delivery.component.html',
  styleUrls: ['./update-delivery.component.css']
})
export class UpdateDeliveryComponent implements OnInit {

  id!: number;
  delivery!: Delivery;
  apiResponse!: ApiResponse;

  constructor(private route: ActivatedRoute,private router: Router,
    private deliveryService: DeliveryService) { }

  ngOnInit() {
    this.delivery = new Delivery();

    this.id = this.route.snapshot.params['id'];
    this.deliveryService.getDeliveryById(this.id)
      .subscribe(data => {
        console.log(data)
        this.delivery = data;
      }, error => console.log(error));
  }

  onSubmit() {
    this.deliveryService.updateDelivery(this.delivery)
      .subscribe(data => console.log(data), error => console.log(error));
    this.delivery = new Delivery();
    this.router.navigate(['/delivery']);
  }

  list(){
    this.router.navigate(['delivery']);
  }
}


