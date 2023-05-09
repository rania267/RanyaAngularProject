import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders , HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { DeliveryService } from '../services/delivery.service';
import { parseISO, format } from 'date-fns';
import  jspdf from 'jspdf';
import { Map } from 'typescript';
import { Observable } from 'rxjs';

import 'jspdf-autotable';

import { map } from 'rxjs/operators';

import { Delivery } from '../model/delivery';
@Component({
  selector: 'app-delivery-front',
  templateUrl: './delivery-front.component.html',
  styleUrls: ['./delivery-front.component.css']
})
export class DeliveryFrontComponent implements OnInit {
  averageRating!: number;
  ratingAverage!:number;
  currentPage: number = 1;
  deliveryId!: number;
  deliveriess:any;
  totalCost!: number;
//

deliverys = [
  { 
    address: '123 Main St',
    size: 'Large',
    totalHT: 100,
    totalTTC: 120,
    tva: 20,
    deliveryState: 'Delivered',
    actualDeliveryTime: new Date('2023-05-06'),
    distance: 10,
    speed: 50,
    signatureConfirmation: true,
    insurance: true
  },
  // Ajoutez d'autres objets de livraison ici
];

qrCodeData: string;
generateQRCode(delivery: Delivery) {
  this.qrCodeData = JSON.stringify(delivery);
}
  constructor(private deliveryService: DeliveryService,
    private router: Router,private http: HttpClient) { 

     
   
    }

    ngOnInit():void  {

 
      this.getAverageRating();
      this.deliveries = this.deliveryService.getDeliveriesList();
     
  
    }
    private getAverageRating(): void {
      this.http.get<number>('http://localhost:8081/deliveries/rating/average/complex').subscribe(
        data => {
          this.averageRating = data;
        },
        error => {
          console.log('Error fetching average rating: ', error);
        }
      );
    }
    
    deliveryyy:any;
    getDeliveryCost(id: number) {
      this.deliveryService.getDeliveryCost(id).subscribe(
        cost => {
          const deliveryyy = this.deliveriess.find(d => d.id === id);
          deliveryyy.cost = cost;
          deliveryyy.showCost = true;
        }
      );
    }
    filterText: string = '';
    deliveri: Observable<Delivery[]>;
    filterDeliveries() {
      if (this.filterText) {
        return this.deliveri.pipe(
          map(deliveri => deliveri.filter(delivery => {
            return delivery.address.toLowerCase().includes(this.filterText.toLowerCase()) ||
              delivery.size.toString().toLowerCase().includes(this.filterText.toLowerCase()) ||
              delivery.deliveryState.toLowerCase().includes(this.filterText.toLowerCase());
          }))
        );
      } else {
        return this.deliveries;
      }
    }

  

     generatePDF(delivery) {
      const doc = new jspdf();
      
      doc.setLineWidth(0.5);
      doc.setDrawColor('#CCCCCC'); // Couleur de la bordure en gris clair
      doc.rect(0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height);
      

      // Ajouter une couleur de fond pour l'en-tête
      doc.setFillColor('#008080');
      doc.rect(0, 0, 210, 40, 'F');
    
      // Ajouter un logo en haut à gauche
      const logo = new Image();
      logo.src = '../../../assets/img/logo.png';
      doc.addImage(logo, 'PNG', 10, 5, 30, 30);
    
      // Ajouter un titre centré en haut de page
      doc.setFontSize(22);
      doc.setTextColor('#FFFFFF');
      doc.setFont('Helvetica', 'bold');
      doc.text('Reçu de livraison', 105, 30, { align: 'center' });
    
      // Ajouter les informations de la livraison
      doc.setFontSize(14);
      doc.setFont('Helvetica', 'normal');
      doc.setTextColor('#34495E');
    
      doc.text(`Adresse : ${delivery.address}`, 20, 70);
      doc.text(`Taille : ${delivery.size}`, 20, 80);
      doc.text(`Total HT : ${delivery.totalHT} €`, 20, 90);
      doc.text(`Total TTC : ${delivery.totalTTC} €`, 20, 100);
      doc.text(`Prix unitaire : ${delivery.unitPrice} €`, 20, 110);
      doc.text(`TVA : ${delivery.tva}%`, 20, 120);
      doc.text(`État de livraison : ${delivery.deliveryState}`, 20, 130);
      doc.text(`Heure de livraison prévue : ${delivery.scheduledDeliveryTime}`, 20, 140);
      doc.text(`Heure de livraison réelle : ${delivery.actualDeliveryTime}`, 20, 150);
      doc.text(`Distance : ${delivery.distance} km`, 20, 160);
      doc.text(`Poids : ${delivery.weight} kg`, 20, 170);
      doc.text(`Vitesse : ${delivery.speed} km/h`, 20, 180);
      doc.text(`Confirmation de signature : ${delivery.signatureConfirmation ? 'Oui' : 'Non'}`, 20, 190);
      doc.text(`Assurance : ${delivery.insurance ? 'Oui' : 'Non'}`, 20, 200);
      // Ajouter l'image à droite des informations de livraison
  const im = new Image();
  im.src = '../../../assets/img/deliveryy.PNG';
  doc.addImage(im, 'PNG', 120, 70, 60, 60);

 
      // Ajouter une image en bas de page
      const img = new Image();
      img.src = '../../../assets/img/signature.PNG';
      doc.addImage(img, 'PNG', 10, 250, 190, 40);
    
      // Enregistrer le PDF avec la méthode doc.save()
      doc.save('livraison.pdf');
    }
    deliveries: any;
    searchTotalHT:any;
    searchDistance: number;
  searchWeight: number;
  searchSize: number;
  searchSpeed: string;
  searchRating: number;
  searchSignatureConfirmation: any;
  searchAddress:any;
  searchTotalTTC:any;
  searchDeliveryState:any;
  searchUnitPrice:any;
  searchTVA:any;
  searchScheduledDeliveryTim:any;
  delivery:any;
  searchText: string;
  searchDeliveries() {
    const distance = this.delivery.distance;
    const weight = this.delivery.weight;
  
    const params = new HttpParams()
      .set('distance', distance.toString())
      .set('weight', weight.toString());
  
    this.http.get<Delivery[]>('/api/deliveries', { params })
      .subscribe(deliveries => {
        this.deliveries = deliveries;
      });
  }
  
  searchTerm: string = '';
    searchScheduledDeliveryTime:any;
    searchInsurance:any;
    searchActualDeliveryTime:any;
    deliveriesss: Delivery[] = [];
displayedDeliveries: Delivery[] = [];

 }

