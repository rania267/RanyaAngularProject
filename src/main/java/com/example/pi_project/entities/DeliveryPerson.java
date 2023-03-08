package com.example.pi_project.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DeliveryPerson implements Serializable {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        private String name;
        private String email;
        private String phone;
        private double averageDeliveryTime;
        private double averageDistance;
        private double averageCustomerSatisfaction;
        @OneToMany(mappedBy = "deliveryPerson", cascade = CascadeType.ALL, orphanRemoval = true)
        @JsonIgnore
        private List<DeliveryExperience> deliveryExperiences;
        public List<DeliveryExperience> getDeliveryExperiences() {
                return this.deliveryExperiences;
        }
        public double getAverageCustomerSatisfactionRating() {
                List<DeliveryExperience> deliveryExperiences = this.getDeliveryExperiences();
                double averageRating = 0.0;
                int count = 0;

                for (DeliveryExperience experience : this.getDeliveryExperiences()) {
                        if (experience.getCustomerSatisfaction() != 0) {
                                averageRating += experience.getCustomerSatisfaction();
                                count++;
                        }
                }

                if (count > 0) {
                        return averageRating / count;
               } else {
                      return 0.0;
                }
        }

        private boolean isRude;

        public boolean isRude() {
                return isRude;
        }

        public void setRude(boolean isRude) {
                this.isRude = isRude;
        }
}




