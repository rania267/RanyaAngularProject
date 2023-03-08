package com.example.pi_project.repositories;

import com.example.pi_project.entities.DeliveryClaim;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeliveryClaimRepository extends JpaRepository<DeliveryClaim,Integer> {
}
