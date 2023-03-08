package com.example.pi_project.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Product implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idProduct;
    private  String name;
    private  String description;
    private float price;
    private int  number;
    private double averageRating;
    BigDecimal minPrice;
    BigDecimal maxPrice;
    @ManyToOne
    private Category category;

        private String productName;


        public Product(String productName, double averageRating) {
            this.productName = productName;
            this.averageRating = averageRating;
        }

        // getters and setters
        public String getProductName() {
            return productName;
        }

        public void setProductName(String productName) {
            this.productName = productName;
        }

        public double getAverageRating() {
            return averageRating;
        }

        public void setAverageRating(double averageRating) {
            this.averageRating = averageRating;
        }
    }




