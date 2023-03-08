package com.example.pi_project.repositories;

import com.example.pi_project.entities.Ordeer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrdeerRepository extends JpaRepository<Ordeer,Integer> {
}
