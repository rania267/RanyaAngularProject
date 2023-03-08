package com.example.pi_project.services;

import com.example.pi_project.entities.DeliveryClaim;
import com.example.pi_project.entities.DeliveryDetails;
import com.example.pi_project.entities.DeliveryRequest;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class DeliveryClaimService {

        private static final double ITEM_MISSING_AMOUNT = 10.0;
        private static final double ITEM_DAMAGED_AMOUNT = 20.0;
        private static final double LATE_DELIVERY_AMOUNT = 5.0;
        private static final double URGENT_DELIVERY_AMOUNT = 15.0;


        public DeliveryClaim autoClaim(DeliveryDetails deliveryDetails, boolean isUrgent) {
            DeliveryClaim deliveryClaim = new DeliveryClaim();
            deliveryClaim.setDeliveryDetails(deliveryDetails);
            List<DeliveryRequest> deliveryItems = deliveryDetails.getDeliveryItems();
            double claimAmount = 0.0;
            StringBuilder claimReasonBuilder = new StringBuilder();
            for (DeliveryRequest item : deliveryItems) {
                if (item.isMissing()) {
                    claimAmount += ITEM_MISSING_AMOUNT;
                    claimReasonBuilder.append("Missing item: ").append(item.getName()).append(", ");
                } else if (item.isDamaged()) {
                    claimAmount += ITEM_DAMAGED_AMOUNT;
                    claimReasonBuilder.append("Damaged item: ").append(item.getName()).append(", ");
                }
            }
            if (deliveryDetails.isLate()) {
                claimAmount += LATE_DELIVERY_AMOUNT;
                claimReasonBuilder.append("Late delivery, ");
            }
            if (isUrgent) {
                claimAmount += URGENT_DELIVERY_AMOUNT;
                claimReasonBuilder.append("Urgent delivery, ");
            }
            if (claimAmount == 0.0) {
                return null;
            }
            String claimReason = claimReasonBuilder.toString().substring(0, claimReasonBuilder.length() - 2);
            deliveryClaim.setClaimReason(claimReason);
            deliveryClaim.setClaimAmount(claimAmount);
            return deliveryClaim;
        }
    }













