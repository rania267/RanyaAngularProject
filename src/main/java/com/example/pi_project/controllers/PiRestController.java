package com.example.pi_project.controllers;

import com.example.pi_project.entities.*;
import com.example.pi_project.repositories.DeliveryExperienceRepository;
import com.example.pi_project.services.DeliveryService;
import com.example.pi_project.services.IPiService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/")
public class PiRestController {
    @Autowired
    IPiService piService;




    @GetMapping("/deliveries/{id}")
@ResponseBody
public Delivery getDeliveryById(@PathVariable("id")int id){
    return piService.getDeliveryById(id);
}
    @GetMapping("/deliveries")
    @ResponseBody
    public List<Delivery> getAllDeliveries(){
        return piService.getAllDeliveries();
    }
    //http://localhost:8081/addDelivery
    /*{ "address":" Sousse Tunisie",
            "unitPrice":113.122,
            "speed":"express",
            "size":12.3,
            "deliveryState":"received",
            "totalHT":133.12
    }
    */
    @PostMapping("/deliveries/addDelivery")
    @ResponseBody
    public Delivery addDelivery (@RequestBody Delivery delivery) {
        return piService.addDelivery(delivery);
    }

    @PutMapping("/deliveries")
    @ResponseBody
    public Delivery updateDelivery(@RequestBody Delivery delivery){
        return piService.updateDelivery(delivery);
    }

    @DeleteMapping("/deliveries/{id}")
    @ResponseBody
    public void deleteDelivery(@PathVariable("id")int id){
        piService.deleteDelivery(id);
    }





   @Autowired
   private DeliveryService deliveryService;


}



