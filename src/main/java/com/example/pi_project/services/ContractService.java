package com.example.pi_project.services;

import com.example.pi_project.entities.Contract;
import com.example.pi_project.repositories.ContractRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ContractService implements IContractService{
    @Autowired
    ContractRepository contractRepository;
    @Override
    public List<Contract> getAllContracts() {
        return contractRepository.findAll();
    }
    @Override
    public Contract getContractById(int id) {
        return contractRepository.findById(id).orElse(null);
    }

    @Override
    public Contract addContract(Contract contract) {
        return contractRepository.save(contract);
    }
    @Override
    public Contract updateContract(Contract contract) {
        return contractRepository.save(contract);
    }



    @Override
    public void deleteContract(int id) {
        contractRepository.deleteById(id);
    }
}
