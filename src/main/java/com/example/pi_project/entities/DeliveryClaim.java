package com.example.pi_project.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DeliveryClaim implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "delivery_details_id")
    private DeliveryDetails deliveryDetails;
        private String claimReason;
        private double claimAmount;
        private boolean urgent;

        public DeliveryDetails getDeliveryDetails() {
            return deliveryDetails;
        }

        public void setDeliveryDetails(DeliveryDetails deliveryDetails) {
            this.deliveryDetails = deliveryDetails;
        }

        public String getClaimReason() {
            return claimReason;
        }

        public void setClaimReason(String claimReason) {
            this.claimReason = claimReason;
        }

        public double getClaimAmount() {
            return claimAmount;
        }

        public void setClaimAmount(double claimAmount) {
            this.claimAmount = claimAmount;
        }

        public boolean isUrgent() {
            return urgent;
        }

        public void setUrgent(boolean urgent) {
            this.urgent = urgent;
        }

    }


