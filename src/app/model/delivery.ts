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

    
   
    
    calculateDeliveryCost(): number {
    let baseCost = this.distance * this.weight * this.size;
    let speedMultiplier = 1.0;
    if (this.speed === 'express') {
    speedMultiplier = 1.5;
    } else if (this.speed === 'priority') {
    speedMultiplier = 2.0;
    }
    let additionalServicesCost = 0.0;
    if (this.signatureConfirmation) {
    additionalServicesCost += 5.0;
    }
    if (this.insurance) {
    additionalServicesCost += this.weight * 0.01;
    }
    let totalCost = baseCost * speedMultiplier + additionalServicesCost;
    return totalCost;
    }
    
    getDeliveryTime(): number {
    if (this.actualDeliveryTime == null) {
    return 0;
    } else {
    let diff = this.actualDeliveryTime.getTime() - this.scheduledDeliveryTime.getTime();
    return Math.floor(diff / (1000 * 60));
    }
    }
  
    }
    export enum State {
        RECEIVED = 'received',
        CANCELLED = 'cancelled',
        RETURNED = 'returned'
      }