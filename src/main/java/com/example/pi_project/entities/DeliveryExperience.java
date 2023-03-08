package com.example.pi_project.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.Pattern;
import java.io.Serializable;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@AllArgsConstructor
@Getter
@Setter
@ToString
@Entity
public class DeliveryExperience implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id ;
    private String deliverer;
   String service ;
    @Temporal(TemporalType.TIMESTAMP)
    Date  dateEvaluation ;


    private LocalDateTime plannedDeliveryTime;

    public DeliveryExperience(LocalDateTime plannedDeliveryTime) {
        this.plannedDeliveryTime = plannedDeliveryTime;
    }

    public LocalDateTime getPlannedDeliveryTime() {
        return plannedDeliveryTime;
    }

    public void setPlannedDeliveryTime( LocalDateTime plannedDeliveryTime) {
        this.plannedDeliveryTime = plannedDeliveryTime;
    }

    private LocalDateTime actualDeliveryTime;

    // other fields and methods omitted for brevity

    public LocalDateTime getActualDeliveryTime() {
        return actualDeliveryTime;
    }
    private double distanceTraveled;

    // other properties and methods

    public double getDistanceTraveled() {
        return distanceTraveled;
    }

    public void setDistanceTraveled(double distanceTraveled) {
        this.distanceTraveled = distanceTraveled;
    }

    private int customerSatisfaction;

    public int getCustomerSatisfaction() {
        return customerSatisfaction;
    }

    public void setCustomerSatisfaction(int customerSatisfaction) {
        this.customerSatisfaction = customerSatisfaction;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore

    private DeliveryPerson deliveryPerson;
    private long deliveryTime;

    public DeliveryPerson getDeliveryPerson() {
        return deliveryPerson;
    }

    public void setDeliveryPerson(DeliveryPerson deliveryPerson) {
        this.deliveryPerson = deliveryPerson;
    }

   // public DeliveryExperience( int note) {
    //    this.note = note;

    //}

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore

    private DeliveryRequest deliveryRequest;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore

    private DeliveryPackage deliveryPackage;

}


