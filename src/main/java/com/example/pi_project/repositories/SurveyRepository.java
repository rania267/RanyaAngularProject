package com.example.pi_project.repositories;

import com.example.pi_project.entities.DeliveryPerson;
import com.example.pi_project.entities.Survey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SurveyRepository extends JpaRepository<Survey,Long> {

}
