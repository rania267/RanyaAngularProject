package com.example.pi_project.repositories;


import com.example.pi_project.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProductRepository extends JpaRepository<Product,Integer> {
}




