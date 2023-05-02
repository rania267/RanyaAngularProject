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

import jspdf from 'jspdf';


@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})

  
export class DeliveryComponent implements OnInit {

  isUrgent!: boolean;


  deliveries: any;
  //dtOptions: DataTables.Settings = {};
  //@ViewChild('dtOptions', {static: true}) table;

  id!: number;
  delivery:any
  constructor(private deliveryService: DeliveryService,
    private router: Router,private http: HttpClient) { 
      setTimeout(function(){
        $(function(){
        $('#example').DataTable();
        });
        },2000);
        
   
    }

    ngOnInit():void  {
      
  setTimeout(function(){
  $(function(){
  $('#example').DataTable();
  });
  },2000);
   
      this.deliveries = this.deliveryService.getDeliveriesList();
     
  
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
deliveriees?: any
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
  deliveryy: any

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
generatePDF(delivery: Delivery) {
  const doc = new jspdf();

  // Ajouter du texte avec la méthode doc.text()
  doc.text(`ID : ${delivery.id}`, 10, 10);
  doc.text(`Adresse : ${delivery.address}`, 10, 20);
  doc.text(`Taille : ${delivery.size}`, 10, 30);
  doc.text(`Total HT : ${delivery.totalHT}`, 10, 40);
  doc.text(`Total TTC : ${delivery.totalTTC}`, 10, 50);
  doc.text(`Prix unitaire : ${delivery.unitPrice}`, 10, 60);
  doc.text(`TVA : ${delivery.tva}`, 10, 70);
  doc.text(`État de livraison : ${delivery.deliveryState}`, 10, 80);
  doc.text(`Heure de livraison prévue : ${delivery.scheduledDeliveryTime}`, 10, 90);
  doc.text(`Heure de livraison réelle : ${delivery.actualDeliveryTime}`, 10, 100);
  doc.text(`Distance : ${delivery.distance}`, 10, 110);
  doc.text(`Poids : ${delivery.weight}`, 10, 120);
  doc.text(`Vitesse : ${delivery.speed}`, 10, 130);
  doc.text(`Confirmation de signature : ${delivery.signatureConfirmation}`, 10, 140);
  doc.text(`Assurance : ${delivery.insurance}`, 10, 150);

  // Enregistrer le PDF avec la méthode doc.save()
  doc.save('livraison.pdf');
}

}