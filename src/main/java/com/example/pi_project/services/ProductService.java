package com.example.pi_project.services;



import com.example.pi_project.entities.Product;

import java.math.BigDecimal;
import java.util.List;

public interface ProductService {

    public List<Product> getAllProducts();

    public Product addProduct(Product product);
    public List<Product> search(String keyword, BigDecimal minPrice, BigDecimal maxPrice);

    public Product updateProduct(Product product);
    public void deleteProduct(int idProduct);
    public void RateProduct(Product product, int rating, int id );

}
