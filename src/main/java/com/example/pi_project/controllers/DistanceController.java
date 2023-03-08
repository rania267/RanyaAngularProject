package com.example.pi_project.controllers;

import com.example.pi_project.entities.DeliveryAddress;
import com.example.pi_project.entities.DriverLocation;
import com.example.pi_project.services.DistanceService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/distance")
public class DistanceController {


        private final DistanceService distanceService;

        public DistanceController(DistanceService distanceService) {
            this.distanceService = distanceService;
        }
//http://localhost:8081/distance/getdistance?deliveryAddressLat=2222.29&deliveryAddressLong=419.42&driverLocationLat=21.7749&driverLocationLong=4191.422
    @GetMapping("/getdistance")
    public double getDistance(@RequestParam double deliveryAddressLat, @RequestParam double deliveryAddressLong,
                              @RequestParam double driverLocationLat, @RequestParam double driverLocationLong) {

        return distanceService.calculateDistance( deliveryAddressLat, deliveryAddressLong, driverLocationLat, driverLocationLong);
    }}
