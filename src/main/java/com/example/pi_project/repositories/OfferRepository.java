package com.example.pi_project.repositories;

import com.example.pi_project.entities.Offer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OfferRepository extends JpaRepository<Offer,Integer>{

    List<Offer> findTop3ByArchivedOrderByNbLikeOfferDesc(boolean archived);
    List<Offer> findByArchived(boolean archived);
}
