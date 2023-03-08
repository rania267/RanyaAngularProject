package com.example.pi_project.repositories;

import com.example.pi_project.entities.Provider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.io.Serializable;
@Repository
public interface ProviderRepository extends JpaRepository<Provider,Integer> {

}
