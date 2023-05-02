import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { DeliveryService } from '../services/delivery.service';
import { parseISO, format } from 'date-fns';
import jspdf from 'jspdf';
import { Delivery } from '../model/delivery';
@Component({
  selector: 'app-delivery-front',
  templateUrl: './delivery-front.component.html',
  styleUrls: ['./delivery-front.component.css']
})
export class DeliveryFrontComponent implements OnInit {
 
  deliveries: any;
  constructor(private deliveryService: DeliveryService,
    private router: Router,private http: HttpClient) { 
     
        
   
    }

    ngOnInit():void  {
      
 
   
      this.deliveries = this.deliveryService.getDeliveriesList();
     
  
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
