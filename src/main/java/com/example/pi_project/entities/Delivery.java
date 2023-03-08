package com.example.pi_project.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.Set;
import java.util.concurrent.TimeUnit;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Delivery implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
private LocalDateTime deliveryDate;
    private int rating; // range: 1 to 5

    public int getRating() {
        return rating;
    }
    public void calculateOverallRating() {
        // calculate overall rating based on individual ratings
        // and update the rating field
    }
    public void setRating(int rating) {
        this.rating = rating;
    }
    @Column(name = "address")
    private String address;

    private float totalHT;
    private float totalTTC;

    private float unitPrice;
    private float tva;

    @Enumerated(EnumType.STRING)
    private State deliveryState;


        private Date scheduledDeliveryTime;
        private Date actualDeliveryTime;

        // Constructor and other methods

        public Date getActualDeliveryTime() {
            return actualDeliveryTime;
        }

        public void setActualDeliveryTime(Date actualDeliveryTime) {
            this.actualDeliveryTime = actualDeliveryTime;
        }

        //For on time rating
        public Date getScheduledDeliveryTime() {
            return scheduledDeliveryTime;
        }

        public void setScheduledDeliveryTime(Date scheduledDeliveryTime) {
            this.scheduledDeliveryTime = scheduledDeliveryTime;
        }
// for on-time rating
        public long getDeliveryTime() {
            if (actualDeliveryTime == null) {
                return 0;
           } else {
                long diff = actualDeliveryTime.getTime() - scheduledDeliveryTime.getTime();
                return TimeUnit.MILLISECONDS.toMinutes(diff);
            }
       }


    @OneToMany(cascade = CascadeType.ALL,mappedBy = "delivery")
    @JsonIgnore
    private Set<Ordeer> orders;

@OneToOne
    private  Contract contract;

    @ManyToMany(  cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JsonIgnore
    private Set<Provider> providers;
    //Cost


        private double distance;

        private double weight;

        private double size;

        private String speed;

        private boolean signatureConfirmation;

        private boolean insurance;

        // Getters and setters

        // Constructor

        // Default constructor


        // Constructor with parameters
        public Delivery(double distance, double weight, double size, String speed, boolean signatureConfirmation, boolean insurance) {

            this.distance = distance;
            this.weight = weight;
            this.size = size;
            this.speed = speed;
            this.signatureConfirmation = signatureConfirmation;
            this.insurance = insurance;
        }

        //  calculate delivery cost
        public double calculateDeliveryCost() {
            double baseCost = distance * weight * size;
            double speedMultiplier = 1.0;
            if (speed.equals("express")) {
                speedMultiplier = 1.5;
            } else if (speed.equals("priority")) {
                speedMultiplier = 2.0;
            }
            double additionalServicesCost = 0.0;
            if (signatureConfirmation) {
                additionalServicesCost += 5.0;
            }
            if (insurance) {
                additionalServicesCost += weight * 0.01;
            }
            double totalCost = baseCost * speedMultiplier + additionalServicesCost;
            return totalCost;
        }

    }








