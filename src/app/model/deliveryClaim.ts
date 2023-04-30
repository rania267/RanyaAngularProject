// delivery-claim.interface.ts
export class DeliveryClaim {
    id: number;
    orderId: number;
    deliveryAddress: string;
    deliveryItems: DeliveryItem[];
    late: boolean;
    claimReason: string;
    claimAmount: number;
  }
  
  export class DeliveryItem {
    id: number;
    name: string;
    missing: boolean;
    damaged: boolean;
    deliveryLocation: string;
    dateRequest: string;
    deliveryTime: number;
  }
  