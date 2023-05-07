import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { DeliveryService } from '../services/delivery.service';
import { parseISO, format } from 'date-fns';
import  jspdf from 'jspdf';

import 'jspdf-autotable';


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
  delivery:any;
  deliveries: any;
  totalCost!: number;
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
    getDeliveryCost(id: number) {
      this.deliveryService.getDeliveryCost(id).subscribe(
        cost => {
          const delivery = this.deliveries.find(d => d.id === id);
          delivery.cost = cost;
          delivery.showCost = true;
        }
      );
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
    
      
 }

