package com.example.pi_project.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DeliveryPackage implements Serializable {
    private long deliveryTime;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long id;
    public boolean isMissing() {
        return missing;
    }
    public boolean isDamaged() {
        return damaged;
    }
    private boolean missing;
    private boolean damaged;
}
