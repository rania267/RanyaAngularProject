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
public class PiRestController {
    @Autowired
    IPiService piService;


    @GetMapping("/AllContracts")
    @ResponseBody
    public List<Contract> getAllContracts(){
        return piService.getAllContracts();
    }
    @GetMapping("/getContractById/{id}")
    @ResponseBody
    public Contract getContractById(@PathVariable("id")int id){
        return piService.getContractById(id);
    }

    @GetMapping("/getDeliveryById/{id}")
@ResponseBody
public Delivery getDeliveryById(@PathVariable("id")int id){
    return piService.getDeliveryById(id);
}
    @GetMapping("/AllDeliveries")
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
    @PostMapping("/addDelivery")
    @ResponseBody
    public Delivery addDelivery (@RequestBody Delivery delivery) {
        return piService.addDelivery(delivery);
    }
    @PostMapping("/addContract")
    public Contract addContract (@RequestBody Contract contract) {
        return piService.addContract(contract);
    }
    @PutMapping("/updateDelivery")
    @ResponseBody
    public Delivery updateDelivery(@RequestBody Delivery delivery){
        return piService.updateDelivery(delivery);
    }
    @PutMapping("/updateContract")
    @ResponseBody
    public Contract updateContract(@RequestBody Contract contract){
        return piService.updateContract(contract);
    }
    @DeleteMapping("/deleteDelivery/{id}")
    @ResponseBody
    public void deleteDelivery(@PathVariable("id")int id){
        piService.deleteDelivery(id);
    }


    @DeleteMapping("/deleteContract/{id}")
    @ResponseBody
    public void deleteContract(@PathVariable("id")int id){
        piService.deleteContract(id);
    }
    @PostMapping("/addOrder")
    @ResponseBody
    public Ordeer addOrder(@RequestBody Ordeer order) {
        return piService.addOrder(order);
    }
    @PutMapping("/updateOrder")
    @ResponseBody
    public Ordeer updateOrder(@RequestBody Ordeer order ){
        return piService.updateOrder(order);
    }
    @DeleteMapping("/deleteOrder/{id}")
    @ResponseBody
    public void deleteOrder(@PathVariable("id")int id){
        piService.deleteOrder(id);
    }
    @GetMapping("/AllOrder")
    @ResponseBody
    public List<Ordeer> getAllOrder(){
        return piService.getAllOrder();
    }


   @Autowired
   private DeliveryService deliveryService;


}



