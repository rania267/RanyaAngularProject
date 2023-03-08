package com.example.pi_project.repositories;

import com.example.pi_project.entities.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account,Integer> {
   Account findByUsername(String username);
}
