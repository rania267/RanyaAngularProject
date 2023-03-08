package com.example.pi_project.services;

import com.example.pi_project.entities.Delivery;
import com.example.pi_project.entities.DeliveryPerson;
import com.example.pi_project.repositories.DeliveryPersonRepository;
import com.example.pi_project.repositories.DeliveryRepository;
import lombok.Value;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.time.LocalDateTime;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Service
public class DeliveryService implements IDeliveryService{
    @Autowired
    private DeliveryPersonRepository deliveryPersonRepository;

        @Autowired
        private DeliveryRepository deliveryRepository;
@Override
        public Delivery saveDelivery(Delivery delivery) {
            return deliveryRepository.save(delivery);
        }


    // Method to calculate delivery cost for a given delivery
    @Override
    public double calculateDeliveryCost(int id) {
        Optional<Delivery> optionalDelivery = deliveryRepository.findById(id);
        if (optionalDelivery.isPresent()) {
            Delivery delivery = optionalDelivery.get();
            return delivery.calculateDeliveryCost();
        }
        return 0.0;
    }

    //a method to get the top 2 ranked delivery persons based on their customer satisfaction rating
    @Override
    public List<DeliveryPerson> getTop2RankedDeliveryPersons() {
        List<DeliveryPerson> deliveryPersons = deliveryPersonRepository.findAll();
        Collections.sort(deliveryPersons, new Comparator<DeliveryPerson>() {
            @Override
            public int compare(DeliveryPerson o1, DeliveryPerson o2) {
                double rating1 = o1.getAverageCustomerSatisfactionRating();
                double rating2 = o2.getAverageCustomerSatisfactionRating();
                return Double.compare(rating2, rating1);
            }
        });
        return deliveryPersons.subList(0, Math.min(deliveryPersons.size(), 2));
    }

    }






