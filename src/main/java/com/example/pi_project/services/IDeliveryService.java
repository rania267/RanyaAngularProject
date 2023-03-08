package com.example.pi_project.services;

import com.example.pi_project.entities.Delivery;
import com.example.pi_project.entities.DeliveryPerson;

import java.time.LocalDateTime;
import java.util.List;

public interface IDeliveryService {

    public Delivery saveDelivery(Delivery delivery);
    public double calculateDeliveryCost(int id);
    public List<DeliveryPerson> getTop2RankedDeliveryPersons();


}
