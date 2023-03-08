package com.example.pi_project.repositories;


import com.example.pi_project.entities.DeliveryPerson;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeliveryPersonRepository extends JpaRepository<DeliveryPerson, Long> {
    DeliveryPerson findByName(String deliveryPerson);
}
