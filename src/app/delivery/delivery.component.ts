import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../services/delivery.service';
import { Delivery } from '../model/delivery';
import { Router } from '@angular/router';
import { ApiResponse } from '../model/api.response';
import { Observable } from 'rxjs';
import * as $ from 'jquery';
import 'datatables.net';
import { DeliveryDetails } from '../model/deliveryDetails';
import { DeliveryClaim } from '../model/deliveryClaim';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { parseISO, format } from 'date-fns';
@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})

  
export class DeliveryComponent implements OnInit {

  isUrgent!: boolean;


  deliveries: Observable<Delivery[]>;
  //dtOptions: DataTables.Settings = {};
  //@ViewChild('dtOptions', {static: true}) table;

  id!: number;
  delivery: Delivery = new Delivery();
  constructor(private deliveryService: DeliveryService,
    private router: Router,private http: HttpClient) { 
   
    }

    ngOnInit():void  {
      
      this.getAllDeliveries();
      this.deliveries = this.deliveryService.getDeliveriesList();
      this.retrieveDeliveries();
  
    }

  deliveriesDetails(id: number){
    this.router.navigate(['delivery-details', id]);
  }

  updateDelivery(){
    this.deliveryService.updateDelivery(this.delivery).subscribe(
      (data) => {
        this.goToDeliveryList();
      },
      (error) => console.log(error)
    );
  }
  goToDeliveryList() {
    this.router.navigate(['/delivery']);
  }

  //deleteDelivery(id: number){
    //this.deliveryService.deleteDelivery(id).subscribe( data => {
     // console.log(data);
     // this.getDeliveries();
    //})
  //}

  //deleteDelivery(id : number){
   // this.deliveryService.deleteDelivery(id).subscribe(() => this.getAllDeliveries())
  //}

  //deleteDelivery(delivery: Delivery) {
   // this.deliveryService.deleteDelivery(delivery.id).subscribe(
     // (data) => {
      //  this.delivery = new Delivery();
       // this.getAllDeliveries();
      //},
      //(error) => {
      //  console.log(error);
      //}
    //);
  //}
  removeAllDeliveries(): void {
    this.deliveryService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }
  
  currentDelivery?: Delivery;
  currentIndex = -1;
  title = '';
deliveriees?: Delivery[]
  refreshList(): void {
    this.retrieveDeliveries();
    this.currentDelivery = undefined;
    this.currentIndex = -1;
  }
  retrieveDeliveries(): void {
    this.deliveryService.getDeliveriesList()
      .subscribe(
        data => {
          this.deliveriees = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  deliveryy: Delivery[]

  getAllDeliveries(){
    this.deliveryService.getDeliveriesList().subscribe(res => this.deliveryy = res)
  }
  
  deliveryId!: number;
  totalCost!: number;

  averageRating!: number;
  ratingAverage!:number;

  calculateCost() {
    this.deliveryService.calculateDeliveryCost(this.deliveryId)
      .subscribe(totalCost => {
        this.totalCost = totalCost;
      });
  }
 /*
  orderId!: number;
  deliveryAddress!: string;
  isLate!: boolean;

   deliveryDetails: DeliveryDetails = {
    id: this.deliveryId,
    orderId: this.orderId.toString(),
    deliveryAddress: this.deliveryAddress,
    isLate: this.isLate
  };

  onSubmit() {
    this.deliveryService.createDeliveryClaim(this.deliveryDetails, this.isUrgent)
      .subscribe((claim: DeliveryClaim) => {
        // Handle successful response here
      }, error => {
        // Handle error response here
      });
  }
 <form (ngSubmit)="onSubmit()">
    <div class="form-group">
      <label for="orderId">Order ID</label>
      <input type="text" class="form-control" id="orderId" required [(ngModel)]="orderId">
    </div>
    <div class="form-group">
      <label for="deliveryAddress">Delivery Address</label>
      <input type="text" class="form-control" id="deliveryAddress" required [(ngModel)]="deliveryAddress">
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="isLatest" [(ngModel)]="isLate">
      <label class="form-check-label" for="isLate">Is Latest</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
*/


submitted = false;



onSubmit() {
  this.submitted = true;
  this.deliveryService.addDelivery(this.delivery)
    .subscribe(data => console.log(data), error => console.log(error));
  this.delivery = new Delivery();
  this.router.navigate(['/delivery']);
}



addDelivery(delivery: any){
  this.deliveryService.addDelivery(delivery).subscribe(() => {
    this.getAllDeliveries();
   
  });
}

deliveryDate: string;

calculateDelivery() {
  const productName = 'mon produit';
  const quantity = 10;

  this.http.get<string>(
    `/deliveries/deliveryDate?product=${productName}&quantity=${quantity}`
  ).subscribe(
    (dateString) => {
      const date = parseISO(dateString);
      this.deliveryDate = format(date, 'dd/MM/yyyy');
      console.log('Date de livraison :', this.deliveryDate);
    },
    (error) => console.error(error)
  );
}


deleteDelivery(id: number) {
  this.deliveryService.deleteDelivery(id)
    .subscribe(
      data => {
        console.log(data);
        this.deliveries = this.deliveryService.getDeliveriesList();
      },
      error => console.log(error));
}
}