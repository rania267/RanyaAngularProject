package com.example.pi_project.services;

import com.example.pi_project.entities.Product;
import com.example.pi_project.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.math.BigDecimal;
import java.util.List;

@Service
public class ProductServiceImp implements ProductService{
    @Autowired
    ProductRepository productRepository;
    @PersistenceContext
    private EntityManager entityManager;
    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public List<Product> search(String keyword, BigDecimal minPrice, BigDecimal maxPrice) {
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Product> query = builder.createQuery(Product.class);
        Root<Product> root = query.from(Product.class);

        Predicate keywordPredicate = builder.or(
                builder.like(root.get("name"), "%" + keyword + "%"),
                builder.like(root.get("description"), "%" + keyword + "%")
        );
        Predicate pricePredicate = builder.between(root.get("price"), minPrice, maxPrice);

        query.where(builder.and(keywordPredicate, pricePredicate));

        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public Product updateProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public void deleteProduct(int idProduct) {
        productRepository.deleteById(idProduct);

    }

    @Override
    public void RateProduct(Product product, int rating, int id) {

    }
}
