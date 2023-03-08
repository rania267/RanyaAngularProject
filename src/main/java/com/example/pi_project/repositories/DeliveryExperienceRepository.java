package com.example.pi_project.repositories;


import com.example.pi_project.entities.DeliveryExperience;
import com.example.pi_project.entities.DeliveryPerson;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DeliveryExperienceRepository extends JpaRepository<DeliveryExperience, Long > {
   // @Query("SELECT new com.example.pi_project.dto.RatingDto(g.deliverer) FROM DeliveryExperience g WHERE g.deliverer= ?1")
    //List<RatingDto> findByRating(String deliverer);
    //@Query("SELECT e FROM DeliveryExperience e where e.note=? 1")
    //@Query("SELECT new com.example.pi_project.entities.DeliveryExperience(g.note) FROM DeliveryExperience g WHERE g.note= ?1")
    //List<DeliveryExperience> findTop2ByOrderByRatingsAsc();
   // public List<DeliveryExperience> getAllDeliveryExperiences();
   // public List<DeliveryExperience> retrieveRatings();
   // public List<DeliveryExperience>  retrieveSumRatings();
   List<DeliveryExperience> findByDeliveryPerson(DeliveryPerson deliveryPerson);
}
