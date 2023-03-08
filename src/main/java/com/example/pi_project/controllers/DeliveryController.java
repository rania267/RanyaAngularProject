package com.example.pi_project.controllers;


import com.example.pi_project.entities.Delivery;
import com.example.pi_project.entities.DeliveryPerson;
import com.example.pi_project.entities.Product;
import com.example.pi_project.repositories.DeliveryRepository;
import com.example.pi_project.services.DeliveryService;
import com.example.pi_project.services.IDeliveryService;
import com.example.pi_project.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.Month;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
    @RequestMapping("/deliveries")
    public class DeliveryController {

    // Inject the DeliveryRepository to access and manage delivery data
    @Autowired
    IDeliveryService deliveryService;

    @Autowired
    ProductService productService;
    @Autowired
    private DeliveryRepository deliveryRepository;

    // calculate the on-time rating and overall rating using separate methods + return the average of the rating
    //http://localhost:8081/deliveries/rating/average/complex
    @GetMapping("/rating/average/complex")
    public double getComplexRatingAverage() {
        List<Delivery> deliveries = deliveryRepository.findAll();
        double sum = 0;
        int count = 0;
        for (Delivery delivery : deliveries) {
            if (delivery.getRating() > 0) {
                double onTimeRating = calculateOnTimeRating(delivery);
                double overallRating = calculateOverallRating(delivery);
                double complexRating = (onTimeRating + overallRating) / 2.0;
                sum += complexRating;
                count++;
            }
        }
        return (count > 0) ? sum / count : 0;
    }

    private double calculateOnTimeRating(Delivery delivery) {
        double onTimeRating = 0;
        if (delivery.getScheduledDeliveryTime() != null) {
            long scheduledTime = delivery.getScheduledDeliveryTime().getTime();
            long deliveryTime = delivery.getDeliveryTime();
            int minutesLate = (int) ((deliveryTime - scheduledTime) / (1000 * 60));
            if (minutesLate <= 0) {
                onTimeRating = 1.0;
            } else if (minutesLate <= 30) {
                onTimeRating = 0.75;
            } else if (minutesLate <= 60) {
                onTimeRating = 0.5;
            } else {
                onTimeRating = 0.25;
            }
        }
        return onTimeRating;
    }

    private double calculateOverallRating(Delivery delivery) {

        return delivery.getRating();
    }

    // Endpoint to calculate delivery cost for a given delivery
    //http://localhost:8081/deliveries/2/cost
    @GetMapping("/{id}/cost")
    public double calculateDeliveryCost(@PathVariable("id") int id) {
        return deliveryService.calculateDeliveryCost(id);
    }

    //http://localhost:8081/deliveries/deliverypersons/top2ranked
    @GetMapping("/deliverypersons/top2ranked")
    public List<DeliveryPerson> getTop2RankedDeliveryPersons() {
        return deliveryService.getTop2RankedDeliveryPersons();
    }

    @GetMapping("/deliveryDate")
    public ResponseEntity<LocalDate> calculateDeliveryDate(
            @RequestParam("product") String productName,
            @RequestParam("quantity") int quantity) {

        // Suppose que les produits sont disponibles immédiatement
        LocalDate deliveryDate = LocalDate.now();

        // Ajoute des jours supplémentaires de traitement et de livraison en fonction de la quantité
        if (quantity <= 10) {
            deliveryDate = deliveryDate.plusDays(1);
        } else if (quantity <= 50) {
            deliveryDate = deliveryDate.plusDays(3);
        } else {
            deliveryDate = deliveryDate.plusDays(7);
        }

        // Exclut les week-ends et les jours fériés
        while (deliveryDate.getDayOfWeek() == DayOfWeek.SATURDAY ||
                deliveryDate.getDayOfWeek() == DayOfWeek.SUNDAY ||
                isHoliday(deliveryDate)) {
            deliveryDate = deliveryDate.plusDays(1);
        }

        return ResponseEntity.ok(deliveryDate);
    }

    private boolean isHoliday(LocalDate date) {
        // Liste des jours fériés (exemple)
        List<LocalDate> holidays = Arrays.asList(
                LocalDate.of(date.getYear(), Month.JANUARY, 1), // Nouvel An
                LocalDate.of(date.getYear(), Month.MAY, 1), // Fête du Travail
                LocalDate.of(date.getYear(), Month.MARCH, 20) // Fête de l'Indépendance
        );

        // Vérifie si la date correspond à un jour férié
        return holidays.contains(date);
    }}

    public List<Delivery> searchDeliveries(String address, Double distance, Double weight, Double size) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Delivery> query = cb.createQuery(Delivery.class);
        Root<Delivery> deliveryRoot = query.from(Delivery.class);

        List<Predicate> predicates = new ArrayList<>();
        if (address != null) {
            predicates.add(cb.like(deliveryRoot.get("address"), "%" + address + "%"));
        }
        if (distance != null) {
            predicates.add(cb.equal(deliveryRoot.get("distance"), distance));
        }
        if (weight != null) {
            predicates.add(cb.equal(deliveryRoot.get("weight"), weight));
        }
        if (size != null) {
            predicates.add(cb.equal(deliveryRoot.get("size"), size));
        }

        query.select(deliveryRoot).where(predicates.toArray(new Predicate[]{}));
        return entityManager.createQuery(query).getResultList();
    }


/*
        @Autowired
        private DeliveryService deliveryService;

        @GetMapping("/slow-drivers")
        public ResponseEntity<List<String>> getSlowDrivers() {
            List<String> slowDrivers = deliveryService.identifySlowDrivers();
            if (slowDrivers.isEmpty()) {
                return ResponseEntity.noContent().build();
            } else {
                return ResponseEntity.ok(slowDrivers);
            }
        }
    }



        @Autowired
        private DeliveryDAO deliveryDAO;

        public List<String> identifySlowDrivers() {
            List<Delivery> deliveries = deliveryDAO.getAllDeliveries();

            // Calculate average delivery time for each driver
            Map<String, Double> averageDeliveryTimes = new HashMap<>();
            for (Delivery delivery : deliveries) {
                if (!averageDeliveryTimes.containsKey(delivery.getDriverName())) {
                    averageDeliveryTimes.put(delivery.getDriverName(), new DescriptiveStatistics());
                }
                double deliveryTime = delivery.getDeliveryDate().getTime() - delivery.getPickupDate().getTime();
                averageDeliveryTimes.get(delivery.getDriverName()).addValue(deliveryTime);
            }

            // Identify drivers with significantly slower delivery times
            List<String> slowDrivers = new ArrayList<>();
            for (String driverName : averageDeliveryTimes.keySet()) {
                DescriptiveStatistics stats = averageDeliveryTimes.get(driverName);
                double mean = stats.getMean();
                double sd = stats.getStandardDeviation();
                double threshold = mean + (2 * sd); // set threshold at two standard deviations from mean
                double maxDeliveryTime = stats.getMax();
                if (maxDeliveryTime > threshold) {
                    slowDrivers.add(driverName);
                }
            }

            return slowDrivers;
        }
    }




 */
