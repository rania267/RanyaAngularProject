package com.example.pi_project.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DeliveryRequest implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long id;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "delivery_details_id")
    private DeliveryDetails deliveryDetails;

    private String deliveryLocation;


    private Date dateRequest;

    private long deliveryTime;

    // other delivery request attributes and methods
    public DeliveryRequest( long deliveryTime) {



        this.deliveryTime= deliveryTime;

    }
    private String name;
    private boolean missing;
    private boolean damaged;


    public boolean isMissing() {
        return missing;
    }
    public boolean isDamaged() {
        return damaged;
    }

}






