package com.example.pi_project.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DeliveryDetails implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
        private String orderId;
        private String deliveryAddress;

    @OneToMany(mappedBy = "deliveryDetails", cascade = CascadeType.ALL)
    private List<DeliveryClaim> deliveryClaims;
    @OneToMany(mappedBy = "deliveryDetails", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<DeliveryRequest> deliveryItems = new ArrayList<>();

        private boolean isLate;

        public DeliveryDetails(String orderId, String deliveryAddress, List<DeliveryRequest> deliveryItems) {
            this.orderId = orderId;
            this.deliveryAddress = deliveryAddress;
            this.deliveryItems = deliveryItems;

        }

        public String getOrderId() {
            return orderId;
        }

        public void setOrderId(String orderId) {
            this.orderId = orderId;
        }

        public String getDeliveryAddress() {
            return deliveryAddress;
        }

        public void setDeliveryAddress(String deliveryAddress) {
            this.deliveryAddress = deliveryAddress;
        }

        public List<DeliveryRequest> getDeliveryItems() {
            return deliveryItems;
        }

        public void setDeliveryItems(List<DeliveryRequest> deliveryItems) {
            this.deliveryItems = deliveryItems;
        }

        public boolean isLate() {
            return isLate;
        }

        public void setLate(boolean late) {
            isLate = late;
        }
    }

