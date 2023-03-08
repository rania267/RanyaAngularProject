package com.example.pi_project.controllers;

import com.example.pi_project.entities.CustomerReview;
import com.example.pi_project.entities.ProductRating;
import com.example.pi_project.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
@RestController
@RequestMapping("/reviews")
public class ReviewController {
    @Autowired
    ReviewRepository reviewRepository;
    //http://localhost:8081/reviews/reviews
    @GetMapping("/reviews")
    public List<CustomerReview> getReviews() {
        List<CustomerReview> reviews = reviewRepository.findAll();

        // Analyze the reviews and filter out the bad ones
        List<CustomerReview> badReviews = reviews.stream()
                .filter(review -> review.getDeliveryExperience() != null)
                .filter(review -> review.getDeliveryExperience().getDeliveryTime() > 60)
                .filter(review -> review.getDeliveryExperience().getDeliveryPerson() == null || review.getDeliveryExperience().getDeliveryPerson().isRude())
                .filter(review -> review.getDeliveryExperience().getDeliveryPackage() == null || review.getDeliveryExperience().getDeliveryPackage().isDamaged())
                .collect(Collectors.toList());

        // Sort the good reviews by rating in descending order
        List<CustomerReview> goodReviews = reviews.stream()
                .filter(review -> !badReviews.contains(review))
                .sorted(Comparator.comparing(CustomerReview::getRating).reversed())
                .collect(Collectors.toList());

        // Group the good reviews by product name
        Map<String, List<CustomerReview>> reviewsByProduct = goodReviews.stream()
                .collect(Collectors.groupingBy(CustomerReview::getProductName));

        // Filter out products with less than 5 reviews and sort the remaining products by average rating
        List<ProductRating> productRatings = reviewsByProduct.entrySet().stream()
                .filter(entry -> entry.getValue().size() >= 5)
                .map(entry -> {
                    String productName = entry.getKey();
                    double averageRating = entry.getValue().stream()
                            .mapToDouble(CustomerReview::getRating)
                            .average()
                            .orElse(0);
                    return new ProductRating(productName, averageRating);
                })
                .sorted(Comparator.comparing(ProductRating::getAverageRating).reversed())
                .collect(Collectors.toList());

        return goodReviews;
    }

}
