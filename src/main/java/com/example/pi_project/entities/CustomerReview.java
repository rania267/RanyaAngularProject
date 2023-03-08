package com.example.pi_project.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
@Entity

public class CustomerReview implements Serializable {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
    public String getProductName() {
        return product != null ? product.getProductName() : null;
    }

        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "product_id", nullable = false)
        @JsonIgnore
        private ProductRating product;


        @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY, optional = false)
        @JoinColumn(name = "delivery_experience_id", referencedColumnName = "id")
        @JsonIgnore
        private DeliveryExperience deliveryExperience;

        @Column(name = "rating", nullable = false)
        private int rating;

        @Column(name = "comment", length = 500)
        private String comment;

        @Column(name = "created_at", nullable = false)
        private LocalDateTime createdAt;

        public CustomerReview() {
            this.createdAt = LocalDateTime.now();
        }

        public CustomerReview(ProductRating product, String customer, DeliveryExperience deliveryExperience, int rating, String comment) {
            this.product = product;
            this.customer = customer;
            this.deliveryExperience = deliveryExperience;
            this.rating = rating;
            this.comment = comment;
            this.createdAt = LocalDateTime.now();
        }
private String customer;
        // Getters and Setters

        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public ProductRating getProduct() {
            return product;
        }

        public void setProduct(ProductRating product) {
            this.product = product;
        }



        public DeliveryExperience getDeliveryExperience() {
            return deliveryExperience;
        }

        public void setDeliveryExperience(DeliveryExperience deliveryExperience) {
            this.deliveryExperience = deliveryExperience;
        }

        public int getRating() {
            return rating;
        }

        public void setRating(int rating) {
            this.rating = rating;
        }

        public String getComment() {
            return comment;
        }

        public void setComment(String comment) {
            this.comment = comment;
        }

        public LocalDateTime getCreatedAt() {
            return createdAt;
        }

        public void setCreatedAt(LocalDateTime createdAt) {
            this.createdAt = createdAt;
        }
    }


