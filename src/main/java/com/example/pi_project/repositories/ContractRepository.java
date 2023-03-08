package com.example.pi_project.repositories;

import com.example.pi_project.entities.Contract;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContractRepository extends JpaRepository<Contract,Integer> {
}
