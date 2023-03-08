package com.example.pi_project.controllers;

import com.example.pi_project.entities.*;
import com.example.pi_project.repositories.DeliveryClaimRepository;
import com.example.pi_project.services.DeliveryClaimService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/deliveryClaim")
public class DeliveryClaimController {
    @Autowired
    DeliveryClaimService deliveryClaimService;
     @Autowired
    DeliveryClaimRepository deliveryClaimRepository;
    //http://localhost:8081/deliveryClaim/claim?isUrgent=false
  /*
     {
      "id": 3,
        "orderId": 1,
            "deliveryAddress": "123 Main St",
            "deliveryItems": [
        {
            "id":1,
            "name": "Widget",
                "missing": true,
                "damaged": false,

                "deliveryLocation": "Ariana",
                "dateRequest": "2022-03-01",
                "deliveryTime": 13.30
        },
        {
            "id":2,
            "name": "Gadget",
                "missing": false,
                "damaged": true,
                   "deliveryLocation": "Ariana",
                "dateRequest": "2022-03-01",
                "deliveryTime": 14.30
        }
    ],
        "late": false
    }
    */

        @PostMapping("/claim")
        public ResponseEntity<DeliveryClaim> createDeliveryClaim(@RequestBody DeliveryDetails deliveryDetails,
                                                                 @RequestParam(defaultValue = "false") boolean isUrgent) {
            DeliveryClaim claim = deliveryClaimService.autoClaim(deliveryDetails, isUrgent);

            if (claim == null) {
                return ResponseEntity.badRequest().build();
            }
            deliveryClaimRepository.save(claim);
            return ResponseEntity.ok(claim);


        }

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

















