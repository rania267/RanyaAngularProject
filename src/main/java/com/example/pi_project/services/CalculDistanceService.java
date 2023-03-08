package com.example.pi_project.services;

import org.springframework.stereotype.Service;

@Service
public class CalculDistanceService implements DistanceService{

        private final static double EARTH_RADIUS = 6371.0;
    //calculate the distance between the delivery address and the current location of the driver
    @Override
    public double calculateDistance(double deliveryAddressLat, double deliveryAddressLong, double driverLocationLat, double driverLocationLong) {
        double dLat = Math.toRadians(driverLocationLat - deliveryAddressLat);
        double dLong = Math.toRadians(driverLocationLong - deliveryAddressLong);

        deliveryAddressLat = Math.toRadians(deliveryAddressLat);
        driverLocationLat = Math.toRadians(driverLocationLat);
//central angle between the two locations
        double a = haversin(dLat) + Math.cos(deliveryAddressLat) * Math.cos(driverLocationLat) * haversin(dLong);
        //distance between the two locations on the surface of the Earth
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//distance in kilometers
        return EARTH_RADIUS * c;
    }

    private static double haversin(double val) {
        return Math.pow(Math.sin(val / 2), 2);
    }
        }


