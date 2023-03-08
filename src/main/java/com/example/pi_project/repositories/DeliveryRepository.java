package com.example.pi_project.repositories;

import com.example.pi_project.entities.Delivery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

@Repository
public interface DeliveryRepository extends JpaRepository<Delivery,Integer> {

}
