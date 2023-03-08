package com.example.pi_project.services;

import com.example.pi_project.entities.*;
import com.example.pi_project.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class PiServiceImpl implements IPiService , UserDetailsService {
    @Autowired
    DeliveryRepository deliveryRepository;
    @Autowired
    ContractRepository contractRepository;
    @Override
    public List<Delivery> getAllDeliveries() {
        return deliveryRepository.findAll();
    }
    @Override
    public List<Contract> getAllContracts() {
        return contractRepository.findAll();
    }
    @Override
    public Contract getContractById(int id) {
        return contractRepository.findById(id).orElse(null);
    }

    @Override
    public Delivery getDeliveryById(int id) {
        return deliveryRepository.findById(id).orElse(null);
    }


    @Override
    public Delivery addDelivery(Delivery delivery) {
       return  deliveryRepository.save(delivery);

    }

    @Override
    public Contract addContract(Contract contract) {
        return contractRepository.save(contract);
    }

    @Override
    public void deleteDelivery(int id)  {
        deliveryRepository.deleteById(id);
    }

    @Override
    public Contract updateContract(Contract contract) {
        return contractRepository.save(contract);
    }



    @Override
    public void deleteContract(int id) {
        contractRepository.deleteById(id);
    }
    @Override
    public Delivery updateDelivery(Delivery delivery) {
        return deliveryRepository.save(delivery);
    }
    @Autowired
    AccountRepository accountRepository;
    @Autowired
    DeliveryExperienceRepository  deliveryExperienceRepository;



    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account account = accountRepository.findByUsername(username);

        Collection<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(account.getUser().getRole().getType().name()));
        return new org.springframework.security.core.userdetails.User(account.getUsername(), account.getPassword(), authorities);
    }
    @Autowired
    OrdeerRepository orderRepository;

    @Override
    public Ordeer addOrder(Ordeer order) {
        return orderRepository.save(order);
    }

    @Override
    public void deleteOrder(int id) {
        orderRepository.deleteById(id);
    }

    @Override
    public Ordeer updateOrder(Ordeer order) {
        return orderRepository.save(order);
    }

    @Override
    public List<Ordeer> getAllOrder() {
        return orderRepository.findAll();
    }

    @Autowired
    ProviderRepository providerRepository;


    @Override
    public Provider updateProvider(Provider provider) {
        return providerRepository.save(provider);
    }

    @Override
    public void deleteProvider(int id) {
        providerRepository.deleteById(id);
    }
    @Override
    public List<Provider> getAllProviders() {
        return providerRepository.findAll();
    }

    @Override
    public Provider addProvider(Provider provider) {
        return  providerRepository.save(provider);

    }




}
