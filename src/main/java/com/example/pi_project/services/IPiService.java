package com.example.pi_project.services;

import com.example.pi_project.entities.*;

import java.util.List;

public interface IPiService {
    public List<Delivery> getAllDeliveries();
    public List<Contract> getAllContracts();
    public Contract getContractById(int id);
    public Delivery addDelivery(Delivery delivery);
    public Contract addContract(Contract contract);
    public void deleteDelivery(int id);
    public Delivery updateDelivery(Delivery delivery);
    public void deleteContract(int id);
    public Contract updateContract(Contract contract);

    public Ordeer addOrder(Ordeer order);
    public void deleteOrder(int id);
    public Ordeer updateOrder(Ordeer order);
    public List<Ordeer> getAllOrder();




    public Delivery getDeliveryById(int id);
    public void deleteProvider(int id);
    public Provider updateProvider(Provider provider);
    public List<Provider> getAllProviders();
    public Provider addProvider(Provider provider);


}
