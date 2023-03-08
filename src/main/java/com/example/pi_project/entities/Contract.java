package com.example.pi_project.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Contract implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String contractInformation;
    @Temporal(TemporalType.DATE)
    private Date creation_date;
    @Temporal(TemporalType.DATE)
    private Date expiration_date;
private String option;
        private String name;
        private double price;
        private int duration; // in minutes
        private double distance; // in kilometers

        // Constructor
        public Contract(int id, String name, double price, int duration, double distance) {
            this.id = id;
            this.name = name;
            this.price = price;
            this.duration = duration;
            this.distance = distance;
        }

        // Getters and setters
        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public double getPrice() {
            return price;
        }

        public void setPrice(double price) {
            this.price = price;
        }

        public int getDuration() {
            return duration;
        }

        public void setDuration(int duration) {
            this.duration = duration;
        }

        public double getDistance() {
            return distance;
        }

        public void setDistance(double distance) {
            this.distance = distance;
        }

@OneToOne(mappedBy = "contract" , cascade = CascadeType.ALL)
@JsonIgnore
private  Delivery delivery;
    @ManyToMany(  cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JsonIgnore
    private Set<Provider> providers;








}
