export class DeliveryPerson {
    id: number;
    name: string;
    email: string;
    phone: string;
    averageDeliveryTime: number;
    averageDistance: number;
    averageCustomerSatisfaction: number;
    deliveryExperiences: DeliveryExperience[];
    isRude: boolean;
    image: string;
    getAverageCustomerSatisfactionRating(): number {
      let averageRating = 0.0;
      let count = 0;
  
      for (const experience of this.deliveryExperiences) {
        if (experience.customerSatisfaction !== 0) {
          averageRating += experience.customerSatisfaction;
          count++;
        }
      }
  
      if (count > 0) {
        return averageRating / count;
      } else {
        return 0.0;
      }
    }
  }
  
  export class DeliveryExperience {
    id: number;
    deliveryPersonId: number;
    customerId: number;
    deliveryStartTime: string;
    deliveryEndTime: string;
    distance: number;
    customerSatisfaction: number;
  }
   