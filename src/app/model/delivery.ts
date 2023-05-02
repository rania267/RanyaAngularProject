export class Delivery {
    id!: number;
    rating!: number;
    address!: string;
    totalHT!: number;
    totalTTC!: number;
    unitPrice!: number;
    tva!: number;
    deliveryState!: State;
    scheduledDeliveryTime!: Date;
    actualDeliveryTime!: Date;
 
    distance!: number;
    weight!: number;
  size!: number; 
    speed!: string;
    signatureConfirmation!: boolean;
    insurance!: boolean;

contract:any;
    
   
   
  
    }
    export enum State {
        RECEIVED = 'received',
        CANCELLED = 'cancelled',
        RETURNED = 'returned'
      }