package com.example.pi_project.services;

import com.example.pi_project.entities.DeliveryAddress;
import com.example.pi_project.entities.DriverLocation;

public interface DistanceService {
    public double calculateDistance(double startLat, double startLong, double driverLocationLat, double driverLocationLong);
}
